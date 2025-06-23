function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Inscription réussie ! Vous pouvez vous connecter.');
  window.location.href = 'index.html';
}
function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.email === email && user.password === password) {
    alert('Connexion réussie !');
    window.location.href = 'dashboard.html';
  } else {
    alert('Email ou mot de passe incorrect.');
  }
}
