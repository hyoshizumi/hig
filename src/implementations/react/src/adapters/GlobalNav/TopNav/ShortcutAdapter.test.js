/* eslint-disable react/prop-types, no-console */
import { mount } from 'enzyme';
import React from 'react';

import GlobalNavAdapter from '../GlobalNavAdapter';
import TopNavAdapter from './TopNavAdapter';
import ShortcutAdapter from './ShortcutAdapter';

const Context = props => (
  <GlobalNavAdapter>
    <TopNavAdapter>
      <ShortcutAdapter title={props.title} link={props.link} icon={props.icon} />
    </TopNavAdapter>
  </GlobalNavAdapter>
);

function setupReactContext() {
  const props = { title: 'GEARS', link: '/settings', icon: 'gear' };
  const reactContainer = document.createElement('div');
  mount(<Context {...props} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('Shortcut', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupReactContext();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      const elems = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__shortcut'
      );
      expect(elems.length).toEqual(1);
    });
  });
});
