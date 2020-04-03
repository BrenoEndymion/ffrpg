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

import { Image, ImageViewOp, TextWelcome } from '../styles/LoginStyles';
import { TextInput, TextInputWhite } from '../../components/TextInputs';
import { BtnDefault } from "../../components/Buttons";
import { Container, AlignCenter, MarginTop, MarginBottom, Margin } from '../../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../../config/colors';
import {Scroll} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../../config/fonts';
import metrics from '../../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';

export default function Caracters(props) {

    const [preview, setPreview] = useState(null);
    const [imageThumb, setImageThumb] = useState(null);

    handleSelect = () => {
        imagePicker.showImagePicker({
            title: 'Selecionar Imagem',
        }, upload => {
            if(upload.error){
                console.log('erro imagem');
            }else if(upload.didCancel){
                console.log('usuário cancelou');
            }else{
                 const prev = {
                    //uri: `data:image/jpeg;base64,${upload.data}`,
                    uri: upload.uri,
                };

                let prefix;
                let ext;

                if(upload.fileName){
                    [prefix, ext] = upload.fileName.split('.');
                    ext= ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                }else{
                    prefix = new Date().getTime();
                    ext = 'jpg';
                }

                const imagethumb = {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`,
                };

                console.log(prev);
                setPreview(prev);
                setImageThumb(imagethumb);
            }
        })
    }
    dropdown = () => (
            <RNPickerSelect
                textInputProps={styles.pickerSelect}
                placeholder={{
                    label: 'Tipo',
                    value: 'Tipo',
                    color: '#000'
                }}
                onValueChange={(value) => arrayItems[4] = value}
                items={[
                    { label: 'Jogador', value: 'Jogador', key: '0' },
                    { label: 'Mestre', value: 'Mestre', key: '1' },
                ]}
            />
    );

    AboveFlatList = () => (
        <>
            <MarginTop />

            <AlignCenter>
                <ImageViewOp onPress={() => { handleSelect()}} >
                    {preview != null ? <Image source={preview} /> : console.log('') }
                </ImageViewOp>
            </AlignCenter>

            <MarginBottom />
        </>
    )
    return (
        <>
        <KeyboardAvoidingView style={styles.background}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                           <View style={styles.FisicAtrributes}> 
                            <Hoshi
                                label={'Força'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.grayLight}
                            />  
                           
                            <Hoshi
                                label={'Destreza'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.grayLight}
                            />
                            <Hoshi
                                label={'Resistência'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.grayLight}
                            />
                            <Hoshi
                                label={'Armadura'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.grayLight}
                            />
                            <Hoshi
                                label={'Poder de Fogo'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.grayLight}
                            />
                          </View>  

                          
                          {/*}<View style={styles.modifers}>
                              <Text style={styles.ModifierText}>Modificadores</Text>
                            <Hoshi
                                label={'Força de ataque'}
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
                                label={'Defesa Física'}
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
                                label={'Defesa Mágica'}
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
                                label={'Evasão Física'}
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
                                label={'Evasão Mágica'}
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
                            </View>

                          <View style={styles.StatusAtributes}>
                            <Text style={styles.StatusText}>Status</Text>
                              <Hoshi
                                label={'Pontos de vida'}
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
                                label={'Pontos de Magia'}
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

                          </View>
    
                             <BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{}}
                                TextBtn={'Salvar'}                         
                            />                          
                           {*/}
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
    
  