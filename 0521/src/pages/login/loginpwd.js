import React from 'react';
import styles from '../../css/login.css';
import {
    Form,
    Input,
    Button,
    Modal,
} from 'antd';
import { connect } from 'dva';
const namespace = 'login';
const FormItem = Form.Item;

const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        Loginpwd: (username,pwd) => {
            dispatch({
                type: `${namespace}/Loginpwd`,
                payload: username,pwd,
            });
        },
    };
};


class LoginpwdForm extends React.Component {
    state = {
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleCancel()
                console.log('Received values of form: ', values);
                this.props.Loginpwd(values.username, values.pwd)
            }
        });
    }

    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
       
        return (
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
                        {getFieldDecorator('username', {
                            //initialValue: '',
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入用户名' />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('pwd', {
                            //initialValue: '',
                            rules: [{ required: true, message: '请确认登录密码!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请确认登录密码' />
                        )}
                    </FormItem>
                    
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginformbutton}
                    >
                    登录
                    </Button>
                </Form>
            </Modal>
        );
    }
}
const Loginpwd = Form.create()(LoginpwdForm);

export default connect(mapStateToProps, mapDispatchToProps)(Loginpwd);