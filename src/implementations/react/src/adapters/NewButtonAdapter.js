import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter from './HIGAdapter';

function NewButtonAdapter(props) {
  return (
    <HIGAdapter name="Button" HIGConstructor={HIG.Button} />
  );
}

export default NewButtonAdapter;
