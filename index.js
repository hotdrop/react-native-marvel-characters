import { AppRegistry, View } from 'react-native';
import App from './App';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux';

const store = createStore()

const MyApp = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
       {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('StudyProject', () => MyApp);
