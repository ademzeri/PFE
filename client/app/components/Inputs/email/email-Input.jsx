import "./email-input.styles.css";

const EmailInput = ({register,errors}) => {
    return ( 
        <div className={`form-group ${errors.email ? "is-invalid" : ""}`}>
        <input 
            type="email" 
            className={`form-control focus-blue-bottom-border rounded p-2 mb-3 ${errors.email? "is-invalid" : ""} `}  
            placeholder='Email'
            name='email'
            {...register}
            />
      {errors.email && <p class="invalid-feedback">{errors.email.message}</p>}

        </div>
    );
};

export default EmailInput;
