import axios from 'axios';

// コメントを追加する
export const addComment = (title, body) => {
    return axios.get('http://localhost:3001/comment/add/', {
            params: {
                title: title,
                body: body
            }
        });
}

// いいねしたユーザを取得する
export const likes = () => {
    return axios.get('http://localhost:3001/likes/');
}
