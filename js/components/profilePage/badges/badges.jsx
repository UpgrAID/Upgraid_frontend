var React = require('react');
var BadgeCount = require('./badgeCount.jsx')
var Badges = React.createClass({
	getInitialState: function(){
		return({
			data: []
		})
	},
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
					console.log(resp.toJSON());
					that.setState({
						data:resp.toJSON()
					})
				}
			})
},
	render:function() {
		return(<div id="badgeContainer">
				<p id="badgeHeader">Badges</p>
				<BadgeCount data={this.state.data}/>
				<ul>
				{this.state.data.map(function(obj){
					return(<li>{obj.achievement.name}</li>)
				})}
					
				</ul>
			</div>)
	}
});

module.exports = Badges;