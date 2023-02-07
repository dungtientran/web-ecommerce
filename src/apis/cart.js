
export const  addToCart = (addcartItem) => new Promise( async(res, rej) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(addcartItem);
    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    await fetch("https://shope-b3.thaihm.site/api/cart/add-to-cart", requestOptions)
        .then(result => res(result))
        .catch(error => rej(error));
})   

export const  removeToCart = (removeCartItem) => new Promise( async(res, rej) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(removeCartItem);
    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    await fetch("https://shope-b3.thaihm.site/api/cart/remove-from-cart", requestOptions)
        .then(result => res(result))
        .catch(error => rej(error));
})   

export const updateQuantityToCart = (newQuantity) => new Promise( async(res, rej) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(newQuantity);
    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    await fetch("https://shope-b3.thaihm.site/api/cart/update-cart-quantity", requestOptions)
        .then(result => res(result))
        .catch(error => rej(error));
})   