const ldap = require("ldapjs");
const generateToken = require("../utils/jwt");
const config = require("../../config");
const { authenticate } = require("ldap-authentication");

const client = ldap.createClient({
  url: config.LDAP_URI,
});

async function authService(email, password) {
  try {
    const userDn = `mail=${email},ou=team,dc=example,dc=com`;

    // Attempt LDAP authentication
    let authenticated = false;
    try {
      authenticated = await authenticate({
        ldapOpts: { url: config.LDAP_URI },
        userDn: userDn,
        userPassword: password,
      });
    } catch (error) {
      // If the error is due to invalid credentials, return false
      if (error && error.lde_message === "Invalid Credentials") {
        return {
          ok: false,
          message: "Incorrect credentials",
        };
      } else if (error && error.code === "NO_SUCH_OBJECT") {
        // If the error indicates the user does not exist, return a specific message
        return {
          ok: false,
          message: "User does not exist",
        };
      } else {
        // If it's another type of LDAP error, log it and continue
        console.error("LDAP authentication failed:", error);
        return {
          ok: false,
          message: "An error occurred during authentication",
        };
      }
    }

    // If authentication succeeds, generate token and return success response
    if (authenticated) {
      const token = generateToken(password);
      return {
        ok: true,
        message: "User found",
        token: token,
      };
    } else {
      // If authentication fails, return failure response
      return {
        ok: false,
        message: "User not found or incorrect credentials",
      };
    }
  } finally {
    // Ensure the LDAP client is properly disconnected
    client.unbind();
  }
}

module.exports = authService;
