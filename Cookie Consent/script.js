const body = document.getElementsByTagName('body');
const popupBox = document.getElementById('popup-box');
const cookieConsent = document.createElement('div');
let firstClick = true;

// Event Listener to toggle coockie consent when you click anywhere on the page
body[0].addEventListener('click', () => {
    firstClick ? toggleCookieConsent() : null;
    firstClick = false; 
});

// Function to create cookie consent element
function createCookieConsent() {
    cookieConsent.innerHTML = `
        <div class="fixed z-10 inset-0 w-screen h-screen bg-black opacity-50 justify-center items-center">
        </div>
        <div class="absolute z-20 bottom-3 right-3 flex flex-col justify-center p-8 h-80 w-60 bg-white rounded-2xl shadow-lg ">
            <p class="flex text-center">This website uses cookies to ensure you get the best experience on our website.</p>
            <button id="cookie-consent-accept" class="bg-blue-400 text-bold text-lg mt-4 px-4 py-2 rounded-md">Accept</button>
            <button id="cookie-consent-decline" class="bg-red-300 text-bold text-lg mt-4 px-4 py-2 rounded-md">Decline</button>
        </div>
    `;
    cookieConsent.setAttribute('id', 'cookie-consent');
    cookieConsent.style.display = 'none';
    popupBox.append(cookieConsent);
}
createCookieConsent();

// Display Cookie Consent function
function toggleCookieConsent() {
    if (cookieConsent.style.display === 'none') {
        cookieConsent.style.display = 'block';
    } else {
        cookieConsent.style.display = 'none';
    }
}

// Event Listener for cookie consent accept or decline button
document.getElementById('cookie-consent-accept').addEventListener('click', () => {
    toggleCookieConsent();
})
document.getElementById('cookie-consent-decline').addEventListener('click', () => {
    toggleCookieConsent();
})