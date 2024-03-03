const ldap = require("ldapjs");
const generateToken = require("../utils/jwt");
const config = require("../../config");
const userModel = require("../models/UserModel");
async function userAuthenticate(email, password) {
  const userDn = `mail=${email},${config.LDAP_BASE_DN}`;

  try {
    const client = ldap.createClient({
      url: config.LDAP_URI,
    });

    // Bind to LDAP server
    await new Promise((resolve, reject) => {
      client.bind(userDn, password, (err) => {
        if (err) {
          client.unbind();
          reject({ ok: false, message: "Invalid credentials", error: err });
        } else {
          resolve();
        }
      });
    });
    // Generate JWT token upon successful authentication
    const token = generateToken(email);
    client.unbind();
    return {
      message: "Authentication successful",
      ok: true,
      token,
    };
    //Manipulate user in the database
    /*     const userExists = await userModel.userExists(email);

    if (userExists.ok) {
      const createUser = await userModel.createUser({
        email: email,
        firstName: "adem",
        lastName: "zerii",
      });
      if (createUser.ok) {
        console.log("user created");
        return {
          message: "Authentication successful",
          ok: true,
          token,
          newUser: true,
        };
      }
      return {
        message: "Authentication successful",
        ok: true,
        token,
        newUser: false,
      };
    } */
  } catch (error) {
    console.error("LDAP authentication error:");
    return { ok: false, message: "Server error" };
  }
}

module.exports = { userAuthenticate };
