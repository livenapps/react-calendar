const initialState = {
    day: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DAY':
            return Object.assign({}, state, {
                day: action.payload,
            });

        default:
            return state;
    }
}
