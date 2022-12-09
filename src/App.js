import './styles/main.scss';
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'




function App() {
  return (
    <div className='app'>      
      <Header />
      <Home />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
