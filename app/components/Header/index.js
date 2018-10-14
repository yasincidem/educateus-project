import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Style from './style';

export default (withStyles(Style, { withTheme: true })(Header));
