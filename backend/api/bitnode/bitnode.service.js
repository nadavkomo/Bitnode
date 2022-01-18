const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const _ = require('lodash');
const Axios = require('axios')

var axios = Axios.create({
    withCredentials: false
});
const BASE_URL = 'https://bitnodes.io/api/v1/nodes/'

module.exports = {
    query,
    getById,
    remove,
    update,
    add,
    checkBitnode,
    checkBitnodeWithoutUpdate,
    checkBitnodeArray
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('bitnode')
    try {
        const bitnodes = await collection.find(criteria).toArray();
        bitnodes.forEach(bitnode => delete bitnode.password);
        return bitnodes
    } catch (err) {
        console.log('ERROR: cannot find bitnodes')
        throw err;
    }
}

async function getById(bitnodeId) {
    const collection = await dbService.getCollection('bitnode')
    try {
        const bitnode = await collection.findOne({ '_id': ObjectId(bitnodeId) })
        return bitnode
    } catch (err) {
        console.log(`ERROR: while finding bitnode ${bitnodeId}`)
        throw err;
    }
}

async function remove(bitnodeId) {
    const collection = await dbService.getCollection('bitnode')
    try {
        await collection.deleteOne({ '_id': ObjectId(bitnodeId) })
    } catch (err) {
        console.log(`ERROR: cannot remove bitnode ${bitnodeId}`)
        throw err;
    }
}

async function update(bitnode) {
    const collection = await dbService.getCollection('bitnode')
    bitnode._id = ObjectId(bitnode._id);
    console.log('bitnode', bitnode);
    try {
        await collection.updateOne({ _id: bitnode._id }, { $set: bitnode })
        return bitnode
    } catch (err) {
        console.log(`ERROR: cannot update bitnode ${bitnode._id}`)
        throw err;
    }
}

async function add(bitnode) {
    console.log(bitnode);
    const collection = await dbService.getCollection('bitnode')
    try {
        await collection.insertOne(bitnode);
        return bitnode;
    } catch (err) {
        console.log(`ERROR: cannot insert bitnode`)
        throw err;
    }
}

async function checkBitnode(bitnode) {
    var res = await _ajax(`${bitnode.ipAddress}-${bitnode.port}`)
    if (!res.err) {
        if (!bitnode.status || bitnode.status !== res.status) {
            bitnode.status = res.status
            await update(bitnode)
        }
    } else {
        bitnode.status = 'Not found'
        await update(bitnode)
    }
}

async function checkBitnodeArray(details) {
    var status = {}
    _.forIn(details, (ports, ipAddress) => {
        ports.forEach(async port => {
            let result = await checkBitnodeWithoutUpdate(ipAddress, port)
            console.log(result);
            status[port] = result
        })
    });
    setTimeout(() => {
        return status
    }, 1000)
}

async function checkBitnodeWithoutUpdate(ipAddress, port) {
    var res = await _ajax(`${ipAddress}-${port}`)
    if (!res.err) {
        return res.status
    } else {
        return res.err
    }
}



function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.bitnodename = { $regex: `/${filterBy.txt}/` }
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: +filterBy.minBalance }
    }
    return criteria;
}

async function _ajax(endpoint, method = 'get', data = null) {
    console.log(endpoint);
    console.log(method);
    console.log(data);
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        console.log(res.data);
        return res.data;
    } catch {
        return { err: 'Not found' }
    }
}