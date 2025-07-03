// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your Firebase configuration (same as in your original code)
const firebaseConfig = {
  apiKey: "AIzaSyAzlIlLnt_C6-Wxipw4RtZbYS2n_RAI3vA",
  authDomain: "spiral-scans.firebaseapp.com",
  projectId: "spiral-scans",
  storageBucket: "spiral-scans.appspot.com",
  messagingSenderId: "126856628746",
  appId: "1:126856628746:web:7c070d390520cc97e06df3",
  measurementId: "G-8W2PLDKGNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM elements (same IDs as in your HTML)
const loginModal = document.getElementById("loginModal");
const overlay = document.getElementById("overlay");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");

// Google Sign-In
googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      closeLogin();
      alert("Welcome, " + result.user.displayName);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// Email/Password Sign-In
loginBtn.addEventListener("click", () => {
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
});

// Auth State Observer (optional)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user signed in.");
  }
});