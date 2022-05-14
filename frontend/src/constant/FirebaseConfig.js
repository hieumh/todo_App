import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
  meassurementId: process.env.REACT_APP_MEASUREMENT_ID,
  messagingSenderId: process.env.REACT_APP_SENDER_ID
};

export const uiFirebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
