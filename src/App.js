import "./styles/main.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Explore } from "./pages/Explore";
import { Course } from "./pages/Course";
import { UnAuthenticatedHeader } from "./components/UnAuthenticatedHeader";
import { getCategories } from "./services/getCategories";

function App() {
  return (
    <div className="app">
      {/* <Course /> */}
      {/* <Explore /> */}
      {/* <UnAuthenticatedHeader /> */}
      {/* <Header /> */}
      <Home />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
