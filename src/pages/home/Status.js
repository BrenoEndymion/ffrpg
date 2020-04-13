/* eslint-disable prettier/prettier */
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

import { Image, TextWelcome } from '../styles/LoginStyles';
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal } from '../../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../../config/colors';
import {Scroll, ImageViewOp, Nv} from '../styles/StatusStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../../config/fonts';
import { BtnDefault } from "../../components/Buttons";
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
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerInputs}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                        <AboveFlatList /> 
                           <View style={styles.Element}> 

                                <Horizontal>
                                    <Text style={styles.ElementText}>Nível: </Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}>HP: </Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}>EP: </Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>
                                </Horizontal>
                          </View>  
                          
                            <Text style={styles.title}>Forças de ataque</Text>
                            <View style={styles.Element}> 
                                    <Horizontal>
                                        <Text style={styles.ElementText}>FOR: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>

                                        <Text style={styles.ElementText}>DES: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>

                                        <Text style={styles.ElementText}>PDF: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>
                                        
                                    </Horizontal>
                            </View> 
                          <Text style={styles.title}>Forças de defesas</Text>
                          
                          <View style={styles.Element}> 
                                <Horizontal>
                                    <Text style={styles.ElementText}>DEF: </Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>
                                    <Text style={styles.ElementText}>DEFM:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>
                                    
                                    <Text style={styles.ElementText}></Text>
                                    <Nv style={styles.nvStyle}></Nv>

                                </Horizontal>
                          </View> 

                          <Text style={styles.title}>Testes de evasão</Text>
                          <View style={styles.Element}> 
                                <Horizontal>
                                    <Text style={styles.ElementText}>Ev F: </Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}>Ev M:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}></Text>
                                    <Nv style={styles.nvStyle}></Nv>
                                </Horizontal>
                          </View> 

                          <Text style={styles.title}>Testes de precisão</Text>
                          <View style={styles.Element}> 
                                <Horizontal>
                                    <Text style={styles.ElementText}>Pre F:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}>Pre D:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>

                                    <Text style={styles.ElementText}>Pre PDF:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>
                                    
                                    <Text style={styles.ElementText}>Pre Mag:</Text>
                                    <Nv style={styles.nvStyle}>XX</Nv>
                                </Horizontal>
                          </View> 
                          <Text style={styles.title}>Forças de ataque</Text>
                            <View style={styles.Element}> 
                                    <Horizontal>
                                        <Text style={styles.ElementText}>XP: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>

                                        <Text style={styles.ElementText}>PC: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>

                                        <Text style={styles.ElementText}>GIL: </Text>
                                        <Nv style={styles.nvStyle}>XX</Nv>
                                        
                                    </Horizontal>
                            </View>

                             <BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{}}
                                TextBtn={'Salvar'}                         
                            />                    
                           
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
        flex:1,
        justifyContent: 'flex-start',
    },
    inputStyle: {
        flex: 1,
    },
    nvStyle: {
        flex:1,
    },
    enter: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    Element:{
        marginTop: 5,
    },

    ElementText: {
        fontSize: 16,
        color: colors.blueActive,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        marginTop: 20,
        color: colors.blueActive,
        fontWeight: 'bold',
        textAlign: 'center'
    },  
    ElementTextDef: {
        fontSize: 16,
        color: colors.blueActive,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20
    },
    nvStyleDef: {
        flex:1,
        marginTop: 40,
    },
});
    
  