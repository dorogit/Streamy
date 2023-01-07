import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: '  218020527928-33r48v1f5gdup9kg7mbtdsagnjh6j3ki.apps.googleusercontent.com',
        callback: HandleToken(),
        scope: 'email'
      });
      google.accounts.id.prompt();
    };
  }

  HandleToken = (token) => {
    console.log(token)
  }
  renderAuthButton() {
    return(
    <div>
      <div id="g_id_onload"
        data-client_id="218020527928-33r48v1f5gdup9kg7mbtdsagnjh6j3ki.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000"
        data-itp_support="true">
      </div>

      <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
      </div>
      <div className="g_id_signout">Sign Out</div>
    </div>
    )
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
