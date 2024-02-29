const Authroutes = require("./routes/authRoutes");
const config = require("../config");
const fastify = require("fastify")({
  logger: true,
});

fastify.register(Authroutes);

const PORT = config.PORT || 3000;

fastify.listen({ port: PORT }, (err, address) => {
  console.log(`Server is running on ${fastify.server.address().port}`);

  if (err) throw err;
});
