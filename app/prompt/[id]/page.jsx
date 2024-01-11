'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const [copied, setCopied] = useState(false);

  const handleCopy = (copyText) => {
    setCopied(copyText);
    console.log(copyText);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    const fetchPost = async () => {
      // console.log(session);
      setLoading(true);
      const response = await fetch(`/api/prompt/${params.id}`);
      const data = await response.json();
      console.log(data);
      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  return (
    <section className='relative w-full flex-center'>
      <div className='summary_box w-full max-w-2xl'>
        {loading ? (
          <p> loading</p>
        ) : (
          post && (
            <>
              <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                  <Image
                    src={post.creator.image}
                    alt='user_image'
                    width={40}
                    height={40}
                    className='rounded-full object-contain'
                  />
                  <div className='flex flex-col'>
                    <h3 className='font-satoshi font-semibold text-gray-900'>
                      {post.creator.username}
                    </h3>
                    <p className='font-inter text-sm text-gray-500'>
                      {post.creator.email}
                    </p>
                  </div>
                </div>
              </div>
              <p className='my-4 font-satoshi text-sm text-gray-700'>
                {post.prompt}
              </p>
              <div className='flex flex-start'>
                <Image
                  src={'/assets/images/logo.svg'}
                  alt='ai_image'
                  width={20}
                  height={20}
                  className='rounded-full object-contain me-3 mt-5'
                />{' '}
                <p className='my-4 font-satoshi text-sm text-gray-700'>
                  {post.gptresponse}
                </p>
                <div
                  className='copy_btn mt-3'
                  onClick={() => handleCopy(post.gptresponse)}
                >
                  <Image
                    src={
                      copied
                        ? '/assets/icons/tick.svg'
                        : '/assets/icons/copy.svg'
                    }
                    alt={copied ? 'tick_icon' : 'copy_icon'}
                    width={20}
                    height={20}
                    style={{ height: '20px', maxWidth: '20px' }}
                  />
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
};

export default page;
