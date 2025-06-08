// pages/home.tsx
import React from 'react';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Card 
        title="My First Card" 
        content="This is some card content." 
      />

      <Card 
        title="Another Card" 
        content="Here's more content inside another card." 
      />
    </div>
  );
}
