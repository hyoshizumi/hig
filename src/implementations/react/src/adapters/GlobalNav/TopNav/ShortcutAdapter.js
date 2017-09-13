/* Copyright 2016 Autodesk,Inc.

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

import * as PropTypes from 'prop-types';
import HIGElement from '../../../elements/HIGElement';
import createComponent from '../../createComponent';

export class ShortcutAdapter extends HIGElement {
  commitUpdate(updatePayload) {
    const mapping = {
      title: 'setTitle',
      link: 'setLink',
      icon: 'setIcon'
    };

    super.commitUpdateWithMapping(updatePayload, mapping);
  }
}

const ShortcutAdapterComponent = createComponent(ShortcutAdapter);

ShortcutAdapterComponent.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string
};

ShortcutAdapterComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a shortcut'
    },

    link: {
      description: 'sets the link of a shortcut'
    },

    icon: {
      description: 'sets the shortcut icon to one of a set of pre-defined icons'
    }
  }
};

export default ShortcutAdapterComponent;
