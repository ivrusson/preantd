import {
  getCurrentUser,
  userLogIn,
} from '../services/user';

export default {
  namespace: 'user',
  state: {
    currentUser: null,
    error: null,
  },

  effects: {
    *currentUser({ payload }, { call, put }) {
      const response = yield call(getCurrentUser, payload);
      console.log('currentUser', response);
      if(response.status === 'ok') {
        payload.navigation.navigate('Main');
      } else {
        yield put({
          type: 'currentUser',
          payload: response,
        });
      }
    },
    *login({ payload }, { call, put }) {
      const response = yield call(userLogIn, payload);
      console.log('login', payload, response);
      if(response.status === 'ok') {
        payload.navigation.navigate('Main');
      } else {
        yield put({
          type: 'loginResult',
          payload: response,
        });
      }
    },
  },

  reducers: {
    currentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload.user,
      };
    },
    loginResult(state, action) {
      if(action.payload.status === 'ok') {
        return {
          ...state,
          currentUser: action.payload.user,
          error: null,
        };
      } else {
        return {
          ...state,
          currentUser: null,
          error: action.payload.message,
        };
      }
    },
  },
};
