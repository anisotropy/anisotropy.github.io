import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

class Menu extends PureComponent {
	render(){
		return (
			<div className="menu">
				<Link to="/">Home</Link>
				<Link to="/repositories">Repositories</Link>
			</div>
		)
	}
}

export default Menu;
