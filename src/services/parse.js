import { AsyncStorage } from 'react-native';
import Parse from 'parse/react-native';
import {
  PARSE_APP_ID,
  PARSE_SERVER_URL,
  PARSE_JS_KEY,
  PARSE_MASTER_KEY
} from '../constants/Globals';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY, PARSE_MASTER_KEY);
Parse.serverURL = PARSE_SERVER_URL;
console.log('Parse initialize!');
