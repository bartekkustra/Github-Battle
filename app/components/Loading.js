import React, {PropTypes, Component} from 'react'
import styles from '../styles'

class Loading extends Component {
  constructor (props) {
    super (props)
    
    this.originalText = this.props.text

    this.state = {
      text: this.originalText
    }
  }

  componentDidMount () {
    const stopper = this.originalText + '...'
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.content}>{this.state.text}</h1>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
