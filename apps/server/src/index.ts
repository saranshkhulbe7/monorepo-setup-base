import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "@pal/trpc-server/routers";
import { createFactory } from "hono/factory";
import { errorHandler } from "./middlewares";
import { z } from "zod";

export const factory = createFactory();
export const checkMiddleware = factory.createMiddleware(async (c, next) => {
  console.log("going and running in hono");
  const zSchema = z.object({
    name: z.string(),
  });
  const a = {
    names: "saransh",
  };
  zSchema.parse(a);
  return next();
});

const app = new Hono();
// app.use(checkMiddleware);
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);
app.onError((err, c) => {
  const error = errorHandler(c);
  return error;
});

export default app;
