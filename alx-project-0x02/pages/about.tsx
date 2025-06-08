import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';  // adjust the path if needed

const About = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This page contains information about our project and team.</p>

        {/* Use the Button component here */}
        <Button onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </main>
    </>
  );
};

export default About;
