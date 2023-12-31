# 架构设计
1. 需求
   - 功能性需求
     1. 用户可以注册、登录
     2. 用户可以搜索关键字并浏览论坛、文章和视频，点击查看之后会保留记录存在历史记录中
     3. 用户可以写文章、发布视频和发表自己的言论
     4. 用户可以点赞留言他人文章、视频和发言
     5. 用户可以和他人聊天（待定）
     6. 系统可以发通知给用户，比如作者或论坛回复留言
   - 非功能性需求
2. 划分模块
   - components目录下是可以重用的组件
     - History.vue 是历史记录，文章、视频、商城的历史记录可以复用
     - Nav.vue 导航栏，除了登录、注册页面，导航栏固定在顶部
   - views目录下是路由页面
     - user/Login.vue 用户登录页面
     - user/Register.vue 用户注册页面
     - Home.vue 首页
3. types目录定义接口
4. 技术栈
   - Vue3 + TypeScript + VueRouter
5. 架构风格
   - 分层：Components负责组件的复用模块，views负责路由导航的页面，types负责接口的定义
   - 客户端-服务器架构
   - 发布-订阅架构
6. 考虑可扩展性和可维护性
7. 评估和优化
   - 监听滚动事件，使用节流（在 wait 秒内最多执行 func 一次的函数）避免滚动触发多次更新