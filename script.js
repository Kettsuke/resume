document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('portfolioLang') || 'en';
    
    const applyLang = (lang) => {
        document.documentElement.lang = lang;
        if(langToggle) {
            langToggle.textContent = lang === 'en' ? 'ESP' : 'ENG';
        }
        document.querySelectorAll('[data-en]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) el.innerHTML = text;
        });
        
        // Update active nav link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-container a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === currentPath || (currentPath === '' && href === 'index.html')) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    };

    applyLang(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            localStorage.setItem('portfolioLang', currentLang);
            applyLang(currentLang);
        });
    }
});
