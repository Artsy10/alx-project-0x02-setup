// pages/home.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the homepage of our project.</p>
      </main>
    </>
  );
};

export default Home;
