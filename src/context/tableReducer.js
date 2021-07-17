


export const getCarsAction = (array) => ({
    type: 'GET_CARS',
    payload: array
})
export const loadingAction = (value) => ({
    type: 'LOADER',
    payload: value
})
export const searchAction = (value) => ({
    type: 'SEARCH',
    payload: value
})
export const focusAction = (value) => ({
    type: 'FOCUS_CAR',
    payload: value
})



export const initialState = {
    cars: [],
    loading: false,
    sortCars: null,
    car: null
}

export const tableReducer = (state, action) => {
    switch (action.type) {
        case 'GET_CARS':
            return {
                ...state,
                cars: action.payload
            }
        case 'LOADER':
            return {
                ...state,
                loading: action.payload
            }
        case 'SEARCH':
            return {
                ...state,
                sortCars: action.payload
            }
        case 'FOCUS_CAR':
            return {
                ...state,
                car: action.payload
            }
        default:
            return state
    }
}

