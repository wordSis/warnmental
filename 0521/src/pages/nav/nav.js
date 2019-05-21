//import { connect } from 'dva';
import router from 'umi/router'
import Login from '../login/login'
import Register from '../regist/register'
import React,{Component, Fragment} from 'react';
import { Menu, Icon , Badge ,Avatar,Col,Popover} from 'antd';
import Link from 'umi/link';
// import LoadingCom from '../loading/loading';
// import Https from '../utils/https'
// import Urls from '../utils/urls'
//const  SubMenu = Menu.SubMenu;

//const namespace = '';

// const mapStateToProps = (state) => {
//     return {

//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         nav: (item) => {
//             dispatch({
//                 type: `${namespace}/nav`,
//                 payload: item,
//             });
//         },
//     };
// };

export default class Nav extends Component{
    state={
        login:false,
        register:false,
        isLoading: false,
        current: null,
        code: '',
    }  
   
    //handleClick = ( item,e) => {
       // console.log('click ',  item.key, );
        // if(item.key=='login'){
        //     console.log(1)
        //     this.showLoginModal()
        // }else if(item.key=='register'){
        //     this.showRegisterModal();
        // }else if(item.key=='logout'){
        //     this.handleLogout()
        // }
        // this.setState({
        //   current: e.key,
        // });
    //}
    handleClick= ( item,e) => {
        //console.log('click ',  item.key, );
        if(item.key=='login'){
            this.showLoginModal()
        }else if(item.key=='register'){
            this.showRegisterModal();
        }else if(item.key=='logout'){
            this.handleLogout()
        }
        // this.setState({
        //   current: e.key,
        // });
    }
    componentDidMount(){

    } 
    // getUser=(code)=> {
    //     this.setState({
    //         isLoading: true,
    //     });
    //     Https
    //         .post(
    //         Urls.getUser,
    //         {
    //             code,
    //         },
    //         { withCredentials: true },
    //         )
    //         .then(res => {
    //         this.setState({
    //             isLoading: false,
    //         });
    //         if (res.status === 200 && res.data.code === 0) {
    //         //   this.props.loginSuccess(res.data);
    //             let userInfo = {
    //                 _id: res.data.data._id,
    //                 name: res.data.data.name,
    //                 avatar: res.data.data.avatar,
    //             };
    //             window.sessionStorage.userInfo = JSON.stringify(userInfo);
    //             message.success(res.data.message, 1);
    //             this.handleLoginCancel();
    //             // 跳转到之前授权前的页面
    //             let preventHistory = JSON.parse(window.sessionStorage.preventHistory);
    //             if (preventHistory) {
    //                 this.props.history.push({
    //                 pathname: preventHistory.pathname,
    //                 search: preventHistory.search,
    //                 });
    //             }
    //         } else {
    //         //   this.props.loginFailure(res.data.message);
    //             message.error(res.data.message, 1);
    //         }
    //     })
    //     .catch(err => {
    //     this.setState({
    //         isLoading: false,
    //     });
    //     console.log(err);
    //     });
    // }
    showLoginModal=()=>{
        this.setState({
          login: true,
        });
    }
    showRegisterModal=()=>{
        this.setState({
            register: true,
        });
    }
    handleLoginCancel=()=>{
        this.setState({
            login: false,
        });
    }
    handleRegisterCancel=()=>{
        this.setState({
            register: false,
        });
    }
    handleLogout = (e) => {
        this.setState({
            current: e.key,
        });
        router.push('../myhome')
        window.sessionStorage.userInfo = '';
    };
     
    render(){
        
       const content = (
            <div  style={{cursor:'pointer'}}>
            {/* onClick={this.handleLogout} */}
             退出
            </div>
        ); 
        let userInfo = '';
        // let userInfo = {
        //     _id: 1,
        //     name:'name',  
        // };
        if (window.sessionStorage.userInfo) {
            userInfo = JSON.parse(window.sessionStorage.userInfo);
        }
        const Com = (           
            <Popover placement="bottom"  content={content} 
                 style={{
                    float:'right',
                    lineHeight: '64px',
                    display: 'inline-block',
                    }} 
                    trigger="hover" >
                <div style={{textAlign:'center'}}>
                    <Avatar
                        size="large"
                        icon="user"
                        src={userInfo.avatar}
                        style={{}}
                    />
                    {userInfo.name}
                </div>
            </Popover>
        )

        return(
            <Fragment>
                <Menu theme="light"  mode="horizontal"   
                 style={{lineHeight:'64px',height:'64px',}}
                //  onClick={this.handleClick}
                 selectedKeys={[this.state.current]}
                 >
                {/* defaultSelectedKeys={['1']} */}
                    <Menu.Item key="myhone">
                        <Link to="/myhome">
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="healthInquiry">
                        <Link to="/healthInquiry/healthInquiry">
                            <Icon type="pie-chart" />
                            <span>健康咨询</span>
                        </Link>
                    </Menu.Item> 
                    <Menu.Item key="homeMedicalScale">
                        <Link to="/homeMedicalScale">
                            <Icon type="pie-chart" />
                            <span>医用量表</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="myinquiry">
                        <Link to="/myinquiry/myinquiry">
                            <Icon type="pie-chart" />
                            <span>我的咨询</span>
                        </Link>
                    </Menu.Item> 
                    <Menu.Item key="personal">
                        <Link to="/personal/personal">
                            <Icon type="pie-chart" />
                            <span>个人中心</span>
                        </Link>
                    </Menu.Item> 
                    {/* <Menu.Item>
                        <Input.Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{  paddingTop: '15px'}}
                        />
                    </Menu.Item>  */}
                   
                     {userInfo?(
                        <Menu.Item key='logout'>
                            {Com}
                        </Menu.Item>
                    ):( 
                        <Menu 
                        onClick={this.handleClick}
                        style={{lineHeight:'64px',height:'64px',float: 'right',}}
                        > 
                                <Menu.Item
                                    style={{ margin:'0' ,float: 'right'}}
                                   // onClick={this.showLoginModal}
                                    key='login'
                                >
                                    <Icon type="login" /> 登录
                                </Menu.Item>
                                <Menu.Item
                                    style={{ margin:'0',float: 'right'}}
                                   // onClick={this.showRegisterModal}
                                    key='register'
                                >
                                    <Icon type="login" /> 注册
                                </Menu.Item> 
                        </Menu>
                    )}
                   
                     
                    <Menu.Item key="message" style={{ float: 'right' }}>
                        <Link to="/message/message">
                            <Badge count={1}><Icon type="bell" /></Badge>
                        </Link>
                    </Menu.Item>  
                </Menu>
                    {/* {this.state.isLoading ? (
                        <div style={{ marginTop: 100 }}>
                            <LoadingCom />
                        </div>
                        ) : (
                        ''
                        )
                    } */}
                    
                    <Login
                        visible={this.state.login}
                        handleCancel={this.handleLoginCancel}
                    />
                    <Register
                        visible={this.state.register}
                        handleCancel={this.handleRegisterCancel}
                    />

                    {/* <Menu.Item key="9">
                        <Link to="/orderdate">
                            <Icon type="pie-chart" />
                            <span>testdate</span>
                        </Link>
                    </Menu.Item> */}
            </Fragment>   
        
        )
    }
}
//export default connect(mapStateToProps, mapDispatchToProps)(Nav);