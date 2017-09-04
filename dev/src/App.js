import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import homepageStore from './store/homepageStore';
import HomeCont from './containers/HomeCont';
import RepositoriesCont from './containers/RepositoriesCont';
import MenuCont from './containers/MenuCont';

render(
	<Provider store={homepageStore}>
		<HashRouter>
			<div className="homepage">
				<MenuCont />
				<div className="homepage__body">
					<Route exact path="/" component={HomeCont} />
					<Route path="/repositories" component={RepositoriesCont} />
				</div>
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
