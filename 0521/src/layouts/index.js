import Nav from '../pages/nav/nav'
import Banner from '../pages/Banner'
import { Layout } from 'antd';
import { connect } from 'dva';
const { Header,  Content } = Layout;
const namespace = 'myhome';
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getbanner: () => {
            dispatch({
                type: `${namespace}/getbanner`,
                payload: '',
            });
        },
    };
};

function BasicLayout(props) {   
    //进来时判断，不是第一次就直接跳过引导页进入首页,否则进入引导页
    if (props.location.pathname === '/'  ) {
        return(
            <div style={{ width: '100%', height: '100%',  }}>
            {/* backgroundImage: "url(" + bg + ")" */}
                {props.children}
            </div>
    )}     
        return (   
            <Layout >
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' ,background:'#fff'}}>
                    <div className="logo" style={{ height: '66px',lineHeight:'66px',background:'rgba(255,255,255,.2)',
        float: 'left',textAlign:'center'}}>logo新精警</div>
                <Nav />
                </Header>
                <Content style={{background:'#fff'}}>
                    <div style={{ background: '#fff', marginTop:'67px' ,overflowX:'hidden'}}>   
                        <Banner />
                        {props.children}
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>mentalWarning ©2018 Created </Footer> */}
            </Layout>
        );
    }

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
