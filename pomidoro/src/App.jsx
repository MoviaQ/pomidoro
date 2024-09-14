// App.jsx
import React from 'react';
import { useUser } from './UserContext';
import Auth from './components/auth/auth';
import OrchardPage from './components/OrchardPage/OrchardPage';

const App = () => {
  const { user } = useUser();

  if (user === null) {
    return <Auth />;
  }

  return <OrchardPage />;
};

export default App;