const initialState = {
    year: new Date().getUTCFullYear(),
    month: '',
    day: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_YEAR':
            return Object.assign({}, state, {
                year: action.payload,
            });

        case 'SET_MONTH':
            return Object.assign({}, state, {
                month: action.payload,
            });

        case 'SET_DAY':
            return Object.assign({}, state, {
                day: action.payload,
            });

        case 'SET_DATE':
            return Object.assign({}, state, {
                year: action.payload.year,
                month: action.payload.month,
                day: action.payload.day,
            });

        default:
            return state;
    }
}
