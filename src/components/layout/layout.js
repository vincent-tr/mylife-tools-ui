'use strict';

import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, AppBar, Toolbar, Typography, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Breadcrumbs, Link, SvgIcon } from '@material-ui/core';
import * as icons from '@material-ui/icons';

const {
  Menu: MenuIcon,
  NavigateNext: NavigateNextIcon,
} = icons;

import ManagementIcon from '@material-ui/icons/FormatListBulleted';
import ReportingIcon from '@material-ui/icons/ShowChart';

const MoneyIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M 4.195312 11.015625 C 4.738281 11.015625 5.175781 11.457031 5.175781 12 C 5.175781 12.542969 4.738281 12.984375 4.195312 12.984375 C 3.652344 12.984375 3.210938 12.542969 3.210938 12 C 3.210938 11.457031 3.652344 11.015625 4.195312 11.015625 Z M 17.722656 11.183594 L 18.726562 11.183594 L 18.726562 7.824219 C 18.726562 6.929688 17.996094 6.203125 17.101562 6.203125 L 1.621094 6.203125 C 0.726562 6.203125 0 6.929688 0 7.824219 L 0 16.175781 C 0 17.070312 0.726562 17.796875 1.621094 17.796875 L 13.316406 17.796875 C 13.277344 17.679688 13.257812 17.554688 13.257812 17.421875 L 13.257812 16.414062 L 3.289062 16.414062 C 3.308594 16.316406 3.320312 16.214844 3.320312 16.109375 C 3.320312 15.203125 2.585938 14.46875 1.675781 14.46875 C 1.578125 14.46875 1.480469 14.476562 1.386719 14.492188 L 1.386719 9.507812 C 1.480469 9.523438 1.578125 9.53125 1.675781 9.53125 C 2.585938 9.53125 3.320312 8.796875 3.320312 7.890625 C 3.320312 7.785156 3.308594 7.683594 3.289062 7.585938 L 15.339844 7.585938 C 15.304688 7.714844 15.289062 7.851562 15.289062 7.988281 C 15.289062 8.894531 16.023438 9.628906 16.933594 9.628906 C 17.074219 9.628906 17.210938 9.609375 17.335938 9.582031 L 17.335938 11.246094 C 17.460938 11.207031 17.59375 11.183594 17.722656 11.183594 Z M 19.394531 12.039062 L 17.722656 12.039062 C 17.515625 12.039062 17.347656 12.210938 17.347656 12.414062 L 17.347656 17.410156 C 17.347656 17.621094 17.519531 17.789062 17.722656 17.789062 L 19.394531 17.789062 C 19.605469 17.789062 19.773438 17.617188 19.773438 17.410156 L 19.773438 12.421875 C 19.773438 12.210938 19.605469 12.039062 19.394531 12.039062 Z M 16.160156 13.785156 L 14.492188 13.785156 C 14.28125 13.785156 14.117188 13.957031 14.117188 14.160156 L 14.117188 17.414062 C 14.117188 17.625 14.289062 17.792969 14.492188 17.792969 L 16.164062 17.792969 C 16.375 17.792969 16.542969 17.621094 16.542969 17.414062 L 16.542969 14.160156 C 16.542969 13.949219 16.371094 13.785156 16.160156 13.785156 Z M 22.027344 7.019531 C 21.914062 6.859375 21.671875 6.859375 21.5625 7.019531 L 19.640625 9.824219 C 19.511719 10.011719 19.644531 10.265625 19.875 10.265625 L 20.582031 10.265625 L 20.582031 17.414062 C 20.582031 17.625 20.753906 17.792969 20.960938 17.792969 L 22.632812 17.792969 C 22.839844 17.792969 23.007812 17.621094 23.007812 17.414062 L 23.007812 10.265625 L 23.714844 10.265625 C 23.941406 10.265625 24.078125 10.011719 23.953125 9.824219 Z M 9.367188 8.445312 C 11.320312 8.445312 12.910156 10.035156 12.910156 12 C 12.910156 13.960938 11.324219 15.554688 9.367188 15.554688 C 7.40625 15.554688 5.828125 13.964844 5.828125 12 C 5.820312 10.039062 7.410156 8.445312 9.367188 8.445312 Z M 9.292969 10.019531 C 8.992188 10.070312 8.710938 10.171875 8.472656 10.363281 C 8.167969 10.601562 7.96875 10.914062 7.851562 11.28125 L 7.835938 11.324219 L 7.40625 11.324219 C 7.335938 11.324219 7.28125 11.378906 7.28125 11.449219 L 7.28125 11.722656 C 7.28125 11.789062 7.335938 11.84375 7.40625 11.84375 L 7.742188 11.84375 C 7.742188 11.917969 7.742188 11.988281 7.742188 12.070312 L 7.40625 12.070312 C 7.335938 12.070312 7.28125 12.121094 7.28125 12.191406 L 7.28125 12.464844 C 7.28125 12.53125 7.335938 12.585938 7.40625 12.585938 L 7.8125 12.585938 C 7.839844 12.683594 7.863281 12.785156 7.910156 12.882812 C 8.113281 13.382812 8.460938 13.734375 8.980469 13.90625 C 9.410156 14.046875 9.839844 14.042969 10.269531 13.921875 C 10.382812 13.890625 10.496094 13.847656 10.601562 13.796875 C 10.703125 13.75 10.730469 13.671875 10.691406 13.574219 C 10.644531 13.460938 10.597656 13.355469 10.546875 13.246094 C 10.503906 13.148438 10.445312 13.121094 10.34375 13.144531 C 10.210938 13.171875 10.078125 13.21875 9.941406 13.242188 C 9.683594 13.296875 9.425781 13.300781 9.171875 13.222656 C 8.851562 13.121094 8.679688 12.890625 8.574219 12.585938 L 9.445312 12.585938 C 9.511719 12.585938 9.566406 12.53125 9.566406 12.464844 L 9.566406 12.191406 C 9.566406 12.121094 9.511719 12.070312 9.445312 12.070312 L 8.492188 12.070312 C 8.492188 11.988281 8.492188 11.917969 8.492188 11.84375 L 9.445312 11.84375 C 9.511719 11.84375 9.566406 11.789062 9.566406 11.722656 L 9.566406 11.449219 C 9.566406 11.378906 9.511719 11.324219 9.445312 11.324219 L 8.613281 11.324219 C 8.613281 11.320312 8.613281 11.320312 8.613281 11.316406 C 8.710938 11.085938 8.855469 10.90625 9.097656 10.8125 C 9.375 10.699219 9.660156 10.703125 9.945312 10.761719 C 10.085938 10.792969 10.214844 10.832031 10.351562 10.867188 C 10.449219 10.890625 10.507812 10.859375 10.554688 10.769531 C 10.601562 10.660156 10.644531 10.554688 10.691406 10.445312 C 10.734375 10.34375 10.710938 10.269531 10.613281 10.214844 C 10.585938 10.203125 10.5625 10.191406 10.539062 10.183594 C 10.132812 10.011719 9.71875 9.953125 9.292969 10.019531 Z M 9.292969 10.019531 "/>
  </SvgIcon>
);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  breadcrumbList: {
    flexWrap: 'nowrap'
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
  },
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
  titleIcon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  titleLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Layout = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className={classes.root}>
      <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='Open drawer' onClick={() => setMenuOpen(!menuOpen)} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Breadcrumbs aria-label="Breadcrumb" color='inherit' separator={<NavigateNextIcon fontSize='small' />} classes={{ ol: classes.breadcrumbList }}>
            <Link color='inherit' component='button' variant='h6' className={classes.titleLink} onClick={() => console.log('click')} noWrap>
              <MoneyIcon className={classes.titleIcon} />
              Money
            </Link>
            <Typography color='inherit' variant='h6' className={classes.titleLink} noWrap>
              <ManagementIcon className={classes.titleIcon} />
              Gestion
            </Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>

      <Drawer variant='permanent' open={menuOpen} classes={{paper: clsx(classes.drawerPaper, !menuOpen && classes.drawerPaperClose)}}>
        <div className={classes.drawerHeader} />
        <List>
          <ListItem button>
            <ListItemIcon><ManagementIcon /></ListItemIcon>
            <ListItemText primary="Gestion" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReportingIcon /></ListItemIcon>
            <ListItemText primary="Rapport 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReportingIcon /></ListItemIcon>
            <ListItemText primary="Rapport 2" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
};

export default Layout;
