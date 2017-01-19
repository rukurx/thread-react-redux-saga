import React from 'react';

const GetMoreLikesBtn = ({ actions }) => {
    return (
        <div>
            <button onClick={e => {e.preventDefault();actions.getMoreLikes()}}>もっと見る</button>
        </div>
    );
};

export default GetMoreLikesBtn;
