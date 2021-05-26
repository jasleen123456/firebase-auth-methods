import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArMcPSmKPHef7JkoCMC_sa0pwIAZUlciA",
  authDomain: "todo-bysavio.firebaseapp.com",
  projectId: "todo-bysavio",
  storageBucket: "todo-bysavio.appspot.com",
  messagingSenderId: "190049626154",
  appId: "1:190049626154:web:51016ff378a1e80c1ffb53",
  measurementId: "G-5HNJBKNDK9",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
