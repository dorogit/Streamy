import React from 'react';
import { connect } from 'react-redux';
import { editStream,fetchStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash'
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.stream.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id,formValues)
  }

  render() {
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
      <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { editStream,fetchStream })(StreamEdit);

