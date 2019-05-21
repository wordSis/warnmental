import React, { Component } from 'react';
import { Tabs ,Radio} from 'antd';
const TabPane = Tabs.TabPane;
 let title ;
 let price;
const data = [
    [
      title= ' 标题',
      price='￥22',
    ], 
    [
        title= ' 标题2',
    ], 
  ];
function callback(key) {
    console.log(key);
  }
class Search extends Component{
  constructor(props){
      super(props);
      this.state = {
          query:''
      }
      this.handleEnter = this.handleEnter.bind(this);
      this.searchButton = this.searchButton.bind(this);

  }

  updateQuery(query){
      this.setState({
          query: query.trim()
      })
  }

  handleEnter(event){
      if(event.charCode === 13 ){
          this.props.onMessage(this.state.query);
          console.log(event.charCode);
      }
  }

  searchButton(event){
      this.props.onMessage(this.state.query);
  }

  render(){
      let { items } = this.props;
      let screen;
      if(items){
          screen =  (
              <ul className='contact-list' style={{listStyle:'none'}}>
              {items.result.map((item,index) =>
                <li key={index} className='contact-list-item'>
                    <div style={{float:'left',width:'80%'}}>
                        <img alt='pic' style={{float:'left',width:'20%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <div style={{float:'left',width:'80%'}}>
                            <h6>{item[0]}</h6>
                            <p>{item[1]}</p>
                        </div> 
                    </div>
                    <div style={{float:'right',width:'20%'}}>
                        <div>{item[1]}</div>
                        <div>
                            <span>参与：</span><span>1234</span>
                        </div>
                    </div>
                </li>
              )}
          </ul>)
      }
    //   items?.map:掉后台接口
      else {
          screen = (
            <ul style={{listStyle:'none'}}>
             {data.map((item,index) =>
             
                <li  className='contact-list-item'>
                    <div style={{float:'left',width:'80%'}}>
                        <img alt='pic' style={{float:'left',width:'20%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <div style={{float:'left',width:'80%'}}>
                            {/* <h6>{data[index].title}</h6> */}
                             <p>{item.title}</p>
                        </div> 
                    </div>
                    <div style={{float:'right',width:'20%'}}>
                        {/* <div>{item.title}</div> */}
                        <div>
                            <span>参与：</span><span>1234</span>
                        </div>
                    </div>
                </li>
             )}
            </ul>
          )
      }

      return (
          <div>

              <div className='list-contacts'>
                  <div className='list-contacts-top'>
                      <input
                          onKeyPress={(event) => {this.handleEnter(event)}}
                          className='search-contacts'
                          type='text'
                          placeholder='Search Here'
                          onChange={(event) => {this.updateQuery(event.target.value)}}
                      />
                      <button className='button-cancel' onClick= {this.searchButton}>Search</button>
                  </div>
              </div>
              <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab="趣味测试" key="1">
                     {/* 测评结果列表由后台返回 */}
                     <div >   
                        {screen}
                    </div>
                </TabPane>
                <TabPane tab="医用量表" key="2">
                     {/* 测评结果列表由后台返回 */}
                     <div >  
                        <Radio.Group defaultValue="图文咨询" onChange={this.onChange} buttonStyle="solid">
                            <Radio.Button value="综合测试">综合测试</Radio.Button>
                            <Radio.Button value="情绪测试" style={{margin:'0 10px'}}>情绪测试</Radio.Button>
                            <Radio.Button value="焦虑测试">焦虑测试</Radio.Button>
                            <Radio.Button value="睡眠测试" style={{margin:'0 10px'}}>睡眠测试</Radio.Button>
                            <Radio.Button value="人格测试" >人格测试</Radio.Button>
                            <Radio.Button value="能力测试" style={{margin:'0 10px'}}>能力测试</Radio.Button>
                        </Radio.Group>
                        {screen}
                    </div>
                </TabPane>
               
            </Tabs>
              


          </div>
      )
  }



}


export default Search