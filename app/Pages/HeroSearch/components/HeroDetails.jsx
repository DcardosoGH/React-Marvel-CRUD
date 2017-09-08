var React = require('react');

var HeroDetails = ({hero}) => {
    return (
        <div>
            <h1>{hero[0]}</h1>
            <p>{hero[1]}</p>
            <img src={hero[2]}/>
        </div>       
    )
}

module.exports = HeroDetails;
