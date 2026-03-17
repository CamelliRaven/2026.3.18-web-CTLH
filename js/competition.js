// 比赛数据（20 条）
const competitions = [
    {
        id: 1,
        title: '全国大学生创新创业大赛',
        description: '面向全国高校学生的综合性创新创业竞赛',
        deadline: '2026-03-15',
        status: 'ongoing',
        link: 'http://cy.ncss.cn/',
        views: 1280
    },
    {
        id: 2,
        title: '中国互联网 + 大学生创新创业大赛',
        description: '教育部主办的国家级创新创业赛事',
        deadline: '2026-04-20',
        status: 'upcoming',
        link: 'http://cy.ncss.cn/',
        views: 2560
    },
    {
        id: 3,
        title: '挑战杯全国大学生课外学术科技作品竞赛',
        description: '被誉为中国大学生学术科技的奥林匹克',
        deadline: '2026-02-28',
        status: 'ongoing',
        link: 'http://www.tiaozhanbei.net/',
        views: 1890
    },
    {
        id: 4,
        title: '全国大学生程序设计竞赛 (CCPC)',
        description: '高水平的程序设计竞技比赛',
        deadline: '2026-01-10',
        status: 'ended',
        link: 'https://ccpc.io/',
        views: 3200
    },
    {
        id: 5,
        title: 'ACM 国际大学生程序设计竞赛',
        description: '全球最具影响力的大学生程序设计竞赛',
        deadline: '2026-05-30',
        status: 'upcoming',
        link: 'https://icpc.global/',
        views: 2890
    },
    {
        id: 6,
        title: '中国大学生计算机设计大赛',
        description: '教育部认可的全国性计算机类竞赛',
        deadline: '2026-03-01',
        status: 'ongoing',
        link: 'http://www.jsjds.net/',
        views: 1560
    },
    {
        id: 7,
        title: '全国大学生数学建模竞赛',
        description: '教育部高等教育司主办的全国性学科竞赛',
        deadline: '2026-09-15',
        status: 'upcoming',
        link: 'http://www.mcm.edu.cn/',
        views: 2100
    },
    {
        id: 8,
        title: '全国大学生电子设计竞赛',
        description: '教育部和工信部主办的电子类学科竞赛',
        deadline: '2026-08-10',
        status: 'upcoming',
        link: 'http://www.nuedc-training.com.cn/',
        views: 1750
    },
    {
        id: 9,
        title: '中国机器人大赛',
        description: '中国自动化学会主办的机器人技术竞赛',
        deadline: '2026-07-20',
        status: 'ongoing',
        link: 'http://www.chinaronbot.net/',
        views: 1420
    },
    {
        id: 10,
        title: '全国大学生智能汽车竞赛',
        description: '教育部高等学校自动化专业教学指导分委员会主办',
        deadline: '2026-06-15',
        status: 'ongoing',
        link: 'http://smartcar.tju.edu.cn/',
        views: 1680
    },
    {
        id: 11,
        title: '全国大学生信息安全竞赛',
        description: '教育部高等学校网络空间安全专业教学指导委员会主办',
        deadline: '2026-05-10',
        status: 'upcoming',
        link: 'http://www.ciscn.cn/',
        views: 1950
    },
    {
        id: 12,
        title: '中国大学生服务外包创新创业大赛',
        description: '教育部商务部联合主办的服务外包类竞赛',
        deadline: '2026-04-25',
        status: 'ongoing',
        link: 'http://www.chinasf.org/',
        views: 1320
    },
    {
        id: 13,
        title: '全国大学生广告艺术大赛',
        description: '教育部高等教育司主办的广告艺术类竞赛',
        deadline: '2026-06-30',
        status: 'ongoing',
        link: 'http://www.sun-ada.net/',
        views: 1580
    },
    {
        id: 14,
        title: '全国大学生机械创新设计大赛',
        description: '教育部高等教育司主办的机械类学科竞赛',
        deadline: '2026-07-15',
        status: 'upcoming',
        link: 'http://www.nimedc.com/',
        views: 1240
    },
    {
        id: 15,
        title: '全国大学生化工设计竞赛',
        description: '中国化工教育协会主办的化工类学科竞赛',
        deadline: '2026-08-20',
        status: 'upcoming',
        link: 'http://www.iche.org.cn/',
        views: 1150
    },
    {
        id: 16,
        title: '全国大学生结构设计竞赛',
        description: '教育部高等教育司主办的土木类学科竞赛',
        deadline: '2026-10-15',
        status: 'upcoming',
        link: 'http://www.cces.org.cn/',
        views: 1380
    },
    {
        id: 17,
        title: '中国高校计算机大赛',
        description: '教育部指导的计算机类综合性竞赛',
        deadline: '2026-09-30',
        status: 'upcoming',
        link: 'https://www.c4c.org.cn/',
        views: 2200
    },
    {
        id: 18,
        title: '全国大学生物联网设计竞赛',
        description: '教育部高等学校计算机类专业教学指导委员会主办',
        deadline: '2026-07-25',
        status: 'ongoing',
        link: 'http://www.aiot.org.cn/',
        views: 1620
    },
    {
        id: 19,
        title: '全国大学生人工智能创新大赛',
        description: '中国人工智能学会主办的人工智能类竞赛',
        deadline: '2026-08-30',
        status: 'upcoming',
        link: 'http://www.caa.org.cn/',
        views: 1890
    },
    {
        id: 20,
        title: '全国大学生大数据技能竞赛',
        description: '教育部职业教育与成人教育司主办的大数据类竞赛',
        deadline: '2026-06-20',
        status: 'ongoing',
        link: 'http://www.bigdata.org.cn/',
        views: 1470
    }
];

// 通知数据（20 条）
const notices = [
    {
        id: 1,
        title: '关于 2026 年创新创业大赛报名的通知',
        date: '2026-01-20',
        link: 'http://cy.ncss.cn/',
        isTop: true
    },
    {
        id: 2,
        title: '挑战杯竞赛评审标准更新说明',
        date: '2026-01-18',
        link: 'http://www.tiaozhanbei.net/',
        isTop: false
    },
    {
        id: 3,
        title: 'CCPC 参赛团队信息填写指南',
        date: '2026-01-15',
        link: 'https://ccpc.io/',
        isTop: false
    },
    {
        id: 4,
        title: '计算机设计大赛常见问题解答 (FAQ)',
        date: '2026-01-10',
        link: 'http://www.jsjds.net/',
        isTop: false
    },
    {
        id: 5,
        title: '互联网 + 大赛政策解读',
        date: '2026-01-05',
        link: 'http://cy.ncss.cn/',
        isTop: false
    },
    {
        id: 6,
        title: '数学建模竞赛报名流程说明',
        date: '2026-01-03',
        link: 'http://www.mcm.edu.cn/',
        isTop: false
    },
    {
        id: 7,
        title: '电子设计竞赛赛区分配通知',
        date: '2025-12-28',
        link: 'http://www.nuedc-training.com.cn/',
        isTop: false
    },
    {
        id: 8,
        title: '机器人大赛技术规则更新',
        date: '2025-12-25',
        link: 'http://www.chinaronbot.net/',
        isTop: false
    },
    {
        id: 9,
        title: '智能汽车竞赛赛道设计规范',
        date: '2025-12-20',
        link: 'http://smartcar.tju.edu.cn/',
        isTop: false
    },
    {
        id: 10,
        title: '信息安全竞赛题型说明',
        date: '2025-12-18',
        link: 'http://www.ciscn.cn/',
        isTop: false
    },
    {
        id: 11,
        title: '服务外包大赛企业命题发布',
        date: '2025-12-15',
        link: 'http://www.chinasf.org/',
        isTop: false
    },
    {
        id: 12,
        title: '广告艺术大赛作品提交要求',
        date: '2025-12-12',
        link: 'http://www.sun-ada.net/',
        isTop: false
    },
    {
        id: 13,
        title: '机械创新设计大赛材料清单',
        date: '2025-12-10',
        link: 'http://www.nimedc.com/',
        isTop: false
    },
    {
        id: 14,
        title: '化工设计竞赛安全规范通知',
        date: '2025-12-08',
        link: 'http://www.iche.org.cn/',
        isTop: false
    },
    {
        id: 15,
        title: '结构设计竞赛荷载标准更新',
        date: '2025-12-05',
        link: 'http://www.cces.org.cn/',
        isTop: false
    },
    {
        id: 16,
        title: '高校计算机大赛分组规则',
        date: '2025-12-01',
        link: 'https://www.c4c.org.cn/',
        isTop: false
    },
    {
        id: 17,
        title: '物联网设计竞赛硬件平台说明',
        date: '2025-11-28',
        link: 'http://www.aiot.org.cn/',
        isTop: false
    },
    {
        id: 18,
        title: '人工智能创新大赛数据集发布',
        date: '2025-11-25',
        link: 'http://www.caa.org.cn/',
        isTop: false
    },
    {
        id: 19,
        title: '大数据技能竞赛环境配置指南',
        date: '2025-11-20',
        link: 'http://www.bigdata.org.cn/',
        isTop: false
    },
    {
        id: 20,
        title: '2026 年度竞赛日历发布通知',
        date: '2025-11-15',
        link: 'http://cy.ncss.cn/',
        isTop: false
    }
];

// 状态配置
const statusConfig = {
    'ongoing': { name: '进行中', class: 'bg-success' },
    'upcoming': { name: '即将开始', class: 'bg-warning text-dark' },
    'ended': { name: '已结束', class: 'bg-secondary' }
};

// 分页配置
const ITEMS_PER_PAGE = 6; // 每页显示 6 个比赛
let currentPage = 1;
let totalPage = Math.ceil(competitions.length / ITEMS_PER_PAGE);

// 通知配置
const NOTICE_DEFAULT_COUNT = 8; // 默认显示 8 条通知
let isNoticeExpanded = false;

// 渲染比赛卡片
function renderCompetitions(data) {
    const container = document.getElementById('competitionList');
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '<div class="col-12 text-center text-muted py-4">暂无比赛信息</div>';
        return;
    }
    
    container.innerHTML = data.map(item => {
        const status = statusConfig[item.status];
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 competition-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title fw-bold mb-0">${item.title}</h5>
                            <span class="badge ${status.class}">${status.name}</span>
                        </div>
                        <p class="card-text text-muted small mb-3">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="text-muted small">
                                <span class="me-3">📅 截止：${item.deadline}</span>
                                <span>👁 ${item.views}</span>
                            </div>
                            <a href="${item.link}" target="_blank" class="btn btn-primary btn-sm">
                                查看详情 🔗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 渲染分页
function renderPagination() {
    const container = document.getElementById('competitionPagination');
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
                const start = (currentPage - 1) * ITEMS_PER_PAGE;
                const end = start + ITEMS_PER_PAGE;
                renderCompetitions(competitions.slice(start, end));
                renderPagination();
                // 滚动到比赛列表顶部
                document.getElementById('competitionSection').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 渲染通知列表
function renderNotices(data, showAll = false) {
    const container = document.getElementById('noticeList');
    const moreBtn = document.getElementById('noticeMoreBtn');
    const toggleBtn = document.getElementById('toggleNoticeBtn');
    
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '<div class="text-center text-muted py-4">暂无通知</div>';
        if (moreBtn) moreBtn.style.display = 'none';
        return;
    }
    
    // 判断是否显示全部
    const displayData = showAll ? data : data.slice(0, NOTICE_DEFAULT_COUNT);
    
    container.innerHTML = displayData.map(item => `
        <a href="${item.link}" target="_blank" class="list-group-item list-group-item-action py-3">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h6 class="mb-1 fw-bold ${item.isTop ? 'text-danger' : ''}">
                        ${item.isTop ? '🔝 ' : ''}${item.title}
                    </h6>
                </div>
                <span class="text-muted small">${item.date}</span>
            </div>
        </a>
    `).join('');
    
    // 控制查看更多按钮显示
    if (moreBtn) {
        if (data.length > NOTICE_DEFAULT_COUNT) {
            moreBtn.style.display = 'block';
            if (toggleBtn) {
                toggleBtn.textContent = showAll ? '收起 ▲' : '查看更多 ▼';
            }
        } else {
            moreBtn.style.display = 'none';
        }
    }
}

// 渲染热门资讯
function renderHotList() {
    const container = document.getElementById('hotList');
    const hotData = [...competitions].sort((a, b) => b.views - a.views).slice(0, 5);
    
    container.innerHTML = hotData.map((item, index) => `
        <li class="mb-3 pb-3 ${index !== hotData.length - 1 ? 'border-bottom' : ''}">
            <div class="d-flex align-items-start">
                <span class="badge ${index < 3 ? 'bg-danger' : 'bg-secondary'} me-2">${index + 1}</span>
                <div>
                    <a href="${item.link}" target="_blank" class="text-decoration-none text-dark fw-bold">${item.title}</a>
                    <div class="text-muted small">${item.views} 次浏览</div>
                </div>
            </div>
        </li>
    `).join('');
}

// 筛选功能
function filterData() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const type = document.getElementById('typeSelect').value;
    const status = document.getElementById('statusSelect').value;
    
    let filteredCompetitions = [...competitions];
    let filteredNotices = [...notices];
    
    // 筛选比赛
    filteredCompetitions = filteredCompetitions.filter(item => {
        const matchKeyword = !keyword || item.title.toLowerCase().includes(keyword);
        const matchStatus = !status || item.status === status;
        return matchKeyword && matchStatus;
    });
    
    // 筛选通知
    filteredNotices = filteredNotices.filter(item => {
        return !keyword || item.title.toLowerCase().includes(keyword);
    });
    
    // 重置分页
    currentPage = 1;
    totalPage = Math.ceil(filteredCompetitions.length / ITEMS_PER_PAGE);
    
    // 按类型显示（全部类型也只显示比赛链接）
    if (type === 'competition' || type === '') {
        // 只显示比赛链接
        document.getElementById('noticeSection').style.display = 'none';
        document.getElementById('competitionSection').style.display = 'block';
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        renderCompetitions(filteredCompetitions.slice(start, end));
        renderPagination();
    } else if (type === 'notice') {
        // 只显示大赛通知
        document.getElementById('competitionSection').style.display = 'none';
        document.getElementById('noticeSection').style.display = 'block';
        renderNotices(filteredNotices, isNoticeExpanded);
    }
}

// 订阅通知
function initSubscribeBtn() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('订阅功能开发中，敬请期待！');
        });
    }
}

// 初始化通知展开按钮
function initNoticeToggleBtn() {
    const toggleBtn = document.getElementById('toggleNoticeBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            isNoticeExpanded = !isNoticeExpanded;
            renderNotices(notices, isNoticeExpanded);
        });
    }
}

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    // 渲染第一页比赛
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    renderCompetitions(competitions.slice(start, end));
    
    // 渲染分页
    renderPagination();
    
    // 渲染通知（默认 8 条）
    renderNotices(notices, false);
    
    // 渲染热门资讯
    renderHotList();
    
    // 初始化按钮
    initSubscribeBtn();
    initNoticeToggleBtn();
    
    // 绑定事件
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const typeSelect = document.getElementById('typeSelect');
    const statusSelect = document.getElementById('statusSelect');
    
    if (searchBtn) searchBtn.addEventListener('click', filterData);
    if (searchInput) searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') filterData();
    });
    if (typeSelect) typeSelect.addEventListener('change', filterData);
    if (statusSelect) statusSelect.addEventListener('change', filterData);
});