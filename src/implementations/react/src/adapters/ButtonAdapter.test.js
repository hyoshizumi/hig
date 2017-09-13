
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import Button from './ButtonAdapter';

describe('<ButtonAdapter>', () => {
  /**
     * Creates a hig-vanilla button and returns the instance and it's container
     *
     * @param {object} defaults hig-vanilla defaults for the button
     */
  function createHigButton(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higButton = new HIG.Button({ ...defaults });

    higButton.mount(higContainer);

    return { higButton, higContainer };
  }

  it('renders the standard button', () => {
    const defaults = { title: 'regular button', link: 'http://example.com' };

    const { higContainer } = createHigButton(defaults);
    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the small button', () => {
    const defaults = {
      size: 'small',
      type: 'primary',
      title: 'small button',
      link: 'http://example.com'
    };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the large button', () => {
    const defaults = {
      size: 'large',
      type: 'primary',
      title: 'Large button',
      link: 'http://example.com'
    };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the primary button', () => {
    const defaults = {
      size: 'standard',
      type: 'primary',
      title: 'Primary button',
      link: 'http://example.com'
    };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the secondary button', () => {
    const defaults = {
      size: 'standard',
      type: 'secondary',
      title: 'Secondary button',
      link: 'http://example.com'
    };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the flat button', () => {
    const defaults = {
      type: 'flat',
      size: 'standard',
      title: 'Flat button',
      link: 'http://example.com'
    };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the button with an icon', () => {
    const defaults = { icon: 'gear' };

    const { higContainer } = createHigButton(defaults);

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates the title the same as setTitle', () => {
    const defaults = { title: 'some title' };
    const { higButton, higContainer } = createHigButton(defaults);

    const newTitle = 'correct title';

    // update via hig API
    higButton.setTitle(newTitle);

    const container = document.createElement('div');

    // update via React API
    const wrapper = mount(<Button {...defaults} />, { attachTo: container });

    wrapper.setProps({ title: newTitle });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('removes the title if it is no longer specified', () => {
    const { higButton, higContainer } = createHigButton();

    const reactContainer = document.createElement('div');

    const wrapper = mount(<Button />, {
      attachTo: reactContainer
    });

    higButton.setTitle(undefined);

    // update to remove the title prop
    wrapper.setProps({ title: undefined });

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates the link the same as setLink', () => {
    const { higButton, higContainer } = createHigButton();
    const newLink = 'http://example.com/2';

    higButton.setLink(newLink);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<Button />, { attachTo: reactContainer });

    wrapper.setProps({ link: newLink });

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates the size using setSize', () => {
    const defaults = { title: 'some title', size: 'small', type: 'primary' };
    const { higButton, higContainer } = createHigButton(defaults);
    const newSize = 'large';

    higButton.setSize(newSize);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<Button {...defaults} />, {
      attachTo: reactContainer
    });

    wrapper.setProps({ size: newSize });

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates the icon using setIcon', () => {
    const { higButton, higContainer } = createHigButton();
    const newIcon = 'hamburger';

    higButton.setIcon(newIcon);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<Button />, { attachTo: reactContainer });

    wrapper.setProps({ icon: newIcon });

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the disabled button', () => {
    const defaults = {
      size: 'standard',
      title: 'regular button',
      link: 'http://example.com',
      disabled: true
    };

    const { higButton, higContainer } = createHigButton(defaults);
    higButton.disable();

    const container = document.createElement('div');

    mount(<Button {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onClick', 'onHover', 'onFocus', 'onBlur'].forEach((eventName) => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(<Button {...{ [eventName]: spy }} />, {
        attachTo: container
      });
      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        `${eventName}Dispose`
      );
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(<Button />, {
        attachTo: container
      });
      wrapper.setProps({ [eventName]: spy });

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        `${eventName}Dispose`
      );
      expect(disposeFunction).toBeDefined();
    });
  });
});
