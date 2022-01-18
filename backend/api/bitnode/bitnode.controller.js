const bitnodeService = require('./bitnode.service')
const logger = require('../../services/logger.service')
const _ = require('lodash');

async function getBitnode(req, res) {
    const bitnode = await bitnodeService.getById(req.params.id)
        // await bitnodeService.checkBitnode(bitnode)
    res.send(bitnode)
}

async function getBitnodes(req, res) {
    const bitnodes = await bitnodeService.query(req.query)
    bitnodes.forEach(async bitnode => {
        await bitnodeService.checkBitnode(bitnode)
    })
    res.send(bitnodes)
    logger.debug(bitnodes);
}

async function deleteBitnode(req, res) {
    await bitnodeService.remove(req.params.id)
    res.end()
}

async function updateBitnode(req, res) {
    const bitnode = req.body;
    await bitnodeService.update(bitnode)
    await bitnodeService.checkBitnode(bitnode)
    res.json(bitnode)
}

async function addBitnode(req, res) {
    var bitnode = req.body;
    bitnode = await bitnodeService.add(bitnode)
    await bitnodeService.checkBitnode(bitnode)
    res.json(bitnode)
}

async function checkBitnodes(req, res) {
    var details = req.body;
    var allPromises = {}
    var ipAddresses = Object.keys(details)
    await ipAddresses.forEach(async(ipAddress, idx) => {
        let ports = details[ipAddress]
        var promises = []
        await ports.forEach(async port => {
            let promise = bitnodeService.checkBitnodeWithoutUpdate(ipAddress, port)
            console.log(promise);
            promises.push(promise)
        })
        allPromises[ipAddress] = promises
    })

    console.log(allPromises);

    var totalResWithIpAddress = []
    var ipAddressesFromPromises = Object.keys(allPromises)
    console.log('ipAddressesFromPromises', ipAddressesFromPromises);
    var count = 0
    ipAddressesFromPromises.forEach(async(ipAddress, ipAddressIdx) => {
        let ipAddressTemp = {}
        ipAddressTemp[ipAddress] = []
        var results = Promise.all(allPromises[ipAddress])
        results.then(async(totalResFromAddress) => {

            console.log('totalResFromAddress', totalResFromAddress);
            await totalResFromAddress.forEach((res, idx) => {
                let temp = {}
                temp[details[ipAddress][idx]] = res
                ipAddressTemp[ipAddress].push(temp)
            })
            console.log('ipAddressTemp', ipAddressTemp);
            totalResWithIpAddress.push(ipAddressTemp)
            count++
            console.log('count', count);
            console.log('ipAddressesFromPromises.length', ipAddressesFromPromises.length);
            if (count === ipAddressesFromPromises.length) {
                res.json(totalResWithIpAddress)
            }
        })
    })
}



module.exports = {
    getBitnode,
    getBitnodes,
    deleteBitnode,
    updateBitnode,
    addBitnode,
    checkBitnodes
}