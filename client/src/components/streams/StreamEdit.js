import React from 'react';
import { connect } from 'react-redux';
import { editStream,fetchStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.fetchStream(3))
  }

  onSubmit = (formValues) => {
    this.props.editStream(formValues)
  }

  render() {
    console.log(this.props.stream)
    if (!this.props.stream) {
      return (
      <div>
        goofy ass component is loading....
      </div>
      )
    }
    else return (
    <div>
      <h3>Edit your Stream</h3>
      <StreamForm onSubmit={this.onSubmit}/>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { editStream,fetchStream })(StreamEdit);

