import React from "react";
import "./signin-signup-page.styles.scss";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SigninSignupPage = () => (
    <div className="sign-in-sign-up">
        <Signin/>
        <SignUp/>
    </div>
)

export default SigninSignupPage;