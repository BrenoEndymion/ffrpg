import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  FlatList  
} from 'react-native';

import { Image, ImageView, TextWelcome } from './styles/LoginStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import {Scroll, ImageViewOp, Nv} from '../pages/styles/GroupStyles'
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';
import {Header} from "react-native-elements";
import colors from '../config/colors';


export default function Login(props) {
    const [preview, setPreview] = useState(null);
    const [hasHero, setHasHero] = useState(true);

    aboveFlatList = () => (
        <>
            <MarginTop />

            <AlignCenter>
                <ImageView onPress={() => { }}>
                    {preview != null ? <Image source={preview} /> : console.log('') }
                </ImageView>
            </AlignCenter>

            <MarginBottom />
        </>
    )


    return (
        <>
        
        <KeyboardAvoidingView style={styles.background}>
        
        {/*<Header
              //leftComponent={<GoBack />}
              statusBarProps={{ barStyle: 'light-content' }}
              barStyle="light-content"
              centerComponent={{ text: ( hasHero ? 'Campanha dos 4 cristais' : 'Crie seu Personagem'), style: styles.headerText }}
              containerStyle={{
                  backgroundColor: colors.blueDefault,
                  justifyContent: 'space-around',
                  
              }}
            /> */}
                  
        <Container>
         <View style={styles.playerView}>
             <Text style={styles.playerText}>Rebecca</Text>
              <Horizontal>
                <Text>HP: </Text>
                <Text>HP: </Text>
              </Horizontal>
             
         </View>

        </Container>
            

        </KeyboardAvoidingView>  
        </>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: '#fff'
    },
    container:{
        marginTop: 30,

    },
    
    playerView: {
       marginTop: 30,
       backgroundColor: colors.red,
       marginLeft: 15,
    },  

    Element:{
        marginTop: 5,
    },

    playerText: {
        fontSize: 16,
        color: colors.blueActive,
        fontWeight: 'bold',
    },
    background: {
        display: 'flex',
    },

   
});
    
  