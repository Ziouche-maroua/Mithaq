// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import InformationPage from './pages/InformationPage';


function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/information" element={<InformationPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;