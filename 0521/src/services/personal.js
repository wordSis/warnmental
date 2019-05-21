//调用personal 接口请求数据
export function personallist(phone,password){
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
            //     return()
            // })
    )
    // return{
    //     data:{
    //         name:'王xx', 
    //         sex:'女',
    //         phone:'13199562145',}
    // }
}
//调用personal 编辑接口
export function editpersonal(avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'avatar':avatar,
                    'name':name,
                    'sex':sex,
                    'date':date,
                   // phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile

                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}
//调用feedBack接口
export function feedback(message){
    return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'message':message,

                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}