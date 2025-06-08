// pages/posts.tsx
import React from 'react';
import Header from '../components/layout/Header';

const Posts = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Posts</h1>
        <p>Here are some posts related to our project.</p>
      </main>
    </>
  );
};

export default Posts;
