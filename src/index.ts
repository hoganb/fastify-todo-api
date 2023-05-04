import fastify from 'fastify';
import { fastifySensible } from '@fastify/sensible';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';

import { todoRoutes } from './routes';

const app = fastify({
  logger: true,
});

void app.register(fastifySensible);
void app.register(fastifySwagger, {
  swagger: { info: { title: 'Fastify TODO API', version: 'v1.0.0' } },
});
void app.register(fastifySwaggerUi, { routePrefix: '/docs' });
void app.register(todoRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    app.log.info(`Swagger docs available at http://localhost:${3000}/docs`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
void start();
