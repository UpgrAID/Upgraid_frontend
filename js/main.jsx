require('../css/login.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./components/loginRegistration/login.jsx');
var Registration = require('./components/loginRegistration/registration.jsx');
var User = require('./models/user');
var Goals = require('./models/goals');
// var Router = require('./routes.jsx');

ReactDOM.render(<Login/>, document.getElementById('login'));
ReactDOM.render(<Registration/>, document.getElementById('registration'));

