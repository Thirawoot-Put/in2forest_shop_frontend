import LoadingBar from "./components/LoadingBar";
import useAuth from "./hooks/use-auth"
import Router from "./route"

function App() {
  const { firstLoading } = useAuth();

  if (firstLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingBar />
      </div>
    )
  }

  return (
    <>
      <Router />
    </>
  )
}

export default App
