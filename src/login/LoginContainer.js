import { connect } from 'react-redux';

// components
import LoginComponent from './LoginComponent';

// action
import { userLogin } from './loginAction';

const mapDispatchToProps = dispatch => ({
  login: detail => dispatch(userLogin(detail))
});
const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(LoginComponent);
