// PWA functionality for Physics Hub
class PWAHelper {
  constructor() {
    this.deferredPrompt = null;
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.setupBeforeInstallPrompt();
    this.setupStandaloneDetection();
    this.checkForUpdates();
  }

  // Register Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered successfully:', registration);

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('Service Worker update found!', newWorker);
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              this.showUpdateNotification();
            }
          });
        });

        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // Check every hour

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  // Handle beforeinstallprompt event
  setupBeforeInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallPrompt();
    });

    window.addEventListener('appinstalled', (e) => {
      console.log('App was successfully installed');
      this.deferredPrompt = null;
      this.hideInstallPrompt();
      
      // Track installation if you have analytics
      this.trackInstallation();
    });
  }

  // Show install prompt
  showInstallPrompt() {
    // Create or show your install prompt UI
    const installPrompt = document.getElementById('install-prompt') || this.createInstallPrompt();
    installPrompt.style.display = 'block';
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      this.hideInstallPrompt();
    }, 10000);
  }

  // Create install prompt element
  createInstallPrompt() {
    const prompt = document.createElement('div');
    prompt.id = 'install-prompt';
    prompt.className = 'pwa-install-prompt';
    prompt.innerHTML = `
      <div class="pwa-prompt-content">
        <div class="pwa-prompt-text">
          <strong>Install Physics Hub</strong>
          <p>Get the full app experience with offline access</p>
        </div>
        <div class="pwa-prompt-buttons">
          <button class="pwa-prompt-install" id="pwa-install-btn">Install</button>
          <button class="pwa-prompt-dismiss" id="pwa-dismiss-btn">Not Now</button>
        </div>
      </div>
    `;

    document.body.appendChild(prompt);

    // Add event listeners
    document.getElementById('pwa-install-btn').addEventListener('click', () => {
      this.installApp();
    });

    document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
      this.hideInstallPrompt();
    });

    return prompt;
  }

  // Hide install prompt
  hideInstallPrompt() {
    const prompt = document.getElementById('install-prompt');
    if (prompt) {
      prompt.style.display = 'none';
    }
  }

  // Install app
  async installApp() {
    if (!this.deferredPrompt) return;

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    
    console.log(`User response to the install prompt: ${outcome}`);
    this.deferredPrompt = null;
    this.hideInstallPrompt();
  }

  // Check if app is running in standalone mode
  setupStandaloneDetection() {
    // Detect if in standalone mode
    if (this.isStandalone) {
      document.documentElement.classList.add('pwa-standalone');
    }

    // Listen for display mode changes
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
      this.isStandalone = e.matches;
      if (e.matches) {
        document.documentElement.classList.add('pwa-standalone');
      } else {
        document.documentElement.classList.remove('pwa-standalone');
      }
    });
  }

  // Check for app updates
  async checkForUpdates() {
    try {
      const response = await fetch('/version.json');
      const currentVersion = await response.json();
      const cachedVersion = localStorage.getItem('app-version');

      if (cachedVersion && cachedVersion !== currentVersion.version) {
        this.showUpdateNotification();
      }

      localStorage.setItem('app-version', currentVersion.version);
    } catch (error) {
      console.error('Failed to check for updates:', error);
    }
  }

  // Show update notification
  showUpdateNotification() {
    // Create update notification
    const updateNotification = document.createElement('div');
    updateNotification.id = 'update-notification';
    updateNotification.className = 'pwa-update-notification';
    updateNotification.innerHTML = `
      <div class="pwa-update-content">
        <span>New version available!</span>
        <button id="pwa-update-btn">Update</button>
        <button id="pwa-update-dismiss">Dismiss</button>
      </div>
    `;

    document.body.appendChild(updateNotification);

    document.getElementById('pwa-update-btn').addEventListener('click', () => {
      window.location.reload();
    });

    document.getElementById('pwa-update-dismiss').addEventListener('click', () => {
      updateNotification.remove();
    });
  }

  // Track installation (for analytics)
  trackInstallation() {
    // Implement your analytics tracking here
    console.log('App installation tracked');
    
    // Example with localStorage
    localStorage.setItem('app-installed', 'true');
    localStorage.setItem('app-install-date', new Date().toISOString());
  }

  // Check connectivity status
  setupConnectivityDetection() {
    window.addEventListener('online', () => {
      document.documentElement.classList.remove('offline');
      this.showOnlineMessage();
    });

    window.addEventListener('offline', () => {
      document.documentElement.classList.add('offline');
      this.showOfflineMessage();
    });

    // Initial check
    if (!navigator.onLine) {
      document.documentElement.classList.add('offline');
    }
  }

  // Show online message
  showOnlineMessage() {
    this.showStatusMessage('Connection restored', 'online');
  }

  // Show offline message
  showOfflineMessage() {
    this.showStatusMessage('You are currently offline', 'offline');
  }

  // Show status message
  showStatusMessage(message, type) {
    const statusMsg = document.createElement('div');
    statusMsg.className = `pwa-status-message pwa-${type}`;
    statusMsg.textContent = message;
    
    document.body.appendChild(statusMsg);
    
    setTimeout(() => {
      statusMsg.remove();
    }, 3000);
  }
}

// Initialize PWA when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.pwaHelper = new PWAHelper();
});

// Add to Home Screen functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.ready.then((registration) => {
      console.log('Service Worker is ready:', registration);
    });
  });
}