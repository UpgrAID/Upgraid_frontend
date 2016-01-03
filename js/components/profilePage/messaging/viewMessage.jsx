var React = require('react');
var Store = require('../../../store.js')

var ViewMessage = React.createClass({
	getInitialState: function(){
		return({
			messageList: []
				})
	},
	_update: function(){
		this.setState({
			messageList: Store.data.messageList
		})
	},
	componentWillMount: function(){
		console.log(this.props.username)
		var ViewMessage = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/messages/user/?username=' + this.props.username
		});
		var Messages = Backbone.Collection.extend({
			url: 'https://safe-brook-9891.herokuapp.com/api/messages/user/?username=' + this.props.username,
			Model: ViewMessage
		});
		var that = this;
		var message = new Messages();
		message.fetch({
			success:function(resp){
				_.extend(Store.data,{messageList:resp.toJSON()});
				that._update();
			}
		})
	},
	render: function(){
		return(<div id="allMessages">
				{this.state.messageList.map(function(obj){
					return(<p className="message">{obj.message}</p>)
				})}
				</div>)
	}
});

module.exports = ViewMessage