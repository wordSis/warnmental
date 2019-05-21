import {connect} from 'dva'
import SiderBar from './SiderBar'
import { Tabs,List,Avatar ,Icon} from 'antd';
import React, { Component } from 'react';
const TabPane = Tabs.TabPane;
const data = [
    {
        title: ' 标题',
      }, 
  ];
 
function callback(key) {
  console.log(key);
}
const namespace = 'personal'
const mapStateToProps = (state) => {   
    console.log(state)
    //models中定义好的已经取到后台数据的参数
    const personallist = state[namespace].personallist;
    return {

    // loading: state.loading.models.personal,
    // loading: state.loading.effects['personal/personalList'],
        loading:state.loading.global,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        mycollection: (name,sex,date,phone,id,hos,keshi,keshiphone) => {
            dispatch({
                type: `${namespace}/personalList`,
                payload: name,sex,date,phone,id,hos,keshi,keshiphone,
            });
        },  
    };  
};
class MyCollection extends Component{
    render(){
        return(
        <div  style={{padding:'20px 50px',}}>
            <SiderBar></SiderBar>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="精神百科" key="1">
                    {/* 我的收藏列表由后台返回 */}
                    <div style={{height:'230px'}}>  
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.title}
                                description="简短描述简短描述简短描述"
                                style={{float:'left'}}
                                />
                                <div style={{float:'right',}}>
                                    <div>
                                        <Icon type="star" />
                                    </div>
                                    {/* <div>
                                        <span>参与：</span><span>1234</span>
                                    </div> */}
                                </div>
                            </List.Item>
                            )}
                        /> 
                    </div>
                </TabPane>          
                <TabPane tab="科普视频" key="2">
                     {/* 我的收藏列表由后台返回 */}
                    <div>
                        <video src="movie.ogg" style={{border:'1px solid #ccc'}} poster='' controls='controls'>
                            您的浏览器不支持 video 标签。
                        </video>
                    </div>
                </TabPane>
                
            </Tabs>
          </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCollection);