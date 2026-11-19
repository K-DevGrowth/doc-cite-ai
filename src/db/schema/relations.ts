import { defineRelations } from "drizzle-orm";
import * as schema from "./auth-schema";

export const relations = defineRelations(schema, () => ({}));
