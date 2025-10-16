// Unified header and footer components

// Configuration for each page
const pageConfig = {
    'calculators': {
        backLink: 'index.html',
        backText: 'back-to-table',
        title: 'calculators-title',
        subtitle: 'calculators-subtitle'
	},
    'calculator1': {
        backLink: 'calculators.html',
        backText: 'back-to-calculators',
        title: 'calculator1-title',
        subtitle: 'calculator1-subtitle'
	}
    // Add more pages here as needed
};

// Function to inject header
function injectHeader() {
	console.log('Current page:', window.location.pathname);
	console.log('Extracted page:', currentPage);
	console.log('Config found:', pageConfig[currentPage]);
    // Get current page name - handle different URL formats
    let currentPage = window.location.pathname.split('/').pop();
    
    // Remove .html extension and handle empty/invalid cases
    if (currentPage) {
        currentPage = currentPage.replace('.html', '');
	}
    
    // Handle root case
    if (!currentPage || currentPage === '' || currentPage === '/') {
        currentPage = 'index';
	}
    
    // Don't inject header on index.html
    if (currentPage === 'index') {
        return;
	}
    
    const config = pageConfig[currentPage];
    if (!config) {
        console.warn(`No page config found for: ${currentPage}`);
        return;
	}
    
    const headerHTML = `
	<header class="PT-main-header">
	<div class="PT-main-header-content">
	<!-- Column 1: Logo -->
	<div class="PT-main-header-col1">
	<img src="assets/images/logos/logo1-640×640.jpg" alt="Physics Hub" class="PT-main-logo">
	</div>
	
	<!-- Column 2: Site Title + Page Title -->
	<div class="PT-main-header-center">
	<div class="PT-main-site-title" data-i18n="site-title">Physics Hub</div>
	<h1 class="PT-main-h1" data-i18n="${config.title}">${translations[currentLanguage]?.[config.title] || 'Page Title'}</h1>
	<p class="PT-main-subtitle" data-i18n="${config.subtitle}">${translations[currentLanguage]?.[config.subtitle] || 'Page Subtitle'}</p>
	</div>
	
	<!-- Column 3: Back Button -->
	<div class="PT-main-header-col3">
	<a href="${config.backLink}" class="PT-main-back-btn" data-i18n="${config.backText}">${translations[currentLanguage]?.[config.backText] || 'Back'}</a>
	</div>
	
	<!-- Column 4: Options Button -->
	<div class="PT-main-header-col4">
	<button class="PT-main-options-btn" id="optionsButton">⚙️</button>
	</div>
	</div>
	</header>
	
	<!-- Options Modal -->
	<div class="PT-main-modal" id="optionsModal">
	<div class="PT-main-modal-content">
	<button class="PT-main-modal-close" id="closeModal">&times;</button>
	<h3 class="PT-main-modal-title">Options</h3>
	<div class="PT-main-modal-language-options">
	<button class="PT-main-modal-language-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">English</button>
	<button class="PT-main-modal-language-btn ${currentLanguage === 'fr' ? 'active' : ''}" data-lang="fr">Français</button>
	<button class="PT-main-modal-language-btn ${currentLanguage === 'ar' ? 'active' : ''}" data-lang="ar">العربية</button>
	</div>
	</div>
	</div>
    `;
    
    // Insert header at the beginning of the main container
    const mainContainer = document.querySelector('.PT-main-container');
    if (mainContainer) {
        mainContainer.insertAdjacentHTML('afterbegin', headerHTML);
        
        // Setup modal functionality
        setupModal();
	}
}

// Function to inject footer
function injectFooter() {
	console.log('Current page:', window.location.pathname);
	console.log('Extracted page:', currentPage);
	console.log('Config found:', pageConfig[currentPage]);
    // Get current page name - handle different URL formats
    let currentPage = window.location.pathname.split('/').pop();
    
    // Remove .html extension and handle empty/invalid cases
    if (currentPage) {
        currentPage = currentPage.replace('.html', '');
	}
    
    // Handle root case
    if (!currentPage || currentPage === '' || currentPage === '/') {
        currentPage = 'index';
	}
    
    // Don't inject footer on index.html
    if (currentPage === 'index') {
        return;
	}
    
    const footerHTML = `
	<footer class="PT-main-footer">
	<p data-i18n="footer-created">${translations[currentLanguage]?.['footer-created'] || 'developed by Mejri Ziad'}</p>
	</footer>
    `;
    
    // Insert footer at the end of the main container
    const mainContainer = document.querySelector('.PT-main-container');
    if (mainContainer) {
        mainContainer.insertAdjacentHTML('beforeend', footerHTML);
	}
}

// Function to setup modal functionality
function setupModal() {
    const optionsButton = document.getElementById('optionsButton');
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('optionsModal');
    
    if (optionsButton && modal) {
        optionsButton.addEventListener('click', () => {
            modal.classList.add('active');
		});
	}
    
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
		});
	}
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
			}
		});
	}
    
    // Setup language buttons in modal
    document.querySelectorAll('.PT-main-modal-language-btn').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
            // Close modal after language selection
            if (modal) {
                modal.classList.remove('active');
			}
		});
	});
}