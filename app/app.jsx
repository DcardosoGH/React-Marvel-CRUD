var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var heroApi = require('heroApi');
var HeroSearch = require('HeroSearch');
var Main = require('Main');
var ListHeroes = require('ListHeroes');
var HeroMain = require('HeroMain');
// Load Foundation
require('style!css!foundation-sites/dist/foundation.css')
$(document).foundation();

require('style!css!applicationStyles')



ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={Main}>
    <IndexRoute component={HeroMain}/>
    <Route path="HeroSearch" component={HeroSearch}/>
   </Route>   
  </Router>,
  document.getElementById('app')
);
