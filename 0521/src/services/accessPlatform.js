//调用后台accessplatlist接口请求数据
export function accessplatlist(type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,){
   return(
        fetch(`url`,{
            methd:'post',
            mode:'',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    'type':type,
                    'phone':phone,
                    //type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,
                }
            )
        })
            .then(res=>console.log(res))
            // .then(json=>{
            //     return()
            // })      
    )
}