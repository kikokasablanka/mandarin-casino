import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import Navigation from './components/ui/Navigation';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <main className="flex-1 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;