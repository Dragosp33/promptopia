import React from 'react';
import Image from 'next/image';

const ResponseCard = ({ response, copied, handleCopy }) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
        AI <span className='blue_gradient'>Response</span>
      </h2>

      <div className='summary_box w-full max-w-2xl'>
        <div className='copy_btn' onClick={() => handleCopy(response)}>
          <Image
            src={copied ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={copied ? 'tick_icon' : 'copy_icon'}
            width={20}
            height={20}
          />
        </div>
        <p className='font-inter font-medium text-sm text-gray-700'>
          {response}
        </p>
      </div>
    </div>
  );
};

export default ResponseCard;
