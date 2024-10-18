import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './component';
import * as actions from './action';

const mapStateToProps = state => {
  const { isLoading } = state.mainScreen;
  return {
    isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);