import { withStyles } from '@material-ui/core/styles';
import LeftDrawer from './LeftDrawer';
import Style from './style';

export default (withStyles(Style, { withTheme: true })(LeftDrawer));
