import { Boundary } from "@pal/ui-components/components/ErrorBoundary";
const RootPage = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <div className="border">hello</div>
      <div className="border">
        <Boundary>
          <div>hello</div> {/* This will now be caught */}
        </Boundary>
      </div>
    </div>
  );
};
export default RootPage;
