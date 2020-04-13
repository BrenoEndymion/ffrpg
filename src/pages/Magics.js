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

import { CardWhite } from './styles/AbilityStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll} from './styles/CaractersStyles';
import {useSelector, useDispatch} from 'react-redux';

export default function Caracters(props) {

    const [caracters, setCaracters] = useState([
        {"0": ["", "", "", "", ""]}, 
        {"1": ["", "", "", "", ""]}, 
        {"2": ["", "", "", "", ""]}, 
        {"3": ["", "", "", "", ""]}, 
        {"4": ["", "", "", "", ""]}, 
        {"5": ["", "", "", "", ""]}, 
     ]);


     const dispatch = useDispatch();

    function carac(resposta, index, clicado){
        const newId = caracters[index][index].slice();
        const newVec = caracters.slice(); 
        console.log(index);
        newId[clicado] = resposta;
        newVec[index][index] = newId;
        console.log(newVec);
        setCaracters(newVec);
    }

    function saveCaracter(){
        dispatch({ type:'ADD_MAGI', hero: caracters });
    }

    return (
        <>
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <SafeAreaView>
                <Margin>
                    <Scroll>
                        <Text style={styles.elementText}>Magias</Text>
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
                                    onChangeText={text => carac(text, 0, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 0, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 0, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 0, 3)}
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
                                    onChangeText={text => carac(text, 0, 4)}
                                />  
                            </Horizontal>
                        </CardWhite>    

                        <Text style={styles.elementText}></Text>
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
                                    onChangeText={text => carac(text, 1, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 1, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 1, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 1, 3)}
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
                                    onChangeText={text => carac(text, 1, 4)}
                                />  
                            </Horizontal>
                        </CardWhite>  
                        <Text style={styles.elementText}></Text>
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
                                    onChangeText={text => carac(text, 2, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 2, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 2, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 2, 3)}
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
                                    onChangeText={text => carac(text, 2, 4)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <Text style={styles.elementText}></Text>
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
                                    onChangeText={text => carac(text, 3, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 3, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 3, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 3, 3)}
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
                                    onChangeText={text => carac(text, 3, 4)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <Text style={styles.elementText}></Text>
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
                                    onChangeText={text => carac(text, 4, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 4, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 4, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 4, 3)}
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
                                    onChangeText={text => carac(text, 4, 4)}
                                />  
                            </Horizontal>
                        </CardWhite>  

                        <Text style={styles.elementText}></Text>
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
                                    onChangeText={text => carac(text, 5, 0)}
                                />  
                                <Hoshi
                                    label={'Tipo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 5, 1)}
                                />  
                            </Horizontal>
                            <Horizontal>
                                <Hoshi
                                    label={'Custo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 5, 2)}
                                />  
                                <Hoshi
                                    label={'Alvo'}
                                    style={styles.inputStyle}
                                    // this is used as active border color
                                    borderColor={colors.blueDefault}
                                    // active border height
                                    borderHeight={3}
                                    inputPadding={16}
                                    // this is used to set backgroundColor of label mask.
                                    // please pass the backgroundColor of your TextInput container.
                                    backgroundColor={colors.grayLight}
                                    onChangeText={text => carac(text, 5, 3)}
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
                                    onChangeText={text => carac(text, 5, 4)}
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
});
    
  