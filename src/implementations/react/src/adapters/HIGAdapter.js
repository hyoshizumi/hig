import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HIGAdapter extends Component {
  static propTypes = {
    HIGConstructor: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.instance = new props.HIGConstructor({});
    this.state = { mounted: false };
  }

  componentDidMount() {
    this._mount = this._el.parentNode;
    this._anchor = document.createComment(`${this.props.name}-anchor`);
    this._mount.replaceChild(this._anchor, this._el);
    this.instance.mount(this._mount, this._anchor);
    this.setState({ mounted: true });
  }

  setEl = (el) => { this._el = el; }

  render() {
    let children = this.state.mounted
      ? React.Children.map(this.props.children, child => (
        React.cloneElement(child, { instance: this.instance })
      ))
      : undefined;

    return React.createElement(
      this.props.name,
      { ref: this.setEl },
      children
    );
  }
}

export default HIGAdapter;
