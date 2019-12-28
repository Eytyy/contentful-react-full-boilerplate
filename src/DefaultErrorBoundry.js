import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DefaultErrorBoundry extends Component {
  state = {
    isError: false
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  static getDerivedStateFromError() {
    return {
      isError: true
    }
  }
  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }
}

export default DefaultErrorBoundry
