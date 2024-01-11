import PromptCard from './PromptCard';

export default async function PromptCardList({ promptType }) {
  const response = await fetch('http://localhost:3000/api/prompt');
  // const res = await import('../app/api/prompt/route');

  //const data = await (await res.GET()).json();
  const data = await response.json();
  return (
    <div className='mt-16 prompt_layout'>
      {data
        .filter((prompt) => prompt.type === promptType)
        .map((post) => (
          <PromptCard key={post._id} post={post} />
        ))}
    </div>
  );
}
