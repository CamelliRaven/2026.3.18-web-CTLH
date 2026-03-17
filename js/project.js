// js/project.js

// 项目数据（12 条，每页 6 个）
const projects = [
    // 第一页
    {
        id: 1,
        title: '智能学习平台',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['Vue3', 'Node.js', 'AI 推荐'],
        description: '基于 AI 的个性化学习系统，支持多科目智能推荐。',
        stars: 128,
        views: '2.3k',
        link: 'project-detail.html?id=1'
    },
    {
        id: 2,
        title: '社区管理系统',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['React Native', 'MongoDB', 'JWT'],
        description: '完整的社区管理解决方案，包含用户、内容、权限管理。',
        stars: 256,
        views: '5.1k',
        link: 'project-detail.html?id=2'
    },
    {
        id: 3,
        title: '数据可视化引擎',
        category: 'data',
        categoryName: '数据分析',
        techStack: ['D3.js', 'TypeScript', 'WebGL'],
        description: '高性能图表渲染库，支持多种数据源和自定义主题。',
        stars: 89,
        views: '1.8k',
        link: 'project-detail.html?id=3'
    },
    {
        id: 4,
        title: 'AI 图像识别',
        category: 'ai',
        categoryName: '人工智能',
        techStack: ['PyTorch', 'CNN', 'Python'],
        description: '深度学习图像分类模型，支持自定义训练和部署。',
        stars: 342,
        views: '8.7k',
        link: 'project-detail.html?id=4'
    },
    {
        id: 5,
        title: '在线协作工具',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['WebSocket', 'Vue3', 'Redis'],
        description: '实时多人协作编辑平台，支持文档、表格、白板。',
        stars: 176,
        views: '3.2k',
        link: 'project-detail.html?id=5'
    },
    {
        id: 6,
        title: '电商小程序',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['微信小程序', '云开发', '支付 API'],
        description: '完整的电商解决方案，包含商品、订单、支付模块。',
        stars: 203,
        views: '4.5k',
        link: 'project-detail.html?id=6'
    },
    // 第二页
    {
        id: 7,
        title: '智慧校园 APP',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['Flutter', 'Firebase', 'Google Maps'],
        description: '校园生活一站式服务，包含课表、成绩、地图导航等功能。',
        stars: 167,
        views: '3.8k',
        link: 'project-detail.html?id=7'
    },
    {
        id: 8,
        title: '博客内容管理系统',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['React', 'Express', 'MySQL'],
        description: '轻量级博客 CMS，支持 Markdown 编辑、SEO 优化、评论系统。',
        stars: 214,
        views: '4.2k',
        link: 'project-detail.html?id=8'
    },
    {
        id: 9,
        title: '情感分析系统',
        category: 'ai',
        categoryName: '人工智能',
        techStack: ['TensorFlow', 'BERT', 'Flask'],
        description: '基于深度学习的文本情感分析，支持多语言识别。',
        stars: 298,
        views: '6.5k',
        link: 'project-detail.html?id=9'
    },
    {
        id: 10,
        title: '销售数据看板',
        category: 'data',
        categoryName: '数据分析',
        techStack: ['ECharts', 'Python', 'Pandas'],
        description: '企业销售数据可视化分析平台，支持实时数据更新。',
        stars: 145,
        views: '2.9k',
        link: 'project-detail.html?id=10'
    },
    {
        id: 11,
        title: '在线代码编辑器',
        category: 'web',
        categoryName: 'Web 开发',
        techStack: ['Monaco Editor', 'Node.js', 'Docker'],
        description: '支持多语言的在线代码编辑和运行环境，类似 LeetCode。',
        stars: 387,
        views: '7.1k',
        link: 'project-detail.html?id=11'
    },
    {
        id: 12,
        title: '健康运动追踪',
        category: 'mobile',
        categoryName: '移动应用',
        techStack: ['Swift', 'HealthKit', 'CoreML'],
        description: 'iOS 健康应用，记录运动数据并提供智能健身建议。',
        stars: 192,
        views: '3.6k',
        link: 'project-detail.html?id=12'
    }
];

// 分页配置
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let totalPage = Math.ceil(projects.length / ITEMS_PER_PAGE);
let currentCategory = '';
let searchKeyword = '';

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

// 渲染项目卡片
function renderProjects(data) {
    const container = document.getElementById('projectList');
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <i class="bi bi-inbox" style="font-size: 3rem;"></i>
                <p class="mt-3">暂无项目数据</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = data.map(item => `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm project-card" onclick="window.location.href='${item.link}'">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h5 class="card-title fw-bold mb-0">${item.title}</h5>
                        <span class="badge bg-${getCategoryBadge(item.category)}">${item.categoryName}</span>
                    </div>
                    <div class="tech-tags mb-3">
                        ${item.techStack.map(tech => `<span class="badge bg-light text-dark border me-1 mb-1">${tech}</span>`).join('')}
                    </div>
                    <p class="card-text text-muted small">${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染分页
function renderPagination() {
    const container = document.getElementById('projectPagination');
    if (!container) return;
    
    if (totalPage <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<ul class="pagination justify-content-center">';
    
    // 上一页
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage - 1}">上一页</a>
    </li>`;
    
    // 页码
    for (let i = 1; i <= totalPage; i++) {
        html += `<li class="page-item ${i === currentPage ? 'active' : ''}">
            <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>`;
    }
    
    // 下一页
    html += `<li class="page-item ${currentPage === totalPage ? 'disabled' : ''}">
        <a class="page-link" href="#" data-page="${currentPage + 1}">下一页</a>
    </li>`;
    
    html += '</ul>';
    container.innerHTML = html;
    
    // 绑定分页点击事件
    container.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (page >= 1 && page <= totalPage && page !== currentPage) {
                currentPage = page;
                filterAndRender();
                document.getElementById('projectListSection').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 筛选并渲染
function filterAndRender() {
    let filteredData = [...projects];
    
    // 按分类筛选
    if (currentCategory) {
        filteredData = filteredData.filter(item => item.category === currentCategory);
    }
    
    // 按关键词搜索
    if (searchKeyword) {
        filteredData = filteredData.filter(item => 
            item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.techStack.some(tech => tech.toLowerCase().includes(searchKeyword.toLowerCase()))
        );
    }
    
    // 更新总页数
    totalPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    
    // 重置到第一页
    if (currentPage > totalPage) {
        currentPage = 1;
    }
    
    // 计算当前页数据
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    
    renderProjects(filteredData.slice(start, end));
    renderPagination();
    updateResultCount(filteredData.length);
}

// 更新结果统计
function updateResultCount(count) {
    const resultInfo = document.getElementById('resultInfo');
    if (resultInfo) {
        resultInfo.textContent = `共找到 ${count} 个项目`;
    }
}

// 初始化搜索功能
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchKeyword = searchInput.value.trim();
            currentPage = 1;
            filterAndRender();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchKeyword = this.value.trim();
                currentPage = 1;
                filterAndRender();
            }
        });
    }
}

// 初始化分类筛选
function initCategoryFilter() {
    const categorySelect = document.getElementById('categorySelect');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            currentCategory = this.value;
            currentPage = 1;
            filterAndRender();
        });
    }
}

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initCategoryFilter();
    filterAndRender();
});