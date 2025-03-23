import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
// Sign-Up
createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => { console.log("User signed up:", userCredential.user); })
    .catch(error => { console.error("Error:", error.message); });
// Sign-In
signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => { console.log("User signed in:", userCredential.user); })
    .catch(error => { console.error("Error:", error.message); });

    import { db } from './firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
const q = query(collection(db, "shipments"), where("userId", "==", user.uid));
const querySnapshot = await getDocs(q);
querySnapshot.forEach(doc => {
    console.log(doc.id, " => ", doc.data());
});

hamburgerButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    hamburgerButton.setAttribute('aria-expanded', isMenuOpen);
    if (isMenuOpen) {
        navLinks.classList.remove('closed');
        navLinks.classList.add('open');
        hamburgerButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
    } else {
        navLinks.classList.remove('open');
        navLinks.classList.add('closed');
        hamburgerButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    }
});

const overlay = document.getElementById('overlay');
hamburgerButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navLinks.classList.remove('closed');
        navLinks.classList.add('open');
        hamburgerButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
        overlay.classList.remove('hidden');
    } else {
        navLinks.classList.remove('open');
        navLinks.classList.add('closed');
        hamburgerButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        overlay.classList.add('hidden');
    }
});