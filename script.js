// Tab Navigation - Simple and Functional
function showPage(pageName) {
    navigateToPage(pageName);
}

// Navigate to page and update sidebar (used by both menu and cards)
function navigateToPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update active menu item
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Find and activate the corresponding menu item
    menuItems.forEach(item => {
        if (item.textContent.includes(getPageEmoji(pageName))) {
            item.classList.add('active');
        }
    });
}

// Helper function to get emoji for page
function getPageEmoji(pageName) {
    const emojis = {
        'dashboard': '🏠',
        'workouts': '💪',
        'diet': '🥗',
        'hydration': '💧',
        'profile': '👤'
    };
    return emojis[pageName] || '';
}

// Navigate to workout category pages
function navigateToWorkout(categoryName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected workout category page
    const selectedPage = document.getElementById(categoryName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Keep workouts menu item active
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    const workoutsMenuItem = Array.from(menuItems).find(item => 
        item.textContent.includes('💪')
    );
    if (workoutsMenuItem) {
        workoutsMenuItem.classList.add('active');
    }
}

// Navigate to diet category pages
function navigateToDiet(categoryName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected diet category page
    const selectedPage = document.getElementById(categoryName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Keep diet menu item active
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    const dietMenuItem = Array.from(menuItems).find(item =>
        item.textContent.includes('🥗')
    );
    if (dietMenuItem) {
        dietMenuItem.classList.add('active');
    }
}

// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weightInput").value;
    let height = document.getElementById("heightInput").value / 100;

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(1);

        document.getElementById("bmiValue").innerText = bmi;

        let status = document.getElementById("bmiStatus");

        if (bmi < 18.5) {
            status.innerText = "Underweight";
            status.className = "bmi-status underweight";
        } 
        else if (bmi < 25) {
            status.innerText = "Normal";
            status.className = "bmi-status normal";
        } 
        else if (bmi < 30) {
            status.innerText = "Overweight";
            status.className = "bmi-status overweight";
        } 
        else {
            status.innerText = "Obese";
            status.className = "bmi-status obese";
        }
    }
}

// Water Intake Tracker
let waterCount = 3;
const circumference = 2 * Math.PI * 85; // radius is 85

function addWater() {
    if (waterCount < 8) {
        waterCount++;
        updateCircularProgress();
    }
}

function resetWater() {
    waterCount = 0;
    updateCircularProgress();
}

function updateCircularProgress() {
    const percentage = (waterCount / 8) * 100;
    const offset = circumference * (1 - percentage / 100);
    
    const progressCircle = document.getElementById('progressCircle');
    const waterCountDisplay = document.getElementById('waterCountDisplay');
    
    if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
    }
    
    if (waterCountDisplay) {
        waterCountDisplay.textContent = waterCount;
    }
}

// Initialize circular progress on page load
window.addEventListener('DOMContentLoaded', function() {
    updateCircularProgress();
});

// Profile Update
function updateProfile() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const gender = document.getElementById("genderInput").value;
    const weight = document.getElementById("weightProfileInput").value;
    const height = document.getElementById("heightProfileInput").value;
    
    // Update profile display
    if (name) document.getElementById("profileName").innerText = name;
    if (age) document.getElementById("profileAge").innerText = age;
    if (gender) document.getElementById("profileGender").innerText = gender;
    if (weight) document.getElementById("profileWeight").innerText = weight;
    if (height) document.getElementById("profileHeight").innerText = height;
    
    // Sync with BMI calculator inputs
    if (weight) document.getElementById("weightInput").value = weight;
    if (height) document.getElementById("heightInput").value = height;
    
    // Update welcome message on dashboard
    const welcomeSpan = document.querySelector('.welcome .highlight');
    if (welcomeSpan && name) {
        welcomeSpan.innerText = name;
    }
    
    // Recalculate BMI if weight and height are provided
    if (weight > 0 && height > 0) {
        calculateBMI();
    }
}
