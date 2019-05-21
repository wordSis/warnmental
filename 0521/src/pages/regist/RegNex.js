import React from 'react';
import styles from '../../css/login.css'
import {
    Form,
    Input,
    Button, 
    Modal,
} from 'antd';
import { connect } from 'dva'
const namespace = 'login'

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
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleCancel()
                console.log('Received values of form: ', values);
                this.props.Regist(values.regpwd,values.confirmpwd, values.password)
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
            bodyStyle={{padding:'0'}}
            maskClosable={true}
            destroyOnClose={true}
            >
                <Form onSubmit={this.handleSubmit} className={styles.loginform}>
                    
                    <p style={{fontSize:20,color:'#111',fontWeight:'bold',textAlign:'center',}}>精神语音预警系统</p>
                    <FormItem>
                        {getFieldDecorator('regpwd', {
                            //initialValue: '请设置登录密码',
                            rules: [
                                {
                                  required: true,
                                  message: '请输入密码'
                                },
                                {
                                  min: 6,
                                  message: '密码至少为6个字符'
                                },
                                {
                                  max: 16,
                                  message: '密码最多为16个字符'
                                },
                                {
                                  whitespace: true,
                                  message: '密码中不能有空格'
                                }
                              ]
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请设置登录密码' />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('confirmpwd', {
                            //initialValue: '请确认登录密码',
                            rules: [{ required: true, message: '请确认登录密码!' },
                            {
                                validator: (rule, value, callback) => {
                                const {getFieldValue} = this.props.form
                                if (!getFieldValue('regpwd')) {
                                    callback('请先输入上面的密码')
                                }
                                if (value && value !== getFieldValue('regpwd')) {
                                    callback('两次输入不一致！')
                                }
                                callback()
                                }
                            }
                        ],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请确认登录密码' />
                        )}
                    </FormItem>
                    
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginformbutton}
                    >
                    注册成功
                    </Button>
                </Form>
            </Modal>
        );
    }
}
const Regist = Form.create()(RegistForm);

export default connect(mapStateToProps, mapDispatchToProps)(Regist);