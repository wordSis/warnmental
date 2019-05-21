import React, { Component } from 'react';
import {Icon} from 'antd';
import SiderBar from './SiderBar'
export default class AboutUs extends Component{
    render(){
        return(
            <div style={{padding:'20px 50px',}}>
                <SiderBar ></SiderBar>
                <div style={{float:'left',width:'86%',padding:'0 50px'}}>
                    <img src='../assets/yay.jpg' alt="logo" style={{textAlign:'center'}}></img>
                    <h3 style={{textAlign:'center'}}>新精警</h3>
                    <p>app介绍app介绍app介绍app介绍app介绍app介绍app介绍
                    app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍
                    app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍
                    app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍
                    app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍
                    </p>
                    <ul style={{listStyle:'none',padding:0,height:'30px',lineHeight:'30px'}}>
                    {/* borderBottom:'1px solid #ccc', */}
                        <li>当前版本</li>
                        <li>
                            <span>最新版本</span>
                            <a href="javascript:void(0);">更新</a>
                        </li>
                        <li>协议及声明
                            <Icon type='right' />
                        </li>
                        <li>客服电话：5565895
                            <Icon type='phone' />
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}