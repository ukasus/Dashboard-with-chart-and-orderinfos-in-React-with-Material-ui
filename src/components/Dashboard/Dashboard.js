import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



import Chart from './Chart';

import Orders from './Orders';
import AltCard from './AltCard';
import { Box } from '@material-ui/core';
import Users from './Users';
import DetailOrderReport from './DetailOrderReport';







function gettop5order()
{
  //Here we can make call to our rest api's to fetch data
  return [
  {orderno:0, totalamount:'16 Mar, 2019', totalquantity:'Elvis Presley', username:'Tupelo, MS'},
  {orderno:1, totalamount:'16 Mar, 2019', totalquantity:'Elvis Presley', username:'Tupelo, MS'}
 
];
}




export default function Dashboard() {
  const first5order=gettop5order();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
 
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
         
        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
          <Box display='flex' >
              <Paper className={classes.paper}>
                <AltCard to='200' wo='150' up={"Today's order"} dp={"Current Week Order"}/>
              </Paper>
              <Paper className={classes.paper}>
                <AltCard to='20000' wo='150' up={"Today's order amount"} dp={"Current Week amount"}/>
              </Paper>
              <Paper className={classes.paper}>
                <AltCard to='400' wo='200' up={"MTD order"} dp={"Last Month Order"}/>
              </Paper>
              <Paper className={classes.paper}>
                <AltCard to='65000' wo='150' up={"MTD order amount"} dp={"Last month amount"}/>
              </Paper>
            </Box>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders title='Top 5 order' order={first5order}/>
              </Paper>
            </Grid>
          

          <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders title='Bottom 5 order' order={first5order}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Users title='Top 5 User'/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Users title='Bottom 5 User'/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <DetailOrderReport title='Detail Order Report'/>
              </Paper>
            </Grid>
          
          
          
          </Grid>
          </Container>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
  },
  fixedHeight: {
    height: 240,
  },
}));