import {message} from 'antd'
import {
    personallist,
    editpersonal,
    feedback,
} from  '../services/personal'
import * as service from '../services/personal';
export default {
    namespace:'personal',
    //这里定义数据初始值
    state:{
        personlist:{},
    //    personallist:{
    //     name:'王xx', 
    //     sex:'女',
    //     phone:'13199562145',
    //    }

    },
    reducers:{
        getallpersonal(state,{payload}){
            return{
                ...state,
                ...payload,
            }
        },
        editallpersonal(state,{payload}){
            return{
                ...state,
                ...payload,
            }
        },

    },
    effects:{
        //获取个人中心列表
        *personalList({payload},{call,put}){
            //请求接口时的函数和入参  
            const res = yield call(personallist,)
            console.log('personalList状态码',res)
            yield put({
                type: 'getallpersonal',//reducer中的方法
                payload: {personlist:res.data},
            })
            // if(res===''){
            //     message.success('成功')
            // }
        },
        //personal编辑接口
        *editPersonal({payload: avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile},{call,put}){
            //请求接口时的函数和入参  
            //yield call(personalListphone,password) 函数，入参
            const res = yield call(editpersonal,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile)
            console.log('editpersonal状态码',res)
            yield put({
                type: 'editallpersonal',//reducer中的方法
                payload: { personlist:res.data},
            })
            // if(resstatus===''){
            //     message.success('成功')
            // }
        },
        //feedback
        *feedBack({ payload: message }, { call, put }) {
            const res = yield call(feedback, message)
            console.log('feedback状态码', res)
        //    if (res == '') {
        //         message.success('Feedback sent successfully')
        //     }
        },
    }
}