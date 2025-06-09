import React from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
