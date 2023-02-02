import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    const actions = () => {
      const onConfirm = () => {
        this.props.deleteStream(this.props.match.params.id)
      }
      return (// react fragment is basically an invisible div, put to make sure semantic ui renders button properly
        <React.Fragment> 
          <button onClick={() => onConfirm()} className='ui button negative'>Delete</button>
          <Link to = '/' className='ui button'>Cancel</Link>
        </React.Fragment>
      )
    }
    return (
      <div>
        <Modal
         title = "Delete" 
         description = {`Do you want to permanently delete this stream? : ${this.props.stream.title} `}
         actions = {actions}
         onDismiss = {()=> history.push('/')}
         />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {deleteStream,fetchStream}) (StreamDelete);
