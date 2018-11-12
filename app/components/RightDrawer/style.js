export default (theme) => ({
  chip: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
    textTransform: 'none'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});
