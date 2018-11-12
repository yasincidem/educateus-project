import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import { makeSelectLeftDrawer, makeSelectOnhoverCategory } from './selectors';
import { openLeftDrawer, closeLeftDrawer, changeOnhoverCategory } from './actions';
import reducer from './reducer';
import App from './App';
import Style from './style';

const mapDispatchToProps = (dispatch) => ({
  openLeftDrawer: () => {
    dispatch(openLeftDrawer());
  },
  closeLeftDrawer: () => {
    dispatch(closeLeftDrawer());
  },
  changeOnhoverCategory: (category) => {
    dispatch(changeOnhoverCategory(category));
  },
});

const mapStateToProps = createStructuredSelector({
  leftDrawer: makeSelectLeftDrawer(),
  onhoverCategory: makeSelectOnhoverCategory()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(withStyles((Style)), withReducer, withConnect)(App);
export { mapDispatchToProps };

