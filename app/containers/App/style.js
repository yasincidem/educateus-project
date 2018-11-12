const drawerWidth = 240;

export default (theme) => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: 0,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  BackdropProps: {
    background: 'transparent'
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    overflowX: 'hidden'
  },
  drawerPaperRight: {
    position: 'fixed',
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    boxShadow: 'none',
    overflowX: 'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 16px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
    position: 'fixed',
  },
  subCategoryButton: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
    textTransform: 'none'
  },
  icon: {
    marginLeft: 8
  }
});
