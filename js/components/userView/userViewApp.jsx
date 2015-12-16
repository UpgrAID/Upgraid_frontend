var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');

var UserViewApp = React.createClass({
	render:function() {
		return(<div>
				<OtherPosts posts={this.props.posts}/>
			</div>)
	}
});

module.exports = UserViewApp;