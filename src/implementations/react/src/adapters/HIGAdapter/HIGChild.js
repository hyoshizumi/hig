import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HIGChild extends Component {
  static propTypes = {
    children: PropTypes.node,
    HIGConstructor: PropTypes.func,
    instance: PropTypes.any,
    setter: PropTypes.string
  }

  static contextTypes = {
    parent: PropTypes.object
  }

  static childContextTypes = {
    parent: PropTypes.object
  }

  getChildContext() {
    return { parent: this.props.instance };
  }

  render() {
    return this.props.children;
  }
}
