import {connect} from 'dva'
import { List, Avatar } from 'antd';
import React, { Component } from 'react';
const namespace='myhome'
const data = [
  {
    title: ' 医用量表标题',
  },
  {
    title: ' 医用量表标题2',
  },
  {
    title: ' 医用量表标题3',
  },
  {
    title: ' 医用量表标题4',
  },
  {
    title: ' 医用量表标题3',
  },
  {
    title: ' 医用量表标题4',
  },
];
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
 class MedicalScale extends Component {
    render(){
        return(
            <div >  
                <List   
                    itemLayout="vertical"
                    dataSource={data}
                    //dataSource={this.props.medicallist}
                    renderItem={item => (
                    <List.Item  style={{width:'50%',float:'left',paddingRight:'200px',borderBottom:'1px solid #ccc'}}>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="">{item.title}</a>}
                        description="描述"
                        />
                        <div>
                            <span>参与：</span><span>1234</span>
                        </div>
                    </List.Item>
                    )}
                />          
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MedicalScale);