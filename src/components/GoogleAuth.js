import React from 'react';
import jwtDecode from 'jwt-decode';
import { SignIn } from '../actions';
import { connect } from 'react-redux';
class GoogleAuth extends React.Component {
  componentDidMount() {
    function HandleToken(response) {
    const decoded = jwtDecode(response.credential)
    console.log(`This is your ID: ${decoded.sub}`)
    this.props.SignIn(decoded)
    this.userId = decoded.sub
    }
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: '218020527928-33r48v1f5gdup9kg7mbtdsagnjh6j3ki.apps.googleusercontent.com',
        callback:HandleToken.bind(this),
        login_uri:"http://localhost:3000",
      });
      google.accounts.id.renderButton(
        document.getElementById("SignIn"),
        { theme: "outline", size: "large" },
      );
    }
  }

  render() {
    return <div id ="SignIn"></div>;
  }
}

const mapStateToProps = (state) => {
  return { userId: state.reducers.userId }
}
export default connect(mapStateToProps, {SignIn})(GoogleAuth);