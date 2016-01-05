var React =require('react');
var Reg = require('../../models/registration');

var test = new Reg;

var Registration = React.createClass({
    getIntialState: function(){
        return {
            username: null,
            firstName: null,
            password: null,
            passwordConfirmation: null
        }
    },
    _submit: function(e) {
        e.preventDefault();
        test.set({
            first_name: $('#firstName').val(),
            username: $('#userName').val(),
            password: $('#passwordReg').val(),
            email: $('#email').val(),
        })
       test.save({},{
        success: function(resp) {

        },
        error: function(resp) {
        }
       })
    },
    
    _close: function(e) {
        $('#register').hide();
    },
    render: function() {
        return(
            <div id="registrationContainer">
                <form onSubmit={this._submit}>
                <span id="close" onClick={this._close}>X</span>
                <h1>Register</h1>
                    <label>First Name:</label>
                    <input id="firstName"/>
                    <label htmlFor="username">Username</label>
                        <input  id="userName" type="text" />
                    <label htmlFor="password">Password</label>
                        <input id="passwordReg"/>
                    <label htmlFor="password-confirmation">Confirm Password</label>
                        <input type="password"/>
                    <label>Email</label>
                    <input id="email"/>
                    <button id="submitReg" type="submit">Submit</button>
                </form>
            </div>
            )
    }
})

module.exports= Registration;
