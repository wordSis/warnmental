// import moment from 'moment';
import React ,{ Component} from 'react';
import { Spin, Button ,Form,Select,Input,Row,Col,Checkbox,Upload ,Icon,message,DatePicker,Modal} from 'antd';
import { connect } from 'dva';
const namespace = 'accessPlatform';
const FormItem = Form.Item;
const { Option } = Select;
const TextArea = Input.TextArea;
const dateFormat = 'YYYY-MM-DD';
// const props = {
//     name: 'file',
//     headers: {},
// };
const mapStateToProps = (state) => {
    const platlist= state[namespace].platlist;
    return {
       platlist,
        // loading: state.loading.models.personal,
        // loading: state.loading.effects['personal/personalList'],
        loading:state.loading.global,
        
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        accessPlatform: (type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile) => {
            dispatch({
                type: `${namespace}/ accessPlatform`,
                payload: type,avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,//入参
            });
        },
    };
};

class AccessPlatForm extends Component {
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
              uid: '-1',
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ],
    }
    //头像
    avatarCancel = () => this.setState({ previewVisible: false });
    handlePreview = file => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    };  
    avatarChange = ({ fileList }) => this.setState({ fileList });


    onChange1=(checkedValues)=> {
        console.log('checked = ', checkedValues);
    }
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
        console.log(img)
    }
    beforeUpload=(file)=> {
        const isJPG = file.type === 'image/jpeg';
        const isJPEG = file.type === 'image/jpeg';
        const isGIF = file.type === 'image/gif';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!(isJPG || isJPEG || isGIF || isPNG)) {
            message.error(
               '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~',
            );
          } else if (!isLt2M) {
            message.error(
              '超过2M限制，不允许上传~',
            );
          }
         
          return isJPG && isJPEG && isGIF && isPNG && isLt2M;
    };
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
                //this.props.accessPlatform(values)
            }
        });
    }

    componentDidMount() {
        // //数据请求成功后loading消失
      
    }
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };
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
            <div>
                <Spin spinning={this.props.loading} style={{}}/>
                <Form onSubmit={this.handleSubmit} {...formItemLayout} >
                    <h3  style={{textAlign:'center'}}>平台入驻</h3>
                    <Form.Item
                    label="请选择用户类别"
                    >
                        {getFieldDecorator('请选择用户类别', {
                                //initialValue: '',
                            // rules: [{  message: 'Please input your ud!' }],
                            })(
                            <Select >
                                <Option value="医生">医生</Option>
                                <Option value="心理咨询师">心理咨询师</Option>
                            </Select>
                        )}  
                    </Form.Item>
                    <FormItem label="头像">
                        {getFieldDecorator('头像', {
                            //initialValue: '',
                            // rules: [{  message: 'Please input your ud!' }],
                            })(
                            <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/" // 这个是接口请求，实际开发中，要替换成你自己的业务接口
                                    data={file => ({ // data里存放的是接口的请求参数
                                    //   param1: myParam1,
                                    //   param2: myParam2,
                                    photoCotent: file, // file 是当前正在上传的图片
                                    photoWidth: file.height, // 通过  handleBeforeUpload 获取 图片的宽高
                                    photoHeight: file.width,
                                    })}
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.avatarChange}
                                >
                                    {this.state.fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.avatarCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                                </Modal>
                            </div>
                        )}
                    </FormItem> 
                    <FormItem style={{borderStyle:'none'}} label='姓名'>
                        {getFieldDecorator('姓名', {
                            initialValue:this.props.platlist.name,
                            rules: [{ message: '请输入患者姓名!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入患者姓名' />
                        )}
                    </FormItem>
                    <Form.Item
                    label="性别"
                    >
                        {getFieldDecorator('性别', {
                                //initialValue: '',
                                rules: [{  message: 'Please input your phone!' }],
                            })(
                                <Select >
                                    <Option value="男">男</Option>
                                    <Option value="女">女</Option>
                                </Select>
                            )}
                    
                    </Form.Item>
                    <FormItem label="出生日期" >
                        {getFieldDecorator('出生日期', {
                                //initialValue: '',
                                //rules: [{  message: 'Please input your date!' }],
                            })(
                                <DatePicker format={dateFormat} placeholder="Select date"/>
                            )}
                    </FormItem>
                    <FormItem label='联系方式'>
                            {getFieldDecorator('联系方式', {
                                //initialValue: '',
                                rules: [{  message: 'Please input your phone!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }} placeholder='请输入患者身份证号'/>
                            )}
                    </FormItem> 
                    <FormItem label='身份证号'>
                            {getFieldDecorator('身份证号', {
                                //initialValue: '',
                                rules: [{  message: 'Please input your id!' }],
                            })(
                                <Input style={{ backgroundColor: '#fff', }} placeholder='请输入患者身份证号'/>
                            )}
                    </FormItem> 
                    <FormItem label='医院'>
                        {getFieldDecorator('医院', {
                            //initialValue: '',
                            rules: [{  message: 'Please input your id!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入医院'/>
                        )}
                    </FormItem> 
                    <FormItem label='科室'>
                        {getFieldDecorator('科室', {
                            //initialValue: '',
                            rules: [{  message: 'Please input your id!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入科室'/>
                        )}
                    </FormItem> 
                    <FormItem label='科室电话'>
                        {getFieldDecorator('科室电话', {
                            //initialValue: '',
                            rules: [{  message: 'Please input your id!' }],
                        })(
                            <Input style={{ backgroundColor: '#fff', }} placeholder='请输入患者科室电话'/>
                        )}
                    </FormItem> 
                    <FormItem label="执业证">
                        {getFieldDecorator('执业证', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                                //initialValue: '',
                            // rules: [{  message: 'Please input your ud!' }],
                            })(
                            <Upload 
                                listType="picture-card"
                                beforeUpload={this.beforeUpload}
                                onChange={this.handleChange} 
                            >
                            {imageUrl ? <img src={imageUrl} alt="证书" /> : uploadButton}
                            </Upload>
                        )}
                    </FormItem> 
                    <FormItem label="职称证"  extra="至少一张">
                        {getFieldDecorator('职称证', {
                                //initialValue: '',
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            // rules: [{type:'object', message: '至少一张' }],
                            })(
                            <Upload 
                                listType="picture-card"
                                beforeUpload={this.beforeUpload}
                                onChange={this.handleChange} 
                                style={{position:'relative'}}
                            >
                                {imageUrl ? <img src={imageUrl} alt="证书" /> : uploadButton}
                            {/* <span style={{position:'absolute',width:'100px',bottom:'-30px',left:'-10px'}}> 至少一张</span> */}
                            </Upload>
                        )}
                    </FormItem> 
                    <FormItem label='擅长疾病'>  
                        {getFieldDecorator('擅长疾病', {
                            //initialValue: '',
                        // rules: [{  message: 'Please input your addres!' }],
                        })(
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange1}>
                                <Row>
                                    <Col span={4}><Checkbox value="抑郁症">抑郁症</Checkbox></Col>
                                    <Col span={4}><Checkbox value="抑症">抑郁症</Checkbox></Col>
                                    <Col span={4}><Checkbox value="郁症">抑郁症</Checkbox></Col>
                                    <Col span={4}><Checkbox value="抑郁">抑郁症</Checkbox></Col>
                                    <Col span={4}><Checkbox value="B">B</Checkbox></Col>
                                    <Col span={4}><Checkbox value="C">C</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        )}  
                    </FormItem> 
                    <FormItem label='医生简介'>  
                        {getFieldDecorator('医生简介图片', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            //initialValue: '',
                        // rules: [{  message: 'Please input your addres!' }],
                        })(
                            <Upload 
                                listType="picture-card"
                                //className="avatar-uploader"
                                beforeUpload={this.beforeUpload}
                                onChange={this.handleChange} 
                                >
                                {imageUrl ? <img src={imageUrl} alt="证书" /> : uploadButton}
                            </Upload>   
                        )}  
                    </FormItem> 
                    <FormItem style={{width:'100%',left: '25%'}}>
                        {getFieldDecorator('医生简介内容', {
                            initialValue: '',
                            // rules: [{  message: 'Please input your addres!' }],
                            })(
                                <TextArea style={{ backgroundColor: '#fff', }} placeholder='简介编辑'/> 
                        )} 
                    </FormItem >
                    <span style={{textAlign:'center',display: 'inherit'}}>等待审核（1-7工作日，节假日顺延）</span>
                    <FormItem label='' style={{width:'100%',left: '50%'}}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox ><a href="javascript:;">服务协议</a></Checkbox>
                        )}
                    </FormItem>
                    <FormItem style={{width:'100%',left: '50%'}}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        // onClick={() => { router.push('/') }}   
                    >
                        完成
                            </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const accessPlat = Form.create()(AccessPlatForm);
export default connect(mapStateToProps, mapDispatchToProps)(accessPlat);