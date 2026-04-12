import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3YeX6mjHsPuXO7Gr855rnYfFQ4ra8q0k",
    authDomain: "elevated-fitness-6c0a5.firebaseapp.com",
    projectId: "elevated-fitness-6c0a5",
    storageBucket: "elevated-fitness-6c0a5.firebasestorage.app",
    messagingSenderId: "133961562502",
    appId: "1:133961562502:web:49c2b0b6940c17b990d407",
    measurementId: "G-X18QTSZE1C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

async function logout() {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        throw error;
    }
}

function getCurrentUser() {
    return auth.currentUser;
}

function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
}

export { 
    signIn, 
    signUp, 
    logout, 
    getCurrentUser, 
    onAuthStateChange,
    auth
};