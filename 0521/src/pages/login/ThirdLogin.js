import React from 'react';
import styles from '../../css/login.css'
import {
    Form,
    Input,
    Button,
    Row,
    Col,
} from 'antd';
import { connect } from 'dva'
const namespace = 'profile'

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
       
        return (
            <Form onSubmit={this.handleSubmit} className={styles.loginform}>
                
                <p style={{fontSize:20,color:'#111',fontWeight:'bold',textAlign:'center',}}>精神语音预警系统</p>
                <FormItem>
                    {getFieldDecorator('username', {
                        //initialValue: '请输入手机号',
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
                >
                   登录
				</Button>
            </Form>
        );
    }
}
const Regist = Form.create()(RegistForm);

export default connect(mapStateToProps, mapDispatchToProps)(Regist);