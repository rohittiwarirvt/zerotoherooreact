import React from  "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

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
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:"",
                password: ""
            });
        } catch (error) {
            console.log("error signin in", error.message);
        }


        
    }

    handleOnChange =  (event) => {
        const { value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.onFormSubmit}>
                    <FormInput required type="email" name="email" value={this.state.email} label="Email" handleOnChange={this.handleOnChange}/>
                    <FormInput required type="password" name="password" value={this.state.password} label="Password" handleOnChange={this.handleOnChange}/>
                    <div className="buttons">
                        <CustomButton type="submit" >Submit Form</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >
                            {' '}
                            Signin with Google{' '}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}


export default Signin;