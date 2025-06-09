import React from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Users List</h1>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
