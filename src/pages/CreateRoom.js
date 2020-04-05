import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { ImageView, Image, BtnB, Container } from './styles/CreateRoomStyles';
import {Header, Icon} from "react-native-elements";
//import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors';
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { TextInput } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';
import imagePicker from 'react-native-image-picker';

export default function CreateRoom(props) {

    const [preview, setPreview] = useState(null);
    const [imageThumb, setImageThumb] = useState(null);

    const fields = [
        {
            "id": 0,
            "field": "Nome da mesa",
            "secure": false
        },
        {
            "id": 1,
            "field": "Sistema",
            "secure": false
        }]

    const GoBack = ({ }) => (
        <Together>
            <BtnB onPress={() => Actions.pop()}>
                <Text style={{color: colors.white, paddingLeft: 10}}>Voltar</Text>
            </BtnB>
        </Together>
    )

    AboveFlatList = () => (
        <>
            <MarginTop />

            <AlignCenter>
                <ImageView onPress={() => { handleSelect()}}>
                    {preview != null ? <Image source={preview} /> : console.log('') }
                </ImageView>
            </AlignCenter>

            <MarginBottom />
        </>
    )

    belowFlatList = () => (
        <>
            <ShaddowGreen>
                <BtnDefault name={"Cadastrar"} onPress={() => {
                    cadPatient()
                }} />
            </ShaddowGreen>
        </>
    )

    var arrayItems = ["", "", "", "", "", "", "", "", "", ""]

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

    renderInputList = (item, index) => (

        <Margin>
            <KeyboardAvoidingView>
                <TextInput placeholder={item.field} secure={item.secure} onChangeText={text => checkArray(item.id, text)} /> 
            </KeyboardAvoidingView>
        </Margin>
    )

    function checkArray(id, text) {
        //console.log(id)
        arrayItems[id] = text
        //console.log(arrayItems)
    }


    return (
        <>
            <Container>

                <Header
                    leftComponent={<GoBack />}
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    centerComponent={{ text: 'Dê vida a sua mesa', style: styles.headerText }}
                    containerStyle={{
                        backgroundColor: colors.blueDefault,
                        justifyContent: 'space-around',
                    }}
                />

                {/* <SafeAreaView style={styles.safeAreaView}> */}
                <AboveFlatList />
                
                <FlatList
                    style={styles.list}
                    data={fields}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        renderInputList(item, index)
                    )}
                    ListFooterComponent={belowFlatList}
                />

                {/* </SafeAreaView> */}
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    pickerSelect: {
        fontSize: fonts.textInput,
        height: 50,
        color: colors.placeHolder,
        marginTop: 7,
        marginBottom: 7,
        padding: 15,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.white,
        justifyContent: 'center',
    }, 
    headerText: {
        color: colors.white,
    }, 
    list: {
        paddingTop: 20,
    },
});
  