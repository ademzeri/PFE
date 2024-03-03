const { getDB } = require("../database/database");

const userModel = {
  async userExists(email) {
    try {
      const db = await getDB();
      const user = await db.collection("users").findOne({ email: email });
      if (user) {
        return { ok: true, user: user }; // Return an object indicating success and the user object
      }
      return { ok: false, message: "user does not exist" }; // Return an object indicating success and the user object
    } catch (error) {
      console.error("Error checking if user exists:", error);
      return { ok: false, message: "Error checking if user exists" }; // Return an error object
    }
  },
  async createUser(user) {
    try {
      const db = await getDB();
      const result = await db.collection("users").insertOne(user);
      return { success: true, user: result.ops[0] }; // Return an object indicating success and the created user object
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, message: "Error creating user" }; // Return an error object
    }
  },
};

module.exports = userModel;
