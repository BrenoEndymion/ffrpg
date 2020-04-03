import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Scene, Router, Stack } from 'react-native-router-flux'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import colors from './config/colors'

import Icon from "./components/Icons"
import TabBar from "./components/TabBar"

//screen of creation hero
import Caraters from './pages/Caracters';
import CreateHero from './pages/CreateHero';
import Atributes  from './pages/Attributes';

const Routes = () => (
    <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />         
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="signup" component={Signup} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true} />
          <Scene key="createhero" component={CreateHero} hideNavBar={true} initial/>          
          <Scene key="caracters" component={Caraters} hideNavBar={true}  />

          <Scene key="tabBar" tabBarComponent={TabBar} tabs={true} activeTintColor={colors.white} tabBarPosition={"bottom"} hideNavBar={true} >

            <Scene
             key="home" 
             component={Home} 
             icon={({ tintColor }) => <Icon name="home" color={tintColor} />} hideNavBar={true} />

            <Scene
              key="history"
              component={Login}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="history" color={tintColor} />}
            />

            <Scene
              key="profile"
              component={Profile}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="profile" color={tintColor} />}

            />

          </Scene>
      </Stack>
  </Router> 
);

export default Routes;
