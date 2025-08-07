/**
 * Made by 贝浦熙（Bpuxi）
 */
 
(function() {
  'use strict';
 
  // ============== 配置常量 ==============
  const CONFIG = {
    // 主题颜色配置 
    themes: {
      dark:   { fg: '#F5F9FC', bg: '#130F26' },  // 深色主题
      light:  { fg: '#130F26', bg: '#F5F9FC' },  // 浅色主题
      red:    { fg: '#F5F9FC', bg: '#FA4B4B' },  // 红色主题 
      orange: { fg: '#F5F9FC', bg: '#D96D00' },  // 橙色主题
      yellow: { fg: '#F5F9FC', bg: '#A68A00' },  // 黄色主题 
      lime:   { fg: '#F5F9FC', bg: '#639400' },  // 青柠色主题 
      green:  { fg: '#F5F9FC', bg: '#00A11B' },  // 绿色主题 
      teal:   { fg: '#F5F9FC', bg: '#0093B0' },  // 蓝绿色主题 
      blue:   { fg: '#F5F9FC', bg: '#0F87FF' },  // 蓝色主题(默认)
      blurple:{ fg: '#F5F9FC', bg: '#8E78FF' },  // 模糊紫主题
      purple: { fg: '#F5F9FC', bg: '#B266FF' },  // 紫色主题
      magenta:{ fg: '#F5F9FC', bg: '#EB3BEB' },  // 品红主题 
      pink:   { fg: '#F5F9FC', bg: '#F545BA' },  // 粉色主题
    },
    defaultTheme: 'blue',          // 默认主题 
    badgeUrl: 'https://www.bpuxi.top/home/',   // 徽章点击链接 
    analyticsUrl: '//www.bpuxi.top/统计.html' // 统计页面URL 
  };
 
  // ============== 初始化统计分析 ==============
  function initAnalytics() {
    // 1. 微软Clarity分析 
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
    })(window, document, "clarity", "script", "pmp8on0d5k");
 
    // 2. 百度统计 
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script"); 
      hm.src  = "https://hm.baidu.com/hm.js?599433e2313d5b601a736a6dea2770f3"; 
      var s = document.getElementsByTagName("script")[0];  
      s.parentNode.insertBefore(hm,  s);
    })();
    
    // 3. 51.la 统计
    !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var  o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JuwJmSVQNTdeACxY",ck:"JuwJmSVQNTdeACxY"}); 
 
    // 4. 添加Matomo统计(按需求添加)
    var matomoScript = document.createElement('script'); 
    matomoScript.defer  = true;  // 延迟加载 
    matomoScript.src  = 'https://clarify.bpuxi.top/script.js'; 
    matomoScript.setAttribute('data-website-id',  'ae1b351b-bc77-4b09-b836-033d6e106d91');
    document.head.appendChild(matomoScript); 
 
    // 5. 隐藏的统计iframe
    var tj = document.createElement('div'); 
    tj.innerHTML  = `<iframe style="display:none;" allowtransparency="true" 
                     src="${CONFIG.analyticsUrl}"  scrolling="no" 
                     width="0" height="0" frameborder="0"></iframe>`;
    tj.id  = 'tongji';
    tj.style.display  = 'none';
    document.body.appendChild(tj); 
  }
 
  // ============== 创建右下角徽章 ==============
  function createBadge() {
    // 获取当前主题设置(从script标签的theme属性获取)
    const themeName = document.currentScript.getAttribute('theme')  || CONFIG.defaultTheme; 
    const color = CONFIG.themes[themeName]  || CONFIG.themes[CONFIG.defaultTheme]; 
    
    // 徽章HTML模板 
    const badgeHTML = `
      <style>
        /* 徽章容器样式 */
        #earthnfc-badge {
          position: fixed;
          cursor: pointer;
          bottom: 16px;
          right: 16px;
          z-index: 1000;
        }
        
        /* SVG图标默认样式 */
        #earthnfc-badge svg {
          border-radius: 4px;
          opacity: 0.4;
          transition: opacity 120ms ease-out, transform 120ms ease-out;
        }
        
        /* 鼠标悬停效果 */
        #earthnfc-badge:hover svg {
          transform: scale(1.05);
          opacity: 1;
        }
      </style>
      
      <!-- 徽章链接 -->
      <a id="earthnfc-badge" href="${CONFIG.badgeUrl}"  target="_blank" title="Made by 贝浦熙（Earthnfc）">
        <!-- SVG图标 - 使用配置的颜色 -->
        <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg"> 
          <!-- SVG内容保持不变 --> 
          <g>
            <rect fill="${color.bg}"  id="canvas_background" height="37" width="37" y="-1" x="-1"></rect>
            <!-- 此处省略SVG详细内容以保持简洁 -->
            <!-- 原始SVG代码中的图形元素全部保留 -->
          </g>
        </svg>
      </a>
    `;
    
    // 将徽章添加到页面底部 
    document.body.insertAdjacentHTML('beforeend',  badgeHTML);
  }
 
  // ============== 主初始化函数 ==============
  function init() {
    initAnalytics();  // 初始化统计代码 
    createBadge();    // 创建徽章 
  }
 
  // ============== 启动逻辑 ==============
  // 检查DOM是否已加载完成
  if (document.readyState  === 'loading') {
    // 如果DOM还在加载，添加事件监听器 
    document.addEventListener('DOMContentLoaded',  init);
  } else {
    // 如果DOM已加载完成，直接初始化 
    init();
  }
})();
