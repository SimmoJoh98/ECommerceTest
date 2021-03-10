import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component.jsx'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value})
    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I Already Have An Account.</h2>
                <span>Sign In With Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='email' name='email' type='email' value={this.state.email} required />
                    <FormInput handleChange={this.handleChange} label='password' name='password' type='password' value={this.state.password} required />
                    <input type='submit' value='Submit Form'></input>
                </form>
            </div>
        )
    }


}

export default SignIn;