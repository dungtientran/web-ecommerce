
import React, { useState } from 'react';

const ImgSlider = ({ imgs }) => {
    const fisrtUrl = imgs[0]
    const [url, setUrl] = useState(fisrtUrl);
    return (
        <section className='  max-w-[700px]'>
            <div className='w-full flex p-2'>
                <div  className='w-[10%] p-1 border h-full'>
                    {imgs?.map((img, index) => (
                        <div key={index} className='border' onClick={() => setUrl(img)}>
                            <img  src={`https://shope-b3.thaihm.site/${img}`} alt="img" className='w-full' />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center w-[90%] overflow-hidden'>
                    <img src={`https://shope-b3.thaihm.site/${url}`} alt="a"  className='w-full object-contain'/>
                </div>
            </div>
        </section>
    );
};

export default ImgSlider;

