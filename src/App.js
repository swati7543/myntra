import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './layouts';
import HomePage from './components/Homepage';
import Login from './components/Login/Login';
import CardDetails from './components/CardDetails';
import ProductDetails from './components/CardDetails/ProductDetails';
import DetailsPage from './components/CardDetails/DetailsPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>


    </div>
  );
}

export default App;
