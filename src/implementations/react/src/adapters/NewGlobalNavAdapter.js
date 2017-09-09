import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { Prop, AnyChild, HIGChild } from './HIGAdapter';
import NewTopNavAdapter from './NewTopNavAdapter';

function sortChildren(children) {
  return {
    topNav: children.find(child => child.type === NewTopNavAdapter),
    otherChild: children.find(child => child.type !== NewTopNavAdapter)
  }
}

export default function NewGlobalNavAdapter(props) {
  const { otherChild, topNav } = sortChildren(React.Children.toArray(props.children));

  return (
    <HIGAdapter name="GlobalNav" HIGConstructor={HIG.GlobalNav}>
      <Prop value={props.sideNavOpen}>
        {(instance, value) => { value ? instance.showSideNav() : instance.hideSideNav() }}
      </Prop>
      <HIGChild HIGConstructor={HIG.GlobalNav.TopNav}>{topNav}</HIGChild>
      <AnyChild setter="addSlot">{otherChild}</AnyChild>
    </HIGAdapter>
  );
}
