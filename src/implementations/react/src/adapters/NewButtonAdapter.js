import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { Prop, EventHandler } from './HIGAdapter';

function NewButtonAdapter(props) {
  return (
    <HIGAdapter name="Button" HIGConstructor={HIG.Button}>
      <Prop value={props.type} setter="setType" />
      <Prop value={props.title} setter="setTitle" />
      <Prop value={props.width} setter="setWidth" />
      <Prop value={props.disabled}>
        {(instance, value) => value ? instance.disable() : instance.enable() }
      </Prop>
      <EventHandler value={props.onClick} setter="onClick" />
    </HIGAdapter>
  );
}

export default NewButtonAdapter;
