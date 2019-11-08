const initialState = {
    year: new Date().getFullYear(),
    month: '',
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

        default:
            return state;
    }
}
