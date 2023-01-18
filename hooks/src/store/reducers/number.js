export function numberReducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'multiplyFor7':
            return { ...state, number: state.number * 7 }
        case 'divideFor25':
            return { ...state, number: state.number / 25 }
        case 'convertToInt': 
            return { ...state, number: parseInt(state.number) }
        case 'changeNumber':
            return { ...state, number: state.number + action.payloadNumber }             
        default:
            return state
    }
}