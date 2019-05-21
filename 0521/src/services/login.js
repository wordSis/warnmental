//调用后台login接口请求数据
export function login(phone,password){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'phone':phone,
                    'password':password,
                }
            )
        })
       
            // .then(res=>console.log(res))
            // .then(json=>{
                // if (json.statusCode == '0') {
                //     console.log('登录成功')
                //     localStorage.loginName = loginId
                //     localStorage.customerID = json.customerID
                //    
                //不用跳转吧，，     router.push('/myhome');
                // }else{
                //     message.error(json.statusDesc)
                // }
            //     return()
            // })
    )
}
//调用forgetpwd 接口请求数据
export function forgetpwd(phone,captcha){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            body:JSON.stringify(
                {
                    'phone':phone,
                    'captcha':captcha,
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}
//调用updatepwd 接口请求数据
export function updatepwd(username,pwd){
    return(
        fetch(`url`,{
            method: 'post',
            mode: '',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(
                {
                    'username':username,
                    'pwd':pwd,
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}
export function loginwx(phone,password){
    return(
        fetch(`https://api.weixin.qq.com/semantic/semproxy/search?access_token=YOUR_ACCESS_TOKEN`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'phone':phone,
                    'password':password,
                }
            )
        })
       
            // .then(res=>console.log(res))
            // .then(json=>{
                // if (json.statusCode == '0') {
                //     console.log('登录成功')
                //     localStorage.loginName = loginId
                //     localStorage.customerID = json.customerID
                //    
                //成功跳到首页     router.push('/myhome');
                // }else{
                //     message.error(json.statusDesc)
                // }
            //     return()
            // })
    )
}