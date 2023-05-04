import type { Static } from '@sinclair/typebox';

import type { BodyParamSchema, PathParamSchema, TodoSchema } from './schemas';

export type Todo = Static<typeof TodoSchema>;
export type BodyParam = Static<typeof BodyParamSchema>;
export type PathParam = Static<typeof PathParamSchema>;
