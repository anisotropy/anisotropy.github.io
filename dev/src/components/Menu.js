import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class MenuItem extends PureComponent {
  render(){
    const {to, currentPath, children} = this.props;
    return (to == currentPath ?
      <a className="menu__item--active">{children}</a> :
      <Link className="menu__item" to={to} onClick={this.hClick}>{children}</Link>
    );
  }
}
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

class Menu extends PureComponent {
  render(){
    const {currentPath} = this.props;
    return (
      <div className="menu">
        <MenuItem to="/" currentPath={currentPath}>Home</MenuItem>
        <MenuItem to="/repositories" currentPath={currentPath}>저장소</MenuItem>
      </div>
    )
  }
}
Menu.propTypes = {
  currentPath: PropTypes.string.isRequired
};

export default Menu;
