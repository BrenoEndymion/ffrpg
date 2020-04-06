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
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';

export default function Caracters(props) {

    const [preview, setPreview] = useState(null);
    const [imageThumb, setImageThumb] = useState(null);

    
    return (
        <>
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerInputs}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                           <View style={styles.fireElement}> 
                             <Text style={styles.fireElementText}>Fogo</Text>
                             <Horizontal>
                                <Hoshi
                                    label={'Intimidação'}
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
                                    label={'Percepção'}
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
                                    label={'Tecnologia'}
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
                                    label={'Determinação'}
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
                                    label={'Engenharia'}
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
                                    label={'Armas'}
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
                          </View>  

                    
                          <View style={styles.waterElement}>
                            <Text style={styles.waterElementText}>Água</Text>
                            <Horizontal>
                                <Hoshi
                                    label={'Sabedoria'}
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
                                    label={'Infiltração'}
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
                                    label={'Carisma'}
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
                                    label={'Atuação'}
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
                                    label={'Magia'}
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
                                    label={'Medicina'}
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
                          </View>

                          <View style={styles.AirElement}>
                            <Text style={styles.airElementText}>Ar</Text>
                            <Horizontal>
                                <Hoshi
                                    label={'Atletismo'}
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
                                    label={'Furtividade'}
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
                                    label={'Pilotagem'}
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
                                    label={'Ladinagem'}
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
                                    label={'Acrobacia'}
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
                                    label={'Labia'}
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
                          </View>

                          <View style={styles.earthElement}>
                            <Text style={styles.earthElementText}>Terra</Text>
                            <Horizontal>
                                <Hoshi
                                    label={'Tolerância'}
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
                                    label={'Cavalgar'}
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
                                    label={'Adestrar Animais'}
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
                                    label={'Armadilhas'}
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
                                    label={'Ciências'}
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
                          </View>

                             {/*}<BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{}}
                                TextBtn={'Salvar'}                         
                            />  {*/}                        
                           
                        </Scroll>
                    </Margin>        
                </SafeAreaView>
            </View>

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
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 50,
    },
    inputStyle: {
        marginTop: 15,
        flex:1,
    },
    enter: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    fireElement:{
        marginTop: 50,
    },

    fireElementText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },

    waterElement:{
        marginTop: 20,
    },

    waterElementText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    AirElement:{
        marginTop: 20,
    },
    airElementText: {
        marginTop: 30,
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    earthElement:{
        marginTop: 20,
    },
    earthElementText: {
        marginTop: 30,
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
    
  