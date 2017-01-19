const loading = (state, action) => {
    switch(action.type) {

    case 'SHOW_LOADING':
        return Object.assign({}, state, {
            isActive: true
        });

    case 'HIDE_LOADING':
        return Object.assign({}, state, {
            isActive: false
        });

    default:
        return state;
    }
};

export default loading;