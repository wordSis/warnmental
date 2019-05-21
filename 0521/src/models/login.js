import {message} from 'antd'
import {
    login,
    forgetpwd,
    updatepwd,
    loginwx,
} from  '../services/login'
export default {
    namespace:'login',
    //这里存放数据初始值
    state:{
        // Data:[]
    },
    reduce:{
        //用于存放改变view 的action 只return {...state,...action.payload}
        // getProjectData(state,{payload}){
        //     return {
        //         ...state,
        //         ...payload,
        //     }
        // }
    },
    effects:{
        //login
        *Login({payload:phone,password},{call,put}){
            //请求接口时的函数login和入参 (函数在sevrvice中和传过来的参数 没{_,{call,put,select}}) 
            //yield call(login,phone,password) 函数，入参
            const resstatus = yield call(login,phone,password)//phone,password是后台要求传的参数
            console.log('login状态码',resstatus)
            //const m = yield select((state) => state.login.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'getProjectData',//reducer中的方法
            //     payload: {
            //         Data: resstatus.data // 把后台返回的数据赋值给了Data
            //     }
            // })
            if(resstatus===''){
                console.log(resstatus)
                message.infor('登录成功')
            }else{
                message.info('登录失败，账号或密码错误');
            }
        },
        // forget pwd
        *ForgetPwd({ payload: phone,captcha }, { call, put }) {
            const rspstatus = yield call(forgetpwd,phone,captcha)
            console.log('forgetpwd状态码', rspstatus)
            if(rspstatus === '') {
                message.success('Success,Pay attention to your message.')
            }
        },
        // update pwd
        *UpdatePwd({ payload: username,oldPassword,newPassword }, { call, put }) {
            const rspstatus = yield call(updatepwd, username,oldPassword,newPassword)
            console.log('updatepwd状态码', rspstatus)
            if(rspstatus === '') {
                message.success('Success')
            }
        },
        *loginWx({payload:phone,password},{call,put}){
            const rspstatus = yield call(loginwx, phone,password)
            console.log('loginwx状态码', rspstatus)
            if(rspstatus === '') {
                message.success('Success')
            }
        },
    },
    // subscriptions 订阅监听，比如监听路由，进入页面如何如何，就可以在这里处理。
    // 相当于原生React中的componentWillMount方法。就比如上述代码，监听/project路由，
    // 进入该路由页面后，将发起getAllProjects aciton，获取页面数据。
    // subscriptions: {
    //     setup({ dispatch, history }) {
    //         return history.listen(({ pathname }) => {
    //             if (pathname === '/projects') {//当进入projects这路由，就会触发getAllProjects方法
    //                 dispatch({
    //                     type: 'getAllProjects'  getAllProjects类似*login 具体是哪个页面的数据，自己定义方法
    //                 });
    //             }
    //         });
    //     }
    // }


}