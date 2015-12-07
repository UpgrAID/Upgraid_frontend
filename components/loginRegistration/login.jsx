var React =require('react');

var Login = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		console.log('test');
	},
	render: function() {
		return(
			<div id="loginContainer">
				<form onSubmit={this._submit}>
					<label htmlFor="username">Username</label>
						<input/>
						<label htmlFor="password">Password</label>
						<input/>
					<button id="submitLog" type="submit">Submit</button>
				</form>
			</div>
			)
	}
})

module.exports= Login;