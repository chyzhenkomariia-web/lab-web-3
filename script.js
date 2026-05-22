    const ICONS = {
    film: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 7h5M2 12h20M2 17h5M17 7h5M17 17h5"/></svg>`,
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`,
    rings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/></svg>`,
    camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    skate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3"/><circle cx="13" cy="17" r="2"/><circle cx="19" cy="17" r="2"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1a1.6 1.6 0 0 1 1.7-1.7h2c3 0 5.5-2.5 5.5-5.5C22 6 17.5 2 12 2z"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/></svg>`,
    dumbbell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4v16M18 4v16M3 7h6M15 7h6M3 17h6M15 17h6M8 12h8"/></svg>`,
    pizza: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 2C6.5 2 2 6.5 2 12l10 10L22 12"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12c1.5-3 3-4.5 4.5-4.5S9 9 10.5 9 13.5 6 15 6s3 3 4.5 4.5"/></svg>`,
    masks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v4c0 4-4 7-10 7S3 18 3 14v-4z"/></svg>`,
    car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
    warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h16.9a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/></svg>`,
    critical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 21 2 21"/><line x1="12" y1="10" x2="12" y2="14"/></svg>`,
    };

    const icon = n => ICONS[n] || ICONS.film;
    const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    const formatDate = iso => new Date(iso).toLocaleDateString('uk-UA', { day:'2-digit', month:'short', year:'numeric' });

    let DATA = { works: [], news: [], services: [], portfolio: [] };

    async function loadData() {
    try {
        const res = await fetch('data.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        DATA = {
        works: Array.isArray(json.works) ? json.works : [],
        news: Array.isArray(json.news) ? json.news : [],
        services: Array.isArray(json.services) ? json.services : [],
        portfolio: [
            ...(Array.isArray(json.portfolio) ? json.portfolio : []),
            ...(Array.isArray(json.portfolio_extra) ? json.portfolio_extra : []),
        ],
        };
    } catch (err) {
        console.error('Failed to load data.json', err);
        showToast('Не вдалося завантажити дані', 'err');
    }
    }

    document.addEventListener('DOMContentLoaded', async () => {
    const $ = id => document.getElementById(id);
    const getSPV = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const getUser = () => JSON.parse(localStorage.getItem('marscxx_user') || 'null');
    const isLoggedIn = () => !!getUser();

    let cart = [];
    let portfolioShown = 6;
    let currentType = 'Усі';
    let currentSort = 'default';
    let maxPrice = 10000;
    let currentSlide = 0;
    let ptBusy = false;

    function thumb(work) {
        if (work.video) {
        return `<video class="thumb-video" src="${esc(work.video)}" muted preload="metadata" playsinline onerror="this.style.display='none'"></video>`;
        }
        return `<div class="thumb-fallback">${icon(work.icon)}</div>`;
    }

    function openVideo(src, title) {
        if (!src) { showToast('Відео ще недоступне', 'warn'); return; }
        const modal = $('video-modal');
        const player = $('video-player');
        player.src = src;
        $('video-title').textContent = title || '';
        modal.classList.add('open');
        document.body.classList.add('modal-open');
        player.play().catch(() => {});
    }

    function closeVideo() {
        const modal = $('video-modal');
        const player = $('video-player');
        player.pause();
        player.src = '';
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
    }

    function showToast(msg, type) {
        const el = document.createElement('div');
        const bg = type === 'ok' ? 'var(--green)' : type === 'err' ? 'var(--red)' : 'var(--orange)';
        const color = type === 'err' ? '#fff' : '#000';
        el.style.cssText = `position:fixed;top:72px;right:22px;z-index:4000;background:${bg};color:${color};padding:11px 18px;border-radius:3px;font-family:var(--font-ui);font-size:13px;font-weight:700;letter-spacing:.06em;box-shadow:0 4px 18px rgba(0,0,0,.6);transform:translateX(120%);transition:transform .3s ease;pointer-events:none;`;
        el.textContent = msg;
        document.body.appendChild(el);
        requestAnimationFrame(() => el.style.transform = 'translateX(0)');
        setTimeout(() => { el.style.transform = 'translateX(120%)'; setTimeout(() => el.remove(), 350); }, 2800);
    }

    function triggerPageTransition(targetId, label) {
        const pt = $('page-transition');
        const ptLabel = $('pt-label');
        if (!pt) return;
        if (ptBusy) {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
        }
        ptBusy = true;
        ptLabel.textContent = label || '●';
        pt.classList.remove('out');
        pt.classList.add('in');
        const failsafe = setTimeout(() => { pt.classList.remove('in','out'); ptBusy = false; }, 2000);
        setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'instant' });
        pt.classList.remove('in');
        pt.classList.add('out');
        setTimeout(() => {
            clearTimeout(failsafe);
            pt.classList.remove('in','out');
            ptBusy = false;
        }, 500);
        }, 500);
    }

    function bindNavLinks() {
        document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            e.preventDefault();
            $('nav-links').classList.remove('open');
            triggerPageTransition(href, link.dataset.page || '');
        });
        });
    }

    window.addEventListener('scroll', () => {
        $('navbar').classList.toggle('scrolled', window.scrollY > 60);
        $('scroll-top').classList.toggle('visible', window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * (2/3));
    }, { passive: true });

    $('hamburger').addEventListener('click', () => $('nav-links').classList.toggle('open'));
    $('scroll-top').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

    function doSearch(q) {
        q = q.trim().toLowerCase();
        const results = $('search-results');
        if (!q) { results.style.display = 'none'; return; }
        const r1 = DATA.services.filter(s => s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q))
        .map(s => ({ text:`${s.name} — ${s.price} грн`, section:'#services', label:'ПОСЛУГИ' }));
        const r2 = DATA.portfolio.filter(p => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
        .map(p => ({ text:`${p.title} (${p.category})`, section:'#content-section', label:'ПОРТФОЛІО' }));
        const all = [...r1, ...r2];
        if (!all.length) {
        results.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
        } else {
        results.innerHTML = all.slice(0,7).map(r =>
            `<div class="search-result-item" data-section="${esc(r.section)}" data-label="${esc(r.label)}">${esc(r.text)}</div>`
        ).join('');
        results.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
            results.style.display = 'none';
            $('search-input').value = '';
            triggerPageTransition(el.dataset.section, el.dataset.label);
            });
        });
        }
        const rect = $('search-input').getBoundingClientRect();
        Object.assign(results.style, { display:'block', position:'fixed', top:(rect.bottom+4)+'px', right:'24px' });
    }

    $('search-input').addEventListener('input', e => doSearch(e.target.value));
    $('search-btn').addEventListener('click', () => doSearch($('search-input').value));

    document.addEventListener('click', e => {
        if (!$('search-input').contains(e.target) && !$('search-results').contains(e.target))
        $('search-results').style.display = 'none';
        if (!$('cart-wrap').contains(e.target)) $('cart-dropdown').classList.remove('open');
        if (!$('user-wrap').contains(e.target)) $('user-dropdown').classList.remove('open');
    });

    function addToCart(service) {
        if (cart.find(i => i.id === service.id)) { showToast(`"${service.name}" вже у кошику`, 'warn'); return; }
        cart.push({ ...service });
        renderCart();
        showToast(`"${service.name}" додано`, 'ok');
    }

    function renderCart() {
        const items = $('cd-items');
        const footer = $('cd-footer');
        const badge = $('cart-count');
        badge.textContent = cart.length;
        badge.classList.toggle('visible', cart.length > 0);
        if (!cart.length) {
        items.innerHTML = '<p class="cart-empty">Кошик порожній</p>';
        footer.style.display = 'none';
        return;
        }
        items.innerHTML = cart.map(i => `
        <div class="cart-item">
            <div class="ci-icon">${icon(i.icon)}</div>
            <div class="cart-item-name">${esc(i.name)}</div>
            <span class="cart-item-price">${i.price.toLocaleString('uk-UA')}</span>
            <button class="cart-item-remove" data-id="${i.id}">✕</button>
        </div>`).join('');
        items.querySelectorAll('.cart-item-remove').forEach(b =>
        b.addEventListener('click', e => {
            e.stopPropagation();
            cart = cart.filter(i => i.id !== Number(b.dataset.id));
            renderCart();
        })
        );
        $('cd-total').textContent = cart.reduce((s,i) => s + i.price, 0).toLocaleString('uk-UA');
        footer.style.display = 'block';
    }

    $('cart-btn').addEventListener('click', e => {
        e.stopPropagation();
        $('user-dropdown').classList.remove('open');
        $('cart-dropdown').classList.toggle('open');
    });

    $('cd-clear').addEventListener('click', e => { e.stopPropagation(); cart = []; renderCart(); });

    $('cd-order').addEventListener('click', e => {
        e.stopPropagation();
        if (!cart.length) return;
        if (!isLoggedIn()) {
        $('cart-dropdown').classList.remove('open');
        $('login-required-overlay').classList.add('open');
        return;
        }
        const total = cart.reduce((s,i) => s + i.price, 0).toLocaleString('uk-UA');
        const user = getUser();
        showToast(`Замовлення на ${total} грн оформлено!`, 'ok');
        const orders = JSON.parse(localStorage.getItem(`marscxx_orders_${user.name}`) || '[]');
        orders.push({ date: new Date().toISOString(), items: cart.map(i => i.name), total: cart.reduce((s,i) => s + i.price, 0) });
        localStorage.setItem(`marscxx_orders_${user.name}`, JSON.stringify(orders));
        cart = [];
        renderCart();
        $('cart-dropdown').classList.remove('open');
    });
    function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (item) {
        item.count += delta;
        if (item.count <= 0) {
            cart = cart.filter(x => x.id !== id);
        }
        renderCart();
    }
}

function renderCart() {
    const container = $('cd-items');
    const countLabel = $('cart-count');
    const totalLabel = $('cd-total-amount');
    
    container.innerHTML = '';
    let total = 0;
    let itemsCount = 0;

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty">Кошик порожній</div>';
    } else {
        cart.forEach(item => {
            total += item.price * item.count;
            itemsCount += item.count;
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="ci-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ₴</div>
                </div>
                <div class="ci-qty-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.count}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            `;
            container.appendChild(div);
        });
    }

    totalLabel.textContent = total;
    countLabel.textContent = itemsCount;
    countLabel.classList.toggle('visible', itemsCount > 0);
}
function initCharts() {
    const canvas = document.getElementById('mainChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const buttons = document.querySelectorAll('.stats-controls button');

    const categories = [...new Set(DATA.services.map(s => s.category))];
    const dataCounts = categories.map(cat => DATA.services.filter(s => s.category === cat).length);

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Послуги',
            data: dataCounts,
            backgroundColor: [
                'rgba(245, 230, 66, 0.7)',
                'rgba(0, 245, 212, 0.7)',
                'rgba(255, 32, 32, 0.7)',
                'rgba(57, 255, 20, 0.7)'
            ],
            borderColor: '#f5e642',
            borderWidth: 1
        }]
    };

    function render(type) {
        if (window.myChart instanceof Chart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: type,
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#ffffff' }
                    }
                }
            }
        });
    }

    buttons.forEach(btn => {
        btn.onclick = function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            render(this.getAttribute('data-type'));
        };
    });

    render('pie');
}

    function initCarousel() {
        const track = $('carousel-track');
        const dots = $('carousel-dots');
        track.innerHTML = DATA.works.map(w => `
        <div class="carousel-slide">
            <div class="carousel-card" data-video="${w.video ? esc(w.video) : ''}" data-title="${esc(w.title)}">
            <div class="carousel-thumb">
                ${thumb(w)}
                <div class="carousel-play"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
            </div>
            <div class="carousel-info">
                <h3>${esc(w.title)}</h3>
                <p>${esc(w.category)}</p>
                <div class="carousel-views">👁 ${w.views}</div>
            </div>
            </div>
        </div>`).join('');
        track.querySelectorAll('.carousel-card').forEach(card => {
        card.addEventListener('click', () => {
            const src = card.dataset.video;
            const title = card.dataset.title;
            if (src) openVideo(src, title);
            else showToast('Відео ще недоступне', 'warn');
        });
        });
        const dotCount = Math.ceil(DATA.works.length / getSPV());
        dots.innerHTML = Array.from({length:dotCount}, (_,i) =>
        `<div class="carousel-dot${i===0?' active':''}" data-i="${i}"></div>`
        ).join('');
        dots.querySelectorAll('.carousel-dot').forEach(d => d.addEventListener('click', () => goSlide(Number(d.dataset.i))));
        currentSlide = 0;
        updateCarousel();
    }

    function goSlide(idx) {
        const max = Math.ceil(DATA.works.length / getSPV()) - 1;
        currentSlide = Math.max(0, Math.min(idx, max));
        updateCarousel();
    }

    function updateCarousel() {
        const track = $('carousel-track');
        const slides = track.querySelectorAll('.carousel-slide');
        if (!slides.length) return;
        const w = slides[0].offsetWidth + 24;
        track.style.transform = `translateX(-${currentSlide * getSPV() * w}px)`;
        document.querySelectorAll('.carousel-dot').forEach((d,i) => d.classList.toggle('active', i === currentSlide));
    }

    $('carousel-prev').addEventListener('click', () => {
        const max = Math.ceil(DATA.works.length / getSPV()) - 1;
        goSlide(currentSlide <= 0 ? max : currentSlide - 1);
    });
    $('carousel-next').addEventListener('click', () => {
        const max = Math.ceil(DATA.works.length / getSPV()) - 1;
        goSlide(currentSlide >= max ? 0 : currentSlide + 1);
    });
    window.addEventListener('resize', initCarousel);

    function initNews() {
        const sorted = [...DATA.news].sort((a,b) => new Date(b.date) - new Date(a.date));
        const newsIcon = { normal:'info', important:'warning', 'very-important':'critical' };
        const labels = { normal:'Новина', important:'Важливо', 'very-important':'!! КРИТИЧНО !!' };
        $('news-list').innerHTML = sorted.map(n => `
        <div class="news-item ${esc(n.status)}">
            <div class="news-header">
            <span class="news-icon">${icon(newsIcon[n.status])}</span>
            <span class="news-badge">${labels[n.status]}</span>
            <span class="news-date">${formatDate(n.date)}</span>
            <span class="news-title-text">${esc(n.title)}</span>
            <span class="news-arrow">▶</span>
            </div>
            <div class="news-body"><p>${esc(n.body)}</p></div>
        </div>`).join('');
        document.querySelectorAll('.news-item').forEach(el =>
        el.addEventListener('click', () => el.classList.toggle('open'))
        );
    }

    function initServices() {
        const types = ['Усі', ...new Set(DATA.services.map(s => s.type))];
        const tabs = $('filter-tabs');
        tabs.innerHTML = types.map(t =>
        `<button class="filter-tab${t==='Усі'?' active':''}" data-type="${esc(t)}">${esc(t)}</button>`
        ).join('');
        tabs.querySelectorAll('.filter-tab').forEach(b => b.addEventListener('click', () => {
        tabs.querySelectorAll('.filter-tab').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        currentType = b.dataset.type;
        renderServices();
        }));
        $('sort-select').addEventListener('change', e => { currentSort = e.target.value; renderServices(); });
        $('price-range').addEventListener('input', e => {
        maxPrice = Number(e.target.value);
        $('price-label').textContent = maxPrice.toLocaleString('uk-UA');
        renderServices();
        });
        renderServices();
    }

    function renderServices() {
        let items = DATA.services.filter(s => (currentType==='Усі' || s.type===currentType) && s.price <= maxPrice);
        if (currentSort === 'name-asc') items.sort((a,b) => a.name.localeCompare(b.name,'uk'));
        if (currentSort === 'name-desc') items.sort((a,b) => b.name.localeCompare(a.name,'uk'));
        if (currentSort === 'price-asc') items.sort((a,b) => a.price - b.price);
        if (currentSort === 'price-desc') items.sort((a,b) => b.price - a.price);
        const grid = $('services-grid');
        if (!items.length) {
        grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0">Нічого не знайдено</p>';
        return;
        }
        grid.innerHTML = items.map(s => `
        <div class="service-card">
            ${s.discount ? `<div class="service-hover-badge">${esc(s.discount)}</div>` : ''}
            <div class="service-thumb">${icon(s.icon)}</div>
            <div class="service-body">
            <div class="service-type">${esc(s.type)}</div>
            <h3 class="service-name">${esc(s.name)}</h3>
            <p class="service-desc">${esc(s.desc)}</p>
            <div class="service-footer">
                <div class="service-price">${s.price.toLocaleString('uk-UA')}<sub> грн</sub></div>
                <button class="service-add-btn" data-id="${s.id}">+ КОШИК</button>
            </div>
            </div>
        </div>`).join('');
        grid.querySelectorAll('.service-add-btn').forEach(b => b.addEventListener('click', () => {
        const s = DATA.services.find(x => x.id === Number(b.dataset.id));
        if (s) addToCart(s);
        }));
    }

    function renderPortfolio() {
        const grid = $('portfolio-grid');
        grid.innerHTML = DATA.portfolio.slice(0, portfolioShown).map(p => `
        <div class="portfolio-item" data-id="${p.id}">
            <div class="portfolio-thumb">
            ${thumb(p)}
            ${p.video ? '<div class="carousel-play"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>' : ''}
            </div>
            <div class="portfolio-info">
            <h3 class="portfolio-title">${esc(p.title)}</h3>
            <div class="portfolio-meta">${esc(p.category)} · ${p.year} · ${esc(p.client)}</div>
            </div>
            <div class="portfolio-desc"><p>${esc(p.desc)}</p></div>
        </div>`).join('');
        grid.querySelectorAll('.portfolio-item').forEach(el => {
        const id = Number(el.dataset.id);
        const item = DATA.portfolio.find(x => x.id === id);
        const thumbEl = el.querySelector('.portfolio-thumb');
        if (thumbEl && item.video) {
            thumbEl.addEventListener('click', e => {
            e.stopPropagation();
            openVideo(item.video, item.title);
            });
        }
        el.addEventListener('click', e => {
            if (thumbEl && thumbEl.contains(e.target) && item.video) return;
            grid.querySelectorAll('.portfolio-item').forEach(x => { if (x !== el) x.classList.remove('expanded'); });
            el.classList.toggle('expanded');
        });
        });
    }

    function initPortfolio() {
        renderPortfolio();
        $('load-more-btn').addEventListener('click', () => {
        portfolioShown = Math.min(portfolioShown + 6, DATA.portfolio.length);
        renderPortfolio();
        if (portfolioShown >= DATA.portfolio.length) $('load-more-btn').style.display = 'none';
        });
    }

    function updateUserUI() {
        const user = getUser();
        const btn = $('open-auth');
        if (user && user.name) {
        btn.textContent = user.name.toUpperCase();
        btn.classList.add('logged');
        $('ud-avatar').textContent = user.name.charAt(0).toUpperCase();
        $('ud-name').textContent = user.name;
        $('ud-email').textContent = user.email || 'локальний акаунт';
        } else {
        btn.textContent = 'УВІЙТИ';
        btn.classList.remove('logged');
        $('ud-avatar').textContent = '?';
        $('ud-name').textContent = 'Гість';
        $('ud-email').textContent = '—';
        }
    }

    function showAuthMsg(formId, text, type) {
        const form = $(formId);
        form.querySelectorAll('.auth-msg').forEach(m => m.remove());
        const el = document.createElement('div');
        el.className = `auth-msg ${type}`;
        el.textContent = text;
        form.appendChild(el);
    }

    function clearAuthErrors() {
        document.querySelectorAll('.auth-form input').forEach(i => i.classList.remove('error'));
        document.querySelectorAll('.auth-msg').forEach(m => m.remove());
    }

    function doLogin() {
        clearAuthErrors();
        const user = $('login-user').value.trim();
        const pass = $('login-pass').value;
        if (!user) $('login-user').classList.add('error');
        if (!pass || pass.length < 4) $('login-pass').classList.add('error');
        if (!user || !pass || pass.length < 4) {
        showAuthMsg('login-form', 'Заповни усі поля (пароль мін. 4 символи)', 'error');
        return;
        }
        const name = user.includes('@') ? user.split('@')[0] : user;
        const email = user.includes('@') ? user : '';
        localStorage.setItem('marscxx_user', JSON.stringify({ name, email }));
        showAuthMsg('login-form', `Вітаю, ${name}!`, 'success');
        updateUserUI();
        setTimeout(() => {
        $('auth-overlay').classList.remove('open');
        $('login-user').value = '';
        $('login-pass').value = '';
        clearAuthErrors();
        showToast(`Вітаємо, ${name}!`, 'ok');
        }, 800);
    }

    function doRegister() {
        clearAuthErrors();
        const name = $('reg-name').value.trim();
        const email = $('reg-email').value.trim();
        const pass = $('reg-pass').value;
        const pass2 = $('reg-pass2').value;
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!name) $('reg-name').classList.add('error');
        if (!emailOk) $('reg-email').classList.add('error');
        if (!pass || pass.length < 4) $('reg-pass').classList.add('error');
        if (pass !== pass2) $('reg-pass2').classList.add('error');
        if (!name || !emailOk || !pass || pass.length < 4 || pass !== pass2) {
        let msg = 'Заповни усі поля коректно';
        if (pass && pass2 && pass !== pass2) msg = 'Паролі не співпадають';
        else if (email && !emailOk) msg = 'Некоректний email';
        showAuthMsg('register-form', msg, 'error');
        return;
        }
        localStorage.setItem('marscxx_user', JSON.stringify({ name, email }));
        showAuthMsg('register-form', `Акаунт створено! Вітаю, ${name}.`, 'success');
        updateUserUI();
        setTimeout(() => {
        $('auth-overlay').classList.remove('open');
        ['reg-name','reg-email','reg-pass','reg-pass2'].forEach(id => $(id).value = '');
        clearAuthErrors();
        showToast('Реєстрацію завершено!', 'ok');
        }, 800);
    }

    function logout() {
        const user = getUser();
        localStorage.removeItem('marscxx_user');
        updateUserUI();
        $('user-dropdown').classList.remove('open');
        if (user) showToast(`До зустрічі, ${user.name}!`, 'ok');
    }

    $('open-auth').addEventListener('click', e => {
        e.stopPropagation();
        if (isLoggedIn()) {
        $('cart-dropdown').classList.remove('open');
        $('user-dropdown').classList.toggle('open');
        } else {
        $('auth-overlay').classList.add('open');
        }
    });

    $('close-auth').addEventListener('click', () => { $('auth-overlay').classList.remove('open'); clearAuthErrors(); });
    $('auth-overlay').addEventListener('click', e => {
        if (e.target === $('auth-overlay')) { $('auth-overlay').classList.remove('open'); clearAuthErrors(); }
    });

    document.querySelectorAll('.auth-tab').forEach(tab => tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        $('login-form').classList.toggle('hidden', tab.dataset.tab !== 'login');
        $('register-form').classList.toggle('hidden', tab.dataset.tab !== 'register');
        clearAuthErrors();
    }));

    $('login-submit').addEventListener('click', doLogin);
    $('register-submit').addEventListener('click', doRegister);
    ['login-user','login-pass'].forEach(id =>
        $(id).addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); })
    );
    ['reg-name','reg-email','reg-pass','reg-pass2'].forEach(id =>
        $(id).addEventListener('keydown', e => { if (e.key === 'Enter') doRegister(); })
    );

    $('ud-logout').addEventListener('click', logout);
    $('ud-profile').addEventListener('click', () => {
        const user = getUser();
        $('user-dropdown').classList.remove('open');
        if (user) showToast(`Профіль: ${user.name}`, 'ok');
    });
    $('ud-orders').addEventListener('click', () => {
        const user = getUser();
        if (!user) return;
        const orders = JSON.parse(localStorage.getItem(`marscxx_orders_${user.name}`) || '[]');
        $('user-dropdown').classList.remove('open');
        showToast(orders.length ? `Усього замовлень: ${orders.length}` : 'Замовлень ще немає', 'ok');
    });

    $('close-login-required').addEventListener('click', () => $('login-required-overlay').classList.remove('open'));
    $('login-required-overlay').addEventListener('click', e => {
        if (e.target === $('login-required-overlay')) $('login-required-overlay').classList.remove('open');
    });
    $('lr-login-btn').addEventListener('click', () => {
        $('login-required-overlay').classList.remove('open');
        $('auth-overlay').classList.add('open');
    });

    $('video-close').addEventListener('click', closeVideo);
    $('video-modal').addEventListener('click', e => {
        if (e.target === $('video-modal')) closeVideo();
    });
    var myChartInstance = null; 

function initCharts() {
    const canvas = document.getElementById('mainChart');
    if (!canvas) {
        console.error("Помилка: Canvas не знайдено!");
        return;
    }

    const ctx = canvas.getContext('2d');
    
    function draw(type) {
        if (myChartInstance) {
            myChartInstance.destroy();
        }

        myChartInstance = new Chart(ctx, {
            type: type,
            data: {
                labels: ['Монтаж', 'Корекція', 'Зйомка', 'Анімація'],
                datasets: [{
                    label: 'Статистика',
                    data: [10, 25, 15, 5],
                    backgroundColor: ['#f5e642', '#00f5d4', '#ff2020', '#39ff14'],
                    borderColor: '#111',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    const btns = document.querySelectorAll('.stats-controls button');
    btns.forEach(btn => {
        btn.onclick = function() {
            btns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            draw(this.getAttribute('data-type'));
        };
    });

    draw('pie'); 
}


window.onload = function() {
    initCharts();
};

    let adIv = null;
    function showAd() {
        const overlay = $('ad-overlay');
        if (!overlay || overlay.classList.contains('open')) return;
        if ($('auth-overlay').classList.contains('open')) return;
        if ($('login-required-overlay').classList.contains('open')) return;
        if ($('video-modal').classList.contains('open')) return;
        overlay.classList.add('open');
        const closeBtn = $('close-ad');
        closeBtn.disabled = true;
        let cd = 5;
        closeBtn.innerHTML = `Закрити (<span id="ad-timer">${cd}</span>)`;
        if (adIv) clearInterval(adIv);
        adIv = setInterval(() => {
        cd--;
        if (cd > 0) {
            closeBtn.innerHTML = `Закрити (<span id="ad-timer">${cd}</span>)`;
        } else {
            closeBtn.innerHTML = 'Закрити ✕';
            closeBtn.disabled = false;
            clearInterval(adIv);
            adIv = null;
        }
        }, 1000);
    }

    function hideAd() {
        $('ad-overlay').classList.remove('open');
        if (adIv) { clearInterval(adIv); adIv = null; }
    }

    $('close-ad').addEventListener('click', () => { if (!$('close-ad').disabled) hideAd(); });
    $('ad-cta').addEventListener('click', () => hideAd());

    $('sub-accept').addEventListener('click', () => {
        localStorage.setItem('marscxx_sub_status', 'subscribed');
        $('subscription-toast').classList.remove('visible');
        showToast('Підписку оформлено! Дякую!', 'ok');
    });
    $('sub-decline').addEventListener('click', () => {
        localStorage.setItem('marscxx_sub_status', 'declined');
        $('subscription-toast').classList.remove('visible');
    });

    await loadData();
    bindNavLinks();
    initCarousel();
    initNews();
    initServices();
    initPortfolio();
    updateUserUI();
    renderCart();

    showAd();
    setInterval(showAd, 3 * 60 * 1000);

    if (!localStorage.getItem('marscxx_sub_status')) {
        setTimeout(() => {
        if (!$('ad-overlay').classList.contains('open') && !$('auth-overlay').classList.contains('open')) {
            $('subscription-toast').classList.add('visible');
        } else {
            setTimeout(() => $('subscription-toast').classList.add('visible'), 6000);
        }
        }, 20000);
        document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    
});
    }
    });