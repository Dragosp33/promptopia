'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  const [promptType, setPromptType] = useState('prompt');

  const handleSelectChange = (option) => {
    setPromptType(option);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(session);
      const response = await fetch(`/api/users/${session.user.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data.reverse());
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      promptType={promptType}
      onSelectChange={handleSelectChange}
    />
  );
};

export default MyProfile;
