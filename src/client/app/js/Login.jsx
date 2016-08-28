import React from 'react';
import s from '../scss/login.scss';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            email:'',
            password:''
        };
        this.onHandleLogin = this.onHandleLogin.bind(this);
    }

    onHandleLogin(e){
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

        console.log('Email:- '+ email);
        console.log('Password:- '+ password);
    }

    setValue(type,e){
        let object = {};
        object[type] = e.target.value;
        this.setState(object);
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin" onSubmit={this.onHandleLogin} method="post">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Email Address" onChange={this.setValue.bind(this,'email')} required="" value={this.state.email}  />
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.setValue.bind(this,'password')} required="" value={this.state.password}/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;