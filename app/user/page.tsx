import React from 'react';

const Page = () => {
    return (
        <div className='w-full h-screen block mt-[64px]'>
            <iframe
                className='w-full h-full'
                src="https://9b9b19992dd6.quillforms.app/forms/simple-donation-form/"
                allowFullScreen
            />
        </div>
    );
};

export default Page;