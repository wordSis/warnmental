export function guidUrl(){
     return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                   // 'url':url,
                }
            )
        })
            // .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })
    )
}