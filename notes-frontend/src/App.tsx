import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <div className='main'>

      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
