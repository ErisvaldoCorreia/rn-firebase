import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD_d_AseKctGyw74v2cDvNAd960R9Ibkyc',
  authDomain: 'rn-firebase-developerjunior.firebaseapp.com',
  projectId: 'rn-firebase-developerjunior',
  storageBucket: 'rn-firebase-developerjunior.appspot.com',
  messagingSenderId: '660097812955',
  appId: '1:660097812955:web:31f1e92995f5adfe33fffe',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREAUTH = getAuth(FIREBASE_APP);
