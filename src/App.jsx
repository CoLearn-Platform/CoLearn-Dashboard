import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./ui/NotFound";
import AuthForm from "./pages/AuthForm";
import { Toaster } from "react-hot-toast";
import Homepage from "./ui/Homepage";

const queryClient = new QueryClient({
  defaultOptions: {
    stateTime: 0,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Homepage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="auth" element={<AuthForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-500)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
