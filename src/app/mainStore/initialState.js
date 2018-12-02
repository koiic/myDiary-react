
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
  publishedEntries: {
    entry: {},
    error: '',
    processing: false,
    isCreated: false,
    entries: [],
    fetched: false
  }

};
export default initialState;
