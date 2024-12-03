import { prometheus } from "@hono/prometheus";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { poweredBy } from "hono/powered-by";
import { logger } from "hono/logger";
import { errorHandler, notFound } from "@/middlewares";
import { routes } from "@/routes";
import { parsedEnv } from "./env";
import connectDB from "@/db/connect";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "@prodx/trpc-server/routers";

const app = new Hono();
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

export default app;
