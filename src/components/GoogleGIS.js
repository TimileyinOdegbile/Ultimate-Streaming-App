import React, { useEffect } from "react";
import { signIn, signOut } from "../actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { connect } from "react-redux";

function Auth(props) {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "112250512737-m3t11mpf93j1vqel130a4pksdeeoa4p7.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const googleSuccess = async (res) => {
    // console.log(res);
    props.signIn(res.googleId);

  };

  const googleFailure = (error) => {
    // console.log(error);
    console.log("Google sign in failed");
  };

  const renderAuthButton = (renderProps) => {
    if (props.isSignedIn) {
      return (
        <button
          onClick={() => props.signOut()}
          className="ui red google button"
        >
          <i className="google icon" />
          Logout
        </button>
      );
    } else {
      return (
        <button onClick={renderProps.onClick} className="ui green google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return (
    <GoogleLogin
      render={(renderProps) => renderAuthButton(renderProps)}
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Auth);