import React from "react";
import { connect, Connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '440724525062-f5775vkjmfjntu6p1pqr5eqm25lsmccu.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(); 
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>Null</div>;
        } else if (this.state.isSignedIn) {
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

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default connect(null, {signIn, signOut} )(GoogleAuth);

// "You have created a new client application that uses libraries for user authentication or authorization
//  that will soon be deprecated. New clients must use the new libraries instead; 
//  existing clients must also migrate before these libraries are deprecated. 
//  See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."

