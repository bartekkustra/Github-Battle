import React, {Component} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
  constructor (props, context) {
    super (props, context)

    this.state = {
      isLoading: true,
      playersInfo: []
    }
    context.router

    this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
  }

  componentDidMount () {
    const query = this.props.location.query
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      })
  }

  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer