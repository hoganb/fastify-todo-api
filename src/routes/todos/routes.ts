import type {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from 'fastify';

import type { BodyParam, PathParam, Todo } from './types';
import { BodyParamSchema, TodoSchema, TodosSchema } from './schemas';

const todos: Todo[] = [{ id: '1', title: 'Todo 1' }];

export const todoRoutes = (
  app: FastifyInstance,
  _options: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) => {
  app.get(
    '/todos',
    {
      schema: {
        response: { 200: TodosSchema },
        summary: 'List todos',
        tags: ['todos'],
      },
    },
    async (_req, reply) => {
      return reply.status(200).send(todos);
    }
  );

  app.get<{ Params: PathParam }>(
    '/todos/:id',
    {
      schema: {
        response: { 200: TodoSchema },
        summary: 'Get todo by id',
        tags: ['todos'],
      },
    },
    async (req, reply) => {
      const todo = todos.find((t) => t.id === req.params.id);
      if (todo) {
        return reply.status(200).send(todo);
      } else {
        return reply.notFound();
      }
    }
  );

  app.post<{ Body: BodyParam }>(
    '/todos',
    {
      schema: {
        body: BodyParamSchema,
        response: { 201: TodoSchema },
        summary: 'Create todo',
        tags: ['todos'],
      },
    },
    async (req, reply) => {
      const todo = {
        id: `${Date.now()}`,
        ...req.body,
      };
      todos.push(todo);
      return reply.status(201).send(todo);
    }
  );

  app.put<{ Params: PathParam; Body: BodyParam }>(
    '/todos/:id',
    {
      schema: {
        response: { 200: TodoSchema },
        summary: 'Update todo by id',
        tags: ['todos'],
      },
    },
    async (req, reply) => {
      const index = todos.findIndex((t) => t.id === req.params.id);
      if (index === -1) {
        return reply.notFound();
      }
      const todo = {
        id: req.params.id,
        ...req.body,
      };
      todos[index] = todo;
      return reply.status(200).send(todo);
    }
  );

  app.delete<{ Params: PathParam }>(
    '/todos/:id',
    { schema: { summary: 'Delete todo by id', tags: ['todos'] } },
    async (request, reply) => {
      const index = todos.findIndex((t) => t.id === request.params.id);
      if (index === -1) {
        return reply.notFound();
      }
      todos.splice(index, 1);
      return reply.status(204).send();
    }
  );

  done();
};
