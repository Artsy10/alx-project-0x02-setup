// pages/about.tsx
import React from 'react';
import Header from '../components/layout/Header';

const About = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This page contains information about our project and team.</p>
      </main>
    </>
  );
};

export default About;
