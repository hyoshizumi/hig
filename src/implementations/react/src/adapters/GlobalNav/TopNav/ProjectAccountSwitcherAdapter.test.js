
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNavAdapter from '../../GlobalNav/GlobalNavAdapter';
import TopNavAdapter from './TopNavAdapter';
import ProjectAccountSwitcher from './ProjectAccountSwitcherAdapter';

const Context = props => (
  <GlobalNavAdapter>
    <TopNavAdapter>
      <ProjectAccountSwitcher {...props} activeType={'account'} />
    </TopNavAdapter>
  </GlobalNavAdapter>
);

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higTopNav = new higNav.partials.TopNav({});
  higNav.addTopNav(higTopNav);

  const projectAccountSwitcher = new higTopNav.partials.ProjectAccountSwitcher(
    props
  );
  higTopNav.addProjectAccountSwitcher(projectAccountSwitcher);
  projectAccountSwitcher.hideCaret();
  projectAccountSwitcher.setActiveType('account');

  return { higContainer, higItem: projectAccountSwitcher };
}

function setupProjectAccountSwitcher(props) {
  const reactContainer = document.createElement('div');
  const reactWrapper = mount(<Context {...props} />, {
    attachTo: reactContainer
  });
  return { reactWrapper, reactContainer };
}

describe('<ProjectAccountSwitcher>', () => {
  it('renders a projectAccountSwitcher', () => {
    const defaults = {};
    const { reactContainer } = setupProjectAccountSwitcher(
      defaults
    );
    const { higContainer } = createHigContext(defaults);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('sets and updates props', () => {
    const defaultProps = {
      activeLabel: 'My cool project',
      activeImage: 'my-cool-project.png'
    };

    const nextProps = {
      activeLabel: 'My other project',
      activeImage: 'my-other-project.png'
    };

    const { higContainer, higItem } = createHigContext(defaultProps);
    const { reactWrapper, reactContainer } = setupProjectAccountSwitcher(
      defaultProps
    );

    reactWrapper.setProps(nextProps);

    higItem.setActiveLabel(nextProps.activeLabel);
    higItem.setActiveImage(nextProps.activeImage);
    higItem.setActiveType('account');

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('warns when passed an unsupported property', () => {
    const warnSpy = jest.fn();
    const { reactWrapper } = setupProjectAccountSwitcher({});
    console.warn = warnSpy;

    reactWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClick', 'onClickOutside'].forEach((eventName) => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { reactWrapper } = setupProjectAccountSwitcher({});
      console.warn = warnSpy;

      reactWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });

  describe('open and close Project Account Switcher flyout', () => {
    it('sets the flyout as open if initialized as open', () => {
      const reactContainer = document.createElement('div');
      mount(<Context {...{ open: true }} />, {
        attachTo: reactContainer
      });
      const flyoutEl = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      expect(flyoutEl.length).toEqual(1);
    });

    it('opens the Project Account Switcher on prop change', () => {
      const props = {
        open: false
      };
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...props} />, {
        attachTo: reactContainer
      });
      let elem = reactContainer.getElementsByClassName('hig__flyout--open');
      expect(elem.length).toEqual(0);

      wrapper.setProps({ open: true });
      elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );
      expect(elem.length).toEqual(1);
    });
  });

  describe('Project Account Switcher flyout', () => {
    it('is not visible when only 1 project or account exists', () => {
      const props = {
        projects: [
          {
            label: 'Just this one project',
            image: 'just-this-one-image.png',
            active: true,
            id: 1
          }
        ],

        accounts: [
          {
            label: 'Just this one account',
            image: 'just-this-one-account.png',
            active: true,
            id: 1
          }
        ]
      };
      const reactContainer = document.createElement('div');
      mount(<Context {...props} />, {
        attachTo: reactContainer
      });
      const elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      const caretElem = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__project-account-switcher__target__caret--hide'
      );

      expect(caretElem.length).toEqual(1);
      expect(elem.length).toEqual(0);
    });
  });
});
