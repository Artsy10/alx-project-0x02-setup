import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

const About = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This page contains information about our project and team.</p>

        <Button
          text="Click Me"
          size="medium"        // optional
          shape="rounded-full" // optional
          onClick={() => alert('Button clicked!')}
        />
      </main>
    </>
  );
};

export default About;
