import "./styles/main.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Explore } from "./pages/Explore";
import { Course } from "./pages/Course";
import { UnAuthenticatedHeader } from "./components/UnAuthenticatedHeader";
import { CoursesProvider } from "./contexts/CoursesContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { RoutingProvider } from "./routing/RouterProvider";

function App() {
  return (
    <div className="app">
      <CategoriesProvider>
        <CoursesProvider>
          <RoutingProvider />
        </CoursesProvider>
      </CategoriesProvider>
      {/* <Course /> */}
      {/* <UnAuthenticatedHeader /> */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
