import { Suspense } from "react";
import { RouterProvider, Navigate, createBrowserRouter } from "react-router";
import { NotFound, HomePage } from "@/pages";
import App from "@/App";
import ErrorBoundary from "@/providers/ErrorBoundary/ErrorBoundary";

const AppRouter = () => {
  const router = createBrowserRouter(
    [
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
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
