import "./styles/main.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { DashBoard } from "./pages/Dashboard";
import { Course } from "./pages/Course";
import { UnAuthenticatedHeader } from "./components/UnAuthenticatedHeader";

function App() {
  return (
    <div className="app">
      <Course />
      {/* <DashBoard /> */}
      {/* <UnAuthenticatedHeader /> */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
