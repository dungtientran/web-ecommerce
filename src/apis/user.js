
export const changeAvatar = (avatar) => new Promise(async (res, rej) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);

    var formdata = new FormData();
    formdata.append("avatar", avatar[0], "/C:/Users/Admin/Documents/Zalo Received Files/trungbeoisme.jpg");

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://shope-b3.thaihm.site/api/user/change-avatar", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
})
export const changeUserInfor = (user) => new Promise(async (res, rej) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://shope-b3.thaihm.site/api/user/update-info", requestOptions)
        .then(response => response.text())
        .then(result => alert('Đổi thành công'))
        .catch(error => alert('Thất bại'));
})
export const changePassword = (pass) => new Promise(async (res, rej) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${JSON.parse(localStorage.getItem('TOKEN'))}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(pass);
    
    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://shope-b3.thaihm.site/api/user/change-password", requestOptions)
      .then(response => res(response))
      .catch(error => alert('Sai thông tin'));
})

