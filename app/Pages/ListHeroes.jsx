var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');
var HeroDetail = require('HeroDetail');

var ListHero = React.createClass({

    handleClick: function(e){
        var heroid = e.target.value;
        this.props.onClick(heroid);
        console.log(heroid)
        //console.log(heroid);
    },

    render: function(){
        var that = this;
        function listHeroes(){
            
            return (
                
                <ul>
                    {
                        json.heroes.map(el => <li><button onClick={that.handleClick} className="button hollow" value={el.id}>{el.name}</button></li>) 
                    }
                </ul>  
            )
        }

        return (
                <div className="small-8 columns">
                    <h1 className>Hero List </h1>
                    <p> Click on each Hero to see it's Details</p>
                    <div>
                        {listHeroes()}
                    </div>
                </div>
            
        )
    }

});

module.exports = ListHero;


/* <ul>
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
</ul> */