// 用户证言滚动类
class TestimonialScroller {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.warn(`找不到ID为 ${containerId} 的元素`);
            return;
        }

        this.originalCards = Array.from(this.container.children);
        this.scrollSpeed = 30; // 滚动速度（秒）
        this.isAnimating = false;
        this.isPaused = false;

        this.init();
    }

    init() {
        this.setupInfiniteScroll();
        this.startAnimation();
        this.setupInteractions();

        // 监听窗口大小变化，重新计算
        window.addEventListener('resize', () => {
            this.resetAnimation();
        });
    }

    setupInfiniteScroll() {
        // 清除之前的复制卡片
        this.container.innerHTML = '';

        // 添加原始卡片
        this.originalCards.forEach(card => {
            this.container.appendChild(card.cloneNode(true));
        });

        // 计算一个卡片的宽度（包括gap）
        const firstCard = this.container.children[0];
        const cardStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(this.container).gap) || 24;

        // 计算容器可视宽度
        const containerWidth = this.container.parentElement.offsetWidth;

        // 计算需要多少卡片才能填满屏幕
        const cardsNeededForScreen = Math.ceil(containerWidth / (cardWidth + gap)) + 2;

        // 如果原始卡片数量不够填满屏幕，需要复制更多
        const totalCardsNeeded = Math.max(this.originalCards.length * 2, cardsNeededForScreen * 2);

        // 复制卡片直到达到需要的数量
        let currentCardCount = this.originalCards.length;
        while (currentCardCount < totalCardsNeeded) {
            this.originalCards.forEach(card => {
                if (currentCardCount < totalCardsNeeded) {
                    this.container.appendChild(card.cloneNode(true));
                    currentCardCount++;
                }
            });
        }

        // 计算总宽度和滚动距离
        this.totalWidth = this.container.scrollWidth;
        this.singleSetWidth = this.originalCards.length * (cardWidth + gap);
    }

    startAnimation() {
        if (this.isAnimating) return;

        // 创建唯一的动画名称
        this.animationName = `testimonial-scroll-${Date.now()}`;

        // 创建CSS动画
        const styleSheet = document.styleSheets[0] || document.createElement('style').sheet;

        // 删除旧的动画规则
        try {
            for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
                if (styleSheet.cssRules[i].name && styleSheet.cssRules[i].name.startsWith('testimonial-scroll')) {
                    styleSheet.deleteRule(i);
                }
            }
        } catch (e) {
            // 忽略删除规则时的错误
        }

        // 添加新的动画规则
        const keyframes = `
            @keyframes ${this.animationName} {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-${this.singleSetWidth}px);
                }
            }
        `;

        try {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        } catch (e) {
            // 如果插入失败，创建新的style标签
            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);
        }

        // 应用动画
        this.container.style.animation = `${this.animationName} ${this.scrollSpeed}s linear infinite`;
        this.isAnimating = true;
    }

    setupInteractions() {
        // 鼠标悬停暂停动画
        this.container.addEventListener('mouseenter', () => {
            this.pauseAnimation();
        });

        // 鼠标离开恢复动画
        this.container.addEventListener('mouseleave', () => {
            this.resumeAnimation();
        });

        // 移动端触摸支持
        if (window.innerWidth <= 767) {
            this.container.addEventListener('touchstart', () => {
                this.pauseAnimation();
            });

            this.container.addEventListener('touchend', () => {
                this.resumeAnimation();
            });
        }
    }

    pauseAnimation() {
        if (this.isAnimating && !this.isPaused) {
            this.container.style.animationPlayState = 'paused';
            this.isPaused = true;
        }
    }

    resumeAnimation() {
        if (this.isAnimating && this.isPaused) {
            this.container.style.animationPlayState = 'running';
            this.isPaused = false;
        }
    }

    resetAnimation() {
        // 停止当前动画
        this.container.style.animation = 'none';
        this.isAnimating = false;
        this.isPaused = false;

        // 重新设置
        setTimeout(() => {
            this.setupInfiniteScroll();
            this.startAnimation();
        }, 50);
    }
}

// 轮播图初始化
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (!track || slides.length === 0) {
        console.warn('轮播图元素未找到');
        return;
    }

    let currentIndex = 0;
    const slideCount = slides.length;
    let interval;

    // 3秒自动播放
    function startAutoPlay() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlidePosition();
        }, 3000);
    }

    // 更新轮播位置
    function updateSlidePosition() {
        const slideWidth = 100;
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // 点击指示器切换
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = parseInt(indicator.dataset.index);
            updateSlidePosition();
            startAutoPlay();
        });
    });

    // 鼠标悬停暂停
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });

        // 鼠标离开继续
        container.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }

    // 启动自动播放
    startAutoPlay();
}

// 功能卡片交互
function initFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');

    if (cards.length === 0) {
        console.warn('功能卡片元素未找到');
        return;
    }

    // 页面加载时展开第一个卡片
    const firstCard = cards[0];
    expandCard(firstCard);

    // 遍历所有卡片，添加鼠标悬停事件监听
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 收起所有卡片
            cards.forEach(c => collapseCard(c));
            // 展开当前悬停的卡片
            expandCard(card);
        });

        card.addEventListener('mouseleave', () => {
            // 收起当前卡片（仅当不是第一个卡片时）
            if (card !== cards[0]) {
                collapseCard(card);
            }
            // 重新展开第一个卡片
            expandCard(cards[0]);
        });
    });

    // 封装展开卡片的样式
    function expandCard(card) {
        card.style.height = 'auto';
        card.style.padding = '20px';
        card.style.backgroundColor = '#fff';
        card.style.borderRadius = '8px';
        card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';

        const featureText = card.querySelector('.feature-text p');
        const featureLink = card.querySelector('.feature-link');

        if (featureText) featureText.style.maxHeight = '100px';
        if (featureLink) featureLink.style.maxHeight = '50px';
    }

    // 封装收起卡片的样式
    function collapseCard(card) {
        card.style.height = '62px';
        card.style.padding = '10px 20px';
        card.style.backgroundColor = '';
        card.style.borderRadius = '';
        card.style.boxShadow = '';

        const featureText = card.querySelector('.feature-text p');
        const featureLink = card.querySelector('.feature-link');

        if (featureText) featureText.style.maxHeight = '0';
        if (featureLink) featureLink.style.maxHeight = '0';
    }
}

// 统一的初始化函数
function initializeAllComponents() {
    // 初始化轮播图
    initCarousel();

    // 初始化功能卡片
    initFeatureCards();

    // 初始化用户证言滚动（使用你HTML中的实际ID）
    // 请确保你的HTML中testimonials-grid容器有正确的ID
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        // 给容器添加ID（如果没有的话）
        if (!testimonialsGrid.id) {
            testimonialsGrid.id = 'testimonialsGrid';
        }
        new TestimonialScroller(testimonialsGrid.id);
    }
}

// 页面加载完成后初始化所有组件
document.addEventListener('DOMContentLoaded', initializeAllComponents);

// 如果页面已经加载完成，立即初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllComponents);
} else {
    initializeAllComponents();
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// 点击外部关闭移动菜单
document.addEventListener('click', function (e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('.header');

    if (!header.contains(e.target)) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// 窗口大小改变时关闭移动菜单
window.addEventListener('resize', function () {
    if (window.innerWidth > 1032) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});