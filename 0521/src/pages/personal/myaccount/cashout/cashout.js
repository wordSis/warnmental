import React from 'react';
import {
    Form,
    Input,
    Button,
    InputNumber
} from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
const namespace = '';
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
        Cashout: (bankcar,password) => {
            dispatch({
                type: `${namespace}/Cashout`,
                payload: bankcar,password,
            });
        },
    };
};


class CashoutForm extends React.Component {
    state = {
      
    }
   
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
               // this.props.handleCancel(); 
                //成功调用models中this.props.Cashout 在service中定义的Cashout 在models中定义了初值，并赋值了
                console.log('Received values of form: ', values);
                this.props.Cashout(values.bankcar, values.password)
            }
        });
    }
    componentDidMount() {

    }
    render() {
        // const {num} = this.props 
        const { getFieldDecorator } = this.props.form;  
        const formItemLayout = {
            labelCol: {
              xs: { span: 10 },
              sm: { span: 10 },
            },
            wrapperCol: {
              xs: { span: 8},
              sm: { span: 8 },
            },
          };      
        return (
                <Form onSubmit={this.handleSubmit} {...formItemLayout} >  
                    <p style={{fontSize:20,color:'#111',fontWeight:'bold',textAlign:'center',}}>提现</p>
                    <FormItem style={{borderStyle:'none'}} label='到账银行卡：'>
                        {getFieldDecorator('bankcard', {
                            //initialValue: '',   
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入银行卡' />
                        )}
                    </FormItem>
                    <FormItem style={{borderStyle:'none'}} label='提现金额：'>
                        {getFieldDecorator('num', {
                            //initialValue: '',   
                        })(
                            <InputNumber style={{ backgroundColor: '#fff', }} min={0} placeholder='请输入金额' />
                        )}
                    </FormItem>
                    <FormItem style={{borderStyle:'none'}} label='设置提现密码：'>
                        {getFieldDecorator('pwd', {
                            rules: [
                                {
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
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请设置提现密码' />
                        )}
                    </FormItem>
                    <FormItem style={{borderStyle:'none'}} label='再次确认密码：'>
                        {getFieldDecorator('confirmpwd', {  
                            rules: [{  message: '请确认密码!' },
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
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请再次确认密码' />
                        )}
                    </FormItem>
                    
                    <Button
                        type="primary"
                        htmlType="submit"  
                        style={{textAlign:'center',marginLeft:'50%'}}
                    >
                    提现
                    </Button>                     
                </Form>
        );
    }
}
const Cashout = Form.create()(CashoutForm);

export default connect(mapStateToProps, mapDispatchToProps)(Cashout);
