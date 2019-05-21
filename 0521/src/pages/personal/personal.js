 import moment from 'moment';
import { connect } from 'dva';
import SiderBar from './SiderBar'
import React, { Component } from 'react';
import { Form ,Col,Checkbox,Row,Icon,Avatar,Input,Modal,Select,Button,Spin,message,Upload, DatePicker,List,Typography} from 'antd';
const { Paragraph } = Typography;
const FormItem = Form.Item;
const namespace = 'personal';
const { Option } = Select;
const TextArea = Input.TextArea;
const dateFormat = 'YYYY-MM-DD';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';


// const props = {
//     name: 'file',
//     headers: {},
// };
const mapStateToProps = (state) => {   
  //  console.log(state)
    //models中定义好的已经取到后台数据的参数
    const personlist = state[namespace].personlist;
    return {
        personlist ,
       // loading: state.loading.models.personal,
      // loading: state.loading.effects['personal/personalList'],
        loading:state.loading.global,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        personalList: () => {
            dispatch({
                type: `${namespace}/personalList`,
            });
        }, 
        editPersonal:(avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile)=>{
            dispatch({
                type:`${namespace}/editPersonal`,
                payload:avatar,name,sex,date,phone,id,hos,department,departmentphone,pracer,quacer,ill,docprofilepic,docprofile,
            })
        } 
    };  
};

class  PersonalForm extends Component {    
    state={
        visible: false,
        alignleft:'left',
        loading:false,
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
          
        data :[
            {
            title: ' 姓名',
            description:'王xx'
            },
            {
            title: ' 性别',
            description:'男'
            },
            {
            title: ' 出生年月日',
            description:'2019-2-12'
            },
            {
                title: '联系方式',
                description:'12345632456'
            },
            {
                title: ' 身份证号',
                description:'220123141260023'
            },
            {
                title: ' 医院',
                description:'吉大一院'
            },
            {
                title: ' 科室',
                description:'神经科'
            },
            {
                title: ' 科室电话',
                description:'444444(选填)'
            },
            
        
        ],
    }
    //这里调用函数 一进来直接渲染列表
    componentDidMount(){
        //this.props.personalList()
    }
    showModal = () => {
      this.setState({
        visible: true,
      });
      
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    // onChange1=(checkedValues)=> {
    //     console.log('checked = ', checkedValues);
    // }
    //头像
    avatarCancel = () => this.setState({ previewVisible: false });
    handlePreview = file => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }; 
    avatarChange = ({ fileList }) => this.setState({ fileList });
   
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
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
  
    // checkImageWH=(file)=> {
    //   let self = this;
    //   return new Promise(function(resolve, reject) {
    //     let filereader = new FileReader();
    //     filereader.onload = e => {
    //       let src = e.target.result;
    //       const image = new Image();
    //       image.onload = function() {
    //         // 获取图片的宽高，并存放到file对象中
    //         console.log('file width :' + this.width);
    //         console.log('file height :' + this.height);
    //         file.width = this.width;
    //         file.height = this.height;
    //         resolve();
    //       };
    //       image.onerror = reject;
    //       image.src = src;
    //     };
    //     filereader.readAsDataURL(file);
    //   });
    // }
    
    handleChange = info => {
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
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
               // birth = moment(values).format('YYYY-MM-DD')
              // this.props.editPersonal(values)
                this.setState({
                    visible: false,
                });
            }
        });
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
              xs: { span: 21 },
              sm: { span: 21},
            },
        };
        const { getFieldDecorator } = this.props.form;
        const component =(
            <Form  {...formItemLayout} labelAlign={this.state.alignleft}>
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
                        initialValue:this.props.personlist.name,
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
                <FormItem style={{}}>
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
                //  loading={this.props.loading} 
            <div style={{padding:'20px 50px',}}>
                <SiderBar ></SiderBar>
                <div style={{float:'left',width:'86%',paddingLeft:'40px'}}>
                    <Spin spinning={this.props.loading} style={{}}/>
                    {/* 后台获取个人信息 */}
                    <div style={{height:'200px'}}>
                        <Avatar 
                        style={{width:'100px',height:'100px',borderRadius:'50%',float:'left'}} 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <div style={{float:'left',margin:'20px 0 0 30px'}}>
                            <div style={{marginBottom:'20px'}}>
                                <span style={{margin:'0 20px 0 0'}}>已通过</span> 
                                <span 
                                style={{border:'1px solid green',borderRadius:'15px',width:'50px',
                                textAlign:'center',color:'green',display:'inline-block'}}>
                                等级</span>   
                            </div>
                            <Icon type="qrcode" />
                        </div>  
                        
                    </div>
                    <div >
                        <div style={{position:'relative',height:'30px'}}>
                            <Button type="primary" onClick={this.showModal} style={{position:'absolute',right:'20px',top:'0',width:'60px',height:'30px'}}>
                                修改
                            </Button> 
                        </div>
                        <div>
                            <List
                                size="large"
                                //rowKey="id"
                                dataSource={this.state.data}   
                                renderItem={item => (
                                    <List.Item >   
                                        <List.Item.Meta
                                        //左侧内容
                                            shape="square" size="large" 
                                            title={<span style={{fontSize:'16px',color:'#000'}}>{item.title}</span>}
                                            style={{width:'10%',margin:0,}}
                                        />
                                                {/* <div style={{width:'60%'}} value={this.props.value}>{item.description}</div>  */}
                                        <div style={{width:'80%',marginTop:'-4px' }} >{item.description}</div>
                                    </List.Item>
                                )} 
                            />
                            <div style={{width:'100%',height:'100px',color:'#000'}}>
                                <div style={{float:'left',width:'50%',fontSize:'16px',}}>
                                    <p>执业证：</p>
                                    <img alt='pic' />
                                </div>
                                <div style={{float:'right',width:'50%',fontSize:'16px',color:'#000'}}>
                                    <p>资格证：</p>
                                    <img alt='pic' />
                                </div>
                            </div> 
                            <div style={{width:'100%'}}>
                                <p><span style={{fontSize:'16px',color:'#000'}}>擅长疾病：</span> 抑郁症 狂躁症 </p>
                            </div> 
                            <div style={{width:'100%'}}>
                                <p style={{textAlign:'center',fontSize:'20px',fontWeight:'bold',color:'#000'}}>医生简介</p>
                                <img alt='pic' style={{textAlign:'center'}}/>
                                <Paragraph>
                                    医生，一般称临床医生。能够用科学或技术的手段来处理人类疾病，预防出生缺陷提高人口素质，治病救人改善病患人类生活质量，并以学习研究医学应用于临床为生的职业。通过定期临床理论考试，技能考核培训，能够熟练掌握必要的临床医学技能和必要的医学理论，如解剖学、病理学、医学遗传学、药物化学、康复医学、影像学、生育保健学、临床法医学等。为病员伤员和家属申请必要的检查项目、履行病情告知义务、为家属患者答疑解惑合理开药、治疗路径方案宣贯、新技术推广应用、疑难病治疗路径分析讨论、下达医嘱、医护养工作细化安排、预后分析、公众教育、护理示教、康复项目选定与体验、出院康复教育、学术讨论、执行卫生防疫、计生等法律政治责任、承担部分课题研究等工作，履行病情如实告知、重症救治、加强学习控制医源性继发损害、巡视纠正医助护理违章作业暴力作业等法律责任。执行《医疗卫生管理条例》等法律法规，按照行业规范为病员伤员申请必要的医学检查，采取合理必要的治疗措施，实施救死扶伤，取得执业资格。医生，古代称大夫或郎中。现在“大夫”一词在北方人中也常用。在欧美医生普遍被称为“Physician”，只有外科医生被称呼为“Surgeon”。自中世纪后人们普遍认为“内科学”=“医学”=“内科医生”=“医生Physician”。外科医生的法语称呼为：Decin(Medusan)，德语是：Arzt(arutsuto)。但在英联邦英国外科医生，今天还以“密司脱”称呼。
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    <Modal
                        visible={this.state.visible}
                        //onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        width='800px'
                        maskClosable={true}
                        centered
                        footer={
                            <Button key="submit" type="primary"  onClick={this.handleSubmit}>
                             完成
                            </Button>
                          }
                    >       
                        {component}
                    </Modal>
                </div>   
            </div>
        )
    }
}
const Personal = Form.create()(PersonalForm);
export default connect(mapStateToProps, mapDispatchToProps)(Personal);

