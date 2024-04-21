import mentionIcon from '../../../images/logo/icon-mention.png';
import Slogo from '../../../images/logo/SLogo.png'
import publicImg from '../../../images/logo/publicImg.jpg'
import styles from './index.module.scss';
import classNames from 'classnames';
import { gameContext } from '../../../utils/context';

import React, { useState, useContext } from 'react';
import { CaretRightOutlined, WarningFilled } from '@ant-design/icons';
import { Layout, Typography, ConfigProvider, Divider } from 'antd';

const { Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;


function FileReaderContent() {
  const [allState, setAllState] = useContext(gameContext);
  const [isTextAreaOpen, setIsTextAreaOpen] = useState([false,false,false]);
  const { readingList } = allState;

    return (
      <ConfigProvider
        theme={{ token: { colorPrimary: '#1DA57A' } }}
      >
        <Content style={{display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", marginBottom: '10vh'}}>
            <div className={styles.contentBox}>
                {/* 从这里开始的部分要转移掉 */}
                <Typography>
                    <div className={styles.TitleBox}>
                        <p className={styles.subTitle}>S-10180-35</p>
                        <Title>⚠️ 本文档为博识学会·S级机密文档 ⚠️</Title>
                        <p>所有对本文档的访问操作都会被系统记录在案，如非项目有关成员禁止阅读</p>
                        <p style={{marginTop:-15}}>任何针对本文档的泄密行为都将受到博识学会的追责与严惩。</p>
                    </div>
                    <Divider orientation="left" orientationMargin="0"><b>奇物基础状况报告</b></Divider>
                    <div className={styles.TitleBox2}>
                        <div className={styles.TitleBoxLeft}>
                            <div className={styles.firstPart}>
                                <div className={styles.tempBox}>
                                    <img className={styles.firstPartImg} src={mentionIcon}/>
                                    <div className={styles.firstParTitleBox}>
                                        <p className={styles.firstPartTitle}>S-10180-35</p>
                                        <p className={styles.subText}>Prismatic Aurora</p>
                                    </div>
                                </div>
                                <p className={styles.secondPartTitle}>晶中极光</p>
                            </div>
                            <div className={styles.downBox}>
                                <div className={styles.downLeftBox}>
                                    <div className={styles.itemClass} style={{marginTop: 8}}>
                                        <div className={styles.greenBan} />
                                        <div className={styles.itemTextClass}>
                                            <p className={styles.title}>收容时间：</p>
                                            <p className={styles.sub}>星历8350年5月30日</p>
                                        </div>
                                    </div>
                                    <div className={styles.itemClass}>
                                        <div className={styles.greenBan} />
                                        <div className={styles.itemTextClass}>
                                            <p className={styles.title}>收容地点：</p>
                                            <p className={styles.sub}>IPC 3th Amphitheater, Pier Point</p>
                                        </div>
                                    </div>
                                    <div className={styles.itemClass}>
                                        <div className={styles.greenBan} />
                                        <div className={styles.itemTextClass}>
                                            <p className={styles.title}>奇物大小：</p>
                                            <p className={styles.sub}>26.2mm x 24mm x 25.3mm</p>
                                        </div>
                                    </div>
                                    <div className={styles.itemClass}>
                                        <div className={styles.greenBan} />
                                        <div className={styles.itemTextClass}>
                                            <p className={styles.title}>奇物数量：</p>
                                            <p className={styles.sub}>1 （枚）</p>
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.downRightBox}>
                                <p className={styles.SlogoText}>收容分级：</p>
                                <img src={Slogo} className={styles.Slogo} />
                                <p className={styles.SlogoTextSub}>*仅庸众院成员经审批后准许访问</p>
                            </div>
                            </div>
                           
                        </div>
                        <div className={styles.TitleBoxRight}>
                            <div className={styles.titleImgBox}>
                            <img src={publicImg} style={{width: 200}} />
                            </div>
                            <p style={{fontSize: 12, marginTop:-20}}><i>*S-10180-3 实拍照片</i></p>
                        </div>
                        
                    </div>
                    <Divider orientation="left" orientationMargin="0"><b>奇物描述</b></Divider>
                    <Paragraph style={{textAlign: 'left'}}>
                    一块色泽异常艳丽的晶石。其外表通透如结晶，内部有红，紫，蓝三种色彩，呈气状，在晶石内缓慢流动，各色鲜有融合。具体来源不详，一说是在星际和平公司-庇尔波因特第三演讲大厅的讲台上突然出现。博识学会在场人员判断其为奇物，立刻进行收容，并封锁现场。所有观众均在一小时内经排查后疏散。
-庇尔波因特第三演讲大厅的讲台上突然出现。博识学会在场人员立即判断此为奇物，当场收容。
                    </Paragraph>
                    <Paragraph style={{textAlign: 'left'}}>
                    初步判定该奇物具有记忆干扰能力，范围极大，影响程度不明，原理不详。收容该物时，庇尔波因特有70%以上的员工在场，除此之外，还有不少公司的高级客户、供应商及合作伙伴，现场甚至接通宇宙直播频道，规模盛大，但无一人记得到场的原因。据现场人员之一，筑材物流部p39级专员皮埃尔回忆：“像是睡了一觉…很沉的一觉，醒来发现大家都在，好像一场盛大的集体梦游。”
                    </Paragraph>

                    <Paragraph style={{textAlign: 'left'}}>
                    公司高层，石心十人之一的翡翠女士对此表示遗憾。“我们并不知道它来自何处。这场莫名的集会的原因目前仍在调查中。如有结果，一定会尽快向学会与公众通报。”
                    </Paragraph>

                    <Paragraph style={{textAlign: 'left'}}>
                    烛墨学派人类学教授贝特森称，许多边星文明的信仰都与矿物和色彩有关<sup>2</sup>。推测“晶中极光”可能为重要历史文物。但现阶段暂无证据证明该奇物与边星诸文明的关联。此条仅做记录参考。
                    </Paragraph>

                    <Paragraph style={{textAlign: 'left'}}>
                        <pre> 
                            <p className={styles.LinkStyle} style={{textAlign: 'left'}}>+ 点击展开 · 筑材物流部p39专员访谈档案</p>
                        </pre>
                    </Paragraph>
                    <Paragraph style={{textAlign: 'left'}}>
                        <pre> 
                            <p className={styles.LinkStyle} style={{textAlign: 'left'}}>+ 点击展开 · 战略投资部p48主管「翡翠女士」访谈档案</p>
                        </pre>
                    </Paragraph>
                    <Divider orientation="left" orientationMargin="0"><b>收容措施</b></Divider>
                    <Paragraph style={{textAlign: 'left'}}>
                    虽未造成伤亡，但考虑到大范围记忆干扰的潜在威胁，同时为避免忆质异常、脑损伤等一系列可能风险，S-10180-35被列为高危险奇物，符合特殊管理标准。该奇物现被单独存放在庸众院地下三层A05室。须谨慎研究，循序渐进，未经批准，不得与其共处一室。研究人员须每日记录奇物参数，监测环境忆质浓度变化，上传数据库，同时须撰写<b>个人日记</b>，按周提交给博识学会精神评估部。
                    </Paragraph>
                    <Paragraph style={{textAlign: 'left'}}>
                    又及，<text className={styles.hiddenText}>它看上去真像一颗眼球，绚丽的气体流转不息。它凝望周围，仿佛一整个宇宙倒影其中。</text>
                    </Paragraph>
                    <Paragraph style={{textAlign: 'left'}}>
                    <text  className={styles.hiddenText}>这是一颗眼球，我很确定我见到过，有一双眼睛就是这样漂亮的色泽。</text>
                    </Paragraph>

                </Typography>
                {/* 到这里结束 */}
            </div>
        </Content>
      </ConfigProvider>
    )
}

export default FileReaderContent;
