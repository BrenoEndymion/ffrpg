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

import { TextInput, TextInputWhite } from '../components/TextInputs';
import {Scroll, ImageView, ImageViewOp, Nv, Container} from '../pages/styles/GroupStyles'
import { BtnDefault } from "../components/Buttons";
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';
import {Header} from "react-native-elements";
import colors from '../config/colors';


export default function Login(props) {
    const [preview, setPreview] = useState(null);
    const [hasHero, setHasHero] = useState(true);

    AboveFlatList = () => (
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
        <Container style={{backgroundColor: colors.blueTitle}}>
        
            <KeyboardAvoidingView style={styles.background}>
            
            <Header
                //leftComponent={<GoBack />}
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content"
                centerComponent={{ text: ( hasHero ? 'Campanha dos 4 cristais' : 'Crie seu Personagem'), style: styles.headerText }}
                containerStyle={{
                    backgroundColor: colors.blueDefault,
                    justifyContent: 'space-around',
                    
                }}
                /> 
            <View style={styles.playerView}>
                <Text style={styles.playerText}>Rebecca</Text>
                <Horizontal>
                    <Text style={styles.playerText}>HP: </Text>
                    <Text style={styles.playerText}>HP: </Text>
                </Horizontal>
                
            </View>  

            </KeyboardAvoidingView>  
        </Container>
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
        backgroundColor: colors.brown,
        marginLeft: 15,
    },  

    Element:{
        marginTop: 5,
    },

    playerText: {
        fontSize: 16,
        color: colors.blueTitle,
        fontWeight: 'bold',
    },

   
});
    
  