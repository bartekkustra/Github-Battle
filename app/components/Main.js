import React from 'react'
import '../main.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function Main (props) {
  return (
    <div className='main-container'>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {React.cloneElement(props.children, {key: props.location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Main
