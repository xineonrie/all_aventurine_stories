import logo from '../../images/logo/icon-zhumo.png';
import darkLogo from '../../images/logo/icon-zhumo-dark.png';
import styles from './index.module.scss';
import { gameContext } from '../../utils/context';

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Input, Button, ConfigProvider } from 'antd';


const { Search } = Input;
const { Header, Content, Footer } = Layout;

const onSearch = () => {

}


function ErrorGame() {
  const [allState, setAllState] = useContext(gameContext);
  const { readingList } = allState;
  let navigate = useNavigate();
  const redirectToHome = () => {
    // 使用 navigate 进行重定向
    navigate('/');
  };
  
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
        </Header>
        {/* <img className={styles.bgImg} src={bgImg} /> */}
        <Content style={{ padding: '0 48px', height: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
          <div className={styles.centerBox}>
            <img className={styles.centerLogo} src={logo} />
            <p className={styles.innerTitle}>你似乎来到了一片没有知识的荒原</p>
            <p><i>博识尊在上，请带这迷路的孩子回家吧。</i></p>
            <Button type="primary" size="large" onClick={redirectToHome} style={{background: "#2c744a", marginTop: '5vh'}}>回到首页</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'absolute', bottom:0, width: '100vw' }}>
          烛墨学派开源图书馆 ©8051 Created by 博识学会 - 烛墨信息传播交流中心
        </Footer>
      </Layout>
      </ConfigProvider>
    )
}

export default ErrorGame;
