import { inferAsyncReturnType } from "@trpc/server";
import { v4 as uuidv4 } from "uuid";

// Create a context for each request
export const createContext = ({ req }: { req: Request }) => {
  return {
    requestId: uuidv4(), // Generate a unique request ID
    path: req.url, // Store the request path (optional)
    req, // Add the request object itself
  };
};

// Define the context type for consistent typing across the app
export type Context = inferAsyncReturnType<typeof createContext>;
