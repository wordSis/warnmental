import React from 'react';
import styles from '../../css/login.css';
import{
    Form,
    Input,
    Button,
    Row,
    Col,
    Modal,
} from 'antd';
import Forpwdnex from './forgetpwdNex';
import { connect } from 'dva';
const namespace = 'login';

const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        ForgetPwd: (phone,captcha) => {
            dispatch({
                type: `${namespace}/ForgetPwd`,
                payload: phone,captcha
            });
        },
    };
};


class ForgetPwdForm extends React.Component {
    state = {
        forpwdnex:false,
    }
    handleForpwdnexCancel=()=>{
        this.setState({
            forpwdnex: false,
        });
    }
    forpwdnex=()=>{
        this.setState({
            forpwdnex: true,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleCancel();

                console.log('Received values of form: ', values);
                this.props.ForgetPwd(values.phone, values.captcha)
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
                                <Button>获取验证码</Button>
                            </Col>
                        </Row>
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.loginformbutton}
                            style={{textAlign:'center'}}
                            onClick={this.forpwdnex}
                        >
                            下一步
                        {/* <a  onClick={() => { router.push('/login/LogNex') }}>下一步</a> */}
                        </Button>
                    </Form>
                </Modal>
                <Forpwdnex
                visible={this.state.forpwdnex}
                handleCancel={this.handleForpwdnexCancel}
                /> 
            </div>
        );
    }
}
const ForgetPwd = Form.create()(ForgetPwdForm);

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPwd);