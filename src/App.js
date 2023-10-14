import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Menu from './Components/Menu';
import Nav from './Components/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Main />
    <Menu />
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
