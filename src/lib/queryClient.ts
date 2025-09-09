import { QueryClient } from "@tanstack/react-query";

// Query client configuration for the application
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
