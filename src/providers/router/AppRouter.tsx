import { Suspense } from "react";
import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { NotFound, HomePage } from "@/pages";
import App from "@/App";
import ErrorBoundary from "@/providers/ErrorBoundary/ErrorBoundary";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        { path: "/404", element: <NotFound /> },
        {
          path: "*",
          element: <Navigate to="/404" replace />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
