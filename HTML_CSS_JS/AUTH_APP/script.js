/* script.js */
/* Author: Praveen kumar */

const UI = {
    signupForm: document.getElementById('signupForm'),
    loginForm: document.getElementById('loginForm'),
    signupSection: document.getElementById('signupSection'),
    loginSection: document.getElementById('loginSection'),
    profileSection: document.getElementById('profileSection'),
    toggleToLogin: document.getElementById('toggleToLogin'),
    toggleToSignup: document.getElementById('toggleToSignup'),
    logoutBtn: document.getElementById('logoutBtn'),
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail')
};

/**
 * Check karna ki user pehle se logged in hai ya nahi
 */
const checkLoginStatus = () => {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
        showProfile(activeUser);
    } else {
        showSignup(); // Default view
    }
};

/**
 * Views toggle karne ke functions
 */
const showSignup = () => {
    UI.signupSection.classList.remove('hide');
    UI.loginSection.classList.add('hide');
    UI.profileSection.classList.add('hide');
};

const showLogin = () => {
    UI.signupSection.classList.add('hide');
    UI.loginSection.classList.remove('hide');
    UI.profileSection.classList.add('hide');
};

const showProfile = (user) => {
    UI.signupSection.classList.add('hide');
    UI.loginSection.classList.add('hide');
    UI.profileSection.classList.remove('hide');
    
    // User data show karna
    UI.userName.textContent = `Welcome, ${user.name}!`;
    UI.userEmail.textContent = `Email: ${user.email}`;
};

/**
 * Signup form handle karna
 */
UI.signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form se data extract karna
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const pass = e.target.elements[2].value;

    const userData = { name, email, pass };

    // Database simulation (localStorage)
    let users = JSON.parse(localStorage.getItem('usersDB')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        alert("Ye email pehle se registered hai! Login karein.");
        return;
    }

    users.push(userData);
    localStorage.setItem('usersDB', JSON.stringify(users));
    
    alert("Signup successful! Ab aap login kar sakte hain.");
    UI.signupForm.reset();
    showLogin();
});

/**
 * Login form handle karna
 */
UI.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = e.target.elements[0].value;
    const pass = e.target.elements[1].value;

    let users = JSON.parse(localStorage.getItem('usersDB')) || [];
    
    const validUser = users.find(u => u.email === email && u.pass === pass);

    if (validUser) {
        // Active session set karna
        localStorage.setItem('activeUser', JSON.stringify(validUser));
        alert("Login successful!");
        UI.loginForm.reset();
        showProfile(validUser);
    } else {
        alert("Invalid email ya password. Kripya dubara try karein.");
    }
});

/**
 * Logout functionality
 */
UI.logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('activeUser');
    showLogin();
});

// Event listeners for toggle links
UI.toggleToLogin.addEventListener('click', showLogin);
UI.toggleToSignup.addEventListener('click', showSignup);

// Initial call
window.onload = checkLoginStatus;