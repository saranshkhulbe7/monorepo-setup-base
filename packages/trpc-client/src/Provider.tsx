"use client";
import { trpcClient as trpc } from "./client";
import React, { useCallback, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import toast, { Toaster } from "react-hot-toast";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const errorToast = useCallback((message: string) => toast.error(message), []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: (error: any) => {
              // Log error and show toast for queries
              if (error instanceof Error) {
                console.log("TRPC Query Error:", error.message, error);
                errorToast(error.message);
              }
            },
          },
          mutations: {
            onError: (error: any) => {
              // Log error and show toast for mutations
              if (error instanceof Error) {
                console.log("TRPC Mutation Error:", error.message, error);
                errorToast(error.message);
              }
            },
          },
        },
      })
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </trpc.Provider>
  );
};
