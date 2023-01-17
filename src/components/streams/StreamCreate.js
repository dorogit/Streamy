import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return(
      <input {...formProps.input} />
    )
  }

  render() {
    return(
      <form>
        <Field name="Title" component={this.renderInput}/>
        <Field name="Description" component={this.renderInput}/>
      </form>
    )
  }
};

export default reduxForm({
  form: 'StreamCreate'
}) (StreamCreate);
