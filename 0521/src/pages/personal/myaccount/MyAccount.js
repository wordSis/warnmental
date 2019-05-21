import 'moment/locale/zh-cn';
import Link from 'umi/link'
import React, { Component } from 'react';
import SiderBar from '../SiderBar'
import { Icon, Button,Input,DatePicker,Row,Col} from 'antd';
import moment from 'moment';
const { MonthPicker} = DatePicker;
const monthFormat = 'YYYY-MM';
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
                    <h2 style={{textAlign:'center'}}>账户余额：5656</h2>
                    {/* 提交时input内容给后台 */}
                    <div style={{textAlign:'center'}}>
                        <Link to='cashout/cashout'>
                            <Button type="primary" >提现</Button>
                        </Link>
                    </div>
                    <MonthPicker onChange={this.onChangemonth} defaultValue={moment('2019-06', monthFormat)} />
                    <div >
                        <Row style={{borderBottom:'1px solid #000',textAlign:'center'}}>
                            <Col span={8}>支出
                                <div>￥5623</div>
                            </Col>
                            <Col span={8}>收入
                                <div>￥5623</div>
                            </Col>
                            <Col span={8}>平台缴费
                                <div>￥5623</div>
                            </Col>
                        </Row>
                        <div style={{float:'left',width:'33%',height:'400px',borderRight:'1px solid #000'}}>
                            {/* 后台数据 map*/}
                            <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0}}>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span style={{float:'left'}}>订单编号：45124512564512</span>
                                    <span style={{float:'right'}}>￥236.03</span>
                                </li>
                                <li style={{height:'30px',lineHeight:'30px'}}>支出用户：王某某</li>
                                <li style={{height:'30px',lineHeight:'30px'}}>支出项目：观看文章</li>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span>2019-02-19 </span> <span>10:26</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{float:'left',width:'33%',height:'400px',borderRight:'1px solid #000'}}>
                            {/* 后台数据 map*/}
                            <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0,overflow:'hidden'}}>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span style={{float:'left'}}>订单编号：45124512564512</span>
                                    <span style={{float:'right'}}>￥236.03</span>
                                </li>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span style={{float:'left'}}>姓名：45124512564512</span>
                                    <span style={{float:'right'}}>电话号：15612525841</span>
                                </li>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span style={{float:'left'}}>咨询类型：图文咨询</span>
                                    <span style={{float:'right'}}>时长：5小时5分钟</span>
                                </li>
                                <li style={{height:'30px',lineHeight:'30px'}}>
                                    <span>2019-02-19 </span> <span>10:26</span>
                                </li>
                            </ul>   
                        </div>
                        <div style={{float:'left',width:'34%',height:'400px',borderRight:'1px solid #000'}}>
                             {/* 后台数据 map*/}
                            <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0,overflow:'hidden'}}>
                                <li style={{float:'left',width:'33%'}}>
                                    <div >本月收入</div>
                                    <div >2436.03</div>
                                </li>
                                <li style={{float:'left',width:'33%'}}>
                                    <div >平台缴费</div>
                                    <div >841.3</div>
                                </li>
                                <li style={{float:'left',width:'33%'}}>
                                    <div>缴费日期</div>
                                    <div >2019-02-19</div>
                                </li>
                            </ul>
                            <ul style={{listStyle:'none',background:'#f0f0f0',margin:'10px',padding:0,overflow:'hidden'}}>
                                {/* 后台数据 map*/}
                                <li style={{float:'left',width:'33%'}}>
                                    <div >上月收入</div>
                                    <div >2436.03</div>
                                </li>
                                <li style={{float:'left',width:'33%'}}>
                                    <div >平台缴费</div>
                                    <div >841.3</div>
                                </li>
                                <li style={{float:'left',width:'33%'}}>
                                    <div>缴费日期</div>
                                    <div >2019-02-19</div>
                                </li>
                            </ul>      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
