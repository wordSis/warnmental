import {
    chatlist,
    recvmsg,
    sendmsg,
} from  '../services/chat'
export default {
    namespace:'chat',
    //这里定义数据初始值
    state:{
        chatlist:[],
        recvmsg:[],
        sendmsg:[],
    },
    reducers:{
        getallchat(state,{payload}){
            return{
                ...state,
                ...payload,
            }
        },
        receive(state,{payload}){
            return{
                ...state,
                ...payload,
            }
        },
    },
    effects:{
        //获取chat列表
        *chatList({payload},{call,put}){
            //请求接口时的函数和入参  
            const res = yield call(chatlist,)
            console.log('chatList状态码',res)
            yield put({
                type: 'getallchat',//reducer中的方法
                payload: {chatlist:res.data},
            })
            // if(res===''){
            //     message.success('成功')
            // }
        },
        *recvMsg({payload},{call,put}){
            //请求接口时的函数和入参  
            const res = yield call(recvmsg,)
            console.log('recvMsg状态码',res)
            yield put({
                type: 'receive',//reducer中的方法
                payload: {recvmsg:res.data},
            })
            // if(res===''){
            //     message.success('成功')
            // }
        },
        *sendMsg({payload:text,form,to},{call,put}){
            //请求接口时的函数和入参  
            const res = yield call(sendmsg,text,form,to)
            console.log('sendMsg状态码',res)
            yield put({
                type: 'receive',//reducer中的方法
                payload: {sendmsg:res.data},
            })
            // if(res===''){
            //     message.success('成功')
            // }
        },
    }
}