import logo from './logo.svg';
import './App.css';
import DadJoke from './components/DadJoke';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import BackPocket from './components/BackPocket';

const store = createStore(reducers)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DadJoke />
        <BackPocket />
      </div>
    </Provider>
  );
}

export default App;
