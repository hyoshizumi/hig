import React from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Spacer } from '../../hig-react';

function SpacerSection() {
  return (<PlaygroundSection title="SPACE">
    <Spacer type="inline" width="m" inset="xl">
      <Spacer.Slot>
        <p className="spacer_para">STACK M WIDTH</p>
        <p className="spacer_para">STACK XL INSET</p>
      </Spacer.Slot>
    </Spacer>
    <p />
    <Spacer type="inline" width="none" inset="none">
      <Spacer.Slot>
        <p className="spacer_para">NO WIDTH OR INSET</p>
        <p className="spacer_para">NO WIDTH OR INSET</p>
      </Spacer.Slot>
    </Spacer>
    <p />
    <Spacer type="stack" width="xxs" inset="xxl">
      <Spacer.Slot>
        <p className="spacer_para">STACK XXS WIDTH</p>
        <p className="spacer_para">STACK XXL INSET</p>
      </Spacer.Slot>
    </Spacer>
    <p />
    <Spacer type="stack" width="none" inset="none">
      <Spacer.Slot>
        <p className="spacer_para">NO WIDTH OR INSET</p>
        <p className="spacer_para">NO WIDTH OR INSET</p>
      </Spacer.Slot>
    </Spacer>
  </PlaygroundSection>
  );
}
export default SpacerSection;
