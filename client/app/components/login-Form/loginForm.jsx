import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./loginForm.styles.css";
import Link from "next/link";
import EmailInput from "../Inputs/email/email-Input";
import PasswordInput from "../Inputs/password/password-input";
import Loginbutton from "../buttons/submit-button/login-button";
import { signIn } from "next-auth/react";
import {crypt} from "../../utils/hashPassword/hashPassword";


const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required("Email is required"),
    password: Yup.string().required('Password is required')
});

const LoginForm = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        
    } = useForm({
        resolver: yupResolver(Schema),
        
    });
    
    const onSubmit = async (data) =>{
        const hashedPassword = await crypt(data.password);
        
         const response = await signIn('credentials',{
            email:data.email,
            password:hashedPassword,
            redirect:false
        });
        if(response.ok){
            console.log("logged in")
        }else{
            console.log("failed to login in")
        }
    };
    
    return ( 
        <FormProvider handleSubmit={handleSubmit} register={register} errors={errors} >
            <form className="login-form col-12 col-md-8 col-lg-10 col-xl-10 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                <EmailInput register={register('email')} errors={errors} />
                <PasswordInput register={register('password')}  errors={errors} />
                <Loginbutton type="submit" />
                <div className="border w-50 m-auto my-3"></div>
                <div className="w-100 text-center">
                    <Link href="#" className="text-decoration-none text-bold-primary-color fw-semibold" id="forget-password">forget password ?</Link>
                </div>
            </form>
        </FormProvider>
    );
}

export default LoginForm;
