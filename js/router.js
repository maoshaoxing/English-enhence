/* ============================================
   Client-side Router
   ============================================ */

const Router = {
    currentRoute: null,
    routes: {},
    beforeHooks: [],

    // Register a route
    register(name, handler) {
        this.routes[name] = handler;
    },

    // Register before hook
    before(fn) {
        this.beforeHooks.push(fn);
    },

    // Navigate to a route
    navigate(route, params = {}) {
        if (route === this.currentRoute) return;
        
        // Run before hooks
        for (const hook of this.beforeHooks) {
            hook(route, params);
        }

        const handler = this.routes[route];
        if (!handler) {
            console.warn(`Route "${route}" not found`);
            return;
        }

        this.currentRoute = route;
        handler(params);
        
        // Update active nav links
        document.querySelectorAll('[data-route]').forEach(el => {
            el.classList.toggle('active', el.dataset.route === route || 
                (el.dataset.route === 'more' && ['reading', 'writing', 'review'].includes(route)));
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Close mobile menu
        document.getElementById('mobile-more-menu')?.classList.add('hidden');
    },

    // Initialize click handlers for all [data-route] elements
    init() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                this.navigate(link.dataset.route);
            }
        });

        // Handle theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', () => {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            document.querySelector('.theme-icon').textContent = next === 'dark' ? '🌙' : '☀️';
            Storage.setSettings({ ...Storage.getSettings(), theme: next });
        });

        // Mobile more menu toggle
        document.getElementById('mobile-more-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('mobile-more-menu')?.classList.toggle('hidden');
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape closes modals
            if (e.key === 'Escape') {
                document.querySelector('.modal-overlay')?.remove();
            }
        });
    }
};
