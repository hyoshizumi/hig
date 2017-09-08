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
  }

  componentDidMount() {
    this._mount = this._el.parentNode;

    if (!this._mount) {
      throw new Error(
        `can only mount if there is a parentNode: ${this.props.name}`
      );
    }

    this._anchor = document.createComment(`${this.props.name}-anchor`);
    this._mount.replaceChild(this._anchor, this._el);
    this.instance.mount(this._mount, this._anchor);
  }

  setEl = (el) => { this._el = el; }

  render() {
    return React.createElement(
      this.props.name,
      {
        ref: this.setEl
      },
      this.props.children
    );
  }
}

export default HIGAdapter;
