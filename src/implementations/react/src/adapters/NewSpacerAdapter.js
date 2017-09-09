import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { Prop, ReactChildren } from './HIGAdapter';

function NewSpacerAdapter(props) {
  return (
    <HIGAdapter name="Spacer" HIGConstructor={HIG.Spacer}>
      <Prop value={props.inset} setter="setInset" />
      <Prop value={props.type} setter="setType" />
      <Prop value={props.width} setter="setWidth" />
      <ReactChildren setter="addSlot">{props.children}</ReactChildren>
    </HIGAdapter>
  );
}

export default NewSpacerAdapter;
