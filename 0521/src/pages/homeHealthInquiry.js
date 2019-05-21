import {connect} from 'dva'
import { List, Avatar } from 'antd';
import React, { Component } from 'react';
// import Link from 'umi/link';
const data = [
  {
    title: ' Title 1',
  },
  {
    title: ' Title 2',
  },

];
const namespace='myhome'
const mapStateToProps = (state) => {   
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
 class HomeHealthInquiry extends Component {
    render(){
        return(
          <div >  
            <List   
                itemLayout="vertical"
                dataSource={data}
                //dataSource={this.props.healthinquirylist}
                renderItem={item => (
                <List.Item  style={{width:'50%',float:'left',paddingRight:'200px', borderBottom:'1px solid #ccc'}}>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="">{item.title}</a>}
                    description="描述"
                    />                  
                      <span>阅读：</span><span>1234</span>                  
                </List.Item>
                )}
            />          
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHealthInquiry);