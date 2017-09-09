import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HIGParent extends Component {
  static propTypes = {
    children: PropTypes.node,
    HIGConstructor: PropTypes.func,
    setter: PropTypes.string
  }

  static contextTypes = {
    parent: PropTypes.object
  }

  componentDidMount() {
    this.context.parent[this.props.setter](this.props.instance);
  }

  render() {
    return null;
  }
}
