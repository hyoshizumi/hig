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
import { boolean } from '@storybook/addon-knobs';

import logo from '../playground/images/bim-logo.png';
import profileImage from '../playground/images/profileImage.png';
import project1 from '../playground/images/project-1.png';
import project4 from '../playground/images/project-4.png';

import GlobalNav from '../adapters/GlobalNav/GlobalNavAdapter';

const SideNav = GlobalNav.SideNav;
const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
const Shortcut = TopNav.Shortcut;
const Help = TopNav.Help;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const SubNav = GlobalNav.SubNav;
const Slot = GlobalNav.Slot;

const LONG_COPY = (
  <div>
    <p>
      Banh mi pug fanny pack heirloom portland. Humblebrag selvage forage vape
      live-edge. Vape artisan truffaut, celiac prism XOXO drinking vinegar pour
      edison bulb air plant hot chicken meggings cold-pressed gastropub, tbh tilde
      post-ironic fap you probably havent heard of them, helvetica synth kinfolk
      90s put a bird on it yr godard prism kogi, live-edge enamel pin hell of photo
      synth af, fashion axe fingerstache ethical snackwave post-ironic cray.
    </p>

    <p>
      Messenger bag listicle skateboard normcore. Roof party food truck authentic
      drinking vinegar mixtape, disrupt sartorial cray lumbersexual bicycle rights
      bulb poke thundercats taxidermy twee. Lomo biodiesel la croix, pitchfork
      cornhole locavore helvetica. Everyday carry distillery tousled, bespoke
      asymmetrical tacos poke, tote bag disrupt sriracha coloring book.
    </p>

    <p>
      Humblebrag narwhal hammock, cornhole biodiesel lomo vegan twee migas enamel
      wolf. Godard XOXO deep v tbh irony, church-key seitan fixie post-ironic
      Hell of helvetica cornhole lomo forage. Affogato activated charcoal ugh,
      before they sold out brunch prism VHS cronut. Craft beer PBR&B vice, synth
      chicharrones pinterest microdosing intelligentsia wayfarers scenester schlitz.
      poke, photo booth quinoa cronut pickled meggings tumeric. Yr wayfarers mustache
      beer single-origin coffee.
    </p>
  </div>
);

storiesOf('GlobalNav', module)
  .addWithInfo('default', <div><p>Global Nav basic usage</p></div>, () => (
    <GlobalNav showSubNav>
      <SideNav />
      <TopNav logo={logo}>
        <ProjectAccountSwitcher
          open={boolean('Project Account Switcher open:', false)}
          onProjectChange={action('Project activated')}
          onAccountChange={action('Account activated')}
        >
          <Account image="" label="DPI Construction" />
          <Project image={project4} label="Oakland Medical Center" />
          <Project image={project1} label="Stanford hospital" />
        </ProjectAccountSwitcher>
        <Shortcut icon="gear" title="GEAR" link="#" />
        <Help title="HELLLP MEEEE!!!!" link="#`" />
        <Profile
          image={profileImage}
          name="Jane Designer"
          email="jane.designer@example.com"
          onProfileSettingsClick={action('profile settings clicked')}
          onSignOutClick={action('sign out clicked')}
        />
      </TopNav>
      <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
      <Slot>{LONG_COPY}</Slot>
    </GlobalNav>
  ));
