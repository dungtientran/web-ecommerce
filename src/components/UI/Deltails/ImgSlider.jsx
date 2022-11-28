
import React, { useState } from 'react';

const ImgSlider = ({ imgs }) => {
    const fisrtUrl = imgs[0]
    const [url, setUrl] = useState(fisrtUrl);
    return (
        <section className='2xl:w-[700px] xl:w-[400px] lg:w-[300px]'>
            <div className='w-full flex p-2 justify-center'>
                <div  className='w-[10%] p-1 border h-full'>
                    {imgs?.map((img, index) => (
                        <div key={index} className='border imgActive' onMouseOver={() => setUrl(img)}>
                            <img  src={`https://shope-b3.thaihm.site/${img}`} alt="img" />
                        </div>
                    ))}
                </div>
                <div className='overflow-hidden w-[70%]'>
                    <img src={`https://shope-b3.thaihm.site/${url}`} alt="a"  className='w-full object-contain'/>
                </div>
            </div>
        </section>
    );
};

export default ImgSlider;


