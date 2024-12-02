import { createRoot } from "react-dom/client";

import AppRouter from "./providers/router/AppRouter";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root not found");
}

const root = createRoot(rootElement);

root.render(<AppRouter />);
