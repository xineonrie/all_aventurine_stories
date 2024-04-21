import logo from '../../images/logo/icon-zhumo.png';
import qutationUp from '../../images/logo/qutation-up.png';
import qutationDown from '../../images/logo/qutation-down.png';
import styles from './index.module.scss';
import classNames from 'classnames';
import authService from '../../utils/authService';

import React, { useState, useContext } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import { gameContext } from '../../utils/context';

function MainStart() {

  const [shouldShowToast, setShouldShowToast] = useState(false)
  const [shouldCloseToast, setShouldCloseToast] = useState(false)
  const [userName, setUserName] = useState('VeritasRatio')

  const handleValue = (val) => {
    setUserName(val.target.value)
  }

  const [allState, setAllState] = useContext(gameContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if(userName !== 'VeritasRatio') {
      setShouldShowToast(true);
      setAllState(prevState => ({
        ...prevState,
        isLogin: true,
        isLoginAsVeritas: false,
        isLoginLoading: true,
      }));
      authService.login();
      navigate('/not-you');
    }
    else {
      setAllState(prevState => ({
        ...prevState,
        isLogin: true,
        isLoginAsVeritas: true,
        isLoginLoading: true,
      }));
      authService.login();
      navigate('/home');
    }

    setTimeout(() => {
      setShouldCloseToast(true)
    }, 2500);
    setTimeout(() => {
      setShouldShowToast(false)
      setShouldCloseToast(false)
    }, 3000);
  }

  return (
    <div className={styles.App}>
      { shouldShowToast &&  <Alert message="请输入用户名和密码" className={shouldCloseToast ? styles.closeAlert : styles.Alert} type="error" showIcon /> }
    <header className={styles.AppHeader}>
      <img src={logo} className={classNames(styles.AppLogo, styles.AppAnime)} alt="logo" />
      <p className={styles.AppTitle}>
      烛墨学派开源图书馆
      </p>
      <div className={styles.IntroductionBox}>
      <img src={qutationUp} className={styles.AppQutationUp} alt="logo" />
      <p className={styles.AppIntroduction}><i>群星，是无边海洋之上飘浮的沙砾，是万千枝缕末端垂挂的果实。沙砾不会察觉海洋的污染，正如果实无法意识到树木正受啃蚀。</i></p>
      <p className={styles.AppOwner}><i>———— 奥本海默</i></p>
      <img src={qutationDown} className={styles.AppQutationDown} alt="logo" />
      </div>

      <div>
      <Input size="large" value={userName} onChange={handleValue} placeholder="large size" defaultValue="VeritasRatio" prefix={<UserOutlined />} />
      <Input.Password size="large" defaultValue="scientiae531"  placeholder="请输入密码" />
      </div>
      <Button type="primary" size="large" style={{background: "#2c744a", marginTop: '5vh'}} onClick={handleClick}>登录查询</Button>
    </header>
  </div>
  );
}

export default MainStart;
