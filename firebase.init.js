import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_apiKey,
  authDomain: import.meta.env.REACT_APP_authDomain,
  projectId: import.meta.env.REACT_APP_projectId,
  storageBucket: import.meta.env.REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.REACT_APP_messagingSenderId,
  appId: import.meta.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
