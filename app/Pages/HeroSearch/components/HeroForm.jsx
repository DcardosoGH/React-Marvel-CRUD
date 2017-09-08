var React = require('react');

var HeroForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var hero = this.refs.hero.value;
    
    if(hero.length > 0){
        this.refs.hero.value= '';
        this.props.onSearch(hero);
    }
  },
  render: function () {
    return (
        <div>                
            <form onSubmit={this.onFormSubmit}>
                <input type="search" placeholder="Type a Hero Name" ref="hero"/>
                <button className="button expanded hollow alert"> Get Hero Details </button>
            </form>
        </div>
    );
  }
});

module.exports = HeroForm;
