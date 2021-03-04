import React from 'react';
/*
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
*/
class SignIn extends React.Component {
        constructor(props) {
            super(props);
    
            this.state = {
                email:'',
                password:''
            }
        }
    
        handleSubmit = event => {
            //this function is used to handle the submit event 
            event.preventDefault();
    
            this.setState({email:'',password:''})
        }
    
        handleChange = event => {
            //this function is used to handle the changes in the password field
            const {value,name} = event.target.value;
    
    
            this.setState({[name]:value});
        }
    
    
        render(){
            return(
                <div className="sign-in">
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
    
                    <form onSubmit={this.handleSubmit}>
                        <input name="email" type="email" value={this.state.email} required />
                        <label>Email</label>
                        <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                        <label>Password</label>
                        <input type="submit" value="Submit Form"/>
                    </form>
    
                </div>
            )
        }
    }
    
    export default SignIn; 