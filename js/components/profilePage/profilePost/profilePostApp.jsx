var React = require('react');
var ProfileInput = require('./profileInput.jsx');
var ProfileItem = require('./profileItem.jsx');
var PostButtons = require('./postButtons.jsx')

var ProfilePostApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.posts,

		}
	},
	_addInput: function(collection) {

			this.setState({
			data: collection
		})
	},
	render: function() {
		var props = this.props;
		var that = this;
		var state = this.state;
		return(<div id="profilePostMaster">
				
				{this.props.goals.map(function(obj){
 					return(
 						<div className="inputDesContain">

 						<ProfileInput/>
						<PostButtons key={obj.id} theme={obj.theme} id={obj.group} title={obj.title} addInput={that._addInput} data={state.data} router={props.router}/>
						</div>
					)
 					})}
				
			</div>)
	}
});

module.exports = ProfilePostApp;
