import { router } from "../trpc/core";
import { publicProcedure } from "../trpc/procedures";

export const authRoutes = router({
  users: publicProcedure.query(() => [
    {
      id: "1",
      name: "John Doe",
    },
  ]),
});
