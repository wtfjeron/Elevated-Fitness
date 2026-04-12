import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { 
  getAuth, 
  signOut, 
  signInAnonymously, 
  setPersistence, 
  browserLocalPersistence, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import firebaseConfig from "./firebaseConfig.js";

// ✅ Prevent double initialization
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);

// ✅ FIXED: pass user to onLogin
function setAuthListeners(onLogin, onLogout){
  onAuthStateChanged(auth, user => {
    if (user) {
      onLogin(user);   // ✅ important fix
    } else {
      onLogout();
    }
  });
}

// (renamed to match your HTML import if needed)
async function logIn(){
  try{
    await setPersistence(auth, browserLocalPersistence);
    await signInAnonymously(auth);
  }catch(e){
    console.error(e);
  }
}

async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out', error);
  }
}

export { auth, setAuthListeners, logIn, logout };