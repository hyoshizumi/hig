

import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNav/GlobalNavAdapter';
import SideNav from './SideNavAdapter';
import Search from './SearchAdapter';

const Context = props => (
  <GlobalNav>
    <SideNav>
      <Search {...props} />
    </SideNav>
  </GlobalNav>
);

function createOrionComponent(defaults) {
  const orionContainer = document.createElement('div');
  const orionWrapper = mount(<Context {...defaults} />, {
    attachTo: orionContainer
  });

  return { orionWrapper, orionContainer };
}

function createHigComponent(defaults = {}) {
  const higContainer = document.createElement('div');
  const globalNav = new HIG.GlobalNav();
  const sideNav = new globalNav.partials.SideNav();
  const search = new sideNav.partials.Search(defaults);

  globalNav.mount(higContainer);
  globalNav.addSideNav(sideNav);
  sideNav.addSearch(search);

  return { higComponent: search, higContainer };
}

describe('<SearchAdapter>', () => {
  it('renders', () => {
    const defaults = {};
    const { higContainer } = createHigComponent(defaults);
    const { orionContainer } = createOrionComponent(defaults);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with initial props', () => {
    const defaults = {
      placeholder: 'Search a little search for me',
      value: 'Documents'
    };
    const { higContainer } = createHigComponent(defaults);
    const { orionContainer } = createOrionComponent(defaults);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with updated props', () => {
    const defaults = {};
    const nextProps = {
      placeholder: 'Search a little search for me',
      value: 'Documents',
      clearIconVisible: true
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    orionWrapper.setProps(nextProps);
    higComponent.setPlaceholder(nextProps.placeholder);
    higComponent.setValue(nextProps.value);
    higComponent.showClearIcon();

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('warns when passed an unsupported property', () => {
    const warnSpy = jest.fn();
    const { orionWrapper } = createOrionComponent({});
    console.warn = warnSpy;

    orionWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClearIconClick', 'onInput', 'onFocus', 'onBlur'].forEach((eventName) => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { orionWrapper } = createOrionComponent({});
      console.warn = warnSpy;

      orionWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
