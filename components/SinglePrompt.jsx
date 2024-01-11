'use client';

import { useState, useEffect } from 'react';

const SinglePrompt = ({ id }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  // const params = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      // console.log(session);
      const response = await fetch(`/api/prompt/${id}`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    };

    setTimeout(() => {
      fetchPost();
    }, 5000);
  }, []);
  if (post) {
    return <>{post.prompt}</>;
  }
};

export default SinglePrompt;
