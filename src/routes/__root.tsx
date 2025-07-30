import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer/Footer";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => (
      <>
        <AppBar />
        <div className="container max-w-6xl px-2 lg:px-0 ">
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    pendingMs: 0,
    pendingMinMs: 0,
  }
);
