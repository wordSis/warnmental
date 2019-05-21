import React from 'react';
import styles from '../../css/login.css'
import Register from '../regist/register'
import Forpwd from './forgetpwd'
import Identifycode from './identifyingCode'
import {
    Form,
    Input,
    Button,
    Modal,
    Icon,
} from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
const namespace = 'login';
const FormItem = Form.Item;
const mapStateToProps = (state) => {
    // const { num} = state.login // login就是models命名空间名字 
    // return {
    //     num, // 在这return,下面render中才能获取到
    // }
    return{

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Login: (phone,password) => {
            dispatch({
                type: `${namespace}/Login`,
                payload: phone,password,
            });
        },
        ForgetPwd: (phone,password) => {
            dispatch({
                type: `${namespace}/ForgetPwd`,
                payload: phone,password,
            });
        },
        UpdatePwd: (phone,password) => {
            dispatch({
                type: `${namespace}/UpdatePwd`,
                payload: phone,password,
            });
        },
        loginWx: (phone,password) => {
            console.log(this)
            dispatch({
                type: `${namespace}/loginWx`,
                payload: phone,password,
            });
        },
    };
};


class LoginForm extends React.Component {
    state = {
       register:false,
       forpwd:false,
       identifycode:false,
    }
    //微信登录
    // callback=(result) =>{
    //     alert('cucess');
    //     alert(result);  //输出openid
    //     }
    //     function getQueryString(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //     var r = window.location.search.substr(1).match(reg);
    //     if (r != null) return unescape(r[2]); return null;
    //     }
    //     var code = getQueryString("code");
    //     $.ajax({
    //     async: false,       url: "http://atest.sinaapp.com/oauth2.php", //这是我的服务端处理文件php的
    //     type: "GET",       //下面几行是jsoup，如果去掉下面几行的注释，后端对应的返回结果也要去掉注释
    //     // dataType: 'jsonp',
    //     // jsonp: 'callback', //jsonp的值自定义,如果使用jsoncallback,那么服务器端,要返回一个jsoncallback的值对应的对象.
    //     // jsonpCallback:'callback',
    //     data: {code:code}, //传递本页面获取的code到后台，以便后台获取openid
    //     timeout: 5000,
    //     success: function (result) {
    //     callback(result);
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //     alert(textStatus);       }
    // });
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
    handleIdentifycodeCancel=()=>{
        this.setState({
            identifycode: false,
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
    identifycode=()=>{
        this.props.handleCancel();
        this.setState({
            identifycode: true,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
               // this.props.handleCancel();
               
                //成功调用models中this.props.login 在service中定义的login 在models中定义了初值，并赋值了
                console.log('Received values of form: ', values);
                this.props.Login(values.phone, values.password)
            }
        });
    }
    componentDidMount() {

    }
    render() {
        // const {num} = this.props 
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
                    <FormItem style={{borderStyle:'none'}}>
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
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入手机号码' />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            //initialValue: '',
                            rules: [{ required: true, message: 'Please input your pwd!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入登录密码'/>
                        )}
                    </FormItem> 
                    {/* <a href='' className={styles.loginformregist} onClick={() => { router.push('/regist/register') }}>用户注册</a>
                    <span className={styles.loginformregist}>|</span> 
                    <a  href=''  className={styles.loginformregist} onClick={() => { router.push('/login/forgetpwd') }}>忘记密码</a>
                    <a href=''  className={styles.loginformforgot} onClick={() => { router.push('/login/identifyingCode') }}>验证码登录</a> */}
                    <span   className={styles.loginformregist} onClick={this.reg}>用户注册</span>
                    <span   className={styles.loginformregist}>|</span> 
                    <span   className={styles.loginformregist} onClick={this.forpwd} >忘记密码</span>
                    <span   className={styles.loginformforgot} onClick={this.identifycode}>验证码登录</span>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginformbutton}
                    >
                    登录
                    </Button>
                <div style={{border:'1px solid #ccc',textAlign:'center',lineHeight:'32px'}} ><a href=''  onClick={() => { router.push('/login/ThirdLogin') }}>使用第三方登录</a></div>
                {/* onClick={()=>{this.props.loginWx()}} */}
                <a href='https://open.weixin.qq.com/connect/qrconnect?appid=wxbdc5610cc59c1631&redirect_uri=https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do&response_type=code&scope=snsapi_login&state=3d6be0a4035d839573b04816624a415e#wechat_redirect' ><Icon type="wechat" /></a> 
                <Icon type='qq' />
                <Icon type="weibo" />                        
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
            <Identifycode
                visible={this.state.identifycode}
                handleCancel={this.handleIdentifycodeCancel}
            />
        </div>
        );
    }
}
const Login = Form.create()(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
