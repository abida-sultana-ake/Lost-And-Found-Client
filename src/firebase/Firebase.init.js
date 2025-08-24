import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBEMDWRlNS_69xQV6I_A-EkVNGBwy0sHmA",
  authDomain: "lost-and-found-a76d0.firebaseapp.com",
  projectId: "lost-and-found-a76d0",
  storageBucket: "lost-and-found-a76d0.firebasestorage.app",
  messagingSenderId: "725877501400",
  appId: "1:725877501400:web:30c5e6f6b6052e474696ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);