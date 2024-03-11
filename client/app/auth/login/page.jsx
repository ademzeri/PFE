'use client'
import Image from "next/image";
import illustartionBackground from "../../../public/login-3D-illustration-background.png";
import Logo from "../../../public/Logo.svg";
import "./login.styles.css";
import LoginForm from "../../components/login-Form/loginForm";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
    const {data:session} = useSession();
    const router = useRouter();

    useEffect(()=>{
        if(session && session.user.exists){
            router.push('/')
        }else if(session && !session.user.exists) {
            router.push('/auth/register')
        }
    },[session,router]);

    if (session) {
        return <p>Redirecting...</p>;
      }
    return (

        <section className="d-flex justify-content-center align-items-center vh-100 " >
            
  <div className=" row col-md-12 col-lg-10 col-xs-12 col-sm-12 h-75 m-auto shadow rounded">
  <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 col-xl bg-soft-tertiary-color rounded d-flex justify-content-start align-items-center flex-column " id="login-area">
      <div className=" row" >
          <Image src={Logo} alt="Logo" className="m-auto col-12 w-auto"  />
      </div>
      <LoginForm />
  </div>
  <div className="col position-relative d-none d-lg-flex justify-content-end align-items-center login-section-background ">
  <Image
      className="position-absolute  "
      src={illustartionBackground}
      width={300}
     
      alt="Login Background Illustration"
  />
</div>

</div>          
        </section>
     );
}
 
export default Login;