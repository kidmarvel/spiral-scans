function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  document.querySelector('.toggle').textContent = newTheme === 'dark' ? '🌙' : '☀️';
}

function toggleMenu() {
  document.getElementById('sidePanel').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('sidePanel').classList.remove('open');
}

function openLogin() {
  document.getElementById('loginModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

window.onclick = function(event) {
  if (!event.target.closest('.login-modal') && !event.target.closest('.account')) {
    closeLogin();
  }
  if (!event.target.matches('.hamburger') && !event.target.closest('.side-panel')) {
    closeMenu();
  }
}

// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzlIlLnt_C6-Wxipw4RtZbYS2n_RAI3vA",
  authDomain: "spiral-scans.firebaseapp.com",
  projectId: "spiral-scans",
  storageBucket: "spiral-scans.appspot.com",
  messagingSenderId: "126856628746",
  appId: "1:126856628746:web:7c070d390520cc97e06df3",
  measurementId: "G-8W2PLDKGNH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM references
const loginModal = document.getElementById("loginModal");
const overlay = document.getElementById("overlay");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");
const accountIcon = document.querySelector(".account");

// Open Login Modal
function openLogin() {
  loginModal.style.display = "block";
  overlay.style.display = "block";
}

// Close Modal
function closeLogin() {
  loginModal.style.display = "none";
  overlay.style.display = "none";
}

window.openLogin = openLogin;
window.closeLogin = closeLogin;

// Login with Google
googleBtn.onclick = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      closeLogin();
      alert("Welcome, " + result.user.displayName);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

loginBtn.onclick = () => {
const email = emailInput.value;
const password = passwordInput.value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    closeLogin();
    alert("Logged in as " + userCredential.user.email);
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });
};

// Detect login state
onAuthStateChanged(auth, (user) => {
if (user) {
  console.log("User logged in:", user.email);
} else {
  console.log("No user is signed in.");
}
});
