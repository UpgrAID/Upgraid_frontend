var React = require('react');
var BadgeCount = require('./badgeCount.jsx')
var Badges = React.createClass({
	getInitialState: function(){
		return({
			data: []
		})
	},
	//retrieve award/badge date from api
	componentWillMount: function() {
	var that = this;
	var Badge = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/earned/?username='+ this.props.username
			})
			var BadgeCollection = Backbone.Collection.extend({
			Model:Badge,
			url:'https://safe-brook-9891.herokuapp.com/api/earned/?username='+this.props.username
			})
			var BadgeCollection = new BadgeCollection();

			BadgeCollection.fetch({
				success:function(resp){

					that.setState({
						data:resp.toJSON()
					})
				}
			})
},
	render:function() {
		return(<div id="badgeContainer">
				<h2 id="badgeHeader">Badges</h2>
				<BadgeCount data={this.state.data}/>
			</div>)
	}
});

module.exports = Badges;
