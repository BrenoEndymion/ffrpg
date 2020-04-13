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
import {Scroll} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import {Divider} from "react-native-elements";
import imagePicker from 'react-native-image-picker';
import { TextBtn } from '../components/styles/ButtonsStyles';
import {useSelector, useDispatch} from 'react-redux';

export default function Caracters(props) {

    const [preview, setPreview] = useState(null);
    const [imageThumb, setImageThumb] = useState(null);
    const [caracters, setCaracters] = useState([false, false, false, false, false, false, false, false, false, false]);
    const dispatch = useDispatch()
    const teste = useSelector(state => state.heroData);
    
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
                carac(imagethumb, 9);
            }
        })
    }

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

    function carac(resposta, clicado){
        const newId = caracters.slice();
        newId[clicado] = resposta;
        //setCaracters({ 0: resposta, 1: caracters[1], 2: caracters[2], 3: caracters[3], 4: caracters[4], 5: caracters[5], 6: caracters[6], 7: caracters[7], 8: caracters[8], 9: caracters[9]});
        setCaracters(newId);
    }

    function saveCaracter(){
        dispatch({ type:'ADD_HERO', hero: caracters });
    }
    return (
        <>
        <MarginTop />
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerInputs}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                            <AboveFlatList />  
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
                                onChangeText={text => carac(text, 0)}
                            />
                            
                            <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Raça',
                                    value: 'Raça',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 1)}
                                items={[
                                    { label: 'Humano', value: 'Humano', key: '0' },
                                    { label: 'Bangaa', value: 'Bangaa', key: '1' },
                                    { label: 'Creimire', value: 'Creimire', key: '2' },
                                    { label: 'Anão', value: 'Anão', key: '3' },
                                    { label: 'Elfo', value: 'Elfo', key: '4' },
                                    { label: 'Galka', value: 'Galka', key: '5' },
                                    { label: 'Miqo’te', value: 'Miqote', key: '6' },
                                    { label: 'Moogle', value: 'Moogle', key: '7' },
                                    { label: 'Nu mou', value: 'Nu mou', key: '8' },
                                    { label: 'Qu', value: 'Qu', key: '9' },
                                    { label: 'Ronso', value: 'Ronso', key: '10' },
                                    { label: 'Lalafell', value: 'Lalafell', key: '11' },
                                    { label: 'Varg', value: 'Varg', key: '12' },
                                    { label: 'Viera', value: 'Viera', key: '13' },
                                    { label: 'Yeti', value: 'Yeti', key: '14' },
                                ]}
                            />
                            <Divider style={{ backgroundColor: 'black' }} />
                            <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Jobs',
                                    value: 'Jobs',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 2)}
                                items={[
                                    { label: 'Cavaleiro', value: 'Cavaleiro', key: '0' },
                                    { label: 'Guerreiro', value: 'Guerreiro', key: '1' },
                                    { label: 'Caçador', value: 'Caçador', key: '2' },
                                    { label: 'Mago Negro', value: 'Mago Negro', key: '3' },
                                    { label: 'Mago Branco', value: 'Mago Branco', key: '4' },
                                    { label: 'Bardo', value: 'Bardo', key: '5' },
                                    { label: 'Mago vermelho', value: 'Mago vermelho', key: '6' },
                                ]}
                            />
                            <Divider style={{ backgroundColor: 'black' }} />
                            <Hoshi
                                label={'Idade'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 3)}
                            />
                            <Hoshi
                                label={'Sexo'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 4)}
                            />
                            <Hoshi
                                label={'Altura'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 5)}
                            />
                            <Hoshi
                                label={'Peso'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 6)}
                            />
                            <Hoshi
                                label={'Olhos'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 7)}
                            />
                            <Hoshi
                                label={'Cabelos'}
                                style={styles.inputStyle}
                                // this is used as active border color
                                borderColor={colors.blueDefault}
                                // active border height
                                borderHeight={3}
                                inputPadding={16}
                                // this is used to set backgroundColor of label mask.
                                // please pass the backgroundColor of your TextInput container.
                                backgroundColor={colors.white}
                                onChangeText={text => carac(text, 8)}
                            />

                            
                            <BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{saveCaracter()}}
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
        justifyContent: 'center',  
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
});
    
  