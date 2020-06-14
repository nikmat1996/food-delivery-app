import React from 'react';
import FoodDeliveryApp from './components/FoodDeliveryApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    
    <BrowserRouter>
      <Provider store= {store}>
        <FoodDeliveryApp />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
