import {message} from 'antd'
import {
    getBanner,
    medicalList,
    test,
    healthinquiryList,
} from  '../services/myhome'
export default {
    namespace:'myhome',
    //这里存放数据初始值
    state:{
        // bannerData:[],
       // medicallist:[],
       //healthinquirylist:[],
       //testList:[],
    },
    reduce:{
        //用于存放改变view 的action 只return {...state,...action.payload}
    },
    effects:{
        //getbanner
        *getBanner({payload},{call,put}){
            //请求接口时的函数getBanner和入参 (函数在sevrvice中和传过来的参数 没{_,{call,put,select}}) 
            //yield call(getBanner,-) 函数，入参
            const resstatus = yield call(getBanner)//函数和是后台要求传的参数
            console.log('getBanner状态码',resstatus)
            //const m = yield select((state) => state.getBanner.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'getProjectData',//reducer中的方法
            //     payload: {
            //         bannerData: resstatus.data // 把后台返回的数据赋值给了bannerData
            //     }
            // })
            if(resstatus===''){
                console.log(resstatus)
               
            }else{
               // message.info('xxx');
            }
        },  
        //医用量表
        *medicalList({payload},{call,put}){
            const resstatus = yield call(medicalList)//函数和是后台要求传的参数
            console.log('medicallist状态码',resstatus)
            //const m = yield select((state) => state.medicallist.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'getProjectData',//reducer中的方法
            //     payload: {
            //         medicallist: resstatus.data // 把后台返回的数据赋值给了medicallist
            //     }
            // })
            if(resstatus===''){
                console.log(resstatus)
               
            }else{
               // message.info('xxx');
            }
        },
        //趣味测试
        *test({payload},{call,put}){
            const resstatus = yield call(test)//函数和是后台要求传的参数
            console.log('testlist状态码',resstatus)
            //const m = yield select((state) => state.testlist.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'getProjectData',//reducer中的方法
            //     payload: {
            //         testlist: resstatus.data // 把后台返回的数据赋值给了testlist
            //     }
            // })
            if(resstatus===''){
                console.log(resstatus)
               
            }else{
               // message.info('xxx');
            }
        },
        //健康咨询
        *healthinquiryList({payload},{call,put}){
            const resstatus = yield call(healthinquiryList)//函数和是后台要求传的参数
            console.log('healthinquirylist状态码',resstatus)
            //const m = yield select((state) => state.healthinquirylist.num) //select就是用来选择上面state里的，
            // yield put({
            //     type: 'getProjectData',//reducer中的方法
            //     payload: {
            //         healthinquirylist: resstatus.data // 把后台返回的数据赋值给了healthinquirylist
            //     }
            // })
            if(resstatus===''){
                console.log(resstatus)
               
            }else{
               // message.info('xxx');
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