import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectYoutubeData,
  makeSelectYoutubeDataError,
} from './selectors';
import { loadYoutubeData } from './actions';
import reducer from './reducer';
import saga from './saga';
import YoutubePage from './YoutubePage';

const mapDispatchToProps = (dispatch) => ({
  getDataButtonClick: (evt) => {
    evt.preventDefault();
    dispatch(loadYoutubeData());
  }
});

const mapStateToProps = createStructuredSelector({
  data: makeSelectYoutubeData(),
  error: makeSelectYoutubeDataError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'youtube', reducer });
const withSaga = injectSaga({ key: 'youtube', saga });

export default compose(withReducer, withSaga, withConnect)(YoutubePage);
export { mapDispatchToProps };
