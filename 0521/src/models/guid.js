import {message} from 'antd'
import {
    guidUrl,
} from  '../services/guid'
import * as service from '../services/guid';
export default {
    namespace:'guid',
    //这里定义数据初始值
    state:{
        guidurl:[],
    },
    reducers:{
        allurl(state,{payload}){
            return{
                ...state,
                ...payload,
            }
        }
    },
    effects:{
        //在service中写的调接口函数
        *guidUrl({payload: _},{call,put}){
            //请求接口时的函数和入参  
            //yield call(guidUrl,-) 函数，入参
            const resstatus = yield call(service.guidUrl)
            console.log('guidUrl状态码',resstatus)
            yield put({
                type: 'allurl',//reducer中的方法
                payload: { guidurl:resstatus.data},
                  
                
            })
            // if(resstatus===''){
            //     message.success('成功')
            // }
        }
    }
}