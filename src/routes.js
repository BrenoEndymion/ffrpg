import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => (
    <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />         
          <Scene key="login" component={Login} hideNavBar={true} initial />
          <Scene key="signup" component={Signup} hideNavBar={true} />
      </Stack>
  </Router> 
);

export default Routes;
