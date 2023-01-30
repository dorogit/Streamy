import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
  renderError({error, touched}) {
    if(error && touched) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input,label,meta }) => { //forcibly taking props from redux-form by assigning props to our field helper function, forms is doing this magic automatically and providing stuff according to my needs!! 
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return(
      <div className= {className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field name="title" component={this.renderInput} label='Enter a title for your stream'/> 
        <Field name="description" component={this.renderInput} label='Enter something nice to describe your stream!'/>
        <button className='ui button primary'>
          Submit
        </button>
      </form>
    )
  }
};
const validate = (formValues) => {
  const error ={};
  if (!formValues.title) {
    error.title = "You must enter a title"
  }
  if (!formValues.description) {
    error.description = "You must enter a description"
  }
  return error
}

export default reduxForm({form:'StreamForm',validate:validate}) (StreamForm)