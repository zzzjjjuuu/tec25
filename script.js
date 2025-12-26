// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // 页面加载动画
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 100);
    
    // 链接悬停效果增强
    const links = document.querySelectorAll('.nav-links a, .link-button');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 主页文字动画
    const homepageText = document.querySelector('.homepage');
    if (homepageText) {
        const texts = homepageText.querySelectorAll('h1, p');
        texts.forEach((text, index) => {
            text.style.opacity = '0';
            text.style.transform = 'translateY(30px)';
            text.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }
});

// 窗口调整大小时的处理
window.addEventListener('resize', function() {
    // 可以在这里添加响应式调整逻辑
});

// 简单的错误处理
window.addEventListener('error', function(e) {
    console.log('发生错误:', e.error);
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面不可见时的处理
    } else {
        // 页面可见时的处理
    }
});