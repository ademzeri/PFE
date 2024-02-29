const authentificate = require("../services/authServices");

const authController = {
  async login(request, reply) {
    try {
      const { email, password } = request.body;
      if (!email || !password) {
        reply
          .status(400)
          .send({ ok: false, message: "Missing email or password" });
        return;
      }
      const response = await authentificate(email, password);
      
      if (!response.ok) {
        reply.status(401).send({
          ok: false,
          message: response.message || "Authentication failed",
        });
      } else {
        reply.status(200).send({
          ok: true,
          token: response.token,
        });
      }
    } catch (error) {
      console.error("Error in the controller:", error);
      reply.status(500).send({ ok: false, message: "Internal server error" });
    }
  },
};

module.exports = authController;
