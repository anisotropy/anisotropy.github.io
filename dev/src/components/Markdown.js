import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import renderHTHML from 'react-render-html';
import marked from 'marked';

class Markdown extends PureComponent {
  render(){
    return (
      <div {...this.props}>
        {renderHTHML(marked(this.props.children))}
      </div>
    );
  }
}
Markdown.propTypes = {
  children: PropTypes.string.isRequired
};

export default Markdown;
