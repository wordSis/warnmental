//调用getbanner 接口请求数据
export function getBanner(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                   
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}
//医用量表接口
export function medicalList(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                   
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )  
}
//趣味测试接口
export function test(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                   
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )  
}
//健康咨询接口
export function healthinquiryList(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                   
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )  
}