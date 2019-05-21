import React ,{ Component } from 'react';
import { Input,Icon } from 'antd';
import styles from '../index.css';
import Link from 'umi/link';
import HomeHealthInquiry from '../homeHealthInquiry';

export default class HealthInquiry extends Component {
    render() {
      return (
        <div style={{padding:'20px 150px'}}>
            <Input.Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
            />
            <div >
              <div style={{position:'relative',height: '30px',}}> 
                  <div className={styles.fl}>
                      <span>精神百科</span>
                  </div>
                  <div  className={styles.fr}>
                      <Link to="/healthInquiry/spiritualEncyclopedia">
                          <span>更多</span>
                          <Icon type="right" /> 
                      </Link>
                  </div>
              </div> 
              <HomeHealthInquiry></HomeHealthInquiry>
            </div>
            <div >
              <div style={{position:'relative',height: '30px',}}> 
                  <div className={styles.fl}>
                      <span>科普视频</span>
                  </div>
                  <div  className={styles.fr}>
                      <Link to="/healthInquiry/scienceVideo">
                          <span>更多</span>
                          <Icon type="right" /> 
                      </Link>
                  </div>
              </div> 
              
            </div>
        </div>
      )
    }
}