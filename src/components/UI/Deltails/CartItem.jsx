import React from 'react';

const CartItem = ({ listCart }) => {
    listCart?.splice(0, 1)
    return (
        <div className=''>
            {listCart?.map((item, index) => (
                <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                    <div className='w-[20%] py-1'>
                        <img src={`https://shope-b3.thaihm.site/${item.productDetailId.listImg[0]}`} alt="Lỗi ảnh" className='w-full' />
                    </div>
                    <div className='w-[75%] space-y-2 flex justify-between items-center'>
                        <div className='w-[40%]'>
                            <p className='font-thin pb-1 truncate'>{item.productDetailId.productId.productName}</p>
                            <p className='text-xs italic font-bold'><span>Màu: </span> <span className='font-semibold ml-1'>{item.productDetailId.color}</span></p>
                            <p className='text-xs italic font-bold'><span>Ram: </span> <span className='font-semibold ml-1'>{item.productDetailId.ram}</span></p>
                            <p className='text-xs italic font-bold'><span>Rom: </span> <span className='font-semibold ml-1'>{item.productDetailId.rom}</span></p>
                            <p className='text-xs italic font-bold'><span>Đơn giá: </span> <span className='font-semibold ml-1'>{item.productDetailId.price?.toLocaleString()} đ</span></p>
                            <p className='text-xs italic font-bold'><span>Số lượng: </span> <span className='font-semibold ml-1'>{item.quantity}</span></p>
                        </div>
                        <div>
                            <p className='text-center mb-1'>Số lượng</p>
                            <div className='flex space-x-2'>
                                <button className=' font-bold w-4 text-center'>-</button>
                                <input type="text" className='bg-gray-200 outline-none w-10 text-center' defaultValue={1} />
                                <button className=' font-bold w-4 '>+</button>
                            </div>
                        </div>
                        <div className='font-bold'>

                        </div>
                        <div>
                            <button className='px-1 text-sm font-thin border bg-gray-50'>Xóa</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;