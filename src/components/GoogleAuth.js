import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '440724525062-d0n3u0nuluhuld5e6tq8u5e9ql3mt0h7.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    };

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;