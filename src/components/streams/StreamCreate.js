import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput({ input,label }) { //forcibly taking props from redux-form by assigning props to our field helper function, forms is doing this magic automatically and providing stuff according to my needs!! :
    return(
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
      </div>
      
    )
  }

  render() {
    return(
      <form className='ui form'>
        <Field name="Title" component={this.renderInput} label='Enter a title for your stream'/> 
        <Field name="Description" component={this.renderInput} label='Enter something nice to describe your stream!'/>
      </form>
    )
  }
};

export default reduxForm({
  form: 'StreamCreate'
}) (StreamCreate);
