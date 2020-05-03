import React from  "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }

    onFormSubmit = (event ) => {
        event.preventDefault();
        this.setState({
            email:"",
            password: ""
        });
        
    }

    handleOnChange = (event) => {
        const { value, name} = event.target;
        this.setState({[name]: value});
        console.log(this.state)
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.onFormSubmit}>
                    <FormInput required type="email" name="email" value={this.state.email} label="Email" handleOnChange={this.handleOnChange}/>
                    <FormInput required type="password" name="password" value={this.state.password} label="Password" handleOnChange={this.handleOnChange}/>
                    <CustomButton type="submit" >Submit Form</CustomButton>
                </form>
            </div>
        )
    }
}


export default Signin;