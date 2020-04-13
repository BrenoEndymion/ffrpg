/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, BtnCircle } from './styles/HomeStyles';

import { BtnDefaultCircle } from "../components/Buttons";
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import {Header} from "react-native-elements";
import colors from '../config/colors';
import Icon from "../components/Icons"
import ProgressLoader from 'rn-progress-loader';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import fonts from '../config/fonts';

//pages
import Caracters from './home/Caracters';
import Attributes from './home/Attributes';
import Essences from './home/Essences';
import Skill from './home/Skill';
import Equipaments from './home/Equipaments';
import Inventory from './home/Inventory';
import Ability from './home/Ability';
import Magics from './home/Magics';
import Background from './home/Background';
import Status from './home/Status';

export default function Home(props) {
  
    const [hasHero, setHasHero] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <Container>
          <ProgressLoader
                visible={visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
          <Header
              //leftComponent={<GoBack />}
              statusBarProps={{ barStyle: 'light-content' }}
              barStyle="light-content"
              centerComponent={{ text: ( hasHero ? 'Nome do Personagem' : 'Crie seu Personagem'), style: styles.headerText }}
              containerStyle={{
                  backgroundColor: colors.blueDefault,
                  justifyContent: 'space-around',
              }}
          />
          { !hasHero &&
            <Margin style={styles.nochar}>
              <ShaddowGreen>
                <BtnCircle onPress={() => Actions.createhero()} ><Icon name="plus" color={{color: colors.blueDefault }} /></BtnCircle>
              </ShaddowGreen>
            </Margin>
          }
          { hasHero && 
              <ScrollableTabView
                tabBarInactiveTextColor={colors.white}
                tabBarActiveTextColor={colors.blueActive}
                renderTabBar={() => <TabBar tabStyles={{ tab: {} }} tabMargin={25} underlineHeight={3} tabBarStyle={{ backgroundColor: colors.blueDefault, marginTop: 0 }} tabBarTextStyle={{ fontSize: fonts.small }} underlineColor={colors.white} />}>
                <Status tabLabel={{ label: "Status" }} label="Page #1" />
                <Caracters tabLabel={{ label: "Características" }} label="Page #1" />
                <Attributes tabLabel={{ label: "Atributos" }} label="Page #2" />
                <Essences tabLabel={{ label: "Essências" }} label="Page #3" />
                <Skill tabLabel={{ label: "Perícias" }} label="Page #4" />
                <Equipaments tabLabel={{ label: "Equipamentos" }} label="Page #5" />
                <Inventory tabLabel={{ label: "Inventário" }} label="Page #6" />
                <Ability tabLabel={{ label: "Skills" }} label="Page #7" />
                <Magics tabLabel={{ label: "Magias" }} label="Page #8" />
                <Background tabLabel={{ label: "Background" }} label="Page #9" />
                {/*}<PatientProfile tabLabel={{ label: "PERFIL" }} label="Page #3" />{*/}
              </ScrollableTabView>
          }
        </Container>
    );
}

const styles = StyleSheet.create({
    nochar: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    headerText: {
      fontSize: 20,
      color: colors.white,
    },
  });
  