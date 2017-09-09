import { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventHandler extends Component {
  static propTypes = {
    setter: PropTypes.string,
    value: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.configureHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.configureHandler(nextProps);
  }

  configureHandler(props) {
    if (this.state.dispose) {
      this.state.dispose();
    }

    if(!props.value) {
      return;
    }

    this.setState({ dispose: props.instance[props.setter](props.value) })
  }

  render() { return null; }
}
