'use client';

import { useState, useEffect, Suspense } from 'react';
import PromptCard from './PromptCard';
import Image from 'next/image';

const PromptCardList = ({ filter, data, handleTagClick }) => {
  return (
    <div className='w-full mt-16 prompt_layout'>
      {data
        .filter(
          (post) =>
            post.tag.toLowerCase().includes(filter.toLowerCase()) ||
            post.creator.username
              .toLowerCase()
              .includes(filter.toLowerCase()) ||
            post.gptresponse.toLowerCase().includes(filter.toLowerCase())
        )
        .map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTagClick = (value) => {
    setSearchText(value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
        {searchText && (
          <button
            type='button'
            className='flex flex-center absolute right-2 my-2'
            onClick={() => {
              setSearchText('');
            }}
          >
            <Image
              src={'/assets/icons/x-circle.svg'}
              height={20}
              width={20}
              alt={'reset filter'}
            />
          </button>
        )}
      </form>

      <PromptCardList
        data={posts.filter((post) => post.type === 'prompt')}
        handleTagClick={handleTagClick}
        filter={searchText}
      />
    </section>
  );
};

export default Feed;
