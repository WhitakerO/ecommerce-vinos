import './App.css';
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Encuentra tu cepa ideal" description="La mejor selección de vinos de bodegas boutique" />} />
          <Route path="/producto/:productId" element={<ItemDetailContainer />} />
        </Routes>
        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
