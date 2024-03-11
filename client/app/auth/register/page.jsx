'use client'
import "./register.styles.css"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Register = () => {
    const { data: session } = useSession();
     const router = useRouter();
    
     useEffect(()=>{
        if(session && session.user.exists){
            router.push('/')
        }
     },[session,router])

    const handleSignOut = async () => {
        await signOut();
    };

   
    return ( 
               
        
        <section className="d-flex justify-content-center align-items-center vh-100 " >
            
            <div className=" row col-md-12 col-lg-10 col-xs-12 col-sm-12 h-75 m-auto shadow rounded">
            
            <div className="col position-relative d-none d-lg-flex justify-content-end align-items-center login-section-background ">
          
          </div>
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 col-xl bg-soft-tertiary-color rounded d-flex justify-content-start align-items-center flex-column " id="login-area">
                <div className=" row" >
                <h1>Register</h1>
            {<button onClick={handleSignOut}>Sign out</button>}

                </div>
               {/*  <LoginForm /> */}
               <input type="text" placeholder="first name" />
               
            </div>
          
          </div>          
                  </section>


                
                
            
    );
};
 
export default Register;
