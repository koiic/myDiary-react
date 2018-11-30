
const initialState = {
  auth: {
    login: {
      error: '',
      processing: false
    },
    signup: {
      verified: false,
      registered: false,
      processing: false,
    },
    isAuth: false,
    user: {}
  },
  entries: {}

};
export default initialState;
