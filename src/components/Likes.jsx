import React from 'react';
import Like from './Like';

const Likes = ({ likes }) => {
    return (
        <div className="likes">
            {likes.map(like =>
                <Like key={like.id} like={like} />
            )}
        </div>
    );
};

export default Likes;
