
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import DevelopersPage from './pages/DevelopersPage';
import DetailsPage from './pages/DetailsPage';
import UpdateDeveloperPage from './pages/UpdateDeveloperPage';
import AddDeveloperPage from './pages/AddDeveloperPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/developers/:id" element={<DetailsPage />} />
        <Route path="/developers/update/:id" element={<UpdateDeveloperPage />} />
        <Route path="/addDeveloper" element={<AddDeveloperPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
