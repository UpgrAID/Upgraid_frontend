var React = require('react');
var Store = require('../../../store.js')


//users sees all private messages he sent and received. Updates in realtime.
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
		var that = this;
		
		return(<div id="allMessages">
				{this.state.messageList.map(function(obj){
					return(<div className="message"><span>{obj.sender}</span><p className="message" key={obj.id}>{obj.message}</p></div>)
				})}
				</div>)
	}
});

module.exports = ViewMessage
