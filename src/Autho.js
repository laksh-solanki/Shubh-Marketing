// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGMT-X5XbNxX5itDMTiAwceUiGGmj-aeI',
  authDomain: 'accurx-46374.firebaseapp.com',
  projectId: 'accurx-46374',
  storageBucket: 'accurx-46374.firebasestorage.app',
  messagingSenderId: '772649671128',
  appId: '1:772649671128:web:e1ecee683ea96f861ebaad',
  measurementId: 'G-4QCVXZJ8K8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

// Function to handle user registration
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Function to check auth state
export const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      callback({ isLoggedIn: true, user })
    } else {
      // User is signed out
      callback({ isLoggedIn: false, user: null })
    }
  })
}
