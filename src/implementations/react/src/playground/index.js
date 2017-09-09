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
import { Button, GlobalNav } from '../hig-react';

import 'hig-vanilla/lib/hig.css';
import './index.css';

import logo from './images/bim-logo.png';
// import profileImage from './images/profileImage.png';
import { projects, accounts } from './fixtures/topNavFixtures';
import { modules, submodules, links } from './fixtures/sideNavFixtures';

import NewGlobalNavAdapter from '../adapters/NewGlobalNavAdapter';
import NewTopNavAdapter from '../adapters/NewTopNavAdapter';
import NewButtonAdapter from '../adapters/NewButtonAdapter';
import NewSpacerAdapter from '../adapters/NewSpacerAdapter';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModuleId: '1-2-5'
    };
  }

  navigate = (id) => {
    console.log('Go to', id);
    this.setState({ activeModuleId: id });
  }

  projectClicked = (id) => {
    console.log("project clicked", id);
  }

  accountClicked = (id) => {
    console.log("account clicked", id);
  }

  render() {
    const topNavProps = {
      accounts: accounts,
      projects: projects,
      accountTitle: "Accounts",
      projectTitle: "Projects",
      onProjectClick: this.projectClicked,
      onAccountClick: this.accountClicked,
      logo,
      onLogoClick: function() { console.log('Logo clicked'); }
    }

    const sideNavProps = {
      superHeaderLabel: "HIG",
      headerLabel: "Playground",
      links: links,
      onLogoClick: event => {
        event.preventDefault();
        console.log('Logo clicked');
      },
      searchable: true
    };

    return (
      <div>
        <NewGlobalNavAdapter>
          <NewTopNavAdapter />
          <NewSpacerAdapter inset="xxl">
            <NewButtonAdapter onClick={() => console.log('clicked') } type="secondary" title="Adapt" />
          </NewSpacerAdapter>
        </NewGlobalNavAdapter>
      </div>
    );
  }
}

export default Playground;
