
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

export default function Home(props) {
  
    const [hasHero, setHasHero] = useState(false);

    return (
        <Container>
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
                <BtnCircle onPress={() => console.log("clicado")} ><Icon name="plus" color={{color: colors.blueDefault }} /></BtnCircle>
              </ShaddowGreen>
            </Margin>
          }
          { hasHero && 
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {global.HermesInternal == null ? null : (
                  <View style={styles.engine}>
                    <Text style={styles.footer}>Engine: Hermes</Text>
                  </View>
                )}
                <View style={styles.body}>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step One</Text>
                    <Text style={styles.sectionDescription}>
                      Edit <Text style={styles.highlight}>App.js</Text> to change this
                      Maaah ta aqui a minha alteração.
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>See Your Changes</Text>
                    <Text style={styles.sectionDescription}>
                      <ReloadInstructions />
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Debug</Text>
                    <Text style={styles.sectionDescription}>
                      <DebugInstructions />
                    </Text>
                  </View>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Learn More</Text>
                    <Text style={styles.sectionDescription}>
                      Read the docs to discover what to do next:
                    </Text>
                  </View>
                  <LearnMoreLinks />
                </View>
              </ScrollView>
            </SafeAreaView>
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
  