var React = require('react');
var PostInput = require('./postInput.jsx');
var PostItem = require('./postItem.jsx');
var Post = require('./post.jsx');

var PostListApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,

		}
	},
	_addInput: function(collection) {

			this.setState({
			data: collection
		})
	},
	

	render: function() {
		props = this.props;
		
		state = this.state;
		return(
			<div id="postInput">
					<PostInput data={this.state.data} addInput={this._addInput} groupId={this.props.groupId}/>
					<div id="postMaster">
					<PostItem data={this.state.data} addInput={this._addInput} username={this.props.username}/>
					</div>
			</div>
			)
	}

});

module.exports = PostListApp;


// {this.props.goalId.map(function(obj){
// 					return(<PostButtons key={obj.id} goalId ={props.goalId} id={obj.id} addInput={props.addInput} data={state.data}/>)
// 					})}
