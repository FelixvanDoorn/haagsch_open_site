/**
 * HAAGSCH OPEN 2026 - Official Script
 * Handles Language Switching and Persistent User Preferences
 */

// 1. Initialize the page as soon as the HTML is parsed
document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has visited before and picked a language
    // If not, default to Dutch ('nl')
    const savedLang = localStorage.getItem('preferredLang') || 'nl';

    // Apply the language immediately on page load
    setLanguage(savedLang);
});

/**
 * Function to switch site language
 * @param {string} lang - 'en' or 'nl'
 */
function setLanguage(lang) {
    // A. Identify all elements with language classes
    const nlElements = document.querySelectorAll('.lang-nl');
    const enElements = document.querySelectorAll('.lang-en');
    const buttons = document.querySelectorAll('.flag-btn');

    // B. Toggle visibility based on selection
    if (lang === 'en') {
        nlElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
    } else {
        enElements.forEach(el => el.classList.add('hidden'));
        nlElements.forEach(el => el.classList.remove('hidden'));
    }

    // C. Update the "Active" state of the flag buttons
    // This gives the chosen flag the Gold border from your CSS
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // We check if the button's onclick attribute contains the language string
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    // D. Save the choice to the browser's "Filing Cabinet" (localStorage)
    // This ensures the site "remembers" the choice even after a refresh
    localStorage.setItem('preferredLang', lang);

    // E. Console log for testing (Confirming the action in Browser Inspect)
    console.log(`Haagsch Open: Language updated to ${lang.toUpperCase()}`);
}