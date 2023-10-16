document.addEventListener('DOMContentLoaded', function () {
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.style.display = 'block';
});

document.getElementById('alertMessage').addEventListener('closed.bs.alert', function () {
  this.style.display = 'none';
});
function onSubmitForm() {
  const isPhoneNumberValid = validatePhoneNumber();
  const isPasswordValid = validatePassword();
  if (isPhoneNumberValid && isPasswordValid) {
    return true;
  }
  return false;
}

function validatePhoneNumber() {
  const phoneNumber = document.getElementById('phone').value;
  const phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumber.match(phoneNumberRegex)) {
    const phoneError = document.getElementById('phoneError');
    phoneError.style.display = 'block';
    return false; 
  }
  return true; 
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password.length < 5) {
    const passwordError = document.getElementById('passwordError');
    passwordError.style.display = 'block';
    return false;
  }
  if (password !== confirmPassword) {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.style.display = 'block';
    return false;
  }
  return true; 
}


