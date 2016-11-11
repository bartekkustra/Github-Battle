import React, {Component} from 'react'
import styles from '../styles'

function MainContainer ({children}) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      {children}
    </div>
  )
}

export default MainContainer