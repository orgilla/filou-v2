const underliner = (theme: any, pos = 5, active = false) => ({
  position: 'relative',
  onBefore: {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 2,
    bottom: 0 - pos,
    left: 0,
    backgroundColor: theme.color,
    visibility: active ? 'visible' : 'hidden',
    transform: active ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.3s ease-in-out 0s'
  },
  onHover: {
    onBefore: {
      visibility: 'visible',
      transform: 'scaleX(1)'
    }
  }
});

export default underliner;
