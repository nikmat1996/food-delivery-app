import React from 'react';
import FoodDeliveryApp from './components/FoodDeliveryApp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <FoodDeliveryApp />
    </BrowserRouter>
  )
}

export default App;
