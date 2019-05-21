import React ,{ Component } from 'react';
import {  Button ,Form,Input,Upload ,Icon,message,Radio,InputNumber} from 'antd';
import { connect } from 'dva';
const TextArea = Input.TextArea;
const namespace = 'personal';
const FormItem = Form.Item;
// const props = {
//     name: 'file',
//     headers: {},
// };
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (loginId,phone) => {
            dispatch({
                type: `${namespace}/addArticle`,
                payload: loginId,phone,
            });
        },
    };
};


class ArticleForm extends Component {
    state = {
        timestamp:'',
        loading: false,
    }
    onChange1=(checkedValues)=> {
        console.log('checked = ', checkedValues);
      }
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
        }
      
    beforeUpload=(file)=> {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
            }));
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.addArticle(values.username, values.password)
            }
        });
    }

    componentDidMount() {

    }
    render() {
        const uploadButton = (
            <div >
              <Icon type={this.state.loading ? 'loading' : 'plus'} />             
            </div>
          );
          const imageUrl = this.state.imageUrl;
        const formItemLayout = {
            labelCol: {
              xs: { span: 12 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 22 },
              sm: { span: 12},
            },
          };
        const { getFieldDecorator } = this.props.form;          
        return (
            <Form onSubmit={this.handleSubmit}  {...formItemLayout} >
                <FormItem style={{width:'100%',left: '30%'}}>
                    {getFieldDecorator('头像', {
                                //initialValue: '',
                            // rules: [{  message: 'Please input your ud!' }],
                            })(
                        <Upload 
                            // {...props}
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange} 
                        >
                        {imageUrl ? <img src={imageUrl} alt="avatar"  /> : uploadButton}
                        </Upload>
                    )}
                </FormItem> 
                <FormItem label="收费">
                    {getFieldDecorator('收费')(
                        <Radio.Group>
                            <Radio value="是">是</Radio>
                            <Radio value="否">否</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
                <FormItem style={{borderStyle:'none'}} label="收费金额">
                    {getFieldDecorator('money', {
                        //initialValue: '',
                        rules: [{  message: '请填写收费金额!' }],
                    })(
                        <InputNumber style={{ backgroundColor: '#fff', }} placeholder='请填写收费金额' />
                    )}
                </FormItem>
                <FormItem style={{borderStyle:'none'}} label="文章标题">
                    {getFieldDecorator('tit', {
                        //initialValue: '',
                        rules: [{ message: '请填写文章标题!' }],
                    })(
                        <Input style={{ backgroundColor: '#fff', }} placeholder='请填写文章标题' />
                    )}
                </FormItem> 
                <FormItem style={{borderStyle:'none'}} label="内容">
                    {getFieldDecorator('content', {
                        //initialValue: '',
                        rules: [{ message: '请填写内容!' }],
                    })(
                        <TextArea style={{ backgroundColor: '#fff', }} placeholder='简介编辑'/>
                    )}
                </FormItem>               
                <FormItem style={{width:'100%',left: '50%'}}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            // onClick={() => { router.push('/') }}   
                        >
                    提交审核
                        </Button>
                </FormItem>
             
                      
            </Form>
        );
    }
}
const Article = Form.create()(ArticleForm);

export default connect(mapStateToProps, mapDispatchToProps)(Article);
