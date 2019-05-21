//调用后台chatlist接口请求数据
export function chatlist(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    //  'type':type,
                    //  'phone':phone,
                    
                }
            )
        })
            .then(res=>console.log(res))
             // .then(json=>{
             //     return()
             // })      
    )
}
//接收消息
export function recvmsg(){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    //  'type':type,
                    //  'phone':phone,
                    
                }
            )
        })
            .then(res=>console.log(res))
             // .then(json=>{
             //     return()
             // })
    )
}
//发送消息
export function sendmsg(text,form,to){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'text':text,
                    'form':form,
                    'to':to,
                    
                }
            )
        })
            .then(res=>console.log(res))
             // .then(json=>{
             //     return()
             // })
    )
}



















