import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button
} from 'react-native';

import { Image, ImageView, TextWelcome } from './styles/LoginStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';

export default function Login(props) {
    return (
        <>
        
        <KeyboardAvoidingView style={styles.background}>

            <View style={styles.logo}>
                <Image
                source={require('../assets/imgs/shield_and_swords.png')}
                
                /> 
            </View>

            <View style={styles.containerInputs}>
                <Margin>
                    <TextInput
                    style ={styles.inputStyle} 
                    placeholder="Digite o seu e-mail"
                    
                    />
                    <TextInput 
                    style ={styles.inputStyle} 
                    placeholder="Digite a sua senha "
                    
                    />
                </Margin>
                <BtnDefault                  
                    style={styles.enter}
                    name="Entrar" />
                
                <TouchableOpacity style={styles.btnsubmit} onPress={() => Actions.signup()}>
                    <Text style={styles.textStyle}>Crie a sua conta</Text>
                </TouchableOpacity>                
            </View>


        </KeyboardAvoidingView>  
        </>
    );
}

const styles = StyleSheet.create({

    background:{
        flex:1,
        justifyContent: 'center',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputs:{
        flex: 1,
    },
    enter: {
        margin: 10,
    },
    btnsubmit: {
        marginTop: 10,
    },
    textStyle: {
        textAlign: 'center',
    } ,
    inputStyle: {
        margin: 10,
    }
});
    
  