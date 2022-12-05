import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAaEtJlQlR6qOCGMfzyfUhIANbEvjfGY_M",
    authDomain: "bedating-50f8f.firebaseapp.com",
    projectId: "bedating-50f8f",
    storageBucket: "bedating-50f8f.appspot.com",
    messagingSenderId: "972686029034",
    appId: "1:972686029034:web:6ec35c17ce84fc85bb6793"
};
  
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);