
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYijfmWfha0TSV3dJMAxFuK1nSaWJTwkg",
  authDomain: "entapp-9e29c.firebaseapp.com",
  projectId: "entapp-9e29c",
  storageBucket: "entapp-9e29c.appspot.com",
  messagingSenderId: "165917819297",
  appId: "1:165917819297:web:627883f7d795de6e528be0",
  measurementId: "G-DN60J4TE7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app) 