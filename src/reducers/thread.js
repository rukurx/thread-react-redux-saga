const thread = (state, action) => {
    switch(action.type) {

    case 'EDIT_THREAD':
        return Object.assign({}, state, {
            isEdit: !state.isEdit
        });

    case 'UPDATE_THREAD':
        return Object.assign({}, state, {
            title: action.title,
            body: action.body,
            isEdit: action.isEdit
        });

    case 'DELETE_THREAD':
        return state;

    case 'COUNT_THREAD_TITLE_LENGTH':
        return Object.assign({}, state, {
            titleLength: action.title.length
        });

    case 'COUNT_THREAD_BODY_LENGTH':
        return Object.assign({}, state, {
            bodyLength: action.body.length
        });

    default:
        return state;
    }
};

export default thread;