import React from 'react';

const Loading = ( { loading } ) => {

    return (
        <div style={{display: loading.isActive ? 'block' : 'none'}}>
            Loading...
        </div>
    );
};

export default Loading;