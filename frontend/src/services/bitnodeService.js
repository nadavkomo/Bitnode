import { storageService } from "./storageService.js";
import HttpService from './HttpService.js'
export default {
    query,
    getById,
    remove,
    save,
    getEmptyBitnode
}

async function query(filterBy = null) {
    // return new Promise((resolve, reject) => {
    //     if(storageService.load('BITNODES')) {
    //         var bitnodesToReturn = storageService.load('BITNODES');
    //     } else {
    //         bitnodesToReturn = bitnodes;
    //         storageService.store('BITNODES', bitnodes)
    //     }
    //     if (filterBy && filterBy.term) {
    //         bitnodesToReturn = filter(filterBy.term)
    //     }
    //     resolve(sort([...bitnodesToReturn]))
    // })
    var bitnodes = await HttpService.get('bitnode')
    if (filterBy && filterBy.term) {
        console.log(bitnodes);
        bitnodes = filter(filterBy.term, bitnodes)
    }
    return Promise.resolve(bitnodes)
        // return HttpService.get('bitnode')
}

function getById(id) {
    // return new Promise((resolve, reject) => {
    //     const bitnode = bitnodes.find(bitnode => bitnode._id === id)
    //     bitnode ? resolve(bitnode) : reject(`Bitnode id ${id} not found!`)
    // })
    return HttpService.get(`bitnode/${id}`)
}

function remove(bitnodeId) {
    // return new Promise((resolve, reject) => {
    //     const index = bitnodes.findIndex(bitnode => bitnode._id === id)
    //     if (index !== -1) {
    //         bitnodes.splice(index, 1)
    //         storageService.store('BITNODES', bitnodes)
    //     }
    //     resolve(bitnodes)
    // })
    return HttpService.delete(`bitnode/${bitnodeId}`)
}

function _updateBitnode(bitnode) {
    // return new Promise((resolve, reject) => {
    //     const index = bitnodes.findIndex(c => bitnode._id === c._id)
    //     if (index !== -1) {
    //         bitnodes[index] = bitnode
    //         storageService.store('BITNODES', bitnodes)
    //     }
    //     resolve(bitnode)
    // })
    bitnode.updatedAt = Date.now()
    return HttpService.put(`bitnode/${bitnode._id}`, bitnode)
}

function _addBitnode(bitnode) {
    // return new Promise((resolve, reject) => {
    //     bitnode._id = _makeId()
    //     bitnodes.push(bitnode)
    //     storageService.store('BITNODES', bitnodes)
    //     resolve(bitnode)
    // })
    bitnode.createdAt = Date.now()
    return HttpService.post(`bitnode`, bitnode)

}

function save(bitnode) {
    return bitnode._id ? _updateBitnode(bitnode) : _addBitnode(bitnode)
}

function getEmptyBitnode() {
    return {
        ipAddress: '',
        port: '',
        status: ''
    }
}

function filter(term, bitnodes) {
    term = term.toLocaleLowerCase()
    return bitnodes.filter(bitnode => {
        return bitnode.ipAddress.toLocaleLowerCase().includes(term) || bitnode.port.toLocaleLowerCase().includes(term)
    })
}



function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}