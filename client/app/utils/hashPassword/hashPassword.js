import bcrypt from 'bcryptjs';
async function crypt(password){
    
    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
}
module.exports = {crypt}