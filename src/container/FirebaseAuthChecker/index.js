import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiFirebaseAuthConfig } from "../../constant/FirebaseConfig";

export default function FirebaseAuthChecker(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => setIsSignedIn(!!user));
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My app</h1>
        <p>Please signed in:</p>
        <StyledFirebaseAuth
          uiConfig={uiFirebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return <>{props.children}</>;
}
