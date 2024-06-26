import logo from '../../images/logo/icon-zhumo.png';
import darkLogo from '../../images/logo/icon-zhumo-dark.png';
import bgImg from '../../images/logo/bg-inner.png'
import styles from './index.module.scss';
import MainSearch from './mainSearch';
import classNames from 'classnames';
import { gameContext } from '../../utils/context';

import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Input, Space, ConfigProvider } from 'antd';


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
          <Outlet />  
        </Content>
        <Footer style={{ textAlign: 'center', bottom:0, width: '100vw' }}>
          烛墨学派开源图书馆 ©8051 Created by 博识学会 - 烛墨信息传播交流中心
        </Footer>
      </Layout>
      </ConfigProvider>
    )
}

export default AfterLoginStructure;
