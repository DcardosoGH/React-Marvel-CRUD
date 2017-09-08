var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');

var ListHero = React.createClass({

    componentDidMount: function () {
        var id = this.props.location.query.id;
      },

      componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;
    
        if (location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
        }
      },


    render: function(){        
        return (
            <div>
                <h1>Hero List </h1>
                <p> Click on each Hero to see it's Details</p>
                <div>
                    <ul>
                       <li><button className="button hollow">{json.heroes[0].name}</button></li>
                       <li><button className="button hollow">{json.heroes[1].name}</button></li>
                       <li><button className="button hollow">{json.heroes[2].name}</button></li>
                       <li><button className="button hollow">{json.heroes[3].name}</button></li>
                       <li><button className="button hollow">{json.heroes[4].name}</button></li>
                       <li><button className="button hollow">{json.heroes[5].name}</button></li>
                       <li><button className="button hollow">{json.heroes[6].name}</button></li>
                       <li><button className="button hollow">{json.heroes[7].name}</button></li>
                       <li><button className="button hollow">{json.heroes[8].name}</button></li>
                       <li><button className="button hollow">{json.heroes[9].name}</button></li>                  
                    </ul>
                </div>
            </div>
        )
    }

});

module.exports = ListHero;

//
// {json.heroes[0].name}
// {json.heroes[1].name}
// {json.heroes[2].name}
// {json.heroes[3].name}
// {json.heroes[4].name}
// {json.heroes[5].name}
// {json.heroes[6].name}
// {json.heroes[7].name}
// {json.heroes[8].name}
// {json.heroes[9].name}