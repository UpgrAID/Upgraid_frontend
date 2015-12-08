require('../css/login.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./components/loginRegistration/login.jsx');
var User = require('./models/user');
var Goals = require('./models/goals');
var GoalList = require('./components/profilePage/goalListApp.jsx');
ReactDOM.render(<Login/>, document.getElementById('login'));
ReactDOM.render(<GoalList/>, document.getElementById('goal'));
