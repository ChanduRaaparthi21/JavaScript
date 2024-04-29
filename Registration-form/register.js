document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate form fields
    if (!username || !email || !password || !confirmPassword) {
      showMessage('Please fill in all fields', 'red');
      return;
    }
  
    // Validate password and confirm password
    if (password !== confirmPassword) {
      showMessage('Passwords do not match', 'red');
      return;
    }
  
    // Success message with user-entered credentials
    var successMessage = `Registration successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`;
    showMessage(successMessage, 'green');
  
    // Reset form
    document.getElementById('registrationForm').reset();
  });
  
  function showMessage(message, color) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
  }
  