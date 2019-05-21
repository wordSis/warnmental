import style from './style.css';
import React ,{ Component } from 'react';
import { Tabs,} from 'antd';
import router from 'umi/router'
const TabPane = Tabs.TabPane;
// const data = [
//     {
//         id:0,
//         title: ' Title 1',
//     },
//     {
//         id:1,
//         title: ' Title 2',
//     },
  
//   ];
export default class SpirtualEncuclopedia extends Component {
    state={
        data:[
            {
                title: ' Title 1',
            },
            {
                title: ' Title 2',
            }, 
        ]
    }

    componentDidMount(){
        //交互 获取列表
    }
    getFreeArticleDetail=(index)=>{
        console.log(index)
        router.push('./freeArticle')

    }
    getPayArticleDetail=(index)=>{
        console.log(index)
        router.push('./payArticle')
    }
    render() {
      return (
        <div style={{padding:'20px 150px'}} className={style.cardcontainer}>
            <Tabs type="card" >
                <TabPane tab="收费" key="1">
                    {/* <List   
                        itemLayout="vertical"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item  
                            onClick={this.getArticleDetail(data.length)}
                            style={{width:'50%',float:'left',paddingRight:'200px',borderBottom:'1px solid #ccc'}}>
                            <List.Item.Meta
                             
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="">{item.title}</a>}
                            description="描述"
                            />
                                <div style={{float:'right'}}>
                                    <span>收费</span> <span>阅读：</span><span>1234</span>
                                </div>
                        </List.Item>
                        )}
                    />    */}
                   
                    <ul>        
                        {
                            this.state.data.map((item,index)=>{
                                return(
                                    <li style={{listStyle:'none',width:'49%',height:'100px',float:'left',paddingRight:'100px',}} key={index} 
                                        onClick={()=>this.getPayArticleDetail(index,this)}
                                    >
                                        <div style={{height:'80px'}}>
                                            <img alt='' style={{float:'left'}} />
                                            <div style={{float:'left'}}>
                                                <h6>{item.title}</h6>
                                                <p>文字</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{float:'right'}}>1234</span><span style={{float:'right'}}>阅读：</span><span  style={{float:'right'}}>收费</span> 
                                        </div>
                                    </li>
                                )
                            })
                        }        
                    </ul>
                          
                </TabPane>
                <TabPane tab="免费" key="2">
                    {/* <List   
                        itemLayout="vertical"
                        dataSource={this.state.data}
                        renderItem={item => (
                        <List.Item  style={{width:'50%',float:'left',paddingRight:'200px',borderBottom:0, }}>
                            <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="">{item.title}</a>}
                            description="描述"
                            />
                                <div style={{float:'right'}}>
                                    <span>阅读：</span><span>1234</span>
                                </div>
                        </List.Item>
                        )}
                    />    */}
                    <ul>        
                        {
                            this.state.data.map((item,index)=>{
                                return(
                                    <li style={{listStyle:'none',width:'49%',height:'100px',float:'left',paddingRight:'100px',}} key={index} 
                                        onClick={()=>this.getFreeArticleDetail(index,this)}
                                    >
                                        <div style={{height:'80px'}}>
                                            <img alt='' style={{float:'left'}} />
                                            <div style={{float:'left'}}>
                                                <h6>{item.title}</h6>
                                                <p>文字</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{float:'right'}}>1234</span><span style={{float:'right'}}>阅读：</span>
                                        </div>
                                    </li>
                                )
                            })
                        }        
                    </ul>
                </TabPane>
            </Tabs>
           
        </div>
      )
    }
}