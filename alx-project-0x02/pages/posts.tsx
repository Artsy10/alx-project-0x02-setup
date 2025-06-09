import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      // Map JSONPlaceholder format to our PostProps
      const formattedPosts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
        id: post.id,
      }));
      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostsPage;
