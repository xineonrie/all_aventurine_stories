const allContext = {
    isLogin: false, // 是否登录
    isLoginLoading: false, // 是否在登录态加载状态
    isLoginAsVeritas: false, // 是否以维里塔斯拉帝奥身份登入
    isFinishFirstTime: false, // 是否完成一周目
    readingList: [ //文档列表
        {
            name: 'S-10180-35 调查档案',
            isRead: true
        },
        {
            name: '埃维金人：一段被遗忘的历史',
            isRead: false
        }
    ]

} 

export default allContext;