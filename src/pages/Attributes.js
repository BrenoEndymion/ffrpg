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

import { Image, ImageViewOp, TextWelcome } from './styles/LoginStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll, Specialty, SpecialtyRed} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';

export default function Atributes(props) {

    const [points, setPoints] = useState(8);
    const [imageThumb, setImageThumb] = useState(null);
    const [caracters, setCaracters] = useState([0, 0, 0, 0, 0]);
    const dispatch = useDispatch();
    let total = 0;

    function carac(resposta, clicado){
        const newId = caracters.slice();
        if(parseInt(resposta) >= 0){
            newId[clicado] = parseInt(resposta);
            setCaracters(newId);
            setPoints(points - resposta);
        }else if(resposta == ""){
            newId[clicado] = 0;
            setCaracters(newId);
            setPoints( points + caracters[clicado]);
        }
    }

    function saveCaracter(){
        dispatch({ type:'ADD_ATRI', hero: caracters });
    }

    return (
        <>
        <KeyboardAvoidingView style={styles.background}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                            {points >= 0 ? 
                            <Specialty> Você tem {points} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                          <View style={styles.FisicAtrributes}> 
                            <Hoshi
                                label={'Força'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                maxLength={1}
                                inputPadding={16}
                                editable={(points < 0 && caracters[0] > 0 || points >= 0) ? true : false}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 0)}
                            />  
                           
                            <Hoshi
                                label={'Destreza'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={1}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                editable={(points < 0 && caracters[1] > 0 || points >= 0) ? true : false}
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 1)}
                            />
                            <Hoshi
                                label={'Resistência'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                maxLength={1}
                                inputPadding={16}
                                editable={(points < 0 && caracters[2] > 0 || points >= 0) ? true : false}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 2)}
                            />
                            <Hoshi
                                label={'Armadura'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={1}
                                editable={(points < 0 && caracters[3] > 0 || points >= 0) ? true : false}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 3)}
                            />
                            <Hoshi
                                label={'Poder de Fogo'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={1}
                                editable={(points < 0 && caracters[4] > 0 || points >= 0) ? true : false}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 4)}
                            />
                            {points == 0 && 
                                <BtnDefault name={'Salvar'}
                                    styles={styles.enter}
                                    onPress={()=>{saveCaracter()}}
                                    TextBtn={'Salvar'}                         
                                />
                            }
                          </View>  
                        </Scroll>
                    </Margin>        
                </SafeAreaView>

        </KeyboardAvoidingView>  
        </>
    );
}

const styles = StyleSheet.create({
    pickerSelect: {
        fontSize: fonts.textInput,
        height: 50,
        fontWeight: 'bold',
        color: colors.grayWhite,
        marginTop: 7,
        marginBottom: 7,
        padding: 15,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.white,
        justifyContent: 'center',
    }, 
    background:{
        flex:1,
        justifyContent: 'flex-start',
        marginBottom: 50,
    },
    inputStyle: {
        marginTop: 15,
        
    },
    enter: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    modifers:{
        marginTop: 50,
    },

    ModifierText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },

    FisicAtrributes:{
        marginTop: 20,
    },

    FisicAtrributesText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    StatusAtributes:{
        marginTop: 20,
    },
    StatusText: {
        marginTop: 30,
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
    
  