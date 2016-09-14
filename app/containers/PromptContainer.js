import React, {Component} from 'react';
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor(props, context) {
    super(props, context)
    
    this.state = {
      username: ''
    }
    context.router

    this.handleSubmitUser = this.handleSubmitUser.bind(this)
    this.handleUpdateUser = this.handleUpdateUser.bind(this)
  }

  handleSubmitUser (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  handleUpdateUser (event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
