import React from 'react'
import {List,Icon,Input,Avatar,Button} from 'antd'
import {connect} from 'dva'
//import {getChatId} from '../../util'
const Search = Input.Search;
const namespace='chat'

const mapStateToProps = (state) => {   
    //  console.log(state)
    //models中定义好的已经取到后台数据的参数
    const chatlist = state[namespace].chatlist;
    const recvmsg = state[namespace].recvmsg;
    const sendmsg = state[namespace].sendmsg;
    return {
        chatlist ,
        recvmsg,
        sendmsg,
        // loading: state.loading.models.personal,
        // loading: state.loading.effects['personal/personalList'],
        loading:state.loading.global,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        chatList: () => {
            dispatch({
                type: `${namespace}/chatList`,
            });
        }, 
        recvMsg: () => {
            dispatch({
                type: `${namespace}/recvMsg`,
            });
        },
        sendMsg: (text,form,to) => {
            dispatch({
                type: `${namespace}/sendMsg`,
                payload: text,form,to,
            });
        },
    };  
};
class MyInquiry extends React.Component{
    state={
        text:'',
       // msg:[],
        data:[
            {
                user: ' user 1',
                des:'haha',
                time:'10:23',
            },
            {
                user: ' user 2',
                des:'haha',
                time:'10:23',
            },
            {
                user: ' user 3',
                des:'haha',
                time:'10:23',
            },
            {
                user: ' user 4',
                des:'haha',
                time:'10:23',
            },
        ],
        ishow:'none'
    }

    
    componentDidMount(){  
        if(!this.props.chatlist.length){
            this.props.chatList()
            this.props.recvMsg()
        }
        console.log(this.props,this.props.chatlist)
    }
    //退出路由时调用
    componentWillUnmount(){
        //对面聊天对象的id
		// const to = this.props.match.params.user
		// this.props.readMsg(to)
	}
   //from to to发给  from用户发来（按我定义的话）
    handleSubmit=()=>{
       // const from = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
      //  this.props.sendMsg({from,to,msg})
		this.setState({
            text:'',
           // showEmoji:false   //判断是否展示emoji表情
		})
    }
    handleClick=()=>{
        console.log(1)
        this.setState({
            ishow:!this.state.ishow
        })
    }
    inputChange=(value,e)=>{
        this.state.text = e.target.value
        this.setState({
            text:this.state.text,         
        })      
    }
    getLast=(arr)=>{
        //获取最后一条聊天信息
        return arr[arr.length-1]
    }
    render(){
        // if(!this.props.chatlist.length){
        //     return <div>暂无数据</div>
        // }
        //当前登录用户的id
        //const userid = this.props.user._id
        //所有用户的列表
       // const userinfo = this.props.users
        // const msgGroup = []
        // this.props.chatlist.forEach(v => {
        //     msgGroup[v.chatid] = msgGroup[v.chatid] || []
        //     msgGroup[v.chatid].push(v)
        // });
        // const chatLists = Object.values(msgGroup).sort((a,b)=>{
        //     const a_last = this.getLast(a).create_time
        //     const b_last = this.getLast(b).create_time
        //     return b_last-a_last
        // }) 
        // console.log("msg-->chatList",chatList);
         
        return(

            <div>
                {/* 联系人列表 */}
                <div id='chat-page' style={{width:'20%',float:'left',padding:'10px',border:'1px solid #ccc'}}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    {/* <div>
                        {chatLists.map(v=>{
                            const lastItem = this.getLast(v)
                            console.log("msg-->v",v);
                            
                            //获取聊天的对象  to用户发来    from发给用户
                            const targetId = lastItem.from===userid?lastItem.to:lastItem.from
                            const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
                            console.log("msg-->targetId",targetId);
                             return(
                                <List>
                                    <Item
                                        arrow="horizontal"
                                        extra={<Badge text={unreadNum}></Badge>}
                                        onClick={()=>{
                                            //跳转到聊天的页面
                                            this.props.history.push(`/chat/${targetId}`)
                                        }}
                                    >
                                        {lastItem.content}
                                        <Brief>{userinfo[targetId].name}</Brief>
                                    </Item>
                                </List>
                            )
                        })
                    }
                    </div> */}
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.data}
                        renderItem={item => (
                        <List.Item onClick={()=>this.handleClick(this)}>
                            <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={item.user}
                            description={item.des}
                            />
                            <div>{item.time}</div>
                        </List.Item>
                        )}
                    />
                </div>
                {/* 聊天框 */}
                <div style={{display:this.state.ishow,float:'right',width:'70%'}}>
                    <span style={{float:'left',height:'20px'}}>用户名Title1</span>
                    {/* 时间 头像  内容*/}
                    <div style={{float:'right',border:'1px solid #ccc',width:'100%'}}>
                        <div style={{width:'100%',height:'50%',minHeight:'300px',}}></div> 
                        <div style={{width:'100%',height:'50px',padding:'10px'}}>
                            <Input  style={{float:'left',width:'90%',}}  
                                placeholder='请输入'
                                value={this.state.text}
                                onChange={(value)=>this.inputChange(this,value)}
                            /> 
                            <span style={{float:'right',width:'5%',border:'1px solid #ccc',textAlign:'center'}} onClick={this.handleSubmit}>发送</span>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyInquiry);
        // //添加emoji表情
        // const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
		// 								.split(' ')
		// 								.filter(v=>v)
		// 								.map(v=>({text:v}))
        // console.log("chat-->props",this.props);
        // //聊天时对面的id
        // const userid = this.props.match.params.user
        // const Item = List.Item
        // const users = this.props.chat.users
        // if(!users||!users[userid]){
        //     return null
        // }
        // const chatid = getChatId(userid,this.props.user._id)
        // const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid===chatid)
        
                {/* <div className='chat-content'>
                    {chatmsgs.map(v=>{
                        //用户头像
                        const avatar = require(`../img/${users[v.from].avatar}.png`)
                        // console.log("chat-->msg",v);
                        return v.from===userid?(
                            <List key={v._id}>
                                <Item
                                    thumb={avatar}
                                >{v.content}</Item>
                            </List>
                        ):(
                            <List key={v._id}>
                                <Item 
                                   extra={<img alt='头像' src={avatar} />}
                                    className='chat-me'>{v.content}</Item>
                            </List>
                        )
                        
                    })}
                </div> */}
                {/* 脚部输入框 */}
                {/* <div className="stick-footer">
                    <List>
                        <Input
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={
                                <div>
                                    <span
                                        style={{marginRight:15}}
										onClick={()=>{
											this.setState({
												showEmoji:!this.state.showEmoji
											})
											this.fixCarousel()
										}}
                                    >😃</span>
                                    <span onClick={()=>this.handleSubmit()}>发送</span>
                                </div>}
                        ></Input>
                    </List> */}
                    {/* {this.state.showEmoji?<Grid
                        data={emoji}
                        columnNum={9}
                        carouselMaxRow={4}
                        isCarousel={true}
                        onClick={el=>{
                            this.setState({
                                text:this.state.text+el.text
                            })
                        }}
                    />
                    :null} */}
                {/* </div>
            </div> */}
     