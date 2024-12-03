import { initTRPC } from "@trpc/server";
import { errorFormatter } from "../utils/error-formatter";
import { createContext } from "./context";

// Initialize tRPC with context and custom error formatter
export const t = initTRPC.context<typeof createContext>().create({
  errorFormatter, // Attach the custom error formatter
});

export const router = t.router;
