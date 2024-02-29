'use client'
import Image from "next/image";
import illustartionBackground from "../../public/3D-illustration-background.png";
import Logo from "../../public/logo.svg";
import "./login.styles.css";
import LoginForm from "../components/loginForm/loginForm";
const Login = () => {
    return (
        <section className="d-flex justify-content-center align-items-center vh-100 rounded-circle" >
            <div className="w-75 h-75 row rounded">
                <div className="col bg-soft-tertiary-color " id="login-area">
                    <Image src={Logo} alt="Logo" width={500}  />
                    <LoginForm />
                </div>
                <div className="col-md position-relative d-none d-lg-flex justify-content-center align-items-center" id="background">
                <Image
                    className="position-absolute  "
                    src={illustartionBackground}
                    width={500}
                    height={300}
                    alt="Login Background Illustration"
                />
            </div>

        </div>
        </section>
     );
}
 
export default Login;