/**
* Made by 贝浦熙（Bpuxi）
 */
(function() {
    // 加载所有统计工具
    function loadAnalytics() {
        // Microsoft Clarity
        (function(c, l, a, r, i, t, y) {
            c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "pmp8on0d5k");

        // 百度统计
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?599433e2313d5b601a736a6dea2770f3";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
        
        // 51.la统计
        !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JuwJmSVQNTdeACxY",ck:"JuwJmSVQNTdeACxY"});

        // 隐藏统计iframe
        var body = document.getElementsByTagName('body')[0];
        var tj = document.createElement('div');
        body.append(tj);
        var tongji="";
        tongji += "   <iframe style=\"display:none;\" allowtransparency=\"true\" src=\"//www.bpuxi.top/统计.html\" scrolling=\"no\" width=\"0\" height=\"0\"";
        tongji += "      frameborder=\"0\"><\/iframe>";
        tj.innerHTML = tongji;
        tj.id = 'tongji';
        tj.style = "display:none;";

        // 添加指定的Clarity脚本
        var clarifyScript = document.createElement('script');
        clarifyScript.defer = true;
        clarifyScript.src = "https://clarify.bpuxi.top/script.js";
        clarifyScript.setAttribute('data-website-id', 'clbpuxi');
        document.body.appendChild(clarifyScript);
    }

    // 创建品牌徽章
    function createBadge() {
        // 主题配置
        const themes = {
            dark: { fg: '#F5F9FC', bg: '#130F26' },
            light: { fg: '#130F26', bg: '#F5F9FC' },
            red: { fg: '#F5F9FC', bg: '#FA4B4B' },
            orange: { fg: '#F5F9FC', bg: '#D96D00' },
            yellow: { fg: '#F5F9FC', bg: '#A68A00' },
            lime: { fg: '#F5F9FC', bg: '#639400' },
            green: { fg: '#F5F9FC', bg: '#00A11B' },
            teal: { fg: '#F5F9FC', bg: '#0093B0' },
            blue: { fg: '#F5F9FC', bg: '#0F87FF' },
            blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
            purple: { fg: '#F5F9FC', bg: '#B266FF' },
            magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
            pink: { fg: '#F5F9FC', bg: '#F545BA' },
        };
        
        // 获取主题或使用默认蓝色
        const themeName = document.currentScript.getAttribute('theme') || 'blue';
        const color = themes[themeName];
        
        // 创建徽章样式
        const style = document.createElement('style');
        style.textContent = `
            #bpuxi-badge {
                position: fixed;
                cursor: pointer;
                bottom: 16px;
                right: 16px;
                z-index: 1000;
                transition: transform 0.3s ease;
            }
            
            #bpuxi-badge svg {
                border-radius: 4px;
                opacity: 0.7;
                transition: opacity 0.3s ease, transform 0.3s ease;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            }
            
            #bpuxi-badge:hover svg {
                transform: scale(1.1);
                opacity: 1;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }
        `;
        document.head.appendChild(style);
        
        // 创建徽章元素
        const badge = document.createElement('a');
        badge.id = 'bpuxi-badge';
        badge.href = 'https://www.bpuxi.top/home/';
        badge.target = '_blank';
        
        // 使用原始SVG结构
        badge.innerHTML = `
            <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect fill="${color.bg}" id="canvas_background" height="37" width="37" y="-1" x="-1"></rect>
                    <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                        <rect fill="${color.bg}" stroke-width="0" y="0" x="0" height="100%" width="100%"></rect>
                    </g>
                </g>
                <g>
                    <g stroke="null" id="svg_76">
                        <g stroke="null" transform="matrix(0.48355453721951913,0,0,0.48355453721951913,139.51691030540474,68.64933041373013) " id="svg_74">
                            <title stroke="null" transform="translate(1.034022331237793,0) translate(5.684341886080802e-14,1.033994197845459) translate(5.684341886080802e-14,2.068019151687622) translate(5.684341886080802e-14,-2.068019151687622) translate(5.684341886080802e-14,-6.920963287353516) translate(-8.431426048278809,0) translate(5.684341886080802e-14,-171.6455841064453) translate(-355.69927978515625,0) translate(5.684341886080802e-14,-0.24523331224918365) translate(6.204057216644287,0) translate(0.1593235582113266,0) translate(64.4000015258789,0) translate(0,32.00000762939453) ">贝浦熙（Earthnfc）</title>
                            <rect fill="${color.bg}" id="svg_72" height="82" width="82" y="-146.777779" x="-293.333301" stroke="null"></rect>
                        </g>
                        <g stroke="null" transform="matrix(0.48355453721951913,0,0,0.48355453721951913,139.51691030540474,68.64933041373013) " id="svg_75">
                            <title stroke="null" transform="translate(1.034022331237793,0) translate(5.684341886080802e-14,1.033994197845459) translate(5.684341886080802e-14,2.068019151687622) translate(5.684341886080802e-14,-2.068019151687622) translate(5.684341886080802e-14,-6.920963287353516) translate(-8.431426048278809,0) translate(5.684341886080802e-14,-171.6455841064453) translate(-355.69927978515625,0) translate(5.684341886080802e-14,-0.24523331224918365) translate(6.204057216644287,0) translate(0.1593235582113266,0) translate(64.4000015258789,0) translate(0,32.00000762939453) ">Made by 贝浦熙（Earthnfc）</title>
                            <g stroke="null" id="svg_38">
                                <g stroke="null" id="svg_67">
                                    <ellipse stroke="${color.fg}" fill="none" stroke-width="14" cx="-956.7571" cy="374.213657" id="svg_69" rx="108.283001" ry="40.81818" transform="matrix(0.30164740271101487,0.2676369629725727,-0.2676369629725727,0.30164740271101487,136.42339601119227,36.62112264463559) "></ellipse>
                                    <ellipse stroke="${color.fg}" fill="none" stroke-width="14" cx="-928.408857" cy="488.258805" id="svg_68" rx="41.14032" ry="108.669116" transform="matrix(0.27354815064241583,0.29629733173215994,-0.29629733173215994,0.27354815064241583,146.3639954141762,35.90631856964063) "></ellipse>
                                </g>
                                <g stroke="null" id="svg_60" transform="matrix(0,-0.4032625689442097,0.4032625689442097,0,71.39180536839307,183.22583874735295) ">
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="707.725722" y1="-881.573372" x2="747.047818" y2="-845.410713" id="svg_66" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-1.6708600521087646 727.3867187500053,-863.4920043945301) "></line>
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="707.713399" y1="-850.863575" x2="748.380931" y2="-812.3469" id="svg_65" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90.18724060058594 728.0470581054685,-831.6052246093748) "></line>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m704.861785,-876.831236l1.57114,0l1.30929,-0.54882l-1.30929,-0.54882l-1.57114,0l0,1.09764z" id="svg_64" transform="rotate(157.72332763671875 706.3019409179688,-877.3800659179688) "></path>
                                    <line stroke="${color.fg}" fill="none" stroke-width="4" x1="738.613182" y1="-847.548643" x2="696.141482" y2="-846.982605" id="svg_63" stroke-linejoin="null" stroke-linecap="null"></line>
                                    <ellipse stroke="${color.fg}" fill="${color.fg}" stroke-width="4" cx="685.625781" cy="-846.888265" id="svg_62" rx="10.943396" ry="4.622642"></ellipse>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m706.528455,-814.830946l1.57115,0l1.30928,-0.54882l-1.30928,-0.54882l-1.57115,0l0,1.09764z" id="svg_61" transform="rotate(-158 707.9686279296874,-815.3797607421876) "></path>
                                </g>
                                <g stroke="null" id="svg_53" transform="matrix(0,0.4032625689442097,-0.4032625689442097,0,233.1132820336559,37.380192122520484) ">
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="-355.992094" y1="1116.286709" x2="-316.669998" y2="1152.449368" id="svg_59" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-1.6708600521087646 -336.3309936523438,1134.368164062499) "></line>
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="-356.004417" y1="1146.996506" x2="-315.336885" y2="1185.513181" id="svg_58" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90.18724060058594 -335.6706542968747,1166.2548828124998) "></line>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m-358.856025,1121.028836l1.57114,0l1.30929,-0.54882l-1.30929,-0.54882l-1.57114,0l0,1.09764z" id="svg_57" transform="rotate(157.72332763671875 -357.4158020019531,1120.480224609375) "></path>
                                    <line stroke="${color.fg}" fill="none" stroke-width="4" x1="-325.104634" y1="1150.311438" x2="-367.576334" y2="1150.877476" id="svg_56" stroke-linejoin="null" stroke-linecap="null"></line>
                                    <ellipse stroke="${color.fg}" fill="${color.fg}" stroke-width="4" cx="-378.092035" cy="1150.971816" id="svg_55" rx="10.943396" ry="4.622642"></ellipse>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m-357.189355,1183.029126l1.57115,0l1.30928,-0.54882l-1.30928,-0.54882l-1.57115,0l0,1.09764z" id="svg_54" transform="rotate(-158 -355.74908447265625,1182.48046875) "></path>
                                </g>
                                <g stroke="null" id="svg_46" transform="matrix(-0.4032625689442097,0,0,-0.4032625689442097,226.0706288686562,231.08674809304486) ">
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="1178.713255" y1="749.042169" x2="1218.035351" y2="785.204828" id="svg_52" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-1.6708600521087646 1198.3745117187486,767.123535156246) "></line>
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="1178.700932" y1="779.751966" x2="1219.368464" y2="818.268641" id="svg_51" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90.18724060058594 1199.0347900390627,799.0103149414059) "></line>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m1175.849316,753.784295l1.57114,0l1.30929,-0.54882l-1.30929,-0.54882l-1.57114,0l0,1.09764z" id="svg_50" transform="rotate(157.72332763671875 1177.2896728515625,753.2354736328126) "></path>
                                    <line stroke="${color.fg}" fill="none" stroke-width="4" x1="1209.600715" y1="783.066898" x2="1167.129015" y2="783.632936" id="svg_49" stroke-linejoin="null" stroke-linecap="null"></line>
                                    <ellipse stroke="${color.fg}" fill="${color.fg}" stroke-width="4" cx="1156.613314" cy="783.727276" id="svg_48" rx="10.943396" ry="4.622642"></ellipse>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m1177.515986,815.784585l1.57115,0l1.30928,-0.54882l-1.30928,-0.54882l-1.57115,0l0,1.09764z" id="svg_47" transform="rotate(-158 1178.9562988281248,815.2357788085939) "></path>
                                </g>
                                <g stroke="null" id="svg_39" transform="rotate(180 -249.9644012451172,-122.71452331542969) matrix(-0.4032625689442097,0,0,-0.4032625689442097,226.0706288686562,231.08674809304486) ">
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="1177.060063" y1="842.446972" x2="1216.382159" y2="878.609631" id="svg_45" stroke-linejoin="null" stroke-linecap="null" transform="rotate(-1.6708600521087646 1196.7211914062375,860.5282592773444) "></line>
                                    <line stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" x1="1177.04774" y1="873.156769" x2="1217.715272" y2="911.673444" id="svg_44" stroke-linejoin="null" stroke-linecap="null" transform="rotate(90.18724060058594 1197.3815917968752,892.4150390624998) "></line>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m1174.196126,847.189105l1.57114,0l1.30929,-0.54882l-1.30929,-0.54882l-1.57114,0l0,1.09764z" id="svg_43" transform="rotate(157.72332763671875 1175.636474609375,846.6401977539064) "></path>
                                    <line stroke="${color.fg}" fill="none" stroke-width="4" x1="1207.947523" y1="876.471701" x2="1165.475823" y2="877.037739" id="svg_42" stroke-linejoin="null" stroke-linecap="null"></line>
                                    <ellipse stroke="${color.fg}" fill="${color.fg}" stroke-width="4" cx="1154.960122" cy="877.132079" id="svg_41" rx="10.943396" ry="4.622642"></ellipse>
                                    <path stroke="${color.fg}" fill="none" stroke-width="9" stroke-opacity="null" fill-opacity="null" d="m1175.862796,909.189395l1.57115,0l1.30928,-0.54882l-1.30928,-0.54882l-1.57115,0l0,1.09764z" id="svg_40" transform="rotate(-158 1177.3031005859375,908.6405029296874) "></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        `;
        
        document.body.appendChild(badge);
    }

    // 初始化函数
    function init() {
        loadAnalytics();
        createBadge();
    }

    // 根据文档状态执行初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
