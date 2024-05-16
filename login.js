function login(event) {
  event.preventDefault();
  
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var sampleEmail = 'admin@test.com';
  var samplePassword = 'admin';

  if (email === sampleEmail && password === samplePassword) {
    localStorage.setItem('isLoggedIn', 'true');
    
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
}
