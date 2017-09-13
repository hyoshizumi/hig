
import * as PropTypes from 'prop-types';
import createComponent from '../../createComponent';
import HIGElement from '../../../elements/HIGElement';

export class LinkAdapter extends HIGElement {
  commitUpdate(updatePayload) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }
        case 'link': {
          this.hig.setLink(propValue);
          break;
        }
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClickDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClickDispose',
            this.hig.onClick(propValue)
          );
          break;
        }
        case 'onHover': {
          const dispose = this._disposeFunctions.get('onHoverDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onHoverDispose',
            this.hig.onHover(propValue)
          );
          break;
        }
        default: {
          // No-op
        }
      }
    }
  }
}

const LinkComponent = createComponent(LinkAdapter);

LinkComponent.propTypes = {
  addTitle: PropTypes.func,
  addLink: PropTypes.func,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

LinkComponent.__docgenInfo = {
  props: {
    title: {
      description: 'Title {string} for the Link component'
    },
    link: {
      description: 'URL {string} for the Link component'
    },
    onClick: {
      description: '{function} Triggered when user clicks on the link'
    },
    onHover: {
      description: '{function} Triggered when user hovers over the link'
    }
  }
};

export default LinkComponent;
