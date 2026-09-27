import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-gray-300 rounded p-4 mb-4'>
            <h3 className='text-2xl'>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;