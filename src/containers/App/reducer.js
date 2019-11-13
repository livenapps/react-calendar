const initialState = {
    date: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_DATE':
            return Object.assign({}, state, {
                date: action.payload,
            });

        default:
            return state;
    }
}
