import { withStyles } from '@material-ui/core/styles';
import RightDrawer from './RightDrawer';
import Style from './style';

export default (withStyles(Style, { withTheme: true })(RightDrawer));
