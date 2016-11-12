import React, {Component} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelpers'

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

  async componentDidMount () {
    const { query } = this.props.location
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo])
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    } catch (error) {
      console.warn('Error in ConfirmBattleContainer', error)
    }
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