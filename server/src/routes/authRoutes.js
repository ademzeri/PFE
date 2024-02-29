const authController = require("../controllers/authController");

async function routes(fastify, options) {
  fastify.post("/login", authController.login);
}

module.exports = routes;
