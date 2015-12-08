var React =require('react');

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
    },
    _handleInputChange: function(e){
        e.preventDefault();
        
    },
    render: function() {
        return(
            <div id="RegistrationContainer">
                <form onSubmit={this._submit}>
                    <label>First Name:</label>
                    <input />
                    <label htmlFor="username">Username</label>
                        <input type="text" onChange={this._handleInputChange}/>
                    <label htmlFor="username">Username</label>
                        <input onChange={this._handleInputChange}/>
                    <label htmlFor="password">Password</label>
                        <input onChange={this._handleInputChange}/>
                    <label htmlFor="password-confirmation">Confirm Password</label>
                        <input type="password" onChange={this._handleInputChange}/>
                    <label>Email</label>
                    <input />
                    <button id="submitReg" type="submit">Submit</button>
                </form>
            </div>
            )
    }
})

module.exports= Registration;