import React from 'react';

const BlogList = ({ posts, onDelete, onEdit }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id} className="border p-4 rounded mb-4 shadow">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="mb-2">{post.content}</p>
                        <div className="flex space-x-2">
                            <button onClick={() => onDelete(post._id)} className="bg-red-500 text-white py-1 px-2 rounded">
                                Delete
                            </button>
                            <button onClick={() => onEdit(post._id)} className="bg-yellow-500 text-white py-1 px-2 rounded">
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
