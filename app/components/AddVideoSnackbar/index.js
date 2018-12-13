import { withStyles } from '@material-ui/core/styles';
import Style from './style';
import AdddVideoSnackbar from './AddVideoSnackbar';

export default (withStyles(Style, { withTheme: true })(AdddVideoSnackbar));