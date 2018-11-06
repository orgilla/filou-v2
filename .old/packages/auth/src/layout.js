import React from 'react';
// import { Divider } from 'antd';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from '../logo2';
import Container from '../container';
import Banner from '../banner';

const styles = theme => ({
  fill: {
    flex: 1
  },
  padding: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    justifyContent: 'space-between'
  },
  inline: {
    display: 'inline'
  },
  banner: {
    fontSize: 100,
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 64
    }
  },
  bg: {
    backgroundColor: theme.palette.primary.main,
    // paddingLeft: 16,
    flex: 1,
    display: 'flex',
    zIndex: 0,
    position: 'relative',
    color: 'white',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
});

/* ({ theme }) => ({
  '& form.ant-form.ant-form-horizontal .ant-row.ant-form-item': {
    marginBottom: 0
  },
  '& .ant-form-item-label': {
    lineHeight: 'initial'
  },
  display: 'flex',
  // alignItems: 'center',
  flex: 1,
  '& .ant-btn': {
    background: `linear-gradient(${theme.dark5}, ${theme.dark4})`,
    border: '1px solid rgba(128, 128, 128, 0.6)',
    boxShadow:
      '0px 1px 0px 0px rgb(255, 255, 255), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75)',
    onActive: {
      background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))',
      boxShadow:
        'rgb(255, 255, 255) 0px 1px 0px 0px, rgba(0, 0, 0, 0.19) 0px 4px 4px 0px inset'
    }
  },
  '> div': {
    backgroundColor: theme.color,
    flex: 1,
    zIndex: 0,
    height: '100%',
    position: 'relative',
    color: 'white',
    overflow: 'hidden',
    onBefore: {
      pointerEvents: 'none',
      content: "' '",
      backgroundImage: `url(medical.jpg)`,
      zIndex: -1,
      position: 'absolute',
      height: '100%',
      width: '100%',
      opacity: 0.6,
      top: 0,
      left: 0,
      overflow: 'hidden',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transform: 'translateZ(0) scale(1)',
      transition: 'transform 6s ease'
    },
    onHover: {
      onBefore: {
        transform: 'rotate(-2deg) scale(1.05)'
      }
    },
    ifSmallDown: {
      display: 'none'
    }
  },
  '> section': {
    display: 'flex',
    flexDirection: 'column',
    paddingY: 20,
    paddingX: 40,
    marginX: 'auto',
    width: 500,
    '> .logo': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      color: theme.color,
      fontWeight: 'bold'
    },
    '& form': {
      width: '100%'
    },
    '> div': {
      flex: 1
    }
  }
}), */
const LoginContainer = withStyles(styles)(({ children, classes }) => (
  <Grid container alignItems="stretch" className={classes.fill}>
    <Grid item sm={6} md={7} lg={9} xl={10} className={classes.bg}>
      <Banner>
        <Container>
          <h1>Authentifizierung</h1>
          Melden Sie sich mit Ihren Benutzerdaten an oder registrieren Sie sich.
        </Container>
      </Banner>
    </Grid>
    <Grid item xs={12} sm={6} md={5} lg={3} xl={2} className={classes.padding}>
      {/* <div className="logo">
        <Logo color="color" size={32} />
        &nbsp;&nbsp;Diego.ONE
</div> */}
      <div>{children}</div>
      <div />
      <div>
        <a href="javascript:;">
          <Typography
            variant="body1"
            component="span"
            className={classes.inline}
          >
            Geschäftsvereinbarung
          </Typography>
        </a>
        {' | '}
        <a href="javascript:;">
          <Typography
            variant="body1"
            component="span"
            className={classes.inline}
          >
            Datenschutz
          </Typography>
        </a>
        <Typography variant="caption">
          © {new Date().getFullYear()} Diego ONE
        </Typography>
      </div>
    </Grid>
  </Grid>
));

export default LoginContainer;
