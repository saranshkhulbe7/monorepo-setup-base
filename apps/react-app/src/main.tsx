import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@pal/trpc-client/src/Provider";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import "./index.css";

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
