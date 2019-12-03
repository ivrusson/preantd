import React from 'react';
import dva, { connect } from 'dva';
import { createMemoryHistory } from 'history';
import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native';
import Starter from './src/components/Starter';
import loadModels from './src/models';

import {
  PARSE_APP_ID,
  PARSE_SERVER_URL,
  PARSE_JS_KEY,
  PARSE_MASTER_KEY
} from './src/constants/Globals';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY, PARSE_MASTER_KEY);
Parse.serverURL = PARSE_SERVER_URL;
console.log('Parse initialize!');

const app = dva({
  initialState: {},
  history: createMemoryHistory(),  // Trick !!
  onError: (err, dispatch) => {
    err.preventDefault();
    if (err.response) {
    }
  },
});

loadModels(app);

@connect(({ user, main }) => ({
  user,
  main,
}))
class App extends React.PureComponent {
  render() {
    return <Starter />;
  }
}

app.router(() => <App />);
const DvaApp = app.start();
export default () => <DvaApp />;
