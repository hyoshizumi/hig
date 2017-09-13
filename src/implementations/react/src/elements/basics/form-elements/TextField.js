/* eslint-disable react/prop-types, no-console */
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import TextFieldAdapter
  from '../../../adapters/FormElements/TextFieldAdapter';

class TextField extends Component {
  constructor(props) {
    super(props);

    const controlled = props.value !== undefined;

    this.state = {
      value: this.getDefaultValue(),
      controlled
    };
  }

  getDefaultValue() {
    const { defaultValue, value } = this.props;

    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    }
    return '';
  }

  getRenderedValue() {
    const { value } = this.props;

    if (value !== undefined) {
      return value;
    }
    return this.state.value;
  }

  setTextFieldEl = (textFieldEl) => {
    this.textFieldEl = textFieldEl;
  };

  handleInput = (event) => {
    if (this.props.onInput) {
      this.props.onInput(event);
    }

    if (this.state.controlled) {
      if (this.textFieldEl) {
        this.textFieldEl.forceNextReset();
        this.setState({ value: this.state.value });
      }
    } else {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    return (
      <TextFieldAdapter
        ref={this.setTextFieldEl}
        {...this.props}
        value={this.getRenderedValue()}
        onInput={this.handleInput}
      />
    );
  }
}

TextField.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  instructions: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string
};

TextField.__docgenInfo = {
  props: {
    disabled: {
      description: 'prevents interaction with the text field'
    },
    icon: {
      description: 'icon for the text field'
    },
    instructions: {
      description: 'instructional text for the text field'
    },
    label: {
      description: 'label for the text field'
    },
    name: {
      description: 'name of the field as submitted with a form'
    },
    onBlur: {
      description: 'callback called when user moves focus away from the text field'
    },
    onChange: {
      description: 'callback called when user changes the value of the text field and moves focus away'
    },
    onFocus: {
      description: 'callback called when user moves focus onto the text field'
    },
    onInput: {
      description: 'callback called when user changes the value of the text field'
    },
    placeholder: {
      description: 'text prompting the user to enter text'
    },
    required: {
      description: 'text indicating that the user must enter a value for this text field'
    }
  }
};

export default TextField;
