import SiderBar from './SiderBar'
import React, { Component } from 'react';
export default class   emengencyContact extends Component {
    render(){
        return(
            <div style={{padding:'20px 50px',width:'100%'}}>  
                <SiderBar></SiderBar>  
                {/* 后台获取优惠券coupon列表 */}
                <div style={{border:'1px solid ',
                borderColor:'rgba(242, 242, 242, 1)',
                borderRadius:'10px',
                backgroundColor:'rgba(102, 204, 102, 0.2)',
                padding:'10px',height:'120px',width:'86%'}}>
                    <div style={{}}>
                        <span>￥5 </span>
                        <span>满30可用</span>
                    </div>
                    <div style={{}}>
                        <p>可用于观看科普文章</p>
                        <span>2019-10-15 10:00 ---- 2019-11-15 10:00</span>
                    </div>
                </div>                 
            </div>
        )
    }
}