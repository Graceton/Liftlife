// Get DOM elements
const themeToggle = document.getElementById('theme-toggle');
const deviceSelect = document.getElementById('device-select');
const languageSelect = document.getElementById('language-select');
const countrySelect = document.getElementById('country-select');
const timezoneSelect = document.getElementById('timezone-select');

// Toggle between Light and Dark Mode
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Set device mode (Mobile/Tablet/Laptop)
deviceSelect.addEventListener('change', () => {
    const device = deviceSelect.value;
    localStorage.setItem('deviceMode', device);
    document.body.className = device + "-mode"; // Apply device-specific class
});

// Handle language selection
languageSelect.addEventListener('change', () => {
    const language = languageSelect.value;
    localStorage.setItem('language', language);
});

// Handle country and timezone selection
countrySelect.addEventListener('change', () => {
    const country = countrySelect.value;
    localStorage.setItem('country', country);
});

timezoneSelect.addEventListener('change', () => {
    const timezone = timezoneSelect.value;
    localStorage.setItem('timezone', timezone);
});

// Load saved preferences on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedDevice = localStorage.getItem('deviceMode');
    const savedLanguage = localStorage.getItem('language');
    const savedCountry = localStorage.getItem('country');
    const savedTimezone = localStorage.getItem('timezone');

    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggle.checked = savedTheme === 'dark';
    }

    if (savedDevice) {
        deviceSelect.value = savedDevice;
        document.body.className = savedDevice + "-mode";
    }

    if (savedLanguage) {
        languageSelect.value = savedLanguage;
    }

    if (savedCountry) {
        countrySelect.value = savedCountry;
    }

    if (savedTimezone) {
        timezoneSelect.value = savedTimezone;
    }
});
