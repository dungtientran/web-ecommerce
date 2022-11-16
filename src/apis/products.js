import axios from '../axios';

export const getAllProducts = () => new Promise(async(res, rej) => {
    try {
        const response = await axios({
            url: '/product/get-all-products',
            method: 'get'
        })
       res(response)
    } catch (error) {
        rej(error)
    }
})