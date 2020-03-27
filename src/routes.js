import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './pages/Home';
const Routes = () => (
    <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />
        </Stack>
    </Router>
);

export default Routes;
