import SiderBar from '../SiderBar'
import { List,Avatar} from 'antd';
import React, { Component } from 'react';
import router from 'umi/router';
// const data = [
//     {
//       title: ' 标题',
//       num:'1234',
//       type:'免费',
//       date:'2019-02-23',
//       time:'10:00',
//       des:'描述内容描述容描述内容内容描述内容'
//     }, 
//     {
//         title: ' 标题222222',
//         num:'124',
//         type:'免费',
//         date:'2019-02-23',
//         time:'10:00',
//         des:'neirong'
//       }, 
//   ];
  

export default class MyArticle extends Component{
  state={
    data:[
      {
        title: ' 标题',
        num:'1234',
        type:'免费',
        date:'2019-02-23',
        time:'10:00',
        des:'描述内容描述容描述内容内容描述内容'
      }, 
      {
          title: ' 标题222222',
          num:'124',
          type:'付费',
          date:'2019-02-23',
          time:'10:00',
          des:'neirong'
        }, 
    ]
  } 
  getPayArticleDetail=(index)=>{
    console.log(index)   
    router.push('/personal/Article/articleDetail')
  }
    render(){
        return(
          <div  style={{padding:'20px 50px'}}>
            <SiderBar></SiderBar>
            <h3 style={{textAlign:'center'}}>我的文章</h3>
            {/* <Link to='personal/addArticle'>
                <Button type="primary">添加文章</Button>
            </Link> */}
            <a href='' style={{backgroundColor:'rgba(0, 204, 102, 1)',color:'#fff',width:'100px',height:'30px'}} onClick={() => { router.push('/personal/Article/addArticle') }}>添加文章</a>
            {/* <List   
              itemLayout="vertical"
              dataSource={data}
              renderItem={item => (
              <List.Item  style={{width:'42.5%',float:'left',height:'140px',paddingRight:'60px',borderBottom:0, borderBottom:'1px solid #ccc'}}>
                  <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="">{item.title}</a>}
                  description={item.des}
                  onClick={()=>{ router.push('/personal/Article/articleDetail')}}
                  />
                 <div style={{}}>
                    <span>{item.date}:</span><span>{item.time}</span>
                    <span>{item.type}</span>
                    <span> 阅读：</span><span>{item.num}</span>
                </div>
              </List.Item>
              )}
          />     */}
            <ul style={{width:'100%'}}>        
              {
                this.state.data.map((item,index)=>{
                    return(
                        <li style={{listStyle:'none',width:'43%',height:'100px',float:'left',}} key={index} 
                            onClick={()=>this.getPayArticleDetail(index,this)}
                        >
                            <div style={{height:'80px'}}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt='' style={{float:'left'}} />
                                <div style={{float:'left'}}>
                                    <h6>{item.title}</h6>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                            <div> 
                                <span>{item.date}:</span><span>{item.time}</span>
                                <span>{item.type}</span>
                                <span> 阅读：</span><span>{item.num}</span>
                            </div>
                        </li>
                    )
                })
              }        
            </ul>
          </div>
        )
    }
}
