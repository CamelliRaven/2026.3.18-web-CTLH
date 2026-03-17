const resourceData = {
    1: {
        id: 1,
        title: 'Web 前端开发',
        category: '前端开发',
        level: '入门',
        description: '从零开始学习 HTML5 和 CSS3，掌握网页开发的基础技能。课程涵盖标签、样式、布局等核心内容，适合零基础学习者。',
    
         videos: [
            { num: 1, title: 'HTML 基础标签详解', link: 'https://search.bilibili.com/all?keyword=HTML 基础教程' },
            { num: 2, title: 'CSS 选择器与样式',  link: 'https://search.bilibili.com/all?keyword=CSS 选择器教程' },
            { num: 3, title: 'Flexbox 弹性布局',  link: 'https://search.bilibili.com/all?keyword=Flexbox 布局教程' },
            { num: 4, title: 'CSS Grid 网格布局', link: 'https://search.bilibili.com/all?keyword=CSS Grid 教程' },
            { num: 5, title: 'JavaScript 基础语法',  link: 'https://search.bilibili.com/all?keyword=JavaScript 基础教程' },
            { num: 6, title: 'DOM 操作与事件处理', link: 'https://search.bilibili.com/all?keyword=DOM 操作教程' },
            { num: 7, title: 'AJAX 与异步请求',  link: 'https://search.bilibili.com/all?keyword=AJAX 教程' },
            { num: 8, title: 'ES6+ 新特性',  link: 'https://search.bilibili.com/all?keyword=ES6 教程' },
            { num: 9, title: 'Promise 与异步编程',  link: 'https://search.bilibili.com/all?keyword=Promise 教程' },
            { num: 10, title: '模块化开发', link: 'https://search.bilibili.com/all?keyword=JavaScript 模块化' },
            { num: 11, title: 'Vue3 基础入门', link: 'https://search.bilibili.com/all?keyword=Vue3 教程' },
            { num: 12, title: 'Vue 组件通信', link: 'https://search.bilibili.com/all?keyword=Vue 组件通信' },
            { num: 13, title: 'Vue Router 路由',link: 'https://search.bilibili.com/all?keyword=Vue Router 教程' },
            { num: 14, title: 'Vuex 状态管理',  link: 'https://search.bilibili.com/all?keyword=Vuex 教程' },
            { num: 15, title: 'React 基础入门',  link: 'https://search.bilibili.com/all?keyword=React 教程' },
            { num: 16, title: 'React Hooks 详解',  link: 'https://search.bilibili.com/all?keyword=React Hooks 教程' },
            { num: 17, title: 'Webpack 打包配置',  link: 'https://search.bilibili.com/all?keyword=Webpack 教程' },
            { num: 18, title: 'TypeScript 入门',  link: 'https://search.bilibili.com/all?keyword=TypeScript 教程' },
            { num: 19, title: '前端性能优化',  link: 'https://search.bilibili.com/all?keyword=前端性能优化' },
            { num: 20, title: '项目实战：个人博客', link: 'https://search.bilibili.com/all?keyword=前端项目实战' }
        ],
        documents: [
            { icon: '📕', title: 'HTML5 速查手册.pdf', size: '2.5 MB', link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML' },
            { icon: '🌐', title: 'CSS3 参考文档', size: '在线', link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS' },
            { icon: '🌐', title: 'JavaScript 权威指南', size: '在线', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
            { icon: '🌐', title: 'ES6+ 新特性总结', size: '在线', link: 'https://github.com/ruanyf/es6tutorial' },
            { icon: '🌐', title: '前端开发规范指南', size: '在线', link: 'https://github.com/airbnb/javascript' },
            { icon: '📕', title: 'Vue3 官方文档.pdf', size: '3.2 MB', link: 'https://cn.vuejs.org/' },
            { icon: '🌐', title: 'Vue Router 使用指南', size: '在线', link: 'https://router.vuejs.org/zh/' },
            { icon: '🌐', title: 'Vuex 状态管理文档', size: '在线', link: 'https://vuex.vuejs.org/zh/' },
            { icon: '🌐', title: 'React 官方文档', size: '在线', link: 'https://zh-hans.reactjs.org/' },
            { icon: '🌐', title: 'React Hooks 详解', size: '在线', link: 'https://zh-hans.reactjs.org/docs/hooks-intro.html' },
            { icon: '📕', title: 'Webpack 配置指南.pdf', size: '1.8 MB', link: 'https://www.webpackjs.com/' },
            { icon: '🌐', title: 'TypeScript 入门教程', size: '在线', link: 'https://www.typescriptlang.org/zh/' },
            { icon: '🌐', title: 'Node.js 基础教程', size: '在线', link: 'https://nodejs.org/zh-cn/docs/' },
            { icon: '🌐', title: 'Git 版本控制指南', size: '在线', link: 'https://git-scm.com/book/zh/v2' },
            { icon: '📕', title: '前端性能优化手册.pdf', size: '2.1 MB', link: 'https://web.dev/performance/' },
            { icon: '🌐', title: 'HTTP 协议详解', size: '在线', link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP' },
            { icon: '🌐', title: '浏览器工作原理', size: '在线', link: 'https://web.dev/howbrowserswork/' },
            { icon: '🌐', title: '网络安全基础', size: '在线', link: 'https://developer.mozilla.org/zh-CN/docs/Web/Security' },
            { icon: '📕', title: '响应式设计指南.pdf', size: '1.5 MB', link: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design' },
            { icon: '🌐', title: '前端面试题汇总', size: '在线', link: 'https://github.com/haizlin/fe-interview' }
        ]
    },
    2: {
        id: 2,
        title: 'UI/UX 设计',
        category: '设计',
        level: '入门',
        description: '学习界面设计原则，掌握用户体验设计方法。从色彩、排版到交互设计，全面提升设计能力。',
        
      videos: [
            { num: 1, title: '设计基础：色彩理论', link: 'https://search.bilibili.com/all?keyword=色彩理论设计教程' },
            { num: 2, title: '排版与字体设计', link: 'https://search.bilibili.com/all?keyword=排版字体设计' },
            { num: 3, title: 'Figma 入门教程',  link: 'https://www.bilibili.com/video/BV1LK411W7ez' },
            { num: 4, title: 'Sketch 基础使用', link: 'https://search.bilibili.com/all?keyword=Sketch 教程' },
            { num: 5, title: 'Adobe XD 实战',  link: 'https://search.bilibili.com/all?keyword=Adobe XD 教程' },
            { num: 6, title: '用户体验设计原则',  link: 'https://search.bilibili.com/all?keyword=用户体验设计' },
            { num: 7, title: '交互设计流程',  link: 'https://search.bilibili.com/all?keyword=交互设计教程' },
            { num: 8, title: '移动端 UI 设计规范',  link: 'https://search.bilibili.com/all?keyword=移动端 UI 设计' },
            { num: 9, title: 'Web 端 UI 设计规范',  link: 'https://search.bilibili.com/all?keyword=Web UI 设计' },
            { num: 10, title: '图标设计技巧',  link: 'https://search.bilibili.com/all?keyword=图标设计教程' },
            { num: 11, title: '设计系统搭建', link: 'https://search.bilibili.com/all?keyword=设计系统教程' },
            { num: 12, title: '原型设计方法',  link: 'https://search.bilibili.com/all?keyword=原型设计' },
            { num: 13, title: '用户研究方法',  link: 'https://search.bilibili.com/all?keyword=用户研究方法' },
            { num: 14, title: '可用性测试', link: 'https://search.bilibili.com/all?keyword=可用性测试' },
            { num: 15, title: '设计评审技巧',  link: 'https://search.bilibili.com/all?keyword=设计评审' },
            { num: 16, title: '作品集制作指南',  link: 'https://search.bilibili.com/all?keyword=设计作品集' },
            { num: 17, title: '设计趋势分析', link: 'https://search.bilibili.com/all?keyword=设计趋势' },
            { num: 18, title: '无障碍设计',  link: 'https://search.bilibili.com/all?keyword=无障碍设计' },
            { num: 19, title: '情感化设计',  link: 'https://search.bilibili.com/all?keyword=情感化设计' },
            { num: 20, title: '项目实战：电商 APP 设计',  link: 'https://search.bilibili.com/all?keyword=电商 APP 设计' }
        ],
        documents: [
            { icon: '📕', title: 'UI 设计规范手册.pdf', size: '5.2 MB', link: 'https://material.io/design' },
            { icon: '🌐', title: 'Figma 官方文档', size: '在线', link: 'https://help.figma.com/' },
            { icon: '🌐', title: '用户体验设计指南', size: '在线', link: 'https://www.nngroup.com/articles/' },
            { icon: '📕', title: '色彩搭配指南.pdf', size: '3.1 MB', link: 'https://coolors.co/' },
            { icon: '🌐', title: 'iOS 设计规范', size: '在线', link: 'https://developer.apple.com/design/' },
            { icon: '🌐', title: 'Material Design', size: '在线', link: 'https://material.io/design' },
            { icon: '📕', title: '字体设计手册.pdf', size: '2.8 MB', link: 'https://fonts.google.com/' },
            { icon: '🌐', title: '交互设计原则', size: '在线', link: 'https://lawsofux.com/' },
            { icon: '🌐', title: '设计心理学', size: '在线', link: 'https://www.interaction-design.org/' },
            { icon: '📕', title: '图标设计指南.pdf', size: '1.9 MB', link: 'https://iconfont.cn/' },
            { icon: '🌐', title: '响应式设计规范', size: '在线', link: 'https://responsive.design/' },
            { icon: '🌐', title: '设计系统资源', size: '在线', link: 'https://designsystems.com/' },
            { icon: '📕', title: '用户体验地图.pdf', size: '2.3 MB', link: 'https://www.uxpin.com/' },
            { icon: '🌐', title: 'A/B 测试指南', size: '在线', link: 'https://www.optimizely.com/' },
            { icon: '🌐', title: '设计思维方法', size: '在线', link: 'https://www.ideou.com/' },
            { icon: '📕', title: '无障碍设计标准.pdf', size: '3.5 MB', link: 'https://www.w3.org/WAI/' },
            { icon: '🌐', title: '设计趋势报告', size: '在线', link: 'https://www.awwwards.com/' },
            { icon: '🌐', title: '用户体验指标', size: '在线', link: 'https://measuringu.com/' },
            { icon: '📕', title: '设计作品集模板.pdf', size: '4.2 MB', link: 'https://www.behance.net/' },
            { icon: '🌐', title: '设计资源汇总', size: '在线', link: 'https://www.smashingmagazine.com/' }
        ]
    },
    3: {
        id: 3,
        title: '数据库基础',
        category: '后端开发',
        level: '入门',
        description: 'MySQL、MongoDB 等数据库入门与实战。学习数据库设计、SQL 查询、性能优化等核心技能。',
        
        videos: [
            { num: 1, title: '数据库基础概念', link: 'https://www.bilibili.com/video/BV1N14y1r7ow' },
            { num: 2, title: 'MySQL 安装配置',  link: 'https://www.bilibili.com/video/BV1VE411N7Hs' },
            { num: 3, title: 'SQL 基础语法',  link: 'https://www.bilibili.com/video/BV1uK411W7ez' },
            { num: 4, title: '数据表设计', link: 'https://search.bilibili.com/all?keyword=数据库表设计' },
            { num: 5, title: '索引与优化',  link: 'https://search.bilibili.com/all?keyword=数据库索引优化' },
            { num: 6, title: '事务与锁机制',  link: 'https://search.bilibili.com/all?keyword=数据库事务' },
            { num: 7, title: '存储过程',  link: 'https://search.bilibili.com/all?keyword=MySQL 存储过程' },
            { num: 8, title: '触发器详解',  link: 'https://search.bilibili.com/all?keyword=数据库触发器' },
            { num: 9, title: '视图与函数',  link: 'https://search.bilibili.com/all?keyword=MySQL 视图函数' },
            { num: 10, title: '备份与恢复',  link: 'https://search.bilibili.com/all?keyword=数据库备份恢复' },
            { num: 11, title: 'MongoDB 入门', link: 'https://www.bilibili.com/video/BV1fK4y1s7e1' },
            { num: 12, title: 'NoSQL 基础',  link: 'https://search.bilibili.com/all?keyword=NoSQL 教程' },
            { num: 13, title: 'Redis 缓存',  link: 'https://www.bilibili.com/video/BV1Xy4y1B7gT' },
            { num: 14, title: '数据库连接池',  link: 'https://search.bilibili.com/all?keyword=数据库连接池' },
            { num: 15, title: 'ORM 框架使用',  link: 'https://search.bilibili.com/all?keyword=ORM 框架' },
            { num: 16, title: '数据库迁移',  link: 'https://search.bilibili.com/all?keyword=数据库迁移' },
            { num: 17, title: '性能调优实战', link: 'https://search.bilibili.com/all?keyword=数据库性能调优' },
            { num: 18, title: '分库分表策略', link: 'https://search.bilibili.com/all?keyword=分库分表' },
            { num: 19, title: '主从复制配置',  link: 'https://search.bilibili.com/all?keyword=MySQL 主从复制' },
            { num: 20, title: '项目实战：博客系统数据库',  link: 'https://search.bilibili.com/all?keyword=数据库项目实战' }
        ],
        documents: [
            { icon: '📕', title: 'MySQL 官方文档.pdf', size: '8.5 MB', link: 'https://dev.mysql.com/doc/' },
            { icon: '🌐', title: 'SQL 教程', size: '在线', link: 'https://www.w3schools.com/sql/' },
            { icon: '🌐', title: 'MongoDB 文档', size: '在线', link: 'https://www.mongodb.com/docs/' },
            { icon: '📕', title: '数据库设计范式.pdf', size: '2.1 MB', link: 'https://en.wikipedia.org/wiki/Database_normalization' },
            { icon: '🌐', title: 'Redis 官方文档', size: '在线', link: 'https://redis.io/documentation' },
            { icon: '🌐', title: 'SQL 性能优化', size: '在线', link: 'https://use-the-index-luke.com/' },
            { icon: '📕', title: '事务隔离级别.pdf', size: '1.8 MB', link: 'https://en.wikipedia.org/wiki/Isolation_(database_systems)' },
            { icon: '🌐', title: '数据库索引原理', size: '在线', link: 'https://www.uber.com/blog/indexing/' },
            { icon: '🌐', title: 'NoSQL 对比分析', size: '在线', link: 'https://www.mongodb.com/nosql-explained' },
            { icon: '📕', title: '数据库安全指南.pdf', size: '3.2 MB', link: 'https://www.owasp.org/' },
            { icon: '🌐', title: 'PostgreSQL 文档', size: '在线', link: 'https://www.postgresql.org/docs/' },
            { icon: '🌐', title: '数据库监控工具', size: '在线', link: 'https://www.datadoghq.com/' },
            { icon: '📕', title: 'ER 图设计手册.pdf', size: '2.5 MB', link: 'https://www.draw.io/' },
            { icon: '🌐', title: '数据库中间件', size: '在线', link: 'https://shardingsphere.apache.org/' },
            { icon: '🌐', title: '云数据库服务', size: '在线', link: 'https://aws.amazon.com/rds/' },
            { icon: '📕', title: '数据库面试题.pdf', size: '4.1 MB', link: 'https://github.com/haizlin/fe-interview' },
            { icon: '🌐', title: '数据库最佳实践', size: '在线', link: 'https://www.percona.com/' },
            { icon: '🌐', title: '数据建模方法', size: '在线', link: 'https://www.erdplus.com/' },
            { icon: '📕', title: '数据库运维手册.pdf', size: '5.3 MB', link: 'https://www.mysql.com/' },
            { icon: '🌐', title: '数据库学习路线', size: '在线', link: 'https://roadmap.sh/backend' }
        ]
    },
    4: {
        id: 4,
        title: '云计算入门',
        category: '云计算',
        level: '入门',
        description: '了解 AWS、阿里云等云平台基础服务。学习云服务器、存储、网络等核心概念和实操技能。',
        
        videos: [
            { num: 1, title: '云计算基础概念', link: 'https://search.bilibili.com/all?keyword=云计算基础' },
            { num: 2, title: 'AWS 入门介绍', link: 'https://search.bilibili.com/all?keyword=AWS 教程' },
            { num: 3, title: '阿里云基础服务',  link: 'https://search.bilibili.com/all?keyword=阿里云教程' },
            { num: 4, title: '云服务器 ECS 使用', link: 'https://search.bilibili.com/all?keyword=云服务器 ECS' },
            { num: 5, title: '对象存储 OSS',  link: 'https://search.bilibili.com/all?keyword=对象存储 OSS' },
            { num: 6, title: '虚拟私有云 VPC',  link: 'https://search.bilibili.com/all?keyword=VPC 教程' },
            { num: 7, title: '负载均衡配置',  link: 'https://search.bilibili.com/all?keyword=负载均衡' },
            { num: 8, title: '自动伸缩服务',  link: 'https://search.bilibili.com/all?keyword=自动伸缩' },
            { num: 9, title: '云数据库 RDS',  link: 'https://search.bilibili.com/all?keyword=云数据库 RDS' },
            { num: 10, title: 'CDN 加速服务',  link: 'https://search.bilibili.com/all?keyword=CDN 教程' },
            { num: 11, title: '容器服务 ACK',  link: 'https://search.bilibili.com/all?keyword=容器服务 ACK' },
            { num: 12, title: 'Serverless 函数计算', link: 'https://search.bilibili.com/all?keyword=Serverless' },
            { num: 13, title: '云监控与日志',  link: 'https://search.bilibili.com/all?keyword=云监控' },
            { num: 14, title: 'IAM 权限管理',  link: 'https://search.bilibili.com/all?keyword=IAM 权限' },
            { num: 15, title: '云安全最佳实践',  link: 'https://search.bilibili.com/all?keyword=云安全' },
            { num: 16, title: '成本优化策略',  link: 'https://search.bilibili.com/all?keyword=云成本优化' },
            { num: 17, title: '混合云架构',  link: 'https://search.bilibili.com/all?keyword=混合云' },
            { num: 18, title: 'DevOps 云实践', link: 'https://search.bilibili.com/all?keyword=DevOps' },
            { num: 19, title: '多云管理策略', link: 'https://search.bilibili.com/all?keyword=多云管理' },
            { num: 20, title: '项目实战：云上部署 Web 应用', duration: '50:00', link: 'https://search.bilibili.com/all?keyword=云计算实战' }
        ],
        documents: [
            { icon: '📕', title: 'AWS 官方文档.pdf', size: '10.2 MB', link: 'https://aws.amazon.com/documentation/' },
            { icon: '🌐', title: '阿里云文档', size: '在线', link: 'https://help.aliyun.com/' },
            { icon: '🌐', title: '云计算基础教程', size: '在线', link: 'https://www.coursera.org/' },
            { icon: '📕', title: '云架构设计指南.pdf', size: '4.5 MB', link: 'https://aws.amazon.com/architecture/' },
            { icon: '🌐', title: '腾讯云文档', size: '在线', link: 'https://cloud.tencent.com/document' },
            { icon: '🌐', title: 'Kubernetes 指南', size: '在线', link: 'https://kubernetes.io/docs/' },
            { icon: '📕', title: '云安全白皮书.pdf', size: '3.8 MB', link: 'https://www.csa.gov.cn/' },
            { icon: '🌐', title: 'Docker 入门', size: '在线', link: 'https://docs.docker.com/' },
            { icon: '🌐', title: 'Terraform 教程', size: '在线', link: 'https://www.terraform.io/docs' },
            { icon: '📕', title: '云原生架构.pdf', size: '5.1 MB', link: 'https://www.cncf.io/' },
            { icon: '🌐', title: '华为云文档', size: '在线', link: 'https://support.huaweicloud.com/' },
            { icon: '🌐', title: '云迁移指南', size: '在线', link: 'https://cloud.google.com/migration' },
            { icon: '📕', title: 'Serverless 手册.pdf', size: '2.9 MB', link: 'https://serverless.com/' },
            { icon: '🌐', title: '云监控最佳实践', size: '在线', link: 'https://docs.aws.amazon.com/' },
            { icon: '🌐', title: '容器编排对比', size: '在线', link: 'https://www.redhat.com/' },
            { icon: '📕', title: '云计算认证指南.pdf', size: '6.2 MB', link: 'https://aws.amazon.com/certification/' },
            { icon: '🌐', title: '云成本计算器', size: '在线', link: 'https://calculator.aws/' },
            { icon: '🌐', title: '微服务架构', size: '在线', link: 'https://microservices.io/' },
            { icon: '📕', title: '云运维手册.pdf', size: '4.7 MB', link: 'https://www.devops.com/' },
            { icon: '🌐', title: '云计算学习路线', size: '在线', link: 'https://roadmap.sh/devops' }
        ]
    },
    5: {
        id: 5,
        title: '网络安全',
        category: '安全',
        level: '进阶',
        description: '学习 Web 安全基础知识，保护你的应用。涵盖 XSS、SQL 注入、CSRF 等常见漏洞与防护方法。',
       
        videos: [
            { num: 1, title: '网络安全基础',   link: 'https://www.bilibili.com/video/BV1N14y1r7ow' },
            { num: 2, title: 'XSS 攻击与防护',  link: 'https://search.bilibili.com/all?keyword=XSS 攻击防护' },
            { num: 3, title: 'SQL 注入详解',  link: 'https://search.bilibili.com/all?keyword=SQL 注入' },
            { num: 4, title: 'CSRF 攻击原理', link: 'https://search.bilibili.com/all?keyword=CSRF 攻击' },
            { num: 5, title: '文件上传漏洞',  link: 'https://search.bilibili.com/all?keyword=文件上传漏洞' },
            { num: 6, title: '密码安全与加密', link: 'https://search.bilibili.com/all?keyword=密码加密' },
            { num: 7, title: '会话管理安全',  link: 'https://search.bilibili.com/all?keyword=会话管理' },
            { num: 8, title: 'HTTPS 与 SSL',  link: 'https://search.bilibili.com/all?keyword=HTTPS SSL' },
            { num: 9, title: 'CORS 跨域安全',  link: 'https://search.bilibili.com/all?keyword=CORS 跨域' },
            { num: 10, title: '内容安全策略 CSP', link: 'https://search.bilibili.com/all?keyword=CSP 安全策略' },
            { num: 11, title: 'OWASP Top 10',  link: 'https://search.bilibili.com/all?keyword=OWASP Top10' },
            { num: 12, title: '渗透测试基础',  link: 'https://search.bilibili.com/all?keyword=渗透测试' },
            { num: 13, title: 'Burp Suite 使用', link: 'https://search.bilibili.com/all?keyword=Burp Suite' },
            { num: 14, title: '漏洞扫描工具', link: 'https://search.bilibili.com/all?keyword=漏洞扫描' },
            { num: 15, title: '安全编码规范',  link: 'https://search.bilibili.com/all?keyword=安全编码' },
            { num: 16, title: 'API 安全防护', link: 'https://search.bilibili.com/all?keyword=API 安全' },
            { num: 17, title: '移动端安全',  link: 'https://search.bilibili.com/all?keyword=移动端安全' },
            { num: 18, title: '云安全实践', link: 'https://search.bilibili.com/all?keyword=云安全实践' },
            { num: 19, title: '应急响应流程', link: 'https://search.bilibili.com/all?keyword=应急响应' },
            { num: 20, title: '项目实战：安全加固',  link: 'https://search.bilibili.com/all?keyword=网络安全实战' }
        ],
        documents: [
            { icon: '📕', title: 'OWASP 安全指南.pdf', size: '6.8 MB', link: 'https://owasp.org/' },
            { icon: '🌐', title: 'Web 安全教程', size: '在线', link: 'https://portswigger.net/web-security' },
            { icon: '🌐', title: 'CVE 漏洞数据库', size: '在线', link: 'https://cve.mitre.org/' },
            { icon: '📕', title: '加密算法详解.pdf', size: '3.5 MB', link: 'https://en.wikipedia.org/wiki/Cryptography' },
            { icon: '🌐', title: '安全编码规范', size: '在线', link: 'https://wiki.sei.cmu.edu/' },
            { icon: '🌐', title: '渗透测试指南', size: '在线', link: 'https://www.offensive-security.com/' },
            { icon: '📕', title: '网络安全法解读.pdf', size: '2.1 MB', link: 'http://www.npc.gov.cn/' },
            { icon: '🌐', title: '漏洞复现教程', size: '在线', link: 'https://github.com/vulhub/vulhub' },
            { icon: '🌐', title: '安全工具汇总', size: '在线', link: 'https://github.com/zbetcheckin/Security_list' },
            { icon: '📕', title: 'CTF 竞赛指南.pdf', size: '4.2 MB', link: 'https://ctf-wiki.org/' },
            { icon: '🌐', title: '安全资讯平台', size: '在线', link: 'https://www.seebug.org/' },
            { icon: '🌐', title: '威胁情报分析', size: '在线', link: 'https://www.virustotal.com/' },
            { icon: '📕', title: '防火墙配置手册.pdf', size: '3.1 MB', link: 'https://www.pfsense.org/' },
            { icon: '🌐', title: '安全审计日志', size: '在线', link: 'https://www.elastic.co/' },
            { icon: '🌐', title: '零信任架构', size: '在线', link: 'https://www.cisa.gov/zero-trust' },
            { icon: '📕', title: '安全认证指南.pdf', size: '5.5 MB', link: 'https://www.isc2.org/' },
            { icon: '🌐', title: '漏洞赏金计划', size: '在线', link: 'https://www.hackerone.com/' },
            { icon: '🌐', title: '安全开发流程', size: '在线', link: 'https://www.microsoft.com/security/' },
            { icon: '📕', title: '应急响应手册.pdf', size: '4.8 MB', link: 'https://www.sans.org/' },
            { icon: '🌐', title: '网络安全学习路线', size: '在线', link: 'https://roadmap.sh/cyber-security' }
        ]
    },
    6: {
        id: 6,
        title: '人工智能基础',
        category: '人工智能',
        level: '进阶',
        description: 'Python 机器学习入门，探索 AI 世界。学习基础算法、深度学习框架和实际应用案例。',
       
        videos: [
            { num: 1, title: 'AI 基础概念介绍', link: 'https://search.bilibili.com/all?keyword=人工智能基础' },
            { num: 2, title: 'Python 环境搭建', link: 'https://www.bilibili.com/video/BV1VE411N7Hs' },
            { num: 3, title: 'NumPy 基础教程', link: 'https://search.bilibili.com/all?keyword=NumPy 教程' },
            { num: 4, title: 'Pandas 数据处理', link: 'https://search.bilibili.com/all?keyword=Pandas 教程' },
            { num: 5, title: 'Matplotlib 可视化',link: 'https://search.bilibili.com/all?keyword=Matplotlib' },
            { num: 6, title: '机器学习基础',  link: 'https://www.bilibili.com/video/BV1Re411v7qX' },
            { num: 7, title: '线性回归算法',  link: 'https://search.bilibili.com/all?keyword=线性回归' },
            { num: 8, title: '逻辑回归详解',  link: 'https://search.bilibili.com/all?keyword=逻辑回归' },
            { num: 9, title: '决策树与随机森林',  link: 'https://search.bilibili.com/all?keyword=决策树' },
            { num: 10, title: '支持向量机 SVM',  link: 'https://search.bilibili.com/all?keyword=SVM' },
            { num: 11, title: '神经网络基础',  link: 'https://search.bilibili.com/all?keyword=神经网络' },
            { num: 12, title: 'TensorFlow 入门',  link: 'https://search.bilibili.com/all?keyword=TensorFlow' },
            { num: 13, title: 'PyTorch 基础',  link: 'https://search.bilibili.com/all?keyword=PyTorch' },
            { num: 14, title: '卷积神经网络 CNN',  link: 'https://search.bilibili.com/all?keyword=CNN' },
            { num: 15, title: '循环神经网络 RNN',  link: 'https://search.bilibili.com/all?keyword=RNN' },
            { num: 16, title: 'Transformer 架构',  link: 'https://search.bilibili.com/all?keyword=Transformer' },
            { num: 17, title: '自然语言处理 NLP',  link: 'https://search.bilibili.com/all?keyword=NLP' },
            { num: 18, title: '计算机视觉 CV',  link: 'https://search.bilibili.com/all?keyword=计算机视觉' },
            { num: 19, title: '模型部署实践',  link: 'https://search.bilibili.com/all?keyword=模型部署' },
            { num: 20, title: '项目实战：图像分类',  link: 'https://search.bilibili.com/all?keyword=AI 项目实战' }
        ],
        documents: [
            { icon: '📕', title: '机器学习实战.pdf', size: '8.2 MB', link: 'https://scikit-learn.org/' },
            { icon: '🌐', title: 'Python 官方文档', size: '在线', link: 'https://docs.python.org/zh-cn/' },
            { icon: '🌐', title: 'TensorFlow 教程', size: '在线', link: 'https://www.tensorflow.org/' },
            { icon: '📕', title: '深度学习花书.pdf', size: '12.5 MB', link: 'https://www.deeplearningbook.org/' },
            { icon: '🌐', title: 'PyTorch 文档', size: '在线', link: 'https://pytorch.org/docs/' },
            { icon: '🌐', title: 'Kaggle 学习', size: '在线', link: 'https://www.kaggle.com/learn' },
            { icon: '📕', title: '算法图解.pdf', size: '5.3 MB', link: 'https://www.manning.com/books/grokking-algorithms' },
            { icon: '🌐', title: 'Hugging Face', size: '在线', link: 'https://huggingface.co/' },
            { icon: '🌐', title: 'AI 论文汇总', size: '在线', link: 'https://paperswithcode.com/' },
            { icon: '📕', title: '统计学习方法.pdf', size: '6.1 MB', link: 'https://www.baidu.com/s?wd=统计学习方法' },
            { icon: '🌐', title: '吴恩达课程', size: '在线', link: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { icon: '🌐', title: 'AI 数据集', size: '在线', link: 'https://archive.ics.uci.edu/' },
            { icon: '📕', title: '神经网络编程.pdf', size: '4.8 MB', link: 'https://neuralnetworksanddeeplearning.com/' },
            { icon: '🌐', title: 'AutoML 工具', size: '在线', link: 'https://automl.github.io/' },
            { icon: '🌐', title: '模型解释工具', size: '在线', link: 'https://github.com/slundberg/shap' },
            { icon: '📕', title: 'AI 伦理指南.pdf', size: '2.5 MB', link: 'https://www.partnershiponai.org/' },
            { icon: '🌐', title: '强化学习教程', size: '在线', link: 'https://spinningup.openai.com/' },
            { icon: '🌐', title: 'AI 部署实践', size: '在线', link: 'https://www.mlflow.org/' },
            { icon: '📕', title: '面试题库.pdf', size: '7.2 MB', link: 'https://github.com/ML-NLP' },
            { icon: '🌐', title: 'AI 学习路线', size: '在线', link: 'https://roadmap.sh/ai-data-scientist' }
        ]
    }
};

// 渲染视频列表
function renderVideoList(videos) {
    const container = document.getElementById('videoList');
    if (!container || !videos) return;
    
    container.innerHTML = videos.map(video => `
        <div class="video-item d-flex align-items-center p-3 border-bottom">
            <span class="badge bg-primary me-3">${video.num}</span>
            <div class="flex-grow-1">
                <h6 class="mb-1 fw-bold">${video.title}</h6>
            </div>
            <a href="${video.link}" target="_blank" class="btn btn-primary btn-sm">▶ 搜索观看</a>
        </div>
    `).join('');
}


// 渲染文档列表
function renderDocumentList(documents) {
    const container = document.getElementById('documentList');
    if (!container || !documents) return;
    
    container.innerHTML = documents.map(doc => `
        <div class="document-item d-flex align-items-center justify-content-between p-3 border-bottom">
            <div class="d-flex align-items-center">
                <span class="fs-4 me-3">${doc.icon}</span>
                <div>
                    <h6 class="mb-1 fw-bold">${doc.title}</h6>
                    <small class="text-muted">${doc.size}</small>
                </div>
            </div>
            <a href="${doc.link}" target="_blank" class="btn btn-outline-primary btn-sm">📖 查看</a>
        </div>
    `).join('');
}

// 加载资源详情
function loadResourceDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const resourceId = urlParams.get('id') || 1;
    const resource = resourceData[resourceId];
    
    if (!resource) {
        alert('资源不存在');
        window.location.href = 'study.html';
        return;
    }
    
    // 更新页面标题
    document.title = `${resource.title} - 创途领航`;
    
    // 填充基本信息
    document.getElementById('resourceTitle').textContent = resource.title;
    document.getElementById('resourceCategory').textContent = resource.category;
    document.getElementById('resourceLevel').textContent = resource.level;
    document.getElementById('resourceDesc').textContent = resource.description;
    document.getElementById('viewCount').textContent = resource.viewCount;
    document.getElementById('likeCount').textContent = resource.likeCount;
    
    // 渲染列表
    renderVideoList(resource.videos);
    renderDocumentList(resource.documents);
}

// 页面初始化
document.addEventListener('DOMContentLoaded', loadResourceDetail);