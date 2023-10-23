import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import Blank from './components/Blank';
import Slide from './components/Slide';
import Tort from './components/Tort';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Blank" element={<Blank />} />
            <Route path="/Slide" element={<Slide />} />
            <Route path="/Tort" element={<Tort />} />
          </Routes>
        </div>
        <div>
        <Footer />  
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
