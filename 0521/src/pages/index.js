import { connect } from 'dva';
import React ,{ Component } from 'react';
import { Spin} from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const namespace='guid'
const mapStateToProps = (state) => {   
    console.log(state)
    //models中定义好的已经取到后台数据的参数
    const  guidurl = state[namespace].guidurl;
    return {
         guidurl ,
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
 class Guid extends Component{
    state = {
        activeSlide: 0,
        activeSlide2: 0
    };
    componentDidMount(){
        //调用接口函数渲染页面this.props.guidUrl();
        console.log(this.props.loading)
    }
    gohome=()=>{
        router.push('/myhome')
    }
    render(){
         const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 2000,
            afterChange: (current) => {
                this.setState({ activeSlide: current })
                console.log(this.state.activeSlide)
                    if(this.state.activeSlide===1){
                        router.push('/myhome')
                      }
                },
            beforeChange: (current, next) => {
                this.setState({ 
                activeSlide2: next,
                })
            // console.log(this.state.activeSlide2)
            },
            appendDots: dots => (   
                <div
                style={{   
                    borderRadius: "10px",
                    position:'absolute',
                    bottom:'0',         
                }}
                >
                <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>    
            )
        };
        return(
            <div style={{position:'relative',}}   >
                <Spin spinning={this.props.loading} />
                <Link to='/myhome' style={{position:'fixed',right:'20px',top:'20px',zIndex:'999'}} >跳过</Link>
                <Slider {...settings} style={{position:'relative',}}>
                {/* {
                    picurl.map((item,index)=>{
                        return(
                            <div style={{backgroundImage:'',width:'100%',height:'100%'}} key={index}/>
                        )
                    })
                } */}
                    <div><img alt='pic' style={{width:'100%',height:'100%'}} src={require("../assets/movie_carousel_1.jpg")}/></div>
                    <div><img alt='pic' style={{width:'100%',height:'100%'}} src={require("../assets/movie_carousel_2.jpg")}/></div>
                    <div onClick={this.gohome}><img alt='pic' style={{width:'100%',height:'100%'}} src={require("../assets/movie_carousel_1.jpg")}/></div>   
                </Slider>
            </div>
           
        )
    }
   
}
export default connect(mapStateToProps, mapDispatchToProps)(Guid);