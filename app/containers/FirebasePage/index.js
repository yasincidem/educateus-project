import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectFirebaseData,
  makeSelectFirebaseDataError,
  makeSelectFirebaseDataLoading
} from './selectors';
import { loadFirebaseData } from './actions';
import reducer from './reducer';
import saga from './saga';
import FirebasePage from './FirebasePage';

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(loadFirebaseData());
  }
});

const mapStateToProps = createStructuredSelector({
  data: makeSelectFirebaseData(),
  error: makeSelectFirebaseDataError(),
  loading: makeSelectFirebaseDataLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'firebase', reducer });
const withSaga = injectSaga({ key: 'firebase', saga });

export default compose(withReducer, withSaga, withConnect)(FirebasePage);
export { mapDispatchToProps };
