import { connect } from 'react-redux';

// components
import SignUpComponent from './SignUpComponent';

// action
import { userRegistration } from './signUpAction';

const mapDispatchToProps = dispatch => ({
  userRegistration: detail => dispatch(userRegistration(detail))
});
const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignUpComponent);
