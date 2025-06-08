// pages/home.tsx
import React from 'react';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page</h1>

      <Card 
        title="Getting Started" 
        content="This card helps you get started with the project." 
      />

      <Card 
        title="Next.js + TypeScript" 
        content="We're using TypeScript with Next.js for type safety and scalability." 
      />

      <Card 
        title="Reusable Components" 
        content="You can reuse the Card component across your app!" 
      />
    </div>
  );
}
