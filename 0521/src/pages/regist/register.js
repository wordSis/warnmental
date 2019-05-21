
import React from 'react';
import styles from '../../css/login.css'
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Checkbox, 
    Modal,
} from 'antd';
// import router from 'umi/router';
import { connect } from 'dva';
import RegNex from './RegNex';
const namespace = 'register';
const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        Regist: (registId,phone) => {
            dispatch({
                type: `${namespace}/Regist`,
                payload: registId,phone,
            });
        },
    };
};


class RegistForm extends React.Component {
    state = {
        text: '获取验证码',
        disabled: false,
        regnex:false,
      }
      timer = 0
      countDown = (e) => {
        let time = 60
        this.setState({
          text: --time + 's',
          disabled: true
        })
        this.timer = setInterval(() => {
          if (time > 0) {
            this.setState({
              text: --time + 's',
              disabled: true
            })
          } else {
            this.setState({
              text: '获取验证码',
              disabled: false
            })
          }
        }, 1000)
    }  
    handleRegnexcancel=()=>{
        this.setState({
            regnex: false,
        });
    }
    // showRegnexmodal=()=>{
    //     // const visible = this.props.visible;
    //     // this.visible=false;
    //     console.log(this.visible)
    //     this.setState({
    //         regnex: true,
    //     });
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
               // this.props.visible=false;
                console.log()
                this.props.handleCancel();
                this.setState({
                    regnex: true,
                });
                console.log('Received values of form: ', values);
                this.props.Regist(values.phone, values.password);
            }
        });
    }

    componentDidMount() {

    }
    render() {
        const { getFieldDecorator ,getFieldValue} = this.props.form;
        return (
            <div>
                <Modal  
                visible={this.props.visible}
                onCancel={this.props.handleCancel}
                footer={null}
                closable={false}
                bodyStyle={{padding:'0'}}
                maskClosable={true}
                destroyOnClose={true}
                >
                    <Form onSubmit={this.handleSubmit} className={styles.loginform}>
                        <p style={{fontSize:20,color:'#111',fontWeight:'bold',textAlign:'center',}}>精神语音预警系统</p>
                        <FormItem>
                            {getFieldDecorator('phone', {
                                //initialValue: '',
                                rules: [
                                    {
                                    len: 11,
                                    pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                                    required: true,
                                    message: '请输入正确的11位手机号码'
                                    }
                                ]
                            })(
                                <Input style={{ backgroundColor: '#fff', }} placeholder='请输入手机号' />
                            )}
                        </FormItem>
                        <Form.Item>
                        <Row gutter={8}>
                            <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                            })(
                                <Input placeholder='请输入验证码' />
                            )}
                            </Col>
                            <Col span={12}>
                                <Button disabled={this.state.disabled} onClick={(e) => this.countDown(e)}>{this.state.text}</Button>
                            </Col>
                        </Row>
                        </Form.Item>
                        <Form.Item >
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox><a href='http://localhost:8000/regagreement' target="_blank">用户协议</a></Checkbox>
                        )}
                        </Form.Item>
                        
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.loginformbutton}
                            style={{textAlign:'center'}}
                            // onClick={() => { router.push('/login/regNex') }}
                           
                            disabled={!getFieldValue('agreement')}
                            //onClick={this.showRegnexmodal}
                        >
                            下一步
                        {/* <a  onClick={() => { router.push('/login/regNex') }}>下一步</a> */}
                        </Button>
                    </Form>
                </Modal>
                <RegNex
                    visible={this.state.regnex}
                    handleCancel={this.handleRegnexcancel}
                />
            </div>
        );
    }
}
const Regist = Form.create()(RegistForm);

export default connect(mapStateToProps, mapDispatchToProps)(Regist);
