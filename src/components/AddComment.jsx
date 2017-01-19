import React from 'react';

const AddComment = ({ actions }) => {
    let title, body;

    return (
        <div>
            <input ref={input => {title = input;}} />
            <input ref={input => {body = input;}} />
            <button className="edit_save" onClick={e => {e.preventDefault();actions.requestAddComment(title.value, body.value)}}>追加</button>
        </div>
    );
};

export default AddComment;