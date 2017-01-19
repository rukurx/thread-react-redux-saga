import thread from './thread';
import comments from './comments';
import likes from './likes';
import loading from './loading';

const reducer = (state, action) => ({
    thread: thread(state.thread, action),
    comments: comments(state.comments, action),
    likes: likes(state.likes, action),
    loading: loading(state.loading, action),
});

export default reducer;