const formTitle = document.getElementById('form-title');
const formBtn = document.getElementById('form-btn');
const switchBtn = document.getElementById('switch-btn');
const switchText = document.getElementById('switch-text');
const loginOptions = document.getElementById('login-options');
const loginForm = document.getElementById('login-form');

// Switch between login and register
switchBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (formBtn.innerText === 'Login') {
    formTitle.innerText = 'Sign Up';
    formBtn.innerText = 'Sign Up';
    switchText.innerHTML = 'Already have an account? <a href="#" id="switch-btn" class="switch-btn">Login</a>';
    loginOptions.style.display = 'none';  // Hide 'Remember me' and 'Forgot password'
  } else {
    formTitle.innerText = 'Login';
    formBtn.innerText = 'Login';
    switchText.innerHTML = 'Don\'t have an account? <a href="#" id="switch-btn" class="switch-btn">Register</a>';
    loginOptions.style.display = 'flex';  // Show 'Remember me' and 'Forgot password'
  }
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the form from submitting

  // Show alert for successful login
  alert('Login successful!');

  // Add a 1-second delay before redirecting to the homepage
  setTimeout(function() {
    window.location.href = 'index.html';  // Redirect to index.html after 1 second
  }, 500);  // 1000 milliseconds = 1 second
});
