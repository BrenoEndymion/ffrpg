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
} from 'react-native';

import { CardWhite } from './styles/BackgroundStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll} from './styles/CaractersStyles';
import {useSelector, useDispatch} from 'react-redux';

export default function Background(props) {

    const [caracters, setCaracters] = useState([""]);
    const [caracters2, setCaracters2] = useState([""]);

    const dispatch = useDispatch();

    function carac(resposta, clicado){
        const newId = caracters.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters(newId);
    }
    function carac2(resposta, clicado){
        const newId = caracters2.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters2(newId);
    }

    function saveCaracter(){
        dispatch({ type:'ADD_BACK', hero: caracters });
        dispatch({ type:'ADD_ANOT', hero: caracters2 });
    }

    return (
        <>
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <SafeAreaView>
                <Margin>
                    <Scroll>
                        <Text style={styles.elementText}>História</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    autoGrow={true}
                                    inputStyle={styles.inputHsh}
                                    label={'Conte sua história..'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    multiline = {true}
                                    numberOfLines = {4}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 0)}
                                />  
                            </Horizontal>
                        </CardWhite>    

                        <Text style={styles.elementText}>Anotações</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Faça suas anotações'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    multiline = {true}
                                    numberOfLines = {4}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 0)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <BtnDefault name={'Criar personagem'}
                                styles={styles.enter}
                                onPress={()=>{}}
                                TextBtn={'Salvar'}                         
                            />                     
                    </Scroll>
                </Margin>        
            </SafeAreaView>
        </KeyboardAvoidingView>  
        </>
    );
}

const styles = StyleSheet.create({
    background:{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 50,
    },
    inputStyle: {
        flex: 1,
        marginTop: 15,
        
    },
    element:{
        marginTop: 50,
    },

    elementText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      inputHsh: {
        height: 150,
        justifyContent: "flex-start"
      },
});
    
  