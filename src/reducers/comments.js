const comments = (state = {}, action, entireState) => {
    let comments, targetIndex;

    switch(action.type) {
    case 'ADD_COMMENT':
        let stateId = state.length + 1;

        return [
            ...state,
            {
                id: stateId,
                title: action.title,
                body: action.body,
                isEdit: false
            }
        ];

    case 'EDIT_COMMENT':
        comments= [].concat(state);
        // 対象Index取得
        targetIndex = comments.findIndex(item => item.id === action.id);
        if (targetIndex === -1) {
            return state;
        }
        comments[targetIndex].isEdit = !comments[targetIndex].isEdit;

        return comments;

    case 'UPDATE_COMMENT':
        comments= [].concat(state);
        // 対象Index取得
        targetIndex = comments.findIndex(item => item.id === action.id);
        if (targetIndex === -1) {
            return state;
        }
        comments[targetIndex].title = action.title;
        comments[targetIndex].body = action.body;
        comments[targetIndex].isEdit = false;

        return comments;

    case 'DELETE_COMMENT':
        comments= [].concat(state);
        const filteredComments = comments.filter(item => item.id !== action.id);

        return filteredComments;

    default:
        return state;
    }
};

export default comments;