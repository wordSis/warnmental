import React from 'react';
import styles from '../../css/login.css'
import Register from '../regist/register'
import Forpwd from './forgetpwd'
import Loginpwd from '../login/loginpwd'
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Modal,
} from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
const namespace = 'profile';

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


class RegistForm extends React.Component {
    state = {
        register:false,
        forpwd:false,
        password:false,
    }

    handleRegisterCancel=()=>{
        this.setState({
            register: false,
        });
    }
    handleForpwdCancel=()=>{
        this.setState({
            forpwd: false,
        });
    }
    handlePasswordCancel=()=>{
        this.setState({
            password: false,
        });
    }
    reg=()=>{
        this.props.handleCancel();
        this.setState({
            register: true,
        });
    }
    forpwd=()=>{
        this.props.handleCancel();
        this.setState({
            forpwd: true,
        });
    }
    password=()=>{
        this.props.handleCancel();
        this.setState({
            password: true,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleCancel()
                console.log('Received values of form: ', values);
                this.props.Regist(values.username, values.password)
            }
        });
    }

    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Modal  
                visible={this.props.visible}
                onCancel={this.props.handleCancel}
                footer={null}
                closable={false}
                maskClosable={true}
                bodyStyle={{padding:'0'}}
                destroyOnClose={true}
                >
                    <Form onSubmit={this.handleSubmit} className={styles.loginform}> 
                        <p style={{fontSize:20,color:'#111',fontWeight:'bold',textAlign:'center',}}>精神语音预警系统</p>
                        <FormItem>
                            {getFieldDecorator('iphone', {
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
                                <Input style={{ backgroundColor: '#fff', }} placeholder='请输入手机号码' />
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
                                <Button>发送验证码</Button>
                            </Col>
                        </Row>
                        </Form.Item>
                        {/* <a className={styles.loginformregist} onClick={() => { router.push('/register') }}>用户注册</a> 
                        <span className={styles.loginformregist}>|</span> 
                        <a className={styles.loginformregist} onClick={() => { router.push('/login/forgetpwd') }}>忘记密码</a>
                        <a className={styles.loginformforgot} onClick={() => { router.push('/login') }}>密码登录</a> */}
                        <span   className={styles.loginformregist} onClick={this.reg}>用户注册</span>
                        <span   className={styles.loginformregist}>|</span> 
                        <span   className={styles.loginformregist} onClick={this.forpwd} >忘记密码</span>
                        <span   className={styles.loginformforgot} onClick={this.password}>密码登录</span>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.loginformbutton}
                        >
                        登录
                        </Button>       
                    </Form>
                </Modal>
                <Register
                    visible={this.state.register}
                    handleCancel={this.handleRegisterCancel}
                />
                <Forpwd
                    visible={this.state.forpwd}
                    handleCancel={this.handleForpwdCancel}
                />
                 <Loginpwd
                    visible={this.state.password}
                    handleCancel={this.handlePasswordCancel}
                />   
                
            </div>
        );
    }
}
const Regist = Form.create()(RegistForm);

export default connect(mapStateToProps, mapDispatchToProps)(Regist);
