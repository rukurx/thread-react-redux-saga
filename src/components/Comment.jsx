import React from 'react';

const Comment = ({ comment, actions }) => {
    let title, body;

    return (
        <div className="comment">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>
            <div className="title">{comment.title}</div>
            <div className="body">{comment.body}</div>

            <div className="comment_editArea" style={{display: comment.isEdit ? 'block' : 'none'}}>
                <input defaultValue={comment.title} ref={input => {title = input;}} />
                <input defaultValue={comment.body} ref={input => {body = input;}} />
                <button className="edit_save" onClick={e => {e.preventDefault();actions.updateComment(comment.id, title.value, body.value)}}>更新</button>
            </div>

            <button className="edit" onClick={e => {e.preventDefault();actions.editComment(comment.id)}}>編集</button>
            <button className="delete" onClick={e => {e.preventDefault();actions.deleteComment(comment.id)}}>削除</button>
        </div>
    );
};

export default Comment;
