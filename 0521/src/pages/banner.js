import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'dva';
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
        getbannerdetail:()=>{
            dispatch({
                type: `${namespace}/getbannerdetail`,
                payload: '',
            });
        }
    };
};

class Banner extends  React.Component{
  
     render(){    
        const settings = {
            dots: true,
            //infinite: true,
            speed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 5000,
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
            ),   
        }
        return (   
            <Slider {...settings} style={{position:'relative',}}>
            {/* {
                picurl.map((item,index)=>{
                    return(
                        <div style={{backgroundImage:'',width:'100%',height:'100%'}} key={index}/>
                    )
                })
            }  */}
                <div><img alt='pic' style={{width:'100%',height:'250px'}} src={require("../assets/movie_carousel_1.jpg")}/></div>
                <div><img alt='pic' style={{width:'100%',height:'250px'}} src={require("../assets/movie_carousel_2.jpg")}/></div>
                <div><img alt='pic' style={{width:'100%',height:'250px'}} src={require("../assets/movie_carousel_1.jpg")}/></div>
            </Slider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
