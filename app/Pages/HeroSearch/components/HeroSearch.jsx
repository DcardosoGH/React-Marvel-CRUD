var React = require('react');
var heroApi = require('heroApi');
var HeroDetails = require('HeroDetails');
var HeroForm = require('HeroForm');
var HeroError = require('HeroError');


var HeroSearch = React.createClass({

    getInitialState: function(){
        return{
            isLoading: false,
        }        
    },

    componentWillUnmount: function(){
        this.setState({
            hero: undefined,
            heroName: undefined
        })
    },

    handleSearch: function(heroName){
       var that = this;

       this.setState({
           isLoading: true,
           errorMessage: undefined,
           
       })

        heroApi.getHeroes(heroName).then(function (hero){
            that.setState({
                heroName: heroName,
                hero: hero,
                isLoading:false,                
            });            
        },function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });        
    },
        
      render: function(){
        var {hero, isLoading, errorMessage, heroName} = this.state;

        function renderDetails () {
            if(isLoading){
                return <h3> Fetching Data ... </h3>
            } else if(hero && heroName){
                return <HeroDetails hero={hero}/>
            }            
        }
        
        function renderError(){
            if(typeof errorMessage === 'string'){
                return (
                    <HeroError message={errorMessage}/>
                )
            }
        }

        return(
                <div>
                    <h1 className="text-center page-title"> Hero Search</h1>
                    <HeroForm onSearch={this.handleSearch}/>                      
                    {renderDetails()}
                    {renderError()}
                </div>
                )
        }
});

module.exports = HeroSearch;