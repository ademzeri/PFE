import { IconEyeOff } from '@tabler/icons-react';
 import "./password-input.styles.css";
 const PasswordInput = () => {
    return ( 
        <div className="input-group col position-relative d-flex align-items-center">
    <input type="password" className="form-control focus-blue-bottom-border rounded p-2" placeholder='password' />
    <button className="input-group-button position-absolute end-0 z-index-999 border-none px-2 py-1 rounded" id='show-hide-password'>
        <i><IconEyeOff /></i>
    </button>
</div>

    
    
     );
}
 
export default PasswordInput;