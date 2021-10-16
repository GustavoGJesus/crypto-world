import React from 'react';

import { CoinList } from './components/CoinList'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <CoinList />
      <GlobalStyle />
    </div>
  );
}

export default App;
