import logo from '../../images/logo/icon-zhumo.png';
import qutationUp from '../../images/logo/qutation-up.png';
import qutationDown from '../../images/logo/qutation-down.png';
import darkLogo from '../../images/logo/icon-zhumo-dark.png';
import bgImg from '../../images/logo/bg-inner.png'
import styles from './index.module.scss';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import { gameContext } from '../../utils/context';

import React, { useState, useContext } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Input, Space,  } from 'antd';

const { Search } = Input;
const { Header, Content, Footer } = Layout;

const onSearch = () => {

}

function AfterLoginStructure() {
  const [allState, setAllState] = useContext(gameContext);
  const { readingList } = allState;

    return (
      <ConfigProvider
        theme={{ token: { colorPrimary: '#1DA57A' } }}
      >
      <Layout className={styles.appLayout}>
        <Header style={{ 
          display: 'flex', 
          flexDirection:'row', 
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'#2D5F49', 
          zIndex: 10
          }}>
          <div className={styles.upperTitleBox}>
            <img src={darkLogo} className={styles.darkLogo} />
            <p  className={styles.upperTitle}>烛墨学派开源图书馆</p>
          </div>
          <div>
            <p className={styles.upperSub}>VeritasRatio | 欢迎光临！</p>
          </div>
        </Header>
        <img className={styles.bgImg} src={bgImg} />
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0', color: '#2D5F49' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              backgroundColor:'#fff',
              borderRadius: 24,
              minHeight: '65vh'
            }}
          >
            <p className={styles.innerTitle}>欢迎您，亲爱的求知者</p>
            <p ><i>“我们见证，我们记录，我们传承。”</i></p>
            <Search placeholder="请输入想要查询的文档" onSearch={onSearch} style={{width: '50vw'}} enterButton />
            {/* <hr className={styles.hrLine} /> */}
            <div className={styles.underPart}>
              <div className={styles.subDiv1}>
                <p className={styles.subTitle}>最近的阅读记录</p>           
                  {
                    readingList.map(item => {
                      return item.isRead && (
                        <div className={styles.singleItem}>
                        <CaretRightOutlined />
                        <p className={styles.subLink}>{item.name}</p>
                        </div>
                      )
                    })
                  }
                 
              </div>
              <div className={styles.subDiv1}>
                <p className={styles.subTitle}>收藏夹</p>
              </div>
              {/* <div className={styles.subDiv1}>
                <p className={styles.subTitle}>最近的阅读记录</p>
              </div> */}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', position:'fixed', bottom:0, width: '100vw' }}>
          烛墨学派开源图书馆 ©8051 Created by 博识学会 - 烛墨信息传播交流中心
        </Footer>
      </Layout>
      </ConfigProvider>
    )
}

export default AfterLoginStructure;
