const INITIAL_STATE = {
    bitnodes: [],
    currBitnode: null
}
export function bitnodeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BITNODES':
            return {
                ...state,
                bitnodes: action.bitnodes
            }
        case 'SET_BITNODE':
            return {
                ...state,
                currBitnode: action.bitnode
            }
        case 'REMOVE_BITNODE':
            return {
                ...state,
                bitnodes: state.bitnodes.filter(bitnode => bitnode._id !== action.bitnodeId)
            }
        case 'ADD_BITNODE':
            return {
                ...state,
                bitnodes: [...state.bitnodes, action.bitnode],
            }
        case 'UPDATE_BITNODE':
            return {
                ...state,
                bitnodes: state.bitnodes.map(bitnode => bitnode._id === action.bitnode._id ? action.bitnode : bitnode)
            }
        default:
            return state
    }
}