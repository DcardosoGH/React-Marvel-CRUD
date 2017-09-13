var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <br/>
      <div className="row">
          {props.children}
        </div>
      </div>
  );
}

module.exports = Main;
