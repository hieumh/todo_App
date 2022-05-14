import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiFirebaseAuthConfig } from "../../constant/FirebaseConfig";
import { setUser } from "../../actions/accountActions";
import { connect } from "react-redux";

function FirebaseAuthChecker({ children, setUser }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user);
        setUser(user);
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My app</h1>
        <p>Please signed in:</p>
        <StyledFirebaseAuth
          uiCallback={(ui) => ui.disableAutoSignIn()}
          uiConfig={uiFirebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return <>{children}</>;
}

export default connect(null, {
  setUser,
})(FirebaseAuthChecker);
