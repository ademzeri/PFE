import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./loginForm.styles.css";
import Link from "next/link";
import EmailInput from "../Inputs/email/email-Input";
import PasswordInput from "../Inputs/password/password-input";
import Loginbutton from "../buttons/submit-button/login-button";
import { IconInfoCircle } from '@tabler/icons-react';
import {signIn} from "next-auth/react"; 
import { useState } from 'react';

const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required("Email is required"),
    password: Yup.string().required('Password is required')
});

const LoginForm = () => {
    const [isValid, setIsValid] = useState(true);
    const {
        register,
        formState: {errors},
        handleSubmit,
        
    } = useForm({
        resolver: yupResolver(Schema),
        
    });
    
    const onSubmit = async (data) => {
        try {
          const response = await signIn('credentials', { redirect: false, ...data });
          if (response.ok) {
            console.log(response);
            setIsValid(true);
          } else {
            setIsValid(isValid => !isValid);
          }
        } catch (error) {
          console.error("Error during signIn:", error);
        }
      };
      
    
    return ( 
        
        <FormProvider  register={register} errors={errors} >
            <form className="login-form col-12 col-md-8 col-lg-10 col-xl-10 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                <EmailInput register={register('email')} errors={errors} isValid={isValid}  />
                <PasswordInput register={register('password')}  errors={errors} isValid={isValid}  />
                { !isValid && <div className='text-danger d-flex flex-row gap-2' >
                    <i ><IconInfoCircle /></i>
                    <p >Login failed. Please verify if your account exists in LDAP</p> 
                </div> }
                <Loginbutton type="submit" />
                
            </form>
        </FormProvider>
    );
}

export default LoginForm;
