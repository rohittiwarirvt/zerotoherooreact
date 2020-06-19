import React from "react";
import {connect} from 'react-redux';
import  FormInput from "../form-input/form-input.component";
import CustomButton  from "../custom-button/custom-button.component";
import { signUpStart } from '../../redux/user/user.actions';
import "./sign-up.styles.scss";


class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password:"",
      confirmPassword: ""
    }
  }

  handleOnSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    const {signUpStart} = this.props;


    if(password !== confirmPassword) {
      alert("Password and confirm Password dont match");
      return;
    }
    signUpStart({email, password, displayName});

  }

  handleChange = event  => {
    const { name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className="sign-up">
        <h2 className="tilte">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleOnSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleOnChange={this.handleChange}
          label="Display Name" required />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleOnChange={this.handleChange}
          label="Email" required />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleOnChange={this.handleChange}
          label="Password"
          required/>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleOnChange={this.handleChange}
          label="Confirm Password"
          required />
        <CustomButton type="submit" >Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);