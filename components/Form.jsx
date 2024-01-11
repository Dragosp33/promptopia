import Link from 'next/link';
import PromptDropdown from './PromptDropdown';
import Image from 'next/image';

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  promptType,
  onSelectChange,
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <div className='flex flex-row'>
        <div>
          <h1 className='head_text text_left'>
            <span className='blue_gradient'> {type}</span> {promptType}{' '}
          </h1>
          <p className='desc text-left max-w-md'>
            {type} and share amazing prompts with the world, and let your
            imagination run wild with any AI-powered platform.
          </p>
        </div>
        <PromptDropdown option={promptType} onSelectChange={onSelectChange} />
      </div>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        {promptType === 'prompt' ? (
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              {' '}
              Your AI promopt
            </span>
            <textarea
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              placeholder='write your prompt here..'
              required
              className='form_textarea'
            ></textarea>
          </label>
        ) : (
          <div className='relative flex justify-center gap-2 items-center'>
            <img
              src='/assets/icons/link.svg'
              alt='link-icon'
              className='absolute left-0 my-2 ml-3 w-5'
            />

            <input
              type='url'
              placeholder='Paste the article link'
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              onKeyDown={handleKeyDown}
              required
              className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
            />
            <button
              type='submit'
              className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
            >
              <p>↵</p>
            </button>
          </div>
        )}

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {` `}
            <span className='font-normal'>(#product, #webdev, #idea)</span>
          </span>
          <textarea
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required
            className='form_input'
          ></textarea>
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            {' '}
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
