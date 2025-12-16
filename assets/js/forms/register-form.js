// AICANARY: CSD-ELearn-2025

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    
    return hasUpperCase && hasNumber && hasMinLength;
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = message;
    input.style.borderColor = '#e74c3c';
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = '';
    input.style.borderColor = '';
}

function validateForm() {
    let isValid = true;
    const form = document.getElementById('registerForm');
    
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
        showError(firstName, 'First name is required');
        isValid = false;
    } else {
        clearError(firstName);
    }
    
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        showError(lastName, 'Last name is required');
        isValid = false;
    } else {
        clearError(lastName);
    }
    
    const birthDate = document.getElementById('birthDate');
    if (!birthDate.value) {
        showError(birthDate, 'Birth date is required');
        isValid = false;
    } else {
        const age = calculateAge(birthDate.value);
        if (age < 13) {
            showError(birthDate, 'You must be at least 13 years old');
            isValid = false;
        } else {
            clearError(birthDate);
        }
    }
    
    const email = document.getElementById('email');
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    const username = document.getElementById('username');
    if (!username.value.trim()) {
        showError(username, 'Username is required');
        isValid = false;
    } else if (username.value.length < 4) {
        showError(username, 'Username must be at least 4 characters');
        isValid = false;
    } else {
        clearError(username);
    }
    
    const password = document.getElementById('password');
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (!validatePassword(password.value)) {
        showError(password, 'Password must be 8+ chars with uppercase and number');
        isValid = false;
    } else {
        clearError(password);
    }
    
    const confirmPassword = document.getElementById('confirmPassword');
    if (!confirmPassword.value) {
        showError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }
    
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const interestsGroup = document.querySelector('.checkbox-group').closest('.form-group');
    if (interests.length === 0) {
        const errorElement = interestsGroup.querySelector('.error-message');
        errorElement.textContent = 'Please select at least one area of interest';
        isValid = false;
    } else {
        const errorElement = interestsGroup.querySelector('.error-message');
        errorElement.textContent = '';
    }
    
    const terms = document.getElementById('terms');
    const termsGroup = terms.closest('.form-group');
    if (!terms.checked) {
        const errorElement = termsGroup.querySelector('.error-message');
        errorElement.textContent = 'You must agree to terms and conditions';
        isValid = false;
    } else {
        const errorElement = termsGroup.querySelector('.error-message');
        errorElement.textContent = '';
    }
    
    return isValid;
}

function getFormData() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        birthDate: document.getElementById('birthDate').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || 'Not specified',
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        experience: document.getElementById('experience').value || 'Not specified',
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
        goals: document.getElementById('goals').value,
        newsletter: document.getElementById('newsletter').checked
    };
    
    return formData;
}

function showConfirmationModal(formData) {
    const modal = document.getElementById('confirmationModal');
    const detailsDiv = document.getElementById('confirmationDetails');
    
    detailsDiv.innerHTML = `
        <div style="text-align: left; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Username:</strong> ${formData.username}</p>
            <p><strong>Birth Date:</strong> ${formData.birthDate}</p>
            <p><strong>Gender:</strong> ${formData.gender}</p>
            <p><strong>Experience:</strong> ${formData.experience}</p>
            <p><strong>Interests:</strong> ${formData.interests.join(', ')}</p>
            ${formData.goals ? `<p><strong>Goals:</strong> ${formData.goals}</p>` : ''}
            <p><strong>Newsletter:</strong> ${formData.newsletter ? 'Yes' : 'No'}</p>
        </div>
    `;
    
    modal.classList.add('active');
}

function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const formData = getFormData();
            
            localStorage.setItem('tutorgo_registration_progress', JSON.stringify(formData));
            
            showConfirmationModal(formData);
        }
    });
    
    const confirmBtn = document.getElementById('confirmSubmit');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const formData = getFormData();
            
            localStorage.setItem('tutorgo_user_data', JSON.stringify(formData));
            
            const modal = document.getElementById('confirmationModal');
            modal.classList.remove('active');
            
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(46, 204, 113, 0.95);
                backdrop-filter: blur(10px);
                color: white;
                padding: 30px 50px;
                border-radius: 15px;
                z-index: 3000;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            `;
            successMsg.innerHTML = `
                <h3 style="margin-bottom: 10px;">Registration Successful!</h3>
                <p>Welcome to TutorGo, ${formData.firstName}!</p>
            `;
            
            document.body.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
                form.reset();
                localStorage.removeItem('tutorgo_registration_progress');
                window.location.href = 'index.html';
            }, 3000);
        });
    }
    
    const cancelBtn = document.getElementById('cancelSubmit');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            const modal = document.getElementById('confirmationModal');
            modal.classList.remove('active');
        });
    }
    
    const savedProgress = localStorage.getItem('tutorgo_registration_progress');
    if (savedProgress) {
        const data = JSON.parse(savedProgress);
        document.getElementById('firstName').value = data.firstName || '';
        document.getElementById('lastName').value = data.lastName || '';
        document.getElementById('birthDate').value = data.birthDate || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('username').value = data.username || '';
        document.getElementById('experience').value = data.experience || '';
        document.getElementById('goals').value = data.goals || '';
        
        if (data.gender) {
            const genderRadio = document.querySelector(`input[name="gender"][value="${data.gender}"]`);
            if (genderRadio) genderRadio.checked = true;
        }
        
        if (data.interests) {
            data.interests.forEach(interest => {
                const checkbox = document.querySelector(`input[name="interests"][value="${interest}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        if (data.newsletter) {
            document.getElementById('newsletter').checked = true;
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRegisterForm);
} else {
    initRegisterForm();
}
