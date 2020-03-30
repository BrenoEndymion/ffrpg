import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import { ImageView, Image, BtnB } from './styles/SignupStyles';
import {Header, Icon} from "react-native-elements";
//import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors';
import { Container, AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin } from '../components/styles/general';
import { TextInput } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import RNPickerSelect from 'react-native-picker-select';
import { Actions } from 'react-native-router-flux';

export default function Signup(props) {

    const [preview, setPreview] = useState(null);
    

    const fields = [
        {
            "id": 0,
            "field": "Nome",
            "secure": false
        },
        {
            "id": 1,
            "field": "Email",
            "secure": false
        },
        {
            "id": 2,
            "field": "Tipo",
            "secure": false
        },
        {
            "id": 3,
            "field": "Senha",
            "secure": true
        },
        {
            "id": 4,
            "field": "Confirmar Senha",
            "secure": true
        }]

    const GoBack = ({ }) => (
        <Together>
            <BtnB onPress={() => Actions.pop()}>
                <Text style={{color: colors.white, paddingLeft: 10}}>Voltar</Text>
            </BtnB>
        </Together>
    )

    aboveFlatList = () => (
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
                items={[
                    { label: 'Jogador', value: 'Jogador', key: '0' },
                    { label: 'Mestre', value: 'Mestre', key: '1' },
                ]}
            />
        );
    };

    renderInputList = (item, index) => (

        <Margin>

            {index == 2 ? <Dropdown /> : index == 5 ? <DatePicker /> : 
                <TextInput placeholder={item.field} secure={item.secure} onChangeText={text => checkArray(item.id, text)} /> 
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
                    leftComponent={<GoBack />}
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    centerComponent={{ text: 'Crave sua jornada', style: styles.headerText }}
                    containerStyle={{
                        backgroundColor: colors.blueDefault,
                        justifyContent: 'space-around',
                    }}
                />

                {/* <SafeAreaView style={styles.safeAreaView}> */}


                <FlatList
                    style={styles.list}
                    data={fields}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        renderInputList(item, index)
                    )}
                    ListHeaderComponent={aboveFlatList}
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
        backgroundColor: colors.grayLight,
        justifyContent: 'center',
    }, 
    headerText: {
        color: colors.white,
    }
});
  