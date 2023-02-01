import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.onload = (e) => {
      window.google.accounts.id.initialize({
        client_id: '112250512737-m3t11mpf93j1vqel130a4pksdeeoa4p7.apps.googleusercontent.com',
        callback: this.handleCredentialResponse
      });
      window.google.accounts.id.prompt();


    };
  }

  handleCredentialResponse = (response) => {
    if (response.client_id) {
      this.props.signIn();
    } 
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.props.signIn();
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Null</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

// "You have created a new client application that uses libraries for user authentication or authorization
//  that will soon be deprecated. New clients must use the new libraries instead;
//  existing clients must also migrate before these libraries are deprecated.
//  See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."



// Finish this current course
// Have a deep understanding of the following and apply for at least 3 jobs/internship roles daily:
// node-modules, public folder, src, package.json, .env(environment variables), 
// Pick not less than minimum of three large projects with react and redux
// New challenges and difficulties along the line
// Folder structure, naming variables and components and best-practices
