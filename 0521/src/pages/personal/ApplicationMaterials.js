import { connect } from 'dva';
import SiderBar from './SiderBar'
import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
} from 'antd';
//const TabPane = Tabs.TabPane;
//import router from 'umi/router';

const namespace = 'personal';

const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        Regist: (loginId,phone) => {
            dispatch({
                type: `${namespace}/Regist`,
                payload: loginId,phone,
            });
        },
    };
};

 class ApplicationMaterialsForm extends Component{
    state = {
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.Regist(values.username, values.password)
            }
        });
    }

    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 3 },
              sm: { span: 3 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 14 },
            },
          };
        return(
            <div style={{padding:'20px 50px'}}>           
                 <SiderBar ></SiderBar>
                 <div style={{float:'left',width:'86%',paddingLeft:'30px'}}>
                    <h3>请选择您需要申请的物料</h3>
                    <div style={{height:'150px'}} className="card-container">
                        <div style={{float:'left',width:'50%',paddingRight:'50px'}}>
                            <div style={{height:'40px'}}>
                                <span style={{float:'left'}}>名片</span>
                                <Button type="primary" style={{float:'right'}}>点击申请</Button>
                            </div>
                            <div style={{}}>tupian1111</div>
                        </div>
                    
                        <div style={{float:'right',width:'50%'}}>
                            <div  style={{height:'40px'}}>
                                <span style={{float:'left'}}>名片</span>
                                <Button type="primary" style={{float:'right'}}>点击申请</Button>
                            </div>
                            <div style={{}}>tupian222</div>
                        </div>
                            
                    </div>
                    <Form {...formItemLayout}  onSubmit={this.handleSubmit} >
                        <p style={{color:'#111',}}>请仔细核实并补充以下名片信息，确认无误后，可点击【填写邮寄地址】后完善邮寄信息。</p>
                        <p style={{color:'#111',marginTop:'30px',height:'30px',lineHeight:'30px'}}>名片正面信息</p>
                        <FormItem label='姓名：'>
                            {getFieldDecorator('name', {
                                initialValue: '',
                                rules: [{  message: '请输入姓名!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  />
                            )}
                        </FormItem>
                        <FormItem label='城市：'>
                            {getFieldDecorator('city', {
                                initialValue: '',
                                rules: [{  message: '请输入城市!' }],
                            })(
                                <div>
                                    <Select
                                         style={{ width: 120 }}
                                        // onChange={this.handleProvinceChange}
                                    >
                                        {/* 后台获取 */}
                                        {/* {provinceData.map(province => <Option key={province}>{province}</Option>)} */}
                                    </Select>
                                    <Select
                                        style={{ width: 120 }}
                                        //value={this.state.secondCity}
                                        // onChange={this.onSecondCityChange}
                                    >
                                        {/* {cities.map(city => <Option key={city}>{city}</Option>)} */}
                                    </Select>
                                    <Select
                                         style={{ width: 120 }}
                                        // onChange={this.handleProvinceChange}
                                    >
                                        {/* 后台获取 */}
                                        {/* {provinceData.map(province => <Option key={province}>{province}</Option>)} */}
                                    </Select>
                                </div>
                            )}
                        </FormItem>
                       
                        <FormItem label='医院：'>
                            {getFieldDecorator('hosp', {
                                //initialValue: '',
                                rules: [{  message: '请输入医院!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  />
                            )}
                        </FormItem>
                        <FormItem label='科室：'>
                            {getFieldDecorator('seshi', {
                                //initialValue: '',
                                rules: [{  message: '请输入科室!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  />
                            )}
                        </FormItem>
                        <FormItem label='职称：'>
                            {getFieldDecorator('zhichen', {
                                //initialValue: '',
                                rules: [{  message: '请输入职称!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  />
                            )}
                        </FormItem>
                        <FormItem label='门诊时间：'>
                            {getFieldDecorator('time', {
                                //initialValue: '',
                                rules: [{  message: '请输入门诊时间!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  />
                            )}
                        </FormItem>
                        <FormItem style={{marginLeft:'12%'}} label=''>
                            {getFieldDecorator('adress', {
                                //initialValue: '',
                                //rules: [{  message: '请输入详细地址!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }}  placeholder='详细地址'/>
                            )}
                        </FormItem>
                        <div>
                            <h4 style={{color:'#111',textAlign:'center',}}>收货地址</h4>
                            <FormItem label='收货人：'>
                                {getFieldDecorator('peo', {
                                    //initialValue: '',
                                    rules: [{  message: '请输入收货人!' }],
                                })(
                                    <Input style={{ backgroundColor: '#fff', }}  />
                                )}
                            </FormItem>
                            <FormItem label='联系电话：'>
                                {getFieldDecorator('phone', {
                                    //initialValue: '',
                                    rules: [{  message: '请输入联系电话!' }],
                                })(
                                    <Input style={{ backgroundColor: '#fff', }}  />
                                )}
                            </FormItem>
                            <FormItem label='收货地址：'>
                                {getFieldDecorator('address1', {
                                    //initialValue: '',
                                })(
                                    <Input style={{ backgroundColor: '#fff', }}  />
                                )}
                            </FormItem>
                            <FormItem label='详细地址：'>
                                {getFieldDecorator('detail', {
                                    //initialValue: '',
                                    rules: [{  message: '请输入详细地址!' }],
                                })(
                                    <Input style={{ backgroundColor: '#fff', }} placeholder='详细地址' />
                                )}
                            </FormItem>
                            <FormItem label='备注：'>
                                {getFieldDecorator('mark', {
                                    //initialValue: '',
                                    rules: [{  message: '请输入备注!' }],
                                })(
                                    <Input style={{ backgroundColor: '#fff', }} placeholder='备注信息' />
                                )}
                            </FormItem>
                        </div>
                       
                            <FormItem style={{position: 'absolute',left: '50%'}} >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                提交
                                {/* <a  onClick={() => { router.push('/login/regNex') }}></a> */}
                                </Button>
                            </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const ApplicationMaterials = Form.create()(ApplicationMaterialsForm);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationMaterials);
