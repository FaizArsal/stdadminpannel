
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOAMr9ZvWtR2rbq7Ub_utJdwDA_TsyhKQ",
  authDomain: "regisformauthdatabase.firebaseapp.com",
  databaseURL: "https://regisformauthdatabase-default-rtdb.firebaseio.com",
  projectId: "regisformauthdatabase",
  storageBucket: "regisformauthdatabase.appspot.com",
  messagingSenderId: "514143753848",
  appId: "1:514143753848:web:3754182a4be8bd4d06ff8d",
  measurementId: "G-NEGWEG6SKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
