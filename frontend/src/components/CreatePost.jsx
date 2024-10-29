import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content };
        await axios.post('http://localhost:5000/api/posts', newPost);
        onPostCreated();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow-md">
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                className="w-full p-2 border rounded mb-2"
            />
            <textarea 
                placeholder="Content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required 
                className="w-full p-2 border rounded mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Create Post
            </button>
        </form>
    );
};

export default CreatePost;
