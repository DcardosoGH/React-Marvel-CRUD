var React = require('react');
var {Link, IndexLink} = require('react-router');
//const json = require('json-loader!../api/heroes.json');

var HeroDetail = ({id, name, desc, img}) => {  
    return (        
            <div className="small-4 columns">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1> {name} </h1>
                <p> {desc}</p>
                <img src={img} alt=""/>
                <br/>
                <br/>          
            </div>
    )
}

module.exports = HeroDetail;