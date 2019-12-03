import Storage from '../services/database';
import {
  fakeRequest
} from '../services/api';
const storage = new Storage();

export default {
  namespace: 'main',
  state: {
    storage,
  },

  effects: {
    *someEffect({ payload }, { call, put }) {
      const response = yield call(fakeRequest, payload);
      yield put({
        type: 'someReducer',
        payload: response,
      });
    },
  },

  reducers: {
    someReducer(state, action) {
      return {
        ...state,
      }
    },
  },
};
