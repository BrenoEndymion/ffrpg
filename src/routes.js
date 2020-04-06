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
import Groups from './pages/Groups';
import Group from './pages/Group'
import HomeMaster from './pages/HomeMaster'
import CreateRoom from './pages/CreateRoom'
import MasterPlayers from './pages/MasterPlayers'
import HeroInfo from './pages/HeroInfo'

//redux
import { Provider } from 'react-redux';
import store from './store';

const Routes = () => (
  <Provider store={store}>
    <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />         
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="signup" component={Signup} hideNavBar={true} />
          <Scene key="createroom" component={CreateRoom} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true} />
          <Scene key="createhero" component={CreateHero} hideNavBar={true} />          
          <Scene key="caracters" component={Caraters} hideNavBar={true}  />
          <Scene key="heroinfo" component={HeroInfo} hideNavBar={true}  />

          <Scene key="tabBar" initial tabBarComponent={TabBar} tabs={true} activeTintColor={colors.white} tabBarPosition={"bottom"} hideNavBar={true} >
            <Scene
             key="home" 
             component={Home} 
             icon={({ tintColor }) => <Icon name="home" color={tintColor} />} hideNavBar={true} />

            <Scene
              key="play"
              component={Groups}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="play" color={tintColor} />}
            />

            <Scene
              key="profile"
              component={Profile}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="profile" color={tintColor} />}

            />

          </Scene>

          <Scene key="tabBarmaster" tabBarComponent={TabBar} tabs={true} activeTintColor={colors.white} tabBarPosition={"bottom"} hideNavBar={true} >

            <Scene
             key="homemaster" 
             component={HomeMaster} 
             icon={({ tintColor }) => <Icon name="play" color={tintColor} />} hideNavBar={true} />

            <Scene
              key="mastersplayers"
              component={MasterPlayers}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="value" color={tintColor} />}
            />

            <Scene
              key="profilemaster"
              component={Profile}
              hideNavBar={true}
              icon={({ tintColor }) => <Icon name="profile" color={tintColor} />}

            />

          </Scene>
      </Stack>
    </Router> 
  </Provider>
);

export default Routes;
