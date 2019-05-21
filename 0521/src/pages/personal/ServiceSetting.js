import SiderBar from './SiderBar'
import { Icon, Switch} from 'antd';
import React, { Component } from 'react';
import Link from 'umi/link';
export default class ServiceSetting extends Component{
    onChange=(checked)=> {
        console.log(`switch to ${checked}`);
    }
    render(){
        return(
            <div style={{padding:'20px 50px'}}>
                 <SiderBar ></SiderBar>
                 <div style={{float:'left',width:'86%',padding:'30px 100px',fontSize:'16px',}}>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>收费方式</span>
                        <Link to='' style={{float:'right'}}>
                            <span> 图文、视频、电话</span>
                            <Icon type="right" />  
                        </Link> 
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>收款账号</span>
                        <Link to=''  style={{float:'right'}}>
                            <span> 123456345634567</span>
                            <Icon type="right" />  
                        </Link> 
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>预约日期</span>
                        <Link to='' style={{float:'right'}}>
                            <span> 查看详情</span>
                            <Icon type="right" />  
                        </Link> 
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>绑定手机</span>
                        <Link to=''  style={{float:'right'}}>
                            <span> 12345634563</span>
                            <Icon type="right" />  
                        </Link> 
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>消息提醒</span>
                        <div style={{float:'right',textAlign:'center'}}>
                            <Switch defaultChecked onChange={this.onChange} />
                        </div>
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>开启预约</span>
                        <div style={{float:'right',textAlign:'center'}}>
                            <Switch defaultChecked onChange={this.onChange} />
                        </div>
                    </div>
                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>咨询服务</span>
                        <div style={{float:'right',textAlign:'center'}}>
                            <Switch defaultChecked onChange={this.onChange} />
                        </div>
                    </div>

                    <div style={{width:'100%',height:'40px',lineHeight:'40px',borderBottom:'1px solid #ccc'}}>
                        <span style={{float:'left'}}>退出登录</span>
                        <Link to=''  style={{float:'right'}}>
                            <Icon type="right" />  
                        </Link> 
                    </div> 
                </div>
            </div>
        )
    }
}
