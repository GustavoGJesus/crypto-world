import React from 'react';

import { HomePage } from './components/HomePage'
import { CoinList } from './components/CoinList';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <HomePage />
      <CoinList />
      <GlobalStyle />
    </div>
  );
}

export default App;
