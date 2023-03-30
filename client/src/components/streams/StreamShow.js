import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js'
class StreamShow extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id) //getting the id from the url kinda
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer() //to build player at any point after the first time comp. mounts
  }

  buildPlayer() {
    if(this.player || !this.props.stream) {
      return;
    }
    this.player  =flv.createPlayer({
      type:'flv',
      url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    if (!this.props.stream) {
      return(
        <div>
          loading...
        </div>
      )
    } else {
      return(
        <div>
          <video ref={this.videoRef} style={{width:'100%'}} controls={true}/>
          <h2>
            {this.props.stream.title}
          </h2>
          <h3>
            {this.props.stream.description}
          </h3>
        </div>
      )
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream}) (StreamShow);
//test