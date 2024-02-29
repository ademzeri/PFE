import "./loginForm.styles.css"
import Link from "next/link";
import EmailInput from "../Inputs/email/email-Input";
import PasswordInput from "../Inputs/password/password-input";
import Loginbutton from "../buttons/Login-button/login-button";

const LoginForm = () => {
    return ( 
        <div className="col login-form  w-75 m-auto ">
            <EmailInput />
            <PasswordInput />
            <Loginbutton />
            <div className="border w-50 m-auto my-3" ></div>
            <div className="w-100 text-center"  >
                <Link href="#" className="text-decoration-none text-bold-primary-color fw-semibold" id="forget-password" >forget password ?</Link>
            </div>
        </div>
     );
}
 
export default LoginForm;