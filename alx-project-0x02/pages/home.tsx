import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the first card.' },
    { title: 'Card 2', content: 'This is the second card.' },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        + Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
