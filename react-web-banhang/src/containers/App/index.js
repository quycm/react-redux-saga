import React, { Component } from 'react';
import {withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskbroad from '../Component/Taskbroad/index.js';
import theme from '../../commons/Theme/index.js';





class App extends Component {
  render() {
  return (
   <ThemeProvider theme={theme}>
     <Taskbroad></Taskbroad>
   </ThemeProvider>
  );
  }
}


export default withStyles(styles)(App);
