var React = require('react');

var OtherPosts = React.createClass({
	render: function() {
		var test=this.props.data.map(function(obj){
			return(<div><p>{obj.title}</p>
				   <p>{obj.description}</p>
					</div>
					)
	})
		return(<div>{test}</div>)
	}
});

module.exports = OtherPosts;