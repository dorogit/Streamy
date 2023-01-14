import React from 'react';
import jwtDecode from 'jwt-decode';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    function HandleToken(response) {
    const decoded = jwtDecode(response.credential)
    console.log(decoded)
    console.log(`This is your ID: ${decoded.sub}`)
    }
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: '218020527928-33r48v1f5gdup9kg7mbtdsagnjh6j3ki.apps.googleusercontent.com',
        callback:HandleToken,
        login_uri:"http://localhost:3000",
      });
      google.accounts.id.renderButton(
        document.getElementById("SignIn"),
        { theme: "outline", size: "large" },
      );
    };
  }

  render() {
    return <div id ="SignIn"></div>;
  }
}

export default GoogleAuth;