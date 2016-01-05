var React =require('react');
var Reg = require('../../models/registration');

var test = new Reg();

var Registration = React.createClass({

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

    _close: function() {
      this.props.hide();
    },
    render: function() {
        return(
           <div>
           {(this.props.hidden ? null :
           <div id="registrationContainer">
                    <form onSubmit={this._regSubmit}>
                        <span id="close" onClick={this._close}>X</span>
                        <h1 id="regHead">Register</h1>

                                <input id="firstName" className="regInput" placeholder="First Name"/>

                                <input  id="userName" className="regInput" type="text" placeholder="Username" />

                                <input type="password" id="passwordReg" className="regInput" placeholder="password"/>

                                <input type="password" className="regInput" placeholder=" Confirm password"/>

                            <input id="email" className="regInput" placeholder="email"/>
                            <button id="submitReg" type="submit">Submit</button>
                    </form>
                </div>)}
            </div>
            )
    }
})

module.exports= Registration;
