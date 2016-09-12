import React, {PropTypes, Component} from 'react'

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}

class Loading extends Component {
  render() {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

Loading.propTypes = {

};

export default Loading
