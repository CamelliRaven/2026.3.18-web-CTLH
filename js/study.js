// 滚动动画 - 资源列表淡入
document.addEventListener('DOMContentLoaded', function() {
    const resourceSection = document.getElementById('resourceList');
    const cards = document.querySelectorAll('.study-card');
    
    // 监听滚动
    window.addEventListener('scroll', function() {
        const sectionTop = resourceSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // 当资源列表进入视口时触发
        if (sectionTop < windowHeight * 0.8) {
            resourceSection.classList.add('visible');
            
            // 卡片逐个显示
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('card-visible');
                }, index * 150);
            });
        }
    });
    
    // 页面加载时触发一次
    window.dispatchEvent(new Event('scroll'));
});
