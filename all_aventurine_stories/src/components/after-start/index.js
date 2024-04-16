import logo from '../../images/logo/icon-after.png';
import qutationUp from '../../images/logo/qutation-up.png';
import qutationDown from '../../images/logo/qutation-down.png';
import './index.module.scss';

import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';


function AfterStart() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-title">
      地母神在注视你
      </p>
      <p className="App-introduction"><i>Închide-ți ochii de trei ori.</i></p>

      <div>
      <Input size="large" placeholder="large size" defaultValue="VeritasRatio" prefix={<UserOutlined />} />
      <Input.Password size="large" defaultValue="scientiae531"  placeholder="请输入密码" />
      </div>
      <Button type="primary" size="large" style={{background: "#6948a0", marginTop: '5vh'}}>你想看到什么？</Button>
    </header>
  </div>
  );
}

export default AfterStart;
