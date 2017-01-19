import React from 'react';
import Comment from './Comment';

const Comments = ({ comments, actions }) => {
    return (
        <div className="comments">
            {comments.map(comment =>
                <Comment key={comment.id} comment={comment} actions={actions} />
            )}
        </div>
    );
};

export default Comments;
