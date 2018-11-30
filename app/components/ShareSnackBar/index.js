import { withStyles } from '@material-ui/core/styles';
import Style from './style';
import ShareSnackbar from './ShareSnackbar';

export default (withStyles(Style, { withTheme: true })(ShareSnackbar));