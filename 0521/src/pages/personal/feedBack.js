import { connect } from 'dva'
import SiderBar from './SiderBar'
import { Icon, Button,Input} from 'antd';
import React, { Component } from 'react';
const TextArea = Input.TextArea;

//全局变量 
const namespace = 'personal'; 

const mapStateToProps = (state)=>{
    return{

    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        feedBack:(message)=>{
            dispatch({
                type:`${namespace}/feedBack`,
                payload:message,
            })
        }
    }
}

 class FeedBack extends Component{
    state={
        msg:'',
    }
    onmsg=(e)=>{
        this.setState({
            msg:e.target.value,
        })
    }
    render(){
        return(
            // 反馈时判断登录没？
            <div style={{padding:'20px 50px'}}>
                 <SiderBar ></SiderBar>
                 <div style={{float:'left',width:'86%',textAlign:'center'}}>
                    <div style={{width:'100%',height:'100px'}}>
                        <Icon type="edit" style={{float:'left'}} />
                        <TextArea placeholder="留下您宝贵的意见吧" onChange={this.onmsg} style={{width:'98%',height:'100px',float:'left'}}/>
                        
                    </div>
                    {/* <div style={{textAlign:'center'}}>请登录后填写反馈</div> */}
                    {/* 提交时input内容给后台 */}
                    <Button type="primary" 
                        onClick={()=>{
                            console.log(this.state.msg);
                            this.props.feedBack(this.state.msg)
                        }}
                        style={{marginTop:'50px',width:'200px'}}
                    >提交</Button>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FeedBack);