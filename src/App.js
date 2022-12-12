import "./styles/main.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { UnAuthenticatedHeader } from "./components/UnAuthenticatedHeader";
import { Discover } from "./pages/Discover";

function App() {
  return (
    <div className="app">
      {/* <UnAuthenticatedHeader /> */}
      <Discover />
      {/* <Header /> */}
      <Home />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
