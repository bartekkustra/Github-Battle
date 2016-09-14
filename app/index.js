import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import Raven from 'raven-js'

var sentryKey = '6d3ec83169dd4041b975bc2c8530184e'
var sentryApp = '98692'
var sentryUrl = 'https://' + sentryKey + '@sentry.io/' + sentryApp

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'sentry',
    version: '1.0'
}

Raven.config(sentryUrl, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install()

window.onerror = function () {
    Raven.showReportDialog()
}

ReactDOM.render(routes, document.getElementById('app'));