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

import { CardWhite } from './styles/EquipamentsStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';

export default function Caracters(props) {

    const [caracters, setCaracters] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters2, setCaracters2] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters3, setCaracters3] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters4, setCaracters4] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters5, setCaracters5] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters6, setCaracters6] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters7, setCaracters7] = useState(["", "", "", "", "", "", "", ""]);
    const [caracters8, setCaracters8] = useState(["", "", "", "", "", "", "", ""]);

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
    function carac3(resposta, clicado){
        const newId = caracters3.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters3(newId);
    }
    function carac4(resposta, clicado){
        const newId = caracters4.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters4(newId);
    }
    function carac5(resposta, clicado){
        const newId = caracters5.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters5(newId);
    }
    function carac6(resposta, clicado){
        const newId = caracters6.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters6(newId);
    }
    function carac7(resposta, clicado){
        const newId = caracters7.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters7(newId);
    }
    function carac8(resposta, clicado){
        const newId = caracters8.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters8(newId);
    }

    function saveCaracter(){
        dispatch({ type:'ADD_EQUIP', hero: caracters });
        dispatch({ type:'ADD_EQUIP2', hero: caracters2 });
        dispatch({ type:'ADD_EQUIP3', hero: caracters3 });
        dispatch({ type:'ADD_EQUIP4', hero: caracters4 });

        dispatch({ type:'ADD_EQUIP5', hero: caracters5 });
        dispatch({ type:'ADD_EQUIP6', hero: caracters6 });
        dispatch({ type:'ADD_EQUIP7', hero: caracters7 });
        dispatch({ type:'ADD_EQUIP8', hero: caracters8 });
    }

    return (
        <>
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <SafeAreaView>
                <Margin>
                    <Scroll>
                        <Text style={styles.elementText}>Arma</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>    

                        <Text style={styles.elementText}>Armadura</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac2(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac2(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac2(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac2(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac3(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac3(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac3(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac3(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac3(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac3(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac3(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac3(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>   

                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac4(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac4(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac4(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac4(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac4(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac4(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac4(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac4(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac5(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac5(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac5(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac5(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac5(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac5(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac5(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac5(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>
                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac6(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac6(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac6(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac6(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac6(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac6(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac6(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac6(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>   

                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac7(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac7(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac7(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac7(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac7(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac7(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac7(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac7(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>   

                        <Text style={styles.elementText}>Equip</Text>
                        <CardWhite>
                            <Horizontal>
                                <Hoshi
                                    label={'Nome'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac8(text, 0)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Mult'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac8(text, 1)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac8(value, 2) }
                                    items={[
                                        { label: 'For', value: 'for', key: 'for' },
                                        { label: 'Des', value: 'des', key: 'des' },
                                        { label: 'PDF', value: 'pdf', key: 'pdf' }
                                    ]}
                                />

                                <Hoshi
                                    label={'Qtd'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac8(text, 3)}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => carac8(value, 4)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
                                <Divider style={{ backgroundColor: 'black' }} />
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Def'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac8(text, 5)}
                                />  
                                <Hoshi
                                    label={'DefM'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac8(text, 6)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Efeito'}
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
                                    onChangeText={text => carac8(text, 7)}
                                />  
                            </Horizontal>
                        </CardWhite>   
                            <BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{saveCaracter()}}
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
      pickerSelect: {
        fontSize: fonts.textInput,
        height: 50,
        fontWeight: 'bold',
        color: colors.grayWhite,
        marginTop: 20,
        padding: 15,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.grayLight,
        justifyContent: 'center',
    }, 
});
    
  