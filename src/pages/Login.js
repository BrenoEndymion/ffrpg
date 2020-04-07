import React, { useState } from 'react';
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
  Image,
  Alert
} from 'react-native';

import { ImageView, TextWelcome } from './styles/LoginStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';
import colors from '../config/colors';
import {useSelector, useDispatch} from 'react-redux';
import ProgressLoader from 'rn-progress-loader';
import md5 from 'md5';
import api from '../services/api';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [visible, setVisible] = useState(false);
    const teste = useSelector(state => state.data);
    const dispatch = useDispatch()
    async function Log() {
        
        if(!email || email == ''){
            Alert.alert(
                'Atenção',
                'Preencha o email.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }else if(!pass || pass == '' ) {
            Alert.alert(
                'Atenção',
                'Preencha a senha.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }else{
            setVisible(true);
            const data = new FormData();
            
            data.append('email', email);
            data.append('pass', md5(pass));

            const response = await api.post('/login', data);
            if (response.status == 200 || response.status == "200") {
                if(response.data.ok == 0){
                    //setVisible(false);
                    Alert.alert(
                        'ERRO',
                        'Email/senha incorretos.',
                        [
                            { text: 'OK', onPress: () => setVisible(false) },
                        ],
                        { cancelable: false },
                    );
                    
                }else{
                    //console.log(response.data.patient)
                    dispatch({ type:'ADD_USER', user: response.data.user })
                    setVisible(false);
                    if(response.data.user.type == "Jogador"){
                        Actions.tabBar()
                    }else{
                        Actions.tabBarmaster()
                    }
                    //Actions.tabBar()
                }
            } else {
                //
                Alert.alert(
                    'Erro',
                    'Houve um erro no cadastro.',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'OK', onPress: () => setVisible(false) },
                    ],
                    { cancelable: false },
                );
            }

        }
        
    }

    return (
        <>
            <ProgressLoader
                visible={visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
        <KeyboardAvoidingView style={styles.background}>
            <SafeAreaView></SafeAreaView>
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
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput 
                        style ={styles.inputStyle} 
                        placeholder="Digite a sua senha "
                        secure={true}
                        onChangeText={text => setPass(text)}
                    />
                </Margin>

                <BtnDefault                  
                    style={styles.enter}
                    name="Entrar" 
                    onPress={() => {Log()}} />
                
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
        backgroundColor: colors.grayLight,
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
    
  