import React, { useState } from "react";
import "./App.css";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "firebase";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";

const App = () => {
  const [user, setUser] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBPlUUoZRP4LhuXUsv_0WgSMtj2du5DI5k",
    authDomain: "trackman-bysavio.firebaseapp.com",
    projectId: "trackman-bysavio",
    storageBucket: "trackman-bysavio.appspot.com",
    messagingSenderId: "540424581903",
    appId: "1:540424581903:web:1149938fd35dccc859047a",
    measurementId: "G-LPHWV1CQWG",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    }
  });

  const signUpSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Created");
        window.open("/signin", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User Signed In");
        window.open("/", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User Signed Out");
        window.open("/signin", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Reset Email Sent 🚀");
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home signOut={signOut} user={user} />
        </Route>
        <Route path="/signin" exact>
          <SignIn signInSubmit={signInSubmit} />
        </Route>
        <Route path="/signup" exact>
          <SignUp signUpSubmit={signUpSubmit} />
        </Route>
        <Route path="/reset" exact>
          <Reset resetSubmit={resetSubmit} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
