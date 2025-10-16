// Current language - load from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Function to update injected components when language changes
function updateInjectedComponents() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Only update for non-index pages
    if (currentPage !== 'index.html' && currentPage !== '' && currentPage !== '/') {
        const config = pageConfig[currentPage];
        if (config) {
            // Update back button text
            const backBtn = document.querySelector('.PT-main-back-btn');
            if (backBtn && translations[currentLanguage] && translations[currentLanguage][config.backText]) {
                backBtn.textContent = translations[currentLanguage][config.backText];
            }
            
            // Update title and subtitle
            const title = document.querySelector('.PT-main-h1');
            const subtitle = document.querySelector('.PT-main-subtitle');
            
            if (title && translations[currentLanguage] && translations[currentLanguage][config.title]) {
                title.textContent = translations[currentLanguage][config.title];
            }
            
            if (subtitle && translations[currentLanguage] && translations[currentLanguage][config.subtitle]) {
                subtitle.textContent = translations[currentLanguage][config.subtitle];
            }
        }
        
        // Update footer
        const footerText = document.querySelector('.PT-main-footer p');
        if (footerText && translations[currentLanguage] && translations[currentLanguage]['footer-created']) {
            footerText.textContent = translations[currentLanguage]['footer-created'];
        }
    }
}


// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.PT-main-language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update injected components
    updateInjectedComponents();
}

// Setup language selector
function setupLanguageSelector() {
    // Set initial language from localStorage
    changeLanguage(currentLanguage);
    
    // Update modal language buttons
    document.querySelectorAll('.PT-main-modal-language-btn').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Also update the modal buttons when language changes
    const originalChangeLanguage = changeLanguage;
    changeLanguage = function(lang) {
        originalChangeLanguage(lang);
        
        // Update active state in modal
        document.querySelectorAll('.PT-main-modal-language-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    };
}

// Helper function to get translated category name
function getTranslatedCategoryName(category) {
    const names = {
        "alkali": translations[currentLanguage]["alkali-metals"] || "Alkali Metal",
        "alkaline": translations[currentLanguage]["alkaline-earth-metals"] || "Alkaline Earth Metal",
        "transition": translations[currentLanguage]["transition-metals"] || "Transition Metal",
        "post-transition": translations[currentLanguage]["post-transition-metals"] || "Post-Transition Metal",
        "metalloids": translations[currentLanguage]["metalloids"] || "Metalloid",
        "nonmetals": translations[currentLanguage]["nonmetals"] || "Nonmetal",
        "halogens": translations[currentLanguage]["halogens"] || "Halogen",
        "noble": translations[currentLanguage]["noble-gases"] || "Noble Gas",
        "lanthanides": translations[currentLanguage]["lanthanides"] || "Lanthanide",
        "actinides": translations[currentLanguage]["actinides"] || "Actinide"
    };
    return names[category] || category;
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

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    
    // Set up language selector for injected components
    setupLanguageSelector();
    
    // Set up modal for index page (if modal exists)
    if (document.getElementById('optionsModal')) {
        setupModal();
    }
});