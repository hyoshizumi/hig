import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, { Prop, EventHandler } from './HIGAdapter';

function NewButtonAdapter(props) {
  return (
    <HIGAdapter name="Button" HIGConstructor={HIG.Button}>
      <Prop value={props.icon} setter="setIcon" />
      <Prop value={props.link} setter="setLink" />
      <Prop value={props.target} setter="setTarget" />
      <Prop value={props.title} setter="setTitle" />
      <Prop value={props.type} setter="setType" />
      <Prop value={props.size} setter="setSize" />
      <Prop value={props.width} setter="setWidth" />
      <Prop value={props.disabled}>
        {(instance, value) => value ? instance.disable() : instance.enable() }
      </Prop>
      <EventHandler value={props.onBlur} setter="onBlur" />
      <EventHandler value={props.onClick} setter="onClick" />
      <EventHandler value={props.onFocus} setter="onFocus" />
      <EventHandler value={props.onHover} setter="onHover" />
    </HIGAdapter>
  );
}

export default NewButtonAdapter;
