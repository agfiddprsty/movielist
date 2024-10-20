import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './action';
import Component from './component';

const mapStateToProps = state => {
  const { listUsers, isLoading, error } = state.home;
  return {
    listUsers,
    isLoading,
    error
  };
}

const mapDispatchToProps = dispatch=> {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);