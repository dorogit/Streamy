import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.userId) {
      return (
        <div className='ui right floated content'>
          <button className='ui primary button'>
            Edit
          </button>
          <button className='ui button negative'>
            Delete
          </button>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map((stream)=>{
      return(
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userId: state.currentUser.userId,streams : Object.values(state.streams)}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
