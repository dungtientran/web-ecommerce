import axios from '../axios';


export const  userinfo = (token) => new Promise( async(res, rej) => {
    try {
        const response = await axios({
            url: '/auth/get-loged-in-user',
            method: 'get',
            headers: {
                    Authorization: `${token}`
                }
        })
        res(response.data.user)
    } catch (error) {
        rej(error)
    }
})   