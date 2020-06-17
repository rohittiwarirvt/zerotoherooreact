import React from  "react";
import { connect } from  'react-redux';
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }

    onFormSubmit = async (event ) => {
        event.preventDefault();
        const { emailSignInStart}  = this.props;
        const { email, password} = this.state;
        console.log("asdfasdf");
        console.log(email);
        console.log(password);
        emailSignInStart(email, password);
        
    }

    handleOnChange =  (event) => {
        const { value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {googleSignInStart} = this.props
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.onFormSubmit}>
                    <FormInput required type="email" name="email" value={this.state.email} label="Email" handleOnChange={this.handleOnChange}/>
                    <FormInput required type="password" name="password" value={this.state.password} label="Password" handleOnChange={this.handleOnChange}/>
                    <div className="buttons">
                        <CustomButton type="submit" >Submit Form</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >
                            {' '}
                            Signin with Google{' '}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:(email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(Signin);