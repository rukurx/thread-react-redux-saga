import React from 'react';

const Like = ({ like }) => {
    return (
        <div className="like">
            <div className="user">
                <div className="user_image"></div>
                <div className="user_name">{like.user_name}</div>
            </div>
        </div>
    );
};

export default Like;



