import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import renderHTHML from 'react-render-html';
import marked from 'marked';

class Markdown extends PureComponent {
  render(){
    let className = (this.props.className ? 'markdown '+this.props.className : 'markdown');
    return (
      <div className={className} {...this.props}>
        {renderHTHML(marked(this.props.children))}
      </div>
    );
  }
}
Markdown.propTypes = {
  children: PropTypes.string.isRequired
};

export default Markdown;
