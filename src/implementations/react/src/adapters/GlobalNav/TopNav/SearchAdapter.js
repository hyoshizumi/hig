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

export class SearchAdapter extends HIGElement {
  componentDidMount() {
    this.hig.onInput(this.topNavSearchOnInput.bind(this));
    this.hig.onClearIconClick(this.topNavClearInput.bind(this));
  }

  commitUpdate(updatePayload) {
    const mapping = {
      placeholder: 'setPlaceholder',
      query: 'setQuery'
    };
    super.commitUpdateWithMapping(updatePayload, mapping);
  }

  topNavSearchOnInput(event) {
    this.hig.showClearIcon();
    this.hig.setQuery(event.target.value);
  }

  topNavClearInput() {
    this.hig.setQuery('');
    this.hig.hideClearIcon();
  }
}

const SearchAdapterComponent = createComponent(SearchAdapter);

SearchAdapterComponent.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  onClearIconClick: PropTypes.func,
  onInput: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func
};

SearchAdapterComponent.__docgenInfo = {
  props: {
    placeholder: { description: '{String} sets the placeholder text' },
    query: { description: '{String} sets the search query text' },
    onClearIconClick: {
      description: '{function} Triggers when user clicks clear icon'
    },
    onInput: {
      description: '{function} Triggers when user enters text into search field'
    },
    onFocusIn: { description: '{function} Triggers when input has focus' },
    onFocusOut: { description: '{function} Triggers when input loses focus' }
  }
};
export default SearchAdapterComponent;
