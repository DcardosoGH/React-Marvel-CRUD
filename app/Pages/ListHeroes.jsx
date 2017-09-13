var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');
var HeroDetail = require('HeroDetail');
var heroApi = require('heroApi');

var ListHero = React.createClass({
    
    getInitialState: function(){
        return {
            newHero:false
        }
    },

    handleClick: function(e){
        var heroid = e.target.value;
        this.props.onClick(heroid);
        console.log(heroid)
        //console.log(heroid);
    },

    handleNewHero: function(e){
        e.preventDefault();
        var heroName = this.refs.name.value;
        var heroDesc = this.refs.description.value;
        heroApi.addHero(heroName,heroDesc);
        var that = this;
        that.setState({
            newHero:false,
        });
        console.log(heroName, '', heroDesc)
    },

    addhero(){
        var that= this;
        //heroApi.addHero();
        that.setState({
            newHero:true,
        })
    },

    render: function(){
       var {newHero} = this.state;
        var that = this;
        function listHeroes(){
            if(newHero){
                return (
                    
                    <form onSubmit={that.handleNewHero}>
                        <input type="text" placeholder="Hero Name" ref="name"/>
                        <input type="text" placeholder="Hero Description" ref="description"/>
                        <button className="button"> Submit </button>
                        <br/>
                        <br/>
                    </form>
                )
            }
            
                return(
                    <ul>
                    {
                        json.heroes.map(el => <button onClick={that.handleClick} className="button hollow" value={el.id}>{el.name}</button>) 
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
                    <button className="button" onClick={this.addhero}> Add a new Hero </button>
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