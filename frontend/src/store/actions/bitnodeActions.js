import bitnodeService from '../../services/bitnodeService'

// Action Dispatcher
export function loadBitnodes(filterBy) {
    return async dispatch => {
        const bitnodes = await bitnodeService.query(filterBy)
        console.log(bitnodes);
        dispatch({ type: 'SET_BITNODES', bitnodes })
    }
}

export function getById(bitnodeId) {
    return async dispatch => {
        const bitnode = await bitnodeService.getById(bitnodeId)
        dispatch({ type: 'SET_BITNODE', bitnode })
    }
}
export function removeBitnode(bitnodeId) {
    return async dispatch => {
        try {
            await bitnodeService.remove(bitnodeId)
            dispatch({ type: 'REMOVE_BITNODE', bitnodeId })
        } catch (err) {
            console.log('ERROR!');
        }
    }
}


export function addBitnode(bitnode) {
    return async dispatch => {
        try {
            const savedBitnode = await bitnodeService.save(bitnode)
            console.log('savedBitnode', savedBitnode);
            dispatch({ type: 'ADD_BITNODE', bitnode: savedBitnode })
        } catch (err) {
            console.log('ERROR!');
        }
    }
}
export function updateBitnode(bitnode) {
    return async dispatch => {
        try {
            const savedBitnode = await bitnodeService.save(bitnode)
            dispatch({ type: 'UPDATE_BITNODE', bitnode: savedBitnode })
        } catch (err) {
            console.log('ERROR!');
        }
    }
}