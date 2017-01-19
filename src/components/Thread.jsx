import React from 'react';

const Thread = ({ thread, actions }) => {
    let title, body;

    return (
        <div className="thread">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name"></div>
            </div>

            <div className="thread-content" style={{display: thread.isEdit ? 'none' : 'block'}}>
                <div className="title">{thread.title}</div>
                <div className="body">{thread.body}</div>
            </div>

            <div className="thread_editArea" style={{display: thread.isEdit ? 'block' : 'none'}}>
                <input defaultValue={thread.title} ref={input => {title = input;}} onKeyUp={e => {e.preventDefault();actions.countThreadTitleLength(title.value)}} />
                <span>{thread.titleLength}</span>
                <input defaultValue={thread.body} ref={input => {body = input;}} onKeyUp={e => {e.preventDefault();actions.countThreadBodyLength(body.value)}}/>
                <span>{thread.bodyLength}</span>
                <button className="edit_save" onClick={e => {e.preventDefault();actions.updateThread(title.value, body.value)}}>更新</button>
            </div>

            <button className="edit" onClick={e => {e.preventDefault();actions.editThread()}}>編集</button>
            <button className="delete">削除</button>
        </div>
    );
};

export default Thread;