require('../css/login.css');
require('../css/registration.css');
require('../css/goalListApp.css');
require('../css/main.css');
require('../css/nav.css');
require('../css/navUserView.css');
require('../css/groupHome.css');
require('../css/postListApp.css');
require('../main.css');
require('../css/friends.css');
require('../css/groups.css');
require('../css/comment.css')
require('../css/addFriend.css');
require('../css/userList.css');
require('../css/avatarRankXp.css');
require('../css/chat.css');
require('../css/otherPosts.css');
require('../css/otherGoals.css')


var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./components/loginRegistration/login.jsx');
var Registration = require('./components/loginRegistration/registration.jsx');
var Greeting = require('./components/profilePage/greeting.jsx');
var Friends = require('./components/profilePage/friends/friends.jsx');
var Groups = require('./components/profilePage/groups/groups.jsx');
var Reg = require('./models/registration');
var User = require('./models/user');
var Goals = require('./models/goals');
var Router = require('./routes.jsx');
var AvatarRankXp = require('./components/profilePage/avatarRankXp/avatarRankXp.jsx');
var Pusher = require('pusher-js');
