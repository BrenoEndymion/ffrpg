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
                
                <TextInputWhite
                style ={styles.inputStyle} 
                placeholder="Digite o seu e-mail"
                
                />
                <TextInputWhite 
                style ={styles.inputStyle} 
                placeholder="Digite a sua senha "
                
                />

                <TouchableOpacity                  
                style={styles.btnsubmit}>
                <Text style={styles.textStyle}>Entrar</Text>
                    
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnsubmit}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
    },
    containerInputs:{
        flex: 1,

    },
    inputStyle:{
        width: '90%',
        marginBottom:15,
        fontSize: 15,
        padding: 10,


    },
    btnsubmit: {
        flex: 1,
        width: '90%',
        height: 15,
        textAlign: 'center',
        justifyContent: 'center',
        

    },
    textStyle: {
        textAlign: 'center',
    } 



});
    
  