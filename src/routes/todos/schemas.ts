import { Type } from '@sinclair/typebox';

export const TodoSchema = Type.Object(
  {
    id: Type.String(),
    title: Type.String(),
  },
  { additionalProperties: false }
);

export const TodosSchema = Type.Array(TodoSchema);

export const BodyParamSchema = Type.Object(
  {
    title: Type.String(),
  },
  { additionalProperties: false }
);

export const PathParamSchema = Type.Object(
  {
    id: Type.String(),
  },
  { additionalProperties: false }
);
