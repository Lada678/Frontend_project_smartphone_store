
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBTiyYtd9N8XNiDodVDdLxpC_zeyVJDKAA",

  authDomain: "store-4cb2b.firebaseapp.com",

  projectId: "store-4cb2b",

  storageBucket: "store-4cb2b.appspot.com",

  messagingSenderId: "30982436155",

  appId: "1:30982436155:web:1f20e4d18c9e57d5a3331e"

};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
