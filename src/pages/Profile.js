import React, { useState, useEffect} from 'react';
import{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';

import {ImageView, Image ,BtnB , Container } from './styles/ProfileStyles';
import colors from '../config/colors';
import {Header, Icon} from "react-native-elements";
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { TextInput } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';


export default function Profile(props){

    const [preview, setPreview] = useState(null);
    
    const fields = [
        {
            "id": 0,
            "field": "nome",
            "secure": false, 
        },
        {
            "id": 1,
            "field": "email",
            "secure": false,
        },
        {
            "id": 2,
            "field": "senha",
            "secure": true,

        },
        {
            "id": 3,
            "field": "tipo",
            "secure": false,
        }
    ]

    useEffect(() => {

        async function loadUser() {
            console.log('deu foi certo')
        }
        loadUser();
    }, []);

    aboveFlatList = () =>(
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
                <BtnDefault name={"Salvar"} onPress={() => {
                    cadPatient()
                }} />
            </ShaddowGreen>

            <ShaddowGreen>
                <BtnDefault name={"Sair"} onPress={() => {
                    cadPatient()
                }} />
            </ShaddowGreen>
        </>
    )

    var arrayItems = ["", "", "", "", "", "", "", "", "", ""]

    const Dropdown = () => {
        return (
            <RNPickerSelect
                textInputProps={styles.pickerSelect}
                placeholder={{
                    label: 'Tipo',
                    value: 'Tipo',
                    color: '#000'
                }}
                onValueChange={(value) => arrayItems[4] = value}
                items={[ ]}
            />
        );
    };

    renderInputList = (item, index) => (

        <Margin>

            {index == 3 ? 
            <TextInput editable={false} placeholder={item.field}  value="" secure={item.secure} 
                onChangeText={text => checkArray(item.id, text)}/> 
                : index == 1 ? <TextInput editable={false} placeholder={item.field}  value="" secure={item.secure} 
                onChangeText={text => checkArray(item.id, text)}/> 
                : <TextInput placeholder={item.field} 
                secure={item.secure} 
                style={styles.inputBack}
                onChangeText={text => checkArray(item.id, text)} /> 
            }

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
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    centerComponent={{ text: 'Nome do Usuário', style: styles.headerText }}
                    containerStyle={{
                        backgroundColor: colors.blueDefault,
                        justifyContent: 'space-around',
                    }}
                />

                {/* <SafeAreaView style={styles.safeAreaView}> */}

                <KeyboardAvoidingView>
                    <FlatList
                        style={styles.list}
                        data={fields}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            renderInputList(item, index)
                        )}
                        ListFooterComponent={belowFlatList}
                    />
                </KeyboardAvoidingView>
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
        inputBack: {
            backgroundColor: colors.white,
        },
    });





    



   
