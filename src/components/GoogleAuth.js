import React from 'react';
import { SignIn } from '../actions';
import { connect } from 'react-redux';
class GoogleAuth extends React.Component {
  
  componentDidMount() {
    let self = this
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: '218020527928-33r48v1f5gdup9kg7mbtdsagnjh6j3ki.apps.googleusercontent.com',
        callback: (response) => {self.props.SignIn(response)},
        login_uri:"http://localhost:3000",
      });
      google.accounts.id.renderButton(
        document.getElementById("SignIn"),
        { theme: "outline", size: "large" },
      );
    }
    console.log(this)
  }
  render() {
    return (
    <div id ="SignIn">state is : {this.props.ID}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ID : state.userState.userId }
}
export default connect(mapStateToProps, {SignIn})(GoogleAuth);
