/* ============================================
   Borneo Wild Realm | 婆罗野境
   品牌官网共享脚本
   ============================================ */

(function () {
  'use strict';

  /* ---------- 导航栏滚动效果 ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    });
  }

  /* ---------- 移动端菜单 ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- 滚动淡入动画 (Intersection Observer) ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // 降级处理：直接显示
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- 首页产品轮播 ---------- */
  const carousel = document.querySelector('.product-carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentIndex = 0;
    let autoTimer = null;
    const totalSlides = slides.length;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(nextSlide, 5000);
    }

    function stopAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { nextSlide(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prevSlide(); startAuto(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goToSlide(i); startAuto(); });
    });

    // 鼠标悬停暂停
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // 触摸滑动
    let touchStartX = 0;
    let touchEndX = 0;
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      startAuto();
    }, { passive: true });

    // 启动自动轮播
    if (totalSlides > 1) startAuto();
  }

  /* ---------- 联系表单（纯前端验证） ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // 简单验证
      let valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        } else {
          field.classList.remove('error');
        }
      });

      // 邮箱格式验证
      const emailField = contactForm.querySelector('#email');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          emailField.classList.add('error');
          valid = false;
        }
      }

      if (!valid) return;

      // 显示成功提示（实际部署时替换为后端API或第三方表单服务）
      const successMsg = contactForm.querySelector('.form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      contactForm.reset();

      // 5秒后隐藏成功提示
      setTimeout(function () {
        if (successMsg) successMsg.style.display = 'none';
      }, 5000);

      // ★ 部署提示：将此处替换为实际的后端提交逻辑
      // 例如使用 Formspree、Getform 等第三方表单服务：
      // fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
    });
  }

  /* ---------- 产品中心渲染 ---------- */
  const productGrid = document.querySelector('#product-grid');
  if (productGrid && typeof BWR_PRODUCTS !== 'undefined') {
    renderProducts(productGrid, BWR_PRODUCTS);
  }

  /* ---------- 首页新品轮播渲染 ---------- */
  const carouselTrack = document.querySelector('.carousel-track');
  if (carouselTrack && typeof BWR_PRODUCTS !== 'undefined' && !carouselTrack.children.length) {
    renderCarousel(carouselTrack, BWR_PRODUCTS);
  }

  /* ---------- 当前页面高亮 ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================
   产品渲染函数
   ============================================ */

function renderProducts(grid, products) {
  // 按分类分组
  var categories = {};
  products.forEach(function (p) {
    if (!categories[p.category]) categories[p.category] = [];
    categories[p.category].push(p);
  });

  var html = '';
  for (var cat in categories) {
    html += '<div class="product-category fade-in">';
    html += '<div class="category-header">';
    html += '<span class="category-tag">' + cat + '</span>';
    html += '<h3 class="category-name">' + getCategoryName(cat) + '</h3>';
    html += '<p class="category-desc">' + getCategoryDesc(cat) + '</p>';
    html += '</div>';
    html += '<div class="product-list">';

    categories[cat].forEach(function (p) {
      html += '<div class="product-card">';
      html += '<div class="product-image">' + (p.imageSvg || getProductPlaceholder(p)) + '</div>';
      html += '<div class="product-body">';
      html += '<h4 class="product-name">' + p.name + '</h4>';
      html += '<p class="product-tagline">' + p.tagline + '</p>';
      html += '<p class="product-desc">' + p.desc + '</p>';

      if (p.specs && p.specs.length) {
        html += '<ul class="product-specs">';
        p.specs.forEach(function (s) {
          html += '<li><span>' + s.label + '</span><span>' + s.value + '</span></li>';
        });
        html += '</ul>';
      }

      if (p.reptiles && p.reptiles.length) {
        html += '<div class="product-reptiles">';
        html += '<span class="reptile-label">适用爬宠：</span>';
        p.reptiles.forEach(function (r) {
          html += '<span class="reptile-tag">' + r + '</span>';
        });
        html += '</div>';
      }

      if (p.badge) {
        html += '<div class="product-badge">' + p.badge + '</div>';
      }

      html += '</div></div>';
    });

    html += '</div></div>';
  }

  grid.innerHTML = html;

  // 重新触发动画观察
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    grid.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    grid.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }
}

function renderCarousel(track, products) {
  var featured = products.filter(function (p) { return p.featured; });
  if (!featured.length) featured = products.slice(0, 3);

  var html = '';
  featured.forEach(function (p, i) {
    html += '<div class="carousel-slide">';
    html += '<div class="carousel-content">';
    html += '<div class="carousel-image">' + (p.imageSvg || getProductPlaceholder(p)) + '</div>';
    html += '<div class="carousel-info">';
    html += '<span class="carousel-badge">NEW / 新品</span>';
    html += '<h3 class="carousel-title">' + p.name + '</h3>';
    html += '<p class="carousel-tagline">' + p.tagline + '</p>';
    html += '<p class="carousel-desc">' + (p.shortDesc || p.desc) + '</p>';
    if (p.specs && p.specs.length) {
      html += '<div class="carousel-specs">';
      p.specs.slice(0, 3).forEach(function (s) {
        html += '<span class="carousel-spec">' + s.label + ' ' + s.value + '</span>';
      });
      html += '</div>';
    }
    html += '<a href="products.html" class="btn btn-primary">查看产品</a>';
    html += '</div></div></div>';
  });
  track.innerHTML = html;

  // 生成圆点
  var carousel = track.closest('.product-carousel');
  if (carousel) {
    var dotsContainer = carousel.querySelector('.carousel-dots');
    if (dotsContainer && !dotsContainer.children.length) {
      var dotsHtml = '';
      featured.forEach(function (p, i) {
        dotsHtml += '<button class="carousel-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
      });
      dotsContainer.innerHTML = dotsHtml;

      // 绑定圆点点击
      dotsContainer.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
        dot.addEventListener('click', function () {
          var currentIndex = parseInt(track.dataset.currentIndex || 0);
          var newIndex = i;
          track.style.transform = 'translateX(-' + newIndex * 100 + '%)';
          track.dataset.currentIndex = newIndex;
          dotsContainer.querySelectorAll('.carousel-dot').forEach(function (d, j) {
            d.classList.toggle('active', j === newIndex);
          });
        });
      });
    }
  }
}

function getCategoryName(cat) {
  var names = {
    'calcium': '钙粉系列',
    'electrolyte': '电解质系列',
    'freeze-dried': '冻干辅食系列',
    'vitamin': '维生素系列',
    'paste': '营养膏系列',
    'probiotics': '益生菌系列',
    'multivitamin': '综合营养系列'
  };
  return names[cat] || cat;
}

function getCategoryDesc(cat) {
  var descs = {
    'calcium': '雨林配方灵感，精准钙磷比，800目超细研磨',
    'electrolyte': '模拟雨林自然矿物水源，快速补充电解质',
    'freeze-dried': '零下40度冻干锁鲜，保留雨林昆虫天然营养',
    'vitamin': '雨林四季均衡配方，全面维生素与微量元素',
    'paste': '浓缩雨林精华，高适口性即食营养',
    'probiotics': '复合活菌配方，守护爬宠肠道菌群平衡',
    'multivitamin': '多维营养均衡，骨骼养护与日常补充'
  };
  return descs[cat] || '';
}

/* ---------- 产品占位图 / 真实图片 (SVG) ---------- */
function getProductPlaceholder(product) {
  // 如果 product.image 存在且非空，则使用 <img> 标签加载真实图片
  if (product.image && product.image.length > 0) {
    return '<img src="' + product.image + '" alt="' + (product.name || '') + '" class="product-real-img" loading="lazy" />';
  }
  var colors = {
    'calcium': { bg: '#1B4332', accent: '#E8A317', label: 'Ca' },
    'electrolyte': { bg: '#2D6A4F', accent: '#F4D06F', label: 'E+' },
    'freeze-dried': { bg: '#D4A373', accent: '#1B4332', label: 'FD' },
    'vitamin': { bg: '#0D2818', accent: '#E8A317', label: 'V' },
    'paste': { bg: '#2C2C2A', accent: '#D4A373', label: 'N+' },
    'probiotics': { bg: '#1B4332', accent: '#E8A317', label: 'P+' },
    'multivitamin': { bg: '#0D2818', accent: '#E8A317', label: 'M+' }
  };
  var c = colors[product.category] || colors['calcium'];
  return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="product-svg">' +
    '<rect width="200" height="200" fill="' + c.bg + '" rx="12"/>' +
    '<circle cx="100" cy="85" r="42" fill="' + c.accent + '" opacity="0.15"/>' +
    '<circle cx="100" cy="85" r="30" fill="' + c.accent + '"/>' +
    '<text x="100" y="93" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" font-weight="700" fill="' + c.bg + '">' + c.label + '</text>' +
    '<text x="100" y="155" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="rgba(255,255,255,0.5)" letter-spacing="2">BORNEO WILD REALM</text>' +
    '<text x="100" y="172" text-anchor="middle" font-family="Noto Sans SC,sans-serif" font-size="9" fill="rgba(255,255,255,0.35)">' + (product.name || '') + '</text>' +
    '</svg>';
}
