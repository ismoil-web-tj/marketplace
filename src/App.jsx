import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/hero/hero';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import Catalog from './routes/catalog';
import Favorites from './routes/favorites'; // <-- 1. ИМПОРТИРУЕМ ИЗБРАННОЕ

// Компонент главной страницы (собирает Hero + Categories)
function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} /> {/* <-- 2. ДОБАВЛЯЕМ РОУТ */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;