import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

import TextLink from '../adapters/TextLinkAdapter';

storiesOf('TextLink', module)
  .addWithInfo('TextLink with href', '', () => {
    const typeOptions = {
      primary: 'Primary',
      secondary: 'Secondary'
    };

    const type = select('Type', typeOptions, 'primary');

    return (
      <TextLink
        href={text('Href', 'https://github.com/Autodesk/hig')}
        type={type}
        text={text('Text', 'AutoDesk HIG')}
      />
    );
  })
  .addWithInfo('TextLink with onClick', '', () => {
    const typeOptions = {
      primary: 'Primary',
      secondary: 'Secondary'
    };

    const type = select('Type', typeOptions, 'primary');

    return (
      <TextLink
        type={type}
        text={text('Text', 'AutoDesk HIG')}
        onClick={action('clicked')}
      />
    );
  });
