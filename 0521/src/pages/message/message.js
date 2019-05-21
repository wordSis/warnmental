
import { Tabs } from 'antd';
import React, { Component } from 'react';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
export default class OtherOrders extends Component{
    state={

    }
    // 就是跳转之后在加载之前的生命周期请求接口
    componentDidMount() {
        // 应该是此时掉接口
    }
    render(){
        return(
            <Tabs defaultActiveKey="1" onChange={callback} style={{padding:'20px 150px'}}>    
                <TabPane tab="订单消息" key="1">
                     {/* 消息列表由后台返回 */}
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <li>
                           <div>5:23</div> 
                           {/* sprit */}
                           <span style={{}}></span>
                           <span>客户xxx预定的2019-02-12 12:00图文咨询，不要忘哦</span>
                        </li>
                    </ul>
                </TabPane>
                <TabPane tab="系统消息" key="2">
                     {/* 消息列表由后台返回 */}
                     <ul style={{listStyle:'none',padding:'0'}}>
                        <li>
                           <div>5:23</div> 
                           {/* sprit */}
                           <span style={{}}></span>
                           <span>客户xxx预定的2019-02-12 12:00图文咨询，不要忘哦</span>
                        </li>
                    </ul>
                </TabPane>   
            </Tabs>
            
        )
    }
}
