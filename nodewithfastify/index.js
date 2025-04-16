require("dotenv").config();
const fastify = require("fastify")({
  logger: true,});
const studentroutes = require("./routes/studentroutes");

//register mysql plugin
fastify.register(require("@fastify/mysql"), {
    promise: true,
    connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});

//register routes
fastify.register(studentroutes);

//start server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
    fastify.log.info(`Server is running on http://localhost:${process.env.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
