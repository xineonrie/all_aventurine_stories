import logo from '../../../images/logo/icon-zhumo.png';
import qutationUp from '../../../images/logo/qutation-up.png';
import qutationDown from '../../../images/logo/qutation-down.png';
import darkLogo from '../../../images/logo/icon-zhumo-dark.png';
import bgImg from '../../../images/logo/bg-inner.png'
import styles from './index.module.scss';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import { gameContext } from '../../../utils/context';

import React, { useState, useContext } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Input, Space,  } from 'antd';

const { Search } = Input;
const { Header, Content, Footer } = Layout;

const onSearch = () => {

}

function MainSearch() {
  const [allState, setAllState] = useContext(gameContext);
  const { readingList } = allState;

    return (

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
            </div>
        </div>
    )
}

export default MainSearch;
