import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import OlympicTable from './components/OlympicTable/OlympicTable';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div>
            <OlympicTable />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
