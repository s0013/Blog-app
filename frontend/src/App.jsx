import React, { useState } from 'react';
import axios from 'axios';
import Blog from './components/Blog';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handlePostCreated = () => {
        setRefresh(prev => !prev);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        handlePostCreated();
    };

    return (
        <div className="min-h-screen bg-gray-900 bg-opacity-70">
            <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Simple Blog Application</h1>
                <Blog onPostCreated={handlePostCreated} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default App;
