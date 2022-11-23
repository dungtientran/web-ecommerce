
import './App.css';
import Layout from './components/layout/Layout';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8LPoWkFidropk-qMbf53ny7xAoo_qajo",
  authDomain: "webbydung.firebaseapp.com",
  projectId: "webbydung",
  storageBucket: "webbydung.appspot.com",
  messagingSenderId: "739506389203",
  appId: "1:739506389203:web:d72f9f311c7933a66d1426",
  measurementId: "G-3E8V2EVNC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
