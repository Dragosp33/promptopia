'use client';

import { useState } from 'react';

const PromptDropdown = ({ option, onSelectChange }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleSelectChange = (k) => {
    onSelectChange(k);
  };
  return (
    <>
      <div className='flex flex-col'>
        <button
          type='button'
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          className='mt-5 black_btn'
          style={{ width: '102px' }}
        >
          {option === 'prompt' ? 'prompt' : option}
        </button>
        {toggleDropdown && (
          <div>
            <button
              type='button'
              onClick={() => {
                let k =
                  option.toLowerCase() === 'prompt' ? 'summary' : 'prompt';
                handleSelectChange(k);
                setToggleDropdown(false);
              }}
              className='mt-1 black_btn'
              style={{ width: '102px' }}
            >
              {option.toLowerCase() === 'prompt' ? 'summary' : 'prompt'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PromptDropdown;
