import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter from './HIGAdapter';
import Prop from './Prop';

function NewButtonAdapter(props) {

  return (
    <HIGAdapter name="Button" HIGConstructor={HIG.Button}>
      <Prop value={props.type} setter="setType" />
      <Prop value={props.title} setter="setTitle" />
      <Prop value={props.width} setter="setWidth" />
      <Prop value={props.disabled}>
        {(instance, value) => value ? instance.disable() : instance.enable() }
      </Prop>
    </HIGAdapter>
  );
}

export default NewButtonAdapter;
