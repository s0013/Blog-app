import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditPost = ({ postId, onEditCompleted }) => {
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
            setPost(response.data);
        };
        fetchPost();
    }, [postId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/posts/${postId}`, post);
        onEditCompleted();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow-md">
            <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mb-2"
            />
            <textarea
                name="content"
                value={post.content}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mb-2"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Update Post
            </button>
        </form>
    );
};

export default EditPost;
