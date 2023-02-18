import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";

class GoogleAuthGIS extends React.Component {
//   componentDidMount() {
//     window.gapi.client.init({
//       clientId:
//         "112250512737-m3t11mpf93j1vqel130a4pksdeeoa4p7.apps.googleusercontent.com",
//       scope: "email",
//     });

//     this.auth = gapi.auth2.getAuthInstance();
//     console.log(this.auth);

//     this.onAuthChange(this.auth.isSignedIn.get());
//     this.auth.isSignedIn.listen(this.onAuthChange);
//   }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  googleSuccess = async (res) => {
    console.log("This is the response" + res);
    this.props.signIn();
  };

  googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in failed");
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Null</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Logout
        </button>
      );
    } else {
      return (
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={this.googleSuccess}
            onFailure={this.googleFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuthGIS);
