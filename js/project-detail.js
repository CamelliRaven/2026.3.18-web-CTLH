// 项目数据（
const projects = [
    {
        id: 1,
        title: '智能学习平台',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['Vue3', 'Node.js', 'AI 推荐算法', 'MongoDB', 'Redis', 'Docker'],
        description: '智能学习平台是一款基于人工智能技术的个性化学习系统。平台通过分析用户的学习行为、知识掌握程度和学习习惯，为每位用户生成专属的学习路径和内容推荐。系统支持多科目学习，包括数学、物理、化学、编程等，并提供实时反馈和进度追踪功能，帮助用户高效提升学习效果。',
        expectedResults: [
            '完成用户学习行为分析模块',
            '实现个性化内容推荐引擎',
            '构建多科目知识图谱',
            '开发学习进度可视化面板',
            '支持至少 5 个学科的完整学习内容',
            '用户学习效率提升 30% 以上'
        ],
        stars: 128,
        views: '2.3k',
        date: '2026-01-15',
        leader: 'A',
        cycle: '3 个月',
        status: '进行中',
        teamSize: '5 人',
        updateTime: '2026-01-20',
        pdfFile: '/pdfs/智能学习平台项目计划书.pdf'
    },
    {
        id: 2,
        title: '社区管理系统',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['React Native', 'MongoDB', 'JWT', 'Redux', 'Node.js'],
        description: '完整的社区管理解决方案，包含用户管理、内容审核、权限控制等核心功能。系统支持多端访问，提供丰富的社区互动功能，如帖子发布、评论、点赞、私信等。管理员可以通过后台进行内容审核、用户管理、数据统计等操作。',
        expectedResults: [
            '实现用户注册登录系统',
            '完成帖子发布和评论功能',
            '构建权限管理系统',
            '开发后台管理面板',
            '支持图片视频上传'
        ],
        stars: 256,
        views: '5.1k',
        date: '2026-01-10',
        leader: 'B',
        cycle: '4 个月',
        status: '进行中',
        teamSize: '4 人',
        updateTime: '2026-01-18',
        pdfFile: '/pdfs/社区管理系统项目计划书.pdf'
    },
    {
        id: 3,
        title: '数据可视化引擎',
        category: 'data',
        categoryName: '数据分析',
        techStack: ['D3.js', 'TypeScript', 'WebGL', 'React', 'Webpack'],
        description: '高性能图表渲染库，支持多种数据源和自定义主题。提供丰富的图表类型，包括折线图、柱状图、饼图、散点图、热力图等。支持大数据量渲染和实时数据更新，适用于数据看板、报表系统等场景。',
        expectedResults: [
            '实现 20+ 种图表类型',
            '支持大数据量渲染',
            '提供自定义主题配置',
            '支持实时数据更新',
            '编写完整 API 文档'
        ],
        stars: 89,
        views: '1.8k',
        date: '2026-01-08',
        leader: 'C',
        cycle: '5 个月',
        status: '进行中',
        teamSize: '3 人',
        updateTime: '2026-01-16',
        pdfFile: '/pdfs/数据可视化引擎项目计划书.pdf'
    },
    {
        id: 4,
        title: 'AI 图像识别',
        category: 'ai',
        categoryName: '人工智能',
        techStack: ['PyTorch', 'CNN', 'Python', 'OpenCV', 'Flask'],
        description: '深度学习图像分类模型，支持自定义训练和部署。基于卷积神经网络实现图像识别功能，支持多种常见物体分类。提供 RESTful API 接口，方便集成到其他应用中。',
        expectedResults: [
            '实现图像分类模型',
            '支持 100+ 类别识别',
            '提供 API 接口',
            '准确率达到 95% 以上',
            '支持批量处理'
        ],
        stars: 342,
        views: '8.7k',
        date: '2026-01-05',
        leader: 'D',
        cycle: '6 个月',
        status: '进行中',
        teamSize: '6 人',
        updateTime: '2026-01-19',
        pdfFile: '/pdfs/AI图像识别项目计划书.pdf'
    },
    {
        id: 5,
        title: '在线协作工具',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['WebSocket', 'Vue3', 'Redis', 'Node.js', 'MongoDB'],
        description: '实时多人协作编辑平台，支持文档、表格、白板等多种协作场景。采用操作转换算法解决冲突问题，保证数据一致性。支持离线编辑和自动保存功能。',
        expectedResults: [
            '实现实时协作编辑',
            '支持多人同时编辑',
            '解决数据冲突问题',
            '支持离线编辑',
            '提供版本历史记录'
        ],
        stars: 176,
        views: '3.2k',
        date: '2026-01-12',
        leader: 'E',
        cycle: '4 个月',
        status: '进行中',
        teamSize: '5 人',
        updateTime: '2026-01-20',
        pdfFile: '/pdfs/在线协作工具项目计划书.pdf'
    },
    {
        id: 6,
        title: '电商小程序',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['微信小程序', '云开发', '支付 API', '云数据库'],
        description: '完整的电商解决方案，包含商品管理、订单处理、支付模块等核心功能。支持商品分类、搜索、购物车、订单跟踪等功能。集成微信支付，提供完整的购物流程。',
        expectedResults: [
            '实现商品展示和搜索',
            '完成购物车功能',
            '集成微信支付',
            '实现订单管理系统',
            '支持物流跟踪'
        ],
        stars: 203,
        views: '4.5k',
        date: '2026-01-07',
        leader: 'F',
        cycle: '3 个月',
        status: '已完成',
        teamSize: '4 人',
        updateTime: '2026-01-15',
        pdfFile: '/pdfs/电商小程序项目计划书.pdf'
    },
    {
        id: 7,
        title: '智慧校园 APP',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['Flutter', 'Firebase', 'Google Maps', 'REST API'],
        description: '校园生活一站式服务，包含课表查询、成绩查询、地图导航、图书馆预约等功能。支持多校区切换，提供个性化消息推送服务。',
        expectedResults: [
            '实现课表查询功能',
            '完成成绩查询系统',
            '集成校园地图导航',
            '支持图书馆预约',
            '提供消息推送服务'
        ],
        stars: 167,
        views: '3.8k',
        date: '2026-01-09',
        leader: 'G',
        cycle: '5 个月',
        status: '进行中',
        teamSize: '6 人',
        updateTime: '2026-01-17',
        pdfFile: '/pdfs/智慧校园APP项目计划书.pdf'
    },
    {
        id: 8,
        title: '博客内容管理系统',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['React', 'Express', 'MySQL', 'Markdown', 'SEO'],
        description: '轻量级博客 CMS，支持 Markdown 编辑、SEO 优化、评论系统。提供丰富的主题模板，支持自定义样式。内置文章统计和数据分析功能。',
        expectedResults: [
            '实现 Markdown 编辑器',
            '完成 SEO 优化',
            '构建评论系统',
            '提供多主题模板',
            '支持文章统计分析'
        ],
        stars: 214,
        views: '4.2k',
        date: '2026-01-11',
        leader: 'H',
        cycle: '3 个月',
        status: '进行中',
        teamSize: '3 人',
        updateTime: '2026-01-19',
        pdfFile: '/pdfs/博客内容管理系统项目计划书.pdf'
    },
    {
        id: 9,
        title: '情感分析系统',
        category: 'ai',
        categoryName: '人工智能',
        techStack: ['TensorFlow', 'BERT', 'Flask', 'Python', 'NLP'],
        description: '基于深度学习的文本情感分析，支持多语言识别。采用 BERT 预训练模型，提供准确的情感分类结果。支持批量处理和实时分析。',
        expectedResults: [
            '实现情感分析模型',
            '支持多语言识别',
            '提供 API 接口',
            '准确率达到 90% 以上',
            '支持批量处理'
        ],
        stars: 298,
        views: '6.5k',
        date: '2026-01-06',
        leader: 'I',
        cycle: '4 个月',
        status: '进行中',
        teamSize: '4 人',
        updateTime: '2026-01-18',
        pdfFile: '/pdfs/情感分析系统项目计划书.pdf'
    },
    {
        id: 10,
        title: '销售数据看板',
        category: 'data',
        categoryName: '数据分析',
        techStack: ['ECharts', 'Python', 'Pandas', 'Flask', 'MySQL'],
        description: '企业销售数据可视化分析平台，支持实时数据更新。提供多维度数据分析，包括销售额、客户分布、产品热度等。支持数据导出和报表生成。',
        expectedResults: [
            '实现数据可视化展示',
            '支持实时数据更新',
            '提供多维度分析',
            '支持数据导出',
            '生成自动化报表'
        ],
        stars: 145,
        views: '2.9k',
        date: '2026-01-13',
        leader: 'J',
        cycle: '3 个月',
        status: '进行中',
        teamSize: '4 人',
        updateTime: '2026-01-20',
        pdfFile: '/pdfs/销售数据看板项目计划书.pdf'
    },
    {
        id: 11,
        title: '在线代码编辑器',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['Monaco Editor', 'Node.js', 'Docker', 'WebSocket', 'Redis'],
        description: '支持多语言的在线代码编辑和运行环境，类似 LeetCode。提供代码高亮、自动补全、语法检查等功能。支持代码提交和在线评测。',
        expectedResults: [
            '实现代码编辑器',
            '支持 10+ 编程语言',
            '构建在线运行环境',
            '实现代码评测系统',
            '提供题目管理功能'
        ],
        stars: 387,
        views: '7.1k',
        date: '2026-01-04',
        leader: 'K',
        cycle: '6 个月',
        status: '进行中',
        teamSize: '7 人',
        updateTime: '2026-01-19',
        pdfFile: '/pdfs/在线代码编辑器项目计划书.pdf'
    },
    {
        id: 12,
        title: '健康运动追踪',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['Swift', 'HealthKit', 'CoreML', 'CloudKit'],
        description: 'iOS 健康应用，记录运动数据并提供智能健身建议。支持步数、心率、睡眠等健康数据追踪。基于机器学习提供个性化运动建议。',
        expectedResults: [
            '实现健康数据追踪',
            '集成 HealthKit',
            '提供运动建议',
            '支持数据同步',
            '生成健康报告'
        ],
        stars: 192,
        views: '3.6k',
        date: '2026-01-14',
        leader: 'L',
        cycle: '4 个月',
        status: '进行中',
        teamSize: '3 人',
        updateTime: '2026-01-20',
        pdfFile: '/pdfs/健康运动追踪应用项目计划书.pdf'
    }
];

// 获取分类徽章颜色
function getCategoryBadge(category) {
    const badges = {
        'web': 'primary',
        'mobile': 'success',
        'ai': 'warning',
        'data': 'info'
    };
    return badges[category] || 'secondary';
}

// 获取状态徽章
function getStatusBadge(status) {
    const badges = {
        '进行中': 'success',
        '已完成': 'secondary',
        '已上线': 'primary'
    };
    return badges[status] || 'secondary';
}

// 根据 ID 获取项目数据
function getProjectById(id) {
    return projects.find(item => item.id === parseInt(id));
}

        // 渲染项目详情
    function renderProjectDetail(project) {
        if (!project) {
            document.body.innerHTML = `
                <div class="container py-5 text-center">
                    <h1 class="text-muted">项目不存在</h1>
                    <a href="project.html" class="btn btn-primary mt-3">返回项目列表</a>
                </div>
            `;
            return;
        }

        // 更新页面标题
        document.title = `${project.title} - 创途领航`;

        // 更新项目标题区域
        const titleBadge = document.querySelector('.badge.bg-primary, .badge.bg-success, .badge.bg-warning, .badge.bg-info');
        if (titleBadge) {
            titleBadge.className = `badge bg-${getCategoryBadge(project.category)}`;
            titleBadge.textContent = project.categoryName;
        }

        // 更新统计信息
        const stats = document.querySelectorAll('.text-muted.small');
        if (stats.length >= 3) {
            stats[0].textContent = `⭐ ${project.stars}`;
            stats[1].textContent = `👁 ${project.views}`;
            stats[2].textContent = `📅 ${project.date}`;
        }

        // 更新项目简介（选择项目简介卡片下的 p 标签）
        const introCard = document.querySelectorAll('.card.border-0.shadow-sm')[0];
        if (introCard) {
            const descParagraphs = introCard.querySelectorAll('.card-text.text-muted');
            if (descParagraphs.length >= 2) {
                // 将长描述分成两段
                const midPoint = Math.ceil(project.description.length / 2);
                descParagraphs[0].textContent = project.description.substring(0, midPoint);
                descParagraphs[1].textContent = project.description.substring(midPoint);
            }
        }

        // 更新核心技术（选择核心技术卡片下的标签容器）
        const techCard = document.querySelectorAll('.card.border-0.shadow-sm')[1];
        if (techCard) {
            const techContainer = techCard.querySelector('.d-flex.flex-wrap.gap-2');
            if (techContainer) {
                techContainer.innerHTML = project.techStack.map(tech => 
                    `<span class="badge bg-light text-dark border p-2">${tech}</span>`
                ).join('');
            }
        }

        // 更新预期成果（选择预期成果卡片下的列表）
        const resultsCard = document.querySelectorAll('.card.border-0.shadow-sm')[2];
        if (resultsCard) {
            const resultsList = resultsCard.querySelector('.list-unstyled.mb-0');
            if (resultsList) {
                resultsList.innerHTML = project.expectedResults.map(result => 
                    `<li class="mb-2">✅ ${result}</li>`
                ).join('');
            }
        }

        // 更新右侧项目信息
        const infoCard = document.querySelector('.col-lg-4 .card.border-0.shadow-sm');
        if (infoCard) {
            const infoItems = infoCard.querySelectorAll('.list-unstyled.mb-0 li');
            if (infoItems.length >= 5) {
                infoItems[0].querySelector('p').textContent = project.leader;
                infoItems[1].querySelector('p').textContent = project.cycle;
                infoItems[2].querySelector('p').innerHTML = `<span class="badge bg-${getStatusBadge(project.status)}">${project.status}</span>`;
                infoItems[3].querySelector('p').textContent = project.teamSize;
                infoItems[4].querySelector('p').textContent = project.updateTime;
            }
        }

        // 更新项目标题
        const titleElement = document.querySelector('h1.fw-bold.mb-2');
        if (titleElement) {
            titleElement.textContent = project.title;
        }

        // 更新PDF下载链接和信息
        const pdfFileName = document.getElementById('pdfFileName');
        const pdfUploadDate = document.getElementById('pdfUploadDate');
        const downloadPdfBtn = document.getElementById('downloadPdfBtn');
        const pdfInfoContainer = document.getElementById('pdfInfoContainer');

        if (pdfFileName && pdfUploadDate && downloadPdfBtn) {
            // 从PDF路径中提取文件名
            const fileName = project.pdfFile.split('/').pop();
            pdfFileName.textContent = fileName;
            pdfUploadDate.textContent = `上传时间：${project.date}`;
            downloadPdfBtn.href = project.pdfFile;
            downloadPdfBtn.download = fileName;
        } else {
            // 如果找不到动态元素，则更新静态内容
            const staticPdfLink = document.querySelector('.card.border-0.shadow-sm .btn-primary[href*="/pdfs/"]');
            if (staticPdfLink) {
                staticPdfLink.href = project.pdfFile;
                staticPdfLink.download = project.pdfFile.split('/').pop();
            }
        }
    }

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    console.log('当前项目 ID:', projectId);
    
    // 获取项目数据并渲染
    const project = getProjectById(projectId);
    renderProjectDetail(project);
});