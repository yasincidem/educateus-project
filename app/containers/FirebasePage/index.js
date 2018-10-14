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
import YoutubePage from './FirebasePage';

const mapDispatchToProps = (dispatch) => ({
  getDataButtonClick: () => {
    dispatch(loadFirebaseData());
  }
});

const mapStateToProps = createStructuredSelector({
  data: makeSelectFirebaseData(),
  error: makeSelectFirebaseDataError(),
  loading: makeSelectFirebaseDataLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'youtube', reducer });
const withSaga = injectSaga({ key: 'youtube', saga });

export default compose(withReducer, withSaga, withConnect)(YoutubePage);
export { mapDispatchToProps };
