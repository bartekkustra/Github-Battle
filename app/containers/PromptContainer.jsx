import React, {Component} from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor (props, context) {
    super (props, context)
    
    this.state = {
      username: '',
      errorMessage: null
    }
    context.router

    this.handleSubmitUser = this.handleSubmitUser.bind(this)
    this.handleUpdateUser = this.handleUpdateUser.bind(this)
  }

  handleSubmitUser (e) {
    e.preventDefault()
    const username = this.state.username
    if (username === '') {
      this.setState({
        errorMessage: 'Missing username'
      })
    } else {
      this.setState({
        username: ''
      })
      const { playerOne } = this.props.routeParams
      if (playerOne) {
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne,
            playerTwo: username
          }
        })
      } else {
        this.context.router.push(`/playerTwo/${username}`)
      }
    }
  }

  handleUpdateUser (event) {
    let current = event.target.value
    current = current.replace(/[^a-zA-Z0-9]/g,"")

    current !== ''
      ? this.setState({ errorMessage: null })
      : this.setState({ errorMessage: 'Missing username' })

    this.setState({
      username: current
    })
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} 
        errorMessage={this.state.errorMessage} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
