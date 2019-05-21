import { Component } from "react";
import { Table,message, } from 'antd';
import { connect } from 'dva';
const namespace = '';

const mapStateToProps = (state) => {
    return {

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getorderdate: (item) => {
            dispatch({
                type: `${namespace}/getorderdate`,
                payload: item,
            });
        },
    };
};

let jsondata = []
 
 class OrderDate extends Component{
      state={
        data:[],       
      }
      componentWillMount(){
        for (let i = 9; i < 19; i++) {
          jsondata.push({
            key: i,
            time: `${i}:00`,
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: '',
          })
        }  
        this.setState({
          data: jsondata,
        })       
      }
      clickmon=(record,rowIndex)=>{
        if( this.state.data[rowIndex].mon==='可预约'|| this.state.data[rowIndex].mon==='' ){
          this.state.data[rowIndex].mon='预约成功';
          // console.log(record,rowIndex)
          this.setState({
            data:[...this.state.data], 
          })
        }else{
          message.info('不可预约'); 
        }
        this.state.data=[...this.state.data];
         //console.log( record,this.state.data)
       }
    render(){    
      const columns = [
        {title: '',  dataIndex: 'time', key: 'time', },
        {
          title: '星期一', dataIndex: 'mon', key: 'mon',
           onCell:(record, rowIndex) => ({
                onClick:this.clickmon.bind(this,record,rowIndex)
            })
        },
        {
          title: '星期二', dataIndex: 'tue', key: 'tue', 
        },
        {
          title: '星期三', dataIndex: 'wed', key: 'wed', 
        },
        {
          title: '星期四', dataIndex: 'thur', key: 'thur',
        },
        {
          title: '星期五', dataIndex: 'fri', key: 'fri', 
        },
         {
           title: '星期六', dataIndex: 'sat', key: 'sat', 
        },
         {
           title: '星期日', dataIndex: 'sun', key: 'sun', 
        }, 
    ]; 
        return(
            <Table 
                columns={columns}
                bordered 
                dataSource={this.state.data} 
                pagination={ false }  
                style={{width:'80%',margin:'auto'}}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDate);