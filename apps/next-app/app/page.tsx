"use client";
import { Boundary } from "@pal/ui-components/components/ErrorBoundary";
import { trpcClient } from "@pal/trpc-client/src/client";
import { Button } from "@pal/ui-components/components/ui/button";
export default function Home() {
  const { data: allUsers } = trpcClient.user.all.useQuery();
  const { mutate } = trpcClient.user.create.useMutation();

  if (!allUsers) return <div>Loading...</div>;
  console.log("allUsers", allUsers);

  return (
    <div>
      hello
      <button
        onClick={() => {
          mutate({
            name: "saransh",
            email: "saransh@gmail.com",
            password: "saransh",
            role: "user",
          });
        }}
      >
        create
      </button>
      <Button
        onClick={() => {
          console.log("nachange");
        }}
      >
        hey ya
      </Button>
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="border">hello</div>
        <div className="border">
          <Boundary>
            <div>
              hello
              {new Error("New error")}
            </div>{" "}
            {/* This will now be caught */}
          </Boundary>
        </div>
      </div>
    </div>
  );
}
