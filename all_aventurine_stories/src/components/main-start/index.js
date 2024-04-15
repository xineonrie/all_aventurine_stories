import logo from '../../images/logo/icon-zhumo.png';
import qutationUp from '../../images/logo/qutation-up.png';
import qutationDown from '../../images/logo/qutation-down.png';
import './index.scss';

import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';


function MainStart() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-title">
      烛墨学派开源图书馆
      </p>
      <div className="introduction-box">
      <img src={qutationUp} className="App-qutationUp" alt="logo" />
      <p className="App-introduction"><i>群星，是无边海洋之上飘浮的沙砾，是万千枝缕末端垂挂的果实。沙砾不会察觉海洋的污染，正如果实无法意识到树木正受啃蚀。</i></p>
      <p className="App-owner"><i>———— 奥本海默</i></p>
      <img src={qutationDown} className="App-qutationDown" alt="logo" />
      </div>

      <div>
      <Input size="large" placeholder="large size" defaultValue="VeritasRatio" prefix={<UserOutlined />} />
      <Input.Password size="large" defaultValue="scientiae531"  placeholder="请输入密码" />
      </div>
      <Button type="primary" size="large" style={{background: "#2c744a", marginTop: '5vh'}}>登录查询</Button>
    </header>
  </div>
  );
}

export default MainStart;
