// pages/about.tsx
import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/layout/Header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="p-10 space-y-4">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <Button text="Small Button" size="small" shape="rounded-sm" />
        <Button text="Medium Button" size="medium" shape="rounded-md" />
        <Button text="Large Button" size="large" shape="rounded-full" />
      </main>
    </>
  );
};

export default AboutPage;
