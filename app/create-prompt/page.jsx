'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
import PromptDropdown from '@components/PromptDropdown';
import ResponseCard from '@components/ResponseCard';

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [copied, setCopied] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [promptType, setPromptType] = useState('prompt');
  const [error, setError] = useState(false);

  const handleSelectChange = (option) => {
    setPromptType(option);
  };

  const handleCopy = (copyText) => {
    setCopied(copyText);
    console.log(copyText);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => setCopied(false), 3000);
  };

  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const [response, setResponse] = useState('');

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // const response2 = await chatGPTRequest(post.prompt);

      const gpt_response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
          type: promptType,
        }),
      });

      console.log(gpt_response);
      const responseData = await gpt_response.json();
      console.log(responseData);

      setResponse(responseData.gptresponse);
      if (gpt_response.ok) {
        // send a notification?
        console.log('its ok: ', gpt_response);
      } else {
        // console.log('error: ', responseData.message);
        setError(responseData);
      }
    } catch (error) {
      console.log('errored in catch: ', error, error.message);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
        promptType={promptType}
        onSelectChange={handleSelectChange}
      />

      {/* display result */}
      <div className='my-10 w-full max-w-full flex-start flex-col'>
        {submitting ? (
          <img
            src='/assets/icons/loader.svg'
            alt='loader'
            className='w-20 h-20 object-contain'
          />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error}
            </span>
          </p>
        ) : (
          response && (
            <ResponseCard
              response={response}
              copied={copied}
              handleCopy={handleCopy}
            />
          )
        )}
      </div>
    </>
  );
};

export default CreatePrompt;
