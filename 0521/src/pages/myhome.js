import {connect} from 'dva';
import styles from './index.css';
import React ,{ Component } from 'react';
import { Icon ,Modal,Divider } from 'antd';
import Link from 'umi/link';
import MedicalScale from './medicalScale/medicalScale';
import HomeHealthInquiry from './homeHealthInquiry';
const confirm = Modal.confirm;
const namespace='myhome'

const mapStateToProps = (state) => {   
 // console.log(state)
  //models中定义好的已经取到后台数据的参数
 // const  guidurl = state[namespace].guidurl;
  return {
     //  guidurl ,
     // loading: state.loading.models.guid,
    // loading: state.loading.effects['guid/guidurl'],
      loading:state.loading.global,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      //  guidUrl: (传的参数) => {
      //     dispatch({
      //         type: `${namespace}/ guidUrl`,
      //         payload: 传的参数,
      //     });
      // },
    
  };  
};
class Home extends Component {
    render() {
      return ( 
        <div style={{padding: '0 150px',}}>  
          {/* 轮播          */}
            {/* <Carousel autoplay dots >
              <div><img src={require("../assets/movie_carousel_1.jpg")}/></div>
              <div><img src={require("../assets/movie_carousel_2.jpg")}/></div>
              <div><img src={require("../assets/movie_carousel_1.jpg")}/></div>
              <div><img src={require("../assets/movie_carousel_2.jpg")}/></div>
            </Carousel> */}
            {/* 入驻平台 */}
            <section style={{position:'relative',display:'flex',height:'200px',padding: '30px 0', }} className={styles.f20}>
              <div style={{flex:1,margin:'auto'}} className={styles.fl} >
                <Link to="/mentalWarn/mentalDescribe" >
                  <div > 
                      <Icon type="pie-chart" />
                      <span >图文咨询</span>  
                  </div>
                </Link>
              </div>
              <div style={{flex:1,margin:'auto'}} className={styles.fl} >
                <div>
                  <Link to="/findDoctor"  >
                    <Icon type="pie-chart" />
                    <span>电话咨询</span>
                  </Link>
                </div>
              </div>
              <div  className={styles.fl} style={{flex:1,margin:'auto'}} >
                <Link  to="/accessPlatform/accessPlatform"> 
                  <div   style={{border:'1px solid #ccc',textAlign:'center',width:'100px',height:'100px',lineHeight:'100px',borderRadius:'50%',}}>                    
                    <span >入驻平台</span >
                    {/* <p style={{display:'block',}}>语音采集</p> */}
                    {/* <p style={{display:'block',}}>采集</p> */}
                  </div>
                </Link>
              </div>
              <div style={{flex:1,margin:'auto'}} className={styles.fl} >
                <div>
                  <Link to="/index" >
                    <Icon type="pie-chart" />
                    <span>视频咨询</span>
                  </Link>
                </div>
              </div>
              <div style={{flex:1,margin:'auto'}} className={styles.fl} >  
                <div>
                  <Link to="/psychologicalTest/psychologicalTestList" >
                    <Icon type="pie-chart" />
                    <span>预约咨询</span>
                  </Link>
                </div>
              </div>
            </section>
            {/* 表 */}
            <div style={{height:'280px',overflow:'hidden'}}>
              <div style={{height: '40px',lineHeight:'40px'}}> 
                  <div className={styles.fl}>
                      <Divider type="vertical" /><span>医用量表</span>
                  </div>
                  <div  className={styles.fr}>
                      <Link to="/psychologicalTest/psychologicalTestList">
                          <span>更多</span>
                          <Icon type="right" /> 
                      </Link>
                  </div>
              </div> 
              <MedicalScale></MedicalScale>
            </div>
            {/* 趣味测试 */}
            <div  style={{height:'280px',overflow:'hidden'}}>
              <div style={{height: '40px',lineHeight:'40px'}}> 
                  <div className={styles.fl}>
                      <Divider type="vertical" /><span>趣味测试</span>
                  </div>
                  <div  className={styles.fr}>
                      <Link to="/psychologicalTest/test">
                          <span>更多</span>
                          <Icon type="right" /> 
                      </Link>
                  </div>
              </div> 
              <MedicalScale></MedicalScale>
            </div>
              {/* 健康咨询 */}
            <div  style={{height:'280px',overflow:'hidden'}}>
              <div style={{height: '40px',lineHeight:'40px'}}> 
                  <div className={styles.fl}>
                      <Divider type="vertical" /><span>健康咨询</span>
                  </div>
                  <div  className={styles.fr}>
                      <Link to="/healthInquiry">
                          <span>更多</span>
                          <Icon type="right" /> 
                      </Link>
                  </div>
              </div> 
              <HomeHealthInquiry></HomeHealthInquiry>
                {/* <div  className={styles.fr} style={{position:'absolute',right:0,bottom:'20px'}}>
                    <span>
                      <Link to="/">
                            <span>阅读：</span>
                        </Link>
                    </span><span>1234</span>
                </div>  */}
            </div>
            
        </div>
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Home);

  