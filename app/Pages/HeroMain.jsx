var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');
var HeroDetail = require('HeroDetail');
var ListHeroes = require('ListHeroes');
var Nav = require('Nav');

var HeroMain = React.createClass({
    getInitialState: function(){
        return {
            clicked: false,
            deleted: false,
        }
    },

    onHeroClick(id){
        var that = this;
        that.setState({
            clicked: true,
            id: id
        });
    },

    onheroDelete(e){
        var that = this;
        var id = e.target.value;
        json.heroes.splice(id);
        that.setState({
            deleted: true,
            clicked:false,
        });
    },


    render: function(){
        var {id,clicked,deleted} = this.state;
        var heroes = json.heroes;
        var that = this;

        function renderHero(){
            if(clicked){
                
                return (
                    <div className="small-4 columns">                     
                        <HeroDetail id={heroes[id].id} name={heroes[id].name} desc={heroes[id].description} img={heroes[id].img.path}/>
                        <button onClick={that.onheroDelete} value={heroes[id].id} className="button"> Delete Hero</button>
                    </div>
                )
            }
        }
        return (            
           <div className="small-12 columns">
               <ListHeroes onClick={this.onHeroClick}/>
               {renderHero()}
           </div>
          )
    }

});



module.exports = HeroMain;