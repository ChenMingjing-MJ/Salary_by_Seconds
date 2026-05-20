(function() {
    'use strict';

    const NAV_HTML = `
    <nav class="site-nav">
        <a href="/" class="nav-brand">SalaryTools</a>
        <ul class="nav-links" id="navLinks">
            <li><a href="/" data-nav="home" data-i18n-nav="nav_home">Salary Counter</a></li>
            <li><a href="/take-home-pay/" data-nav="take-home" data-i18n-nav="nav_takehome">Take-Home Pay</a></li>
            <li><a href="/freelance-rate/" data-nav="freelance" data-i18n-nav="nav_freelance">Freelance Rate</a></li>
            <li><a href="/overtime/" data-nav="overtime" data-i18n-nav="nav_overtime">Overtime</a></li>
            <li><a href="/salary-comparison/" data-nav="comparison" data-i18n-nav="nav_comparison">Salary Comparison</a></li>
        </ul>
        <div class="nav-lang" id="navLang">
            <button class="lang-btn active" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="zh">中文</button>
            <button class="lang-btn" data-lang="ja">日本語</button>
            <button class="lang-btn" data-lang="ko">한국어</button>
        </div>
        <div class="nav-hamburger" id="navHamburger">
            <span></span><span></span><span></span>
        </div>
    </nav>`;

    const FOOTER_HTML = `
    <footer class="site-footer">
        <div class="footer-links">
            <a href="/" data-i18n-nav="nav_home">Salary Counter</a>
            <a href="/take-home-pay/" data-i18n-nav="nav_takehome">Take-Home Pay</a>
            <a href="/freelance-rate/" data-i18n-nav="nav_freelance">Freelance Rate</a>
            <a href="/overtime/" data-i18n-nav="nav_overtime">Overtime</a>
            <a href="/salary-comparison/" data-i18n-nav="nav_comparison">Salary Comparison</a>
        </div>
        <p class="footer-about" data-i18n="footer_about">Free online salary calculators and financial tools. Calculate your real-time earnings, take-home pay, freelance rates, overtime compensation, and compare salaries across cities worldwide.</p>
        <p class="footer-copy">&copy; 2025 SalaryTools. All rights reserved.</p>
    </footer>`;

    const NAV_I18N = {
        en: {
            nav_home: 'Salary Counter',
            nav_takehome: 'Take-Home Pay',
            nav_freelance: 'Freelance Rate',
            nav_overtime: 'Overtime',
            nav_comparison: 'Salary Comparison',
            footer_about: 'Free online salary calculators and financial tools. Calculate your real-time earnings, take-home pay, freelance rates, overtime compensation, and compare salaries across cities worldwide.'
        },
        zh: {
            nav_home: '实时薪资',
            nav_takehome: '税后工资',
            nav_freelance: '自由职业费率',
            nav_overtime: '加班工资',
            nav_comparison: '薪资对比',
            footer_about: '免费在线薪资计算器和财务工具。计算实时收入、税后工资、自由职业费率、加班报酬，并在全球城市之间进行薪资比较。'
        },
        ja: {
            nav_home: '秒給カウンター',
            nav_takehome: '手取り計算',
            nav_freelance: 'フリーランス単価',
            nav_overtime: '残業代計算',
            nav_comparison: '給与比較',
            footer_about: '無料のオンライン給与計算ツール。リアルタイム収入、手取り額、フリーランス単価、残業代の計算、世界中の都市間の給与比較ができます。'
        },
        ko: {
            nav_home: '실시간 급여',
            nav_takehome: '실수령액',
            nav_freelance: '프리랜서 단가',
            nav_overtime: '야근수당',
            nav_comparison: '급여 비교',
            footer_about: '무료 온라인 급여 계산기 및 재무 도구. 실시간 수입, 실수령액, 프리랜서 단가, 야근 수당 계산, 전 세계 도시 간 급여 비교를 제공합니다.'
        }
    };

    function injectNav() {
        document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

        const hamburger = document.getElementById('navHamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath === href || currentPath === href + 'index.html' ||
                (href !== '/' && currentPath.startsWith(href))) {
                link.classList.add('active');
            }
        });
    }

    function injectFooter() {
        const container = document.querySelector('.page-container') || document.querySelector('.container');
        if (container) {
            container.insertAdjacentHTML('afterend', FOOTER_HTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
        }
    }

    function initLangSwitcher() {
        const stored = localStorage.getItem('salarytools-lang') || 'en';
        setGlobalLanguage(stored);

        document.querySelectorAll('.nav-lang .lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setGlobalLanguage(btn.dataset.lang);
            });
        });
    }

    function setGlobalLanguage(lang) {
        window.currentLang = lang;
        localStorage.setItem('salarytools-lang', lang);

        document.querySelectorAll('.nav-lang .lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-i18n-nav]').forEach(el => {
            const key = el.dataset.i18nNav;
            if (NAV_I18N[lang] && NAV_I18N[lang][key]) {
                el.textContent = NAV_I18N[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (window.pageI18n && window.pageI18n[lang] && window.pageI18n[lang][key]) {
                el.textContent = window.pageI18n[lang][key];
            }
        });

        if (typeof window.onLanguageChange === 'function') {
            window.onLanguageChange(lang);
        }
    }

    function formatCurrency(amount, decimals) {
        if (decimals === undefined) decimals = 2;
        return '$' + amount.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }

    function injectBgImage() {
        if (!document.querySelector('.bg-image')) {
            document.body.insertAdjacentHTML('afterbegin', '<div class="bg-image"></div>');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        injectBgImage();
        injectNav();
        injectFooter();
        initLangSwitcher();
    });

    window.SalaryTools = {
        formatCurrency: formatCurrency,
        setLanguage: setGlobalLanguage
    };
})();
