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
import { TextInput, TextInputWhite } from '../../components/TextInputs';
import { BtnDefault } from "../../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../../config/colors';
import {Scroll} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../../config/fonts';
import metrics from '../../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';

export default function Caracters(props) {

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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Atr',
                                        value: 'Atr',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
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
                                    backgroundColor={colors.white}
                                />  
                                <RNPickerSelect
                                    textInputProps={styles.pickerSelect}
                                    placeholder={{
                                        label: 'Dado',
                                        value: 'Dado',
                                        color: '#000'
                                    }}
                                    onValueChange={(value) => console.log(value)}
                                    items={[
                                        { label: 'D4', value: 'd4', key: 'd4' },
                                        { label: 'D6', value: 'd6', key: 'd6' },
                                        { label: 'D8', value: 'd8', key: 'd8' },
                                        { label: 'D10', value: 'd10', key: 'd10' },
                                        { label: 'D12', value: 'd12', key: 'd12' },
                                        { label: 'D20', value: 'd20', key: 'd20' },
                                    ]}
                                />
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
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
                                    backgroundColor={colors.white}
                                />  
                            </Horizontal>
                        </CardWhite>     
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
        backgroundColor: colors.white,
        justifyContent: 'center',
    }, 
});
    
  