import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import homepageStore from './store/homepageStore';
import RootCont from './containers/RootCont';
import MenuCont from './containers/MenuCont';
import HomeCont from './containers/HomeCont';
import RepositoriesCont from './containers/RepositoriesCont';
import BlogCont from './containers/BlogCont';
import './style/index.less';

render(
  <Provider store={homepageStore}>
    <HashRouter>
      <div className="homepage">
        <RootCont />
        <MenuCont />
        <div className="homepage__body">
          <Route exact path="/" component={HomeCont} />
          <Route path="/repositories" component={RepositoriesCont} />
          <Route path="/blog" component={BlogCont} />
        </div>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
