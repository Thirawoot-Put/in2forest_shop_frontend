import LoadingBar from "./components/LoadingBar";
import useAuth from "./hooks/use-auth";
import Router from "./route";
import { ToastContainer, toast, Slide } from "react-toastify";

function App() {
  const { firstLoading } = useAuth();

  if (firstLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
