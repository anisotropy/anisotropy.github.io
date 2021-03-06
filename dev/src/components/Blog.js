import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Blog extends PureComponent {
  componentDidMount(){
    this.props.setCurrentPath();
    this.props.fetch();
  }
  render(){
    return (
      <div className="blog">
        블로그
      </div>
    );
  }
}
Blog.propTypes = {
  setCurrentPath: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired
};

export default Blog;
