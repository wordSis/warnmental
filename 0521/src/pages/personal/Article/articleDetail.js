import { connect } from 'dva';
import React, { Component } from 'react';
import { Modal, Button,Form,InputNumber ,Radio,message,Icon,Input,Upload,Typography ,Rate} from 'antd';
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;
const FormItem = Form.Item;

const { Paragraph } = Typography;
const namespace = 'personal';
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
        articleDetail: (pic,is,money,title,con) => {
            dispatch({
                type: `${namespace}/articleDetail`,
                payload: pic,is,money,title,con,
            });
        },
    };
};
class ArticleDetailForm extends Component{   
    state={
        visible: false,
        content:`内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容111
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容`,
        pay:true,
        like:false,
        color:'#ccc'
    }
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({ 
            visible: false 
        });
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
                this.setState({ 
                    visible: false 
                });
            }
        });
    }
    rate=()=>{  
        this.setState({
            like:!this.state.like,
        })     
        if(this.state.like===false){
            //取消收藏接口
            this.state.color='#ccc'
        }else{
              //收藏接口
            this.state.color='yellow'
        }
    }
    componentDidMount(){
        //付费？this.state.content.lengh==200：this.state.content.lengh
        // this.setState({
        //     content:this.state.content.substring(0,200),
        // })
        this.rate()
    }
   
    render(){
        const uploadButton = (
            <div >
              <Icon type={this.state.loading ? 'loading' : 'plus'} />             
            </div>
          );
        const imageUrl = this.state.imageUrl;
        const formItemLayout = {
            labelCol: {
              xs: { span:3 },
              sm: { span: 3 },
            },
            wrapperCol: {
              xs: { span: 22 },
              sm: { span: 12},
            },
          };
        const { getFieldDecorator } = this.props.form;
        const component =(
            <Form  {...formItemLayout} >
                 <FormItem >
                    {getFieldDecorator('pic', {
                            initialValue: '',
                        // rules: [{  message: 'Please input your ud!' }],
                        })(
                        <Upload 
                            // {...props}
                            //name="avatar"
                            listType="picture-card"
                            //className="avatar-uploader"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}   
                        >
                        {imageUrl ? <img src={imageUrl} alt="pic" /> : uploadButton}
                        </Upload>
                    )}
                </FormItem> 
                <FormItem  label='收费' >
                    {getFieldDecorator('收费', {
                        initialValue: '',
                    })(
                        <RadioGroup name="radiogroup" >
                            <Radio value='是'>是</Radio>
                            <Radio value='否'>否</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
               
                <FormItem  label='收费金额' >
                    {getFieldDecorator('收费金额', {
                        initialValue: '',
                       // rules: [{ message: '请填写收费金额!' }],
                    })(
                        <InputNumber style={{ backgroundColor: '#fff',borderStyle:'none' }} placeholder='请输入收费金额' />
                    )}
                </FormItem>
                <FormItem  label='文章标题' >
                    {getFieldDecorator('文章标题', {
                        initialValue: '标题',
                       // rules: [{ message: '请填写文章标题!' }],
                    })(
                        <Input style={{ backgroundColor: '#fff',borderStyle:'none' }} placeholder='请输入患者姓名' />
                    )}
                </FormItem>
                <FormItem  label='内容'>
                    {getFieldDecorator('医生简介内容', {
                        initialValue: '',
                        // rules: [{  message: 'Please input your addres!' }],
                        })(
                            <TextArea style={{ backgroundColor: '#fff', }} placeholder='简介编辑'/> 
                    )} 
                </FormItem >
            </Form>
        )
        return(
            // 后台获取对应文章详情
            <div style={{padding:'5px 300px'}}>
                <div style={{position:'relative'}}>
                    <h3 style={{lineHeight:'30px',height:'30px',textAlign:'center'}}>标题</h3>
                    {/* <Rate count={1} onChange={()=>this.rate} style={{position:'absolute',right:'20px',top:0}}/> */}
                    <Icon 
                    type="star" 
                    theme="filled" 
                    onClick={()=>this.rate(this)} 
                    style={{position:'absolute',right:'20px',top:0,color:this.state.color}}
                    />
                </div>
                <div  style={{padding:'5px 0px'}}>
                    <div style={{lineHeight:'30px',height:'30px'}}>
                        <span style={{float:'left'}}>时间：</span><span style={{float:'left'}}>2019-2-19</span> <span style={{float:'left'}}>9:26:38</span> 
                        <span style={{border:'1px solid #ccc',float:'right',cursor:'pointer',marginLeft:'15px'}} onClick={this.showModal}>编辑</span><span style={{float:'right'}}>作者：xxxx</span>
                    </div>
                    <img  alt='' style={{width:'800px',height:'300px',textAlign:'center'}} src={require("../../../assets/movie_carousel_2.jpg")}/>                   
                    {
                        this.state.content.length==200 ?  <Paragraph >{this.state.content}...</Paragraph>: <Paragraph >{this.state.content}</Paragraph>
                    }
                    <div>
                        {
                            this.state.pay ? (<Button onClick={this.pay}>支付继续观看</Button>) :' '
                        }
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={
                        <Button key="submit" type="primary" style={{textAlign:'center'}} onClick={this.handleSubmit}>
                            提交审核
                        </Button>
                    }
                >
                    {component}
                </Modal>
            </div>
        )
    }
}

const ArticleDetail = Form.create()(ArticleDetailForm);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);

