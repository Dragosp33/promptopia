import React from 'react';

async function ServerSidePrompt({ id }) {
  const response = await import('@app/api/prompt/[id]/route');

  return <div>ServerSidePrompt</div>;
}

export default ServerSidePrompt;
