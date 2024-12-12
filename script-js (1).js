// Background Color Toggle
const colorToggleBtn = document.getElementById('colorToggleBtn');
let isBlueBackground = false;

colorToggleBtn.onclick = function() {
    document.body.style.backgroundColor = isBlueBackground ? 'white' : 'lightblue';
    isBlueBackground = !isBlueBackground;
};

// Text Size Slider
const textSizeSlider = document.getElementById('textSizeSlider');
const dynamicText = document.getElementById('dynamicText');

textSizeSlider.oninput = function() {
    dynamicText.style.fontSize = `${this.value}px`;
};

// Modal Functionality
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.onclick = function() {
    modal.style.display = 'block';
};

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Form Validation
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateName() {
    if (nameInput.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters with one uppercase and one number';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Bonus: Dropdown with Message
const dropdown = document.getElementById('optionDropdown');
const dropdownMessage = document.getElementById('dropdownMessage');

dropdown.onchange = function() {
    switch(this.value) {
        case 'option1':
            dropdownMessage.textContent = 'You selected Option 1!';
            break;
        case 'option2':
            dropdownMessage.textContent = 'Option 2 is a great choice!';
            break;
        case 'option3':
            dropdownMessage.textContent = 'Welcome to Option 3!';
            break;
        default:
            dropdownMessage.textContent = '';
    }
};
