import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom'
import { deleteStream } from '../../actions';
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.userId) {
      return (
        <div className='ui right floated content'>
          <Link to= {`/streams/Edit/${stream.id}`} className='ui primary button'>
            Edit
          </Link>
          <Link to = {`streams/delete/${stream.id}`} className='ui button negative'>
            Delete
          </Link>
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
          <Link to={`/streams/${stream.id}`} className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </Link>
        </div>
      )
    })
  }

  renderCreate() {
    if(this.props.userId !==null) {
      return(
        <Link to = "/streams/new" className='ui button primary'>
          Create Stream
        </Link>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userId: state.currentUser.userId,streams : Object.values(state.streams)}
}

export default connect(mapStateToProps, {fetchStreams, deleteStream})(StreamList);
