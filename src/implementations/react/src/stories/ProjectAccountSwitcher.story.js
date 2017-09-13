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

import logo from '../playground/images/bim-logo.png';
import project1 from '../playground/images/project-1.png';
import project2 from '../playground/images/project-2.png';
import project3 from '../playground/images/project-3.png';
import project4 from '../playground/images/project-4.png';

import GlobalNav from '../adapters/GlobalNav/GlobalNavAdapter';

const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const SubNav = GlobalNav.SubNav;
const Slot = GlobalNav.Slot;

storiesOf('ProjectAccountSwitcher', module)
  .addWithInfo('with multiple projects and accounts', '', () => (
    <GlobalNav>
      <TopNav logo={logo}>
        <ProjectAccountSwitcher
          activeLabel="Hospital Builders / Oakland Medical Center"
          activeImage={project1}
          activeType={'project'}
          open
          onClickOutside={action('clicked outside')}
          onClick={action('clicked')}
          showCaret
        >
          <Account
            image={project1}
            label="Hospital Builders"
            active
            onClick={action('clicked account')}
          />
          <Account
            image={project2}
            label="DPI Construction"
            onClick={action('clicked account')}
          />
          <Project
            image={project3}
            label="Oakland Medical Center"
            active
          />
          <Project
            image={project4}
            label="Stanford Hospital"
            onClick={action('clicked account')}
          />
        </ProjectAccountSwitcher>
        <Profile />
      </TopNav>
      <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
      <Slot>
        <p>
            Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday
            Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle
            Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher
            they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book
            portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
        </p>
      </Slot>
    </GlobalNav>
  ))
  .addWithInfo('with a single account and project', '', () => (
    <GlobalNav>
      <TopNav logo={logo}>
        <ProjectAccountSwitcher
          activeLabel="Hospital Builders / Oakland Medical Center"
          activeImage={project1}
          activeType={'project'}
          open={false}
          onClickOutside={null}
          onClick={null}
          showCaret={false}
        >
          <Account image={project1} label="Hospital Builders" />
          <Project image={project3} label="Oakland Medical Center" />
        </ProjectAccountSwitcher>
        <Profile />
      </TopNav>
      <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
      <Slot>
        <p>
            Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry,
            Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa
            Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher
            they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book
            portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
        </p>
      </Slot>
    </GlobalNav>
  ));
