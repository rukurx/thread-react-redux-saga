const likes = (state = {}, action) => {
    switch(action.type) {

    case 'SUCCESS_GET_MORE_LIKES':
        let likes = [].concat(state);
        action.likes.forEach(function(like) {
            let targetIndex = likes.findIndex(item => item.id === like.id);
            if (targetIndex === -1) {
                likes.push(like);
            }
        });

        return likes;

    case 'ACTIVATE_LIKE':
        return state;

    case 'INACTIVATE_LIKE':
        return state;

    default:
        return state;
    }
};

export default likes;