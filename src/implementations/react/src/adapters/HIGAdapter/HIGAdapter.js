import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HIGAdapter extends Component {
  static propTypes = {
    HIGConstructor: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  static contextTypes = {
    parent: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.instance = new props.HIGConstructor({});
    this.state = { mounted: false };
  }

  setEl = (el) => { this._el = el; }

  componentDidMount() {
    if (!this.context.parent) {
      // Has React parent
      this._mount = this._el.parentNode;
      this._anchor = document.createComment(`${this.props.name}-anchor`);
      this._mount.replaceChild(this._anchor, this._el); // Replace this component's div with a comment
      this.instance.mount(this._mount, this._anchor); // Mount the hig component at the comment
    }
    this.setState({ mounted: true });
  }

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
