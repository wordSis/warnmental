import {message} from 'antd'
import * as service from '../services/accessPlatform';
import {
    accessplatlist,   
} from  '../services/accessPlatform'
export default {
    namespace:'accessPlatform',
    //这里存放数据初始值
    state:{
        // platlist:{
        //     //name:''
        // },
    },
    reducers:{
        //用于存放改变view 的action 只return {...state,...action.payload}
        // platlists(state,{payload}){
        //     return{
        //         ...state,
        //         ...payload,
        //     }
        // },
    },
    effects:{
        //accessPlatform
        *accessPlatlist({payload:type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,},{call,put}){
            //请求接口时的函数accessPlatform和入参 (函数在sevrvice中和传过来的参数 没{_,{call,put,select}}) 
            const res = yield call(accessplatlist,type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,)//phone,password是后台要求传的参数
            console.log('accessplatlilst状态码',res)
            //const m = yield select((state) => state.accessplatlist.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'platlists',//reducer中的方法
            //     payload: {
            //        platlist: res.data ,
            //        // projectsData.name : res.data.name,
            //     }
            // })
            console.log(res)
            // if(res===''){
            //     console.log(res)
            //   //  message.infor('成功')
            // }else{
            //     message.info('失败，xx错误');
            // }
            message.success('提交成功！');
        },
        // 修改提交
    },
    // subscriptions 订阅监听，比如监听路由，进入页面如何如何，就可以在这里处理。
    // 相当于原生React中的componentWillMount方法。就比如上述代码，监听/project路由，
    // 进入该路由页面后，将发起getAllProjects aciton，获取页面数据。
    // subscriptions: {
    //     setup({ dispatch, history }) {
    //         return history.listen(({ pathname }) => {
    //             if (pathname === '/projects') {//当进入projects这路由，就会触发getAllProjects方法
    //                 dispatch({
    //                     type: 'getAllProjects'  getAllProjects类似*accessPlatform 具体是哪个页面的数据，自己定义方法
    //                 });
    //             }
    //         });
    //     }
    // }


}