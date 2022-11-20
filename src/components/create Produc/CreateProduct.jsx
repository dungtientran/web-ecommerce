import axios from 'axios';
import React, { useState } from 'react';

const CreateProduct = () => {
    const [oldPass, setOldPass] = useState()
    const [newPass, setNewPass] = useState()
   

    const newItem = {
        oldPass: oldPass,
        newPass: newPass,
        newPass: newPass
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.patch('https://shope-b3.thaihm.site/api/user/change-password', newItem)
        console.log(res);
    }
    return (
        <form className='h-screen flex flex-col justify-center items-center space-y-3' onSubmit={handleSubmit}>
            <div>
                <input type="text" className='bg-pink-300' onChange={(e) => setOldPass(e.target.value)}/>
            </div>
            <div>
                <input type="text" className='bg-pink-300' onChange={(e) => setNewPass(e.target.value)}/>
            </div>
            <div>
                <input type="text" className='bg-pink-300' onChange={(e) =>setNewPass(e.target.value)}/>
            </div>
           <button>Click</button>
        </form>
    );
};

export default CreateProduct;