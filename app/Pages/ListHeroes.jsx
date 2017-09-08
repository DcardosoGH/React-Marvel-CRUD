var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');

var ListHero = React.createClass({

    getInitialState: function () {
        return {
          isLoading: false
        }
      },
    
    listHeroes: function(){
        return (
            <div>
                <h1>Hero List </h1>
                <p> Click on each Hero to see it's Details</p>
                <div>
                    <ul>
                    <li><button className="button hollow" onClick={this.handleClick} value="0">{json.heroes[0].name}</button></li>
                    <li><button className="button hollow"onClick={this.handleClick}  value="1">{json.heroes[1].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="2">{json.heroes[2].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="3">{json.heroes[3].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="4">{json.heroes[4].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="5">{json.heroes[5].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="6">{json.heroes[6].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="7">{json.heroes[7].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="8">{json.heroes[8].name}</button></li>
                    <li><button className="button hollow" onClick={this.handleClick} value="9">{json.heroes[9].name}</button></li>                  
                    </ul>
                </div>
            </div>
        )       
    },

    handleClick: function(e){
        var heroid = e.target.value;
        this.setstate({
            id: heroid
        })
    },

    heroDetail: function(){
        var id = this.state.id;

        return (
            <div>
                 <h1>{json.heroes[id].name}</h1>
            <p>{json.heroes[id].description}</p>
            </div>
           
            
        )
    },

    render: function(){
        var {id} = this.state;   
        return (
            <div>
                {this.listHeroes()}
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