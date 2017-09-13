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
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Checkbox from '../adapters/FormElements/CheckboxAdapter';

storiesOf('Checkbox', module)
  .addWithInfo('Basic checkbox', '', () => (
    <Checkbox
      name={text('checkboxName', 'basic')}
      value={text('checkboxValue', 'yes')}
      label={text('checkboxLabel', 'A checkbox')}
    />
  ))
  .addWithInfo('with other options', '', () => (
    <div>
      <Checkbox
        name="is_it_fancy"
        value="fanciness"
        label="Fancy!"
        checked={false}
        required={text('Required text', 'This field is required.')}
        disabled={false}
      />
      <Checkbox
        name="checkbox-checked"
        value="hello"
        label="checked"
        checked={boolean('Checked', true)}
      />
      <Checkbox
        name="checkbox-disabled"
        value="hello"
        label="disabled"
        disabled={boolean('Disabled', true)}
      />
    </div>
  ))
  .addWithInfo('with Events defined', '', () => {
    const localName = 'sdfsdffsd';
    const localValue = 'hello';
    const localLabel = 'Greetings';

    return (
      <Checkbox
        name={localName}
        value={localValue}
        label={localLabel}
        onHover={action('Hovered')}
        onChange={action('Changed')}
        onFocus={action('Focused')}
      />
    );
  });
