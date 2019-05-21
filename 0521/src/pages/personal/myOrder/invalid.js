import 'moment/locale/zh-cn';
import React, { Component } from 'react';
import SiderBar from '../SiderBar';
import {Row,Col,Button} from 'antd';
import moment from 'moment';
// const { MonthPicker} = DatePicker;
// const monthFormat = 'YYYY-MM';
moment.locale('zh-cn');
export default class MyAccount extends Component{
     onChangemonth=(date, dateString)=> {
        console.log(date, dateString);
    }
    render(){
        return(
            <div style={{padding:'20px 50px'}}>
                <SiderBar ></SiderBar>
                <div style={{float:'left',width:'86%',}}>   
                    <Row style={{borderBottom:'1px solid #000',textAlign:'center'}}>
                        <Col span={8}>
                            电话咨询
                        </Col>
                        <Col span={8}>
                            视频咨询
                        </Col>
                        <Col span={8}>
                            图文咨询
                        </Col>
                    </Row>
                    <div style={{float:'left',width:'33%',height:'400px',borderRight:'1px solid #000'}}>
                        <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0}}>
                            {/* 后台数据 map*/}
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>下单时间：2019-03-19 10.30</span>
                                <span style={{float:'right'}} >用户已取消订单</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>订单编号：45124512564512</li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>姓名：林xx</span>
                                <span style={{float:'right'}}>电话号：15612525841</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>电话咨询</li>
                            <li style={{height:'30px',lineHeight:'30px'}}>预约咨询</li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span> 预约时间：2019-02-19 <span>10:26</span></span>
                            </li>
                        </ul>
                    </div>
                    <div style={{float:'left',width:'33%',height:'400px',borderRight:'1px solid #000'}}>
                        <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0,overflow:'hidden'}}>
                            {/* 后台数据 map*/}
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>咨询时间：2019-03-19 10.30</span>
                                <span style={{float:'right'}} >未处理</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>订单编号：45124512564512</span>
                                <span style={{float:'right'}}>电话号：15612525841</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>姓名：林xx</span>
                                <span style={{float:'right'}}>咨询时长：15分钟</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>视频咨询</span>
                                <span style={{float:'right'}}>￥23</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>普通咨询</span>
                                <div style={{float:'right'}}>
                                    <Button type="danger"  style={{float:'left'}}>拒绝接单</Button>
                                    <Button  style={{float:'right'}}>开始处理</Button>
                                    {/* <a href='javascript:;' style={{float:'left',border:'1px solid #ccc'}}>拒绝接单</a>
                                    <a href='javascript:;' style={{float:'right'}}>开始处理</a> */}
                                </div>
                            </li>
                        </ul>   
                    </div>
                    <div style={{float:'left',width:'34%',height:'400px',borderRight:'1px solid #000'}}>
                    <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0}}>
                            {/* 后台数据 map*/}
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>处理时间：2019-03-19 10.30</span>
                                <span style={{float:'right'}} >已处理</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>订单编号：45124512564512</li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>姓名：林xx</span>
                                <span style={{float:'right'}}>电话号：15612525841</span>
                            </li>
                            <li style={{height:'30px',lineHeight:'30px'}}>图文咨询</li>
                            <li style={{height:'30px',lineHeight:'30px'}}>
                                <span style={{float:'left'}}>咨询时长：5小时15分钟</span>
                                <span style={{float:'right'}} >￥50</span>
                            </li>
                        </ul>  
                    </div>
                   
                </div>
            </div>
        )
    }
}
