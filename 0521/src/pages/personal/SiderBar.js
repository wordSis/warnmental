import Link from 'umi/link';
import React ,{ Component } from 'react';
import { Menu} from 'antd';
const  SubMenu = Menu.SubMenu;

class SiderBar extends  Component {
    
    // handleClick = (e) => {
    //     console.log('click ', e);
    //     this.setState({
    //         current: e.key,
    //     });
    // }

    render() {
        return (
            <Menu
                mode="inline"
                style={{width:'13%',height:'100%',borderRight:0,float:'left',}}    
            >
                <Menu.Item style={{}} key="1">
                    <Link to="/personal/personal">个人中心</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="2">
                    <Link to="/personal/myaccount/MyAccount">我的账户</Link>
                </Menu.Item>
                <SubMenu  key="sub2" title={<span>我的订单</span>}>
                    <Menu.Item key="05"><Link to="/personal/myOrder/invalid">无效</Link></Menu.Item>
                    <Menu.Item key="06"><Link to="/personal/myOrder/pending">待处理</Link></Menu.Item> 
                    <Menu.Item key="07"><Link to="/personal/myOrder/processed">已处理</Link></Menu.Item>
                </SubMenu>
                <Menu.Item style={{}} key="3">
                    <Link to="/personal/ServiceSetting">服务设置</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="4">
                    <Link to="/personal/ApplicationMaterials">物料申请</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="5">
                    <Link to="/personal/coupon">代金券</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="6">
                    <Link to="/personal/Article/myArticle">我的文章</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="7">
                    <Link to="/personal/myCollection">我的收藏</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="8">
                    <Link to="/personal/aboutUs">关于我们</Link>
                </Menu.Item>
                <Menu.Item style={{}} key="9">
                    <Link to="/personal/feedBack">意见反馈</Link>
                </Menu.Item>
            </Menu>
            

        );
    }
}
// const styles={
//     :active {
//         background:'#ccc'
//     }
// }
export default SiderBar;