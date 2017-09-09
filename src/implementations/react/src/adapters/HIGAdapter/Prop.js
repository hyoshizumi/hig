import { Component } from 'react';
import PropTypes from 'prop-types';

class Prop extends Component {
  static propTypes = {
    children: PropTypes.func,
    setter: PropTypes.string,
    value: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = { unset: props.value === undefined }
  }

  componentDidMount() {
    this.setValue(this.props);
  }

  componentDidReceiveProps(nextProps) {
    if (nextProps.value !== undefined) {
      this.setState({ unset: false });
    }

    this.setValue(nextProps);
  }

  setValue(props) {
    if(props.value === undefined && this.state.unset) {
      return null;
    }

    if (props.children) {
      return props.children(props.instance, props.value);
    }
    return props.instance[props.setter](props.value);
  }

  render() { return null; }
}

export default Prop;
