import Parse from 'parse/react-native';

export async function getCurrentUser() {
  return Parse.User.currentAsync()
  .then(result => {
    return {
      status: 'ok',
      user: result
    };
  })
  .catch(err => {
    return {
      status: 'error',
      user: null
    };
  });
};

export async function userLogIn({ username, password }) {
  return Parse.User.logIn(username, password)
  .then(result => {
    console.log(result);
    return {
      status: 'ok',
      user: result
    };
  })
  .catch(err => {
    console.log(err);
    return {
      status: 'error',
      message: err.message
    };
  });
};
