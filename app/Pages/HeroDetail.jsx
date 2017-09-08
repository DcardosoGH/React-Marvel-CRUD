var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');

var HeroDetail = React.createClass({
    getInitialState: function(){
        return{
            id:undefined
        }
    },

    renderHero: function(id){

        var heroName = json.heroes[id].name;
        var heroDesc = json.heroes[id].description;
        var heroImg = json.heroes[id].thumbnail.path + '.' + json.heroes[id].thumbnail.extension;

        this.setState({
            heroName: heroName,
            heroDesc: heroDesc,
            heroImg: heroImg
        })
    },

    render: function(){        
        return (
            <div>
                <h1>{this.state.heroName}</h1>
                <p>{this.state.heroName}</p>
                <img src={this.state.heroName} alt=""/>
                <Link to="HeroSearch">Return to Hero List</Link>
            </div>
        )
    }

});

module.exports = HeroDetail;