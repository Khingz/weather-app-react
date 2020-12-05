import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import './App.css';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
