import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter(post => post._id !== id));
    };

    const handlePostCreated = () => {
        fetchPosts();
    };

    const handleEdit = (id) => {
        setEditingPostId(id);
    };

    const handleEditCompleted = () => {
        fetchPosts();
        setEditingPostId(null);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <CreatePost onPostCreated={handlePostCreated} />
            {editingPostId ? (
                <EditPost postId={editingPostId} onEditCompleted={handleEditCompleted} />
            ) : (
                <BlogList posts={posts} onDelete={handleDelete} onEdit={handleEdit} />
            )}
        </div>
    );
};

export default Blog;
