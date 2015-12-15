var React = require('react');
var PostInput = require('./postInput.jsx');
var PostItem = require('./postItem.jsx');
var Post = require('./post.jsx');
var PostButtons = require('./postBtns.jsx');
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
		return(<div id="postMaster">
					<PostInput id="postInput"data={this.state.data} addInput={this._addInput}/>
					{this.props.goalId.map(function(obj){
					return(<PostButtons key={obj.id} goalId ={props.goalId} id={obj.id} addInput={props.addInput} data={state.data}/>)
					})}
					<PostItem data={this.state.data} addInput={this._addInput}/>
				</div>
			)
	}
	
});

module.exports = PostListApp;