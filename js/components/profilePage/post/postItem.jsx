var React = require('react');
var PostItem = React.createClass({
	
	render: function() {
		var mapped=this.props.data.map(function(obj){
			return(<div>
						<p>{obj.title}</p>
						<p>{obj.description}</p>
					</div>)
		})
		return(<div>{mapped}</div>)
	}
});

module.exports = PostItem;