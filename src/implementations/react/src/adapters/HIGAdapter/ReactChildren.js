import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactChildren extends Component {
  static propTypes = {
    children: PropTypes.node,
    setter: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.appendChildren(this.props, this.state);
  }

  componentWillUpdate(nextProps, nextState) {
    this.appendChildren(nextProps, nextState);
  }

  appendChildren(props, state) {
    if (state.el) {
      props.instance[props.setter](state.el);
    }
  }

  setEl = (el) => {
    this.setState({ el });
  }

  render() {
    const { children, ...rest } = this.props;
    return <div ref={this.setEl}>{children}</div>;
  }
}
