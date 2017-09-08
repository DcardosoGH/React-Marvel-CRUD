var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-right">
                    <ul className="menu">
                        
                        <li><IndexLink to="/" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>List Heroes</IndexLink></li>
                        <li><Link to="HeroSearch" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Hero Search</Link></li>                        
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Update Heroes</Link></li>
                    </ul>
                </div>
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React CRUD App</li>
                    </ul>                
                </div>
            </div>
            )
        
    }
});

module.exports = Nav;