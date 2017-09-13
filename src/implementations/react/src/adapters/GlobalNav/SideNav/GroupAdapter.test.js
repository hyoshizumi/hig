/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNav/GlobalNavAdapter';
import Group from './GroupAdapter';
import Module from './ModuleAdapter';

const Context = props => (
  <GlobalNav>
    <GlobalNav.SideNav>
      <Group>{props.children}</Group>
    </GlobalNav.SideNav>
  </GlobalNav>
);

function higContext() {
  const higContainer = document.createElement('div');

  // use spread here to clone defaults since HIG.Button mutates this object
  const higNav = new HIG.GlobalNav();

  higNav.mount(higContainer);

  const higSideNav = new higNav.partials.SideNav();
  higNav.addSideNav(higSideNav);

  const higGroup = new higSideNav.partials.Group();

  higSideNav.addGroup(higGroup);

  return { higNav, higSideNav, higGroup, higContainer };
}

describe('<Group>', () => {
  describe('children: <Module>', () => {
    it('can render a list of <Module> elements', () => {
      const { higGroup, higContainer } = higContext();

      const module1Defaults = {
        icon: 'project-management',
        title: 'Module 1',
        link: '#'
      };

      const module1 = new higGroup.partials.Module(module1Defaults);
      higGroup.addModule(module1);

      const module2Defaults = {
        icon: 'project-management',
        title: 'Module 2',
        link: '#'
      };
      const module2 = new higGroup.partials.Module(module2Defaults);
      higGroup.addModule(module2);

      const reactContainer = document.createElement('div');

      mount(
        <Context>
          <Module {...module1Defaults} />
          <Module {...module2Defaults} />
        </Context>,
        {
          attachTo: reactContainer
        }
      );

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('can insert <Module> elements before and after another <Module>', () => {
      const { higGroup, higContainer } = higContext();

      const module1Defaults = {
        icon: 'project-management',
        title: 'Module 1',
        link: '#',
        key: '1'
      };
      const module1 = new higGroup.partials.Module(module1Defaults);

      // Do not add yet

      const module2Defaults = {
        icon: 'project-management',
        title: 'Module 2',
        link: '#',
        key: '2'
      };
      const module2 = new higGroup.partials.Module(module2Defaults);
      higGroup.addModule(module2);

      // Add before item 2
      higGroup.addModule(module1, module2);

      class CustomComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { showingItemBefore: false, showingItemAfter: false };
        }

        render() {
          return (
            <Context>
              {this.state.showingItemBefore && <Module {...module1Defaults} />}
              <Module {...module2Defaults} />
              {this.state.showingItemAfter && <Module icon="assets" />}
            </Context>
          );
        }
      }

      const reactContainer = document.createElement('div');
      const wrapper = mount(<CustomComponent />, {
        attachTo: reactContainer
      });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemBefore: true });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );

      wrapper.setState({ showingItemBefore: false });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemAfter: true });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemAfter: false });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });

    it('can not render HTML elements as children', () => {
      global.console.error = jest.fn();

      mount(
        <Context>
          <div>Hello world!</div>
        </Context>
      );

      expect(console.error).toBeCalledWith(
        expect.stringMatching(
          /'div' is not a valid child of GroupAdapter. Children should be of type 'ModuleAdapter/
        )
      );
    });

    it('can not render HTML text as children', () => {
      global.console.error = jest.fn();

      mount(
        <Context>
          Hello world!
        </Context>
      );

      expect(console.error).toBeCalledWith(
        expect.stringMatching(
          /'Hello world!' is not a valid child of GroupAdapter. Children should be of type 'ModuleAdapter/
        )
      );
    });
  });
});
