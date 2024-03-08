const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function routes(fastify, options) {
  fastify.get("/gitlab/:groupId", async (request) => {
    const groupId = request.params.groupId;
    console.log(groupId);
    const response = await fetch(`http://localhost/api/v4/groups/2/projects`, {
      headers: {
        "PRIVATE-TOKEN": process.env.,
      },
    });
    const data = await response.json();
    return data;
  });
}

module.exports = routes;
