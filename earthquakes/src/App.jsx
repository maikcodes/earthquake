import { Dashboard } from "@pages/dashboard"
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
}

export default App
