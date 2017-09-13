/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import * as HIG from 'hig-vanilla';
import * as PropTypes from 'prop-types';

import HIGElement from '../../elements/HIGElement';
import createComponent from '../createComponent';

class RangeAdapter extends HIGElement {
  constructor(initialProps) {
    super(HIG.Range, initialProps);
  }

  componentDidMount() {
    const commitProps = [];
    if (this.initialProps.disabled) {
      commitProps.push('disabled', this.initialProps.disabled);
    }
    if (this.initialProps.required) {
      commitProps.push('required', this.initialProps.required);
    }
    if (this.initialProps.checked) {
      commitProps.push('checked', this.initialProps.checked);
    }
    if (this.initialProps.onBlur) {
      commitProps.push('onBlur', this.initialProps.onBlur);
    }
    if (this.initialProps.onChange) {
      commitProps.push('onChange', this.initialProps.onChange);
    }
    if (this.initialProps.onFocus) {
      commitProps.push('onFocus', this.initialProps.onFocus);
    }
    this.commitUpdate(commitProps);
  }

  commitUpdate(updatePayload) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'disabled': {
          propValue ? this.hig.disable() : this.hig.enable();
          break;
        }
        case 'instructions': {
          this.hig.setInstructions(propValue);
          break;
        }
        case 'minValue': {
          this.hig.setMin(propValue);
          break;
        }
        case 'maxValue': {
          this.hig.setMax(propValue);
          break;
        }
        case 'label': {
          this.hig.setLabel(propValue);
          break;
        }
        case 'required': {
          propValue ? this.hig.required(propValue) : this.hig.noLongerRequired();
          break;
        }
        case 'step': {
          this.hig.setStep(propValue);
          break;
        }
        case 'value': {
          this.hig.setValue(propValue);
          break;
        }
        case 'onBlur': {
          const dispose = this._disposeFunctions.get('onBlurDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set('onBlurDispose', this.hig.onBlur(propValue));
          break;
        }
        case 'onChange': {
          const dispose = this._disposeFunctions.get('onChangeDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set('onChangeDispose', this.hig.onChange(propValue));
          break;
        }
        case 'onFocus': {
          const dispose = this._disposeFunctions.get('onFocusDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set('onFocusDispose', this.hig.onFocus(propValue));
          break;
        }
        default: {
          // No-op
        }
      }
    }
  }
}

const RangeComponent = createComponent(RangeAdapter);

RangeComponent.propTypes = {
  disabled: PropTypes.bool,
  instructions: PropTypes.string,
  label: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number
};

RangeComponent.__docgenInfo = {
  props: {
    disabled: {
      description: 'prevents interaction with the range'
    },
    instructions: {
      description: 'instruction text for the range'
    },
    label: {
      description: 'label for the range'
    },
    minValue: {
      description: 'minimum value for the range'
    },
    maxValue: {
      description: 'maximum value for the range'
    },
    onBlur: {
      description: 'callback for focus lost from the range'
    },
    onChange: {
      description: 'callback for change + focus lost for the range'
    },
    onFocus: {
      description: 'callback for focus event on the range'
    },
    required: {
      description: 'text indicating that this range field is a required field'
    },
    step: {
      description: 'value of each step between min and max.'
    },
    value: {
      description: 'value for the range input'
    }
  }
};

export default RangeComponent;
