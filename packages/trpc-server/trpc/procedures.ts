import {
  adminMiddleware,
  userMiddleware,
} from "../middlerware/auth-middleware";
import { errorHandler } from "../middlerware/error-middleware";
import { t } from "./core";

export const publicProcedure = t.procedure.use(errorHandler); // Global error handler middleware
export const userProcedure = publicProcedure.use(userMiddleware); // Apply user-specific logic (auth, etc.)
export const adminProcedure = publicProcedure.use(adminMiddleware);
