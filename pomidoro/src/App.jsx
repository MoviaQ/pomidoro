import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useUser } from './UserContext';
import Auth from './components/auth/auth';
import OrchardPage from './components/OrchardPage/OrchardPage';
import GreenHousePage from './components/GreenHousePage/GreenHousePage';
import ShopPage from './components/ShopPage/ShopPage';

const App = () => {
  const { user } = useUser();

  if (user === null) {
    return <Auth />;
  }

  return (
    <Router>
      {/* Opcjonalnie, jeśli chcesz mieć nawigację w nagłówku */}
      
      <Routes>
        <Route path="/greenhouse" element={<GreenHousePage />} />
        <Route path="/orchard" element={<OrchardPage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* Możesz dodać inne trasy tutaj */}
        <Route path="/" element={<GreenHousePage />} /> {/* Domyślna strona, jeśli chcesz */}
      </Routes>
    </Router>
  );
};

export default App;