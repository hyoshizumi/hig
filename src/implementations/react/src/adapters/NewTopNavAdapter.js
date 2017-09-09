import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { Prop, EventHandler, HIGParent } from './HIGAdapter';

export default function NewTopNavAdapter(props) {
  return (
    <HIGAdapter name="TopNav" HIGConstructor={HIG.GlobalNav._partials.TopNav}>
      <Prop value={props.logo} setter="setLogo" />
      <Prop value={props.logoLink} setter="setLogoLink" />
      <EventHandler value={props.onLogoClick} setter="onLogoClick" />
      <EventHandler value={props.onHamburgerClick} setter="onHamburgerClick" />
      <HIGParent setter="addTopNav" />
    </HIGAdapter>
  );
}
