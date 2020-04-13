/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Alert
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
import {useSelector, useDispatch} from 'react-redux';
import userData from '../store/index';
import api from '../services/api';

export default function Profile(props){

    const [preview, setPreview] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector(state => state.data);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [tipo, setTipo] = useState();
    const [visible, setVisible] = useState(true);

    
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

    
    ///Vai ser executado antes do carregamento da tela
    useEffect(() => {
        async function loadUser() {      
            const data = new FormData();
            //atribuindo o id no objeto
            data.append('user_id', user._id);            


            //chamando dados do banco de dados
            const response = await api.get(`user/${user._id}`);
            if (response.status == 200 || response.status == "200") { 
                
                  const { name, email, pass, type} = response.data;
                  setNome(name);
                  setEmail(email);
                  setSenha(pass);
                  setTipo(type);  
                
              } else {
                Alert.alert(
                  'Erro',
                  'Houve um erro ao buscar o usuário.',
                  [
                      { text: 'OK', onPress: () => setVisible(false) },
                  ],
                  { cancelable: false },
               ); 
              }
              setVisible(false);             
              
              
            }          
           
        loadUser();
    }, []);

    async function updateUser(){

        const data = new FormData();
        data.append('_id', user._id)
        data.append('name', nome);         
        
        if(!senha == "Deixe em branco se não quiser alterar a senha"){
            data.append('pass', senha); 
        }
        
        const response = await api.put(`user/${user._id}`, data);
        if (response.status == 200 || response.status == "200") {             
              if(response.data.ok == 1){

                dispatch({ type:'ADD_USER', user: response.data.user });
                Alert.alert(
                    'Deu foi certo',
                    'Usuário alterado com sucesso.',
                    [
                        { text: 'OK', onPress: () => setVisible(false) },
                    ],
                    { cancelable: false },
                 ); 


              }            
          } else {
            Alert.alert(
              'ihhhh!! ',
              'Houve um erro ao alterar o usuário.',
              [
                  { text: 'OK', onPress: () => setVisible(false) },
              ],
              { cancelable: false },
           ); 
          }
          setVisible(false);             
          
          
        } 

        function logOut(){

        }
    

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
                    updateUser()
                }} />
            </ShaddowGreen>

            <ShaddowGreen>
                <BtnDefault name={"Sair"} onPress={() => {
                    logOut()
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
            <TextInput editable={false} placeholder={tipo}  value="" secure={item.secure} 
                onChangeText={text => checkArray(item.id, setTipo(text))}/> 
                
                : index == 2 ?<TextInput 
                    editable={true} 
                    placeholder={'Deixe em branco se não quiser alterar a senha'}  
                    secure={item.secure = true} 
                onChangeText={text2 => checkArray(item.id, setSenha(text2))}/>

                : index == 1 ? <TextInput editable={false} placeholder={email} secure={item.secure} 
                onChangeText={text => checkArray(item.id, setEmail(text))}/> 
                
                : <TextInput placeholder={nome} 
                secure={item.secure} 
                style={styles.inputBack}
                onChangeText={text => checkArray(item.id, setNome(text))} /> 
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
                    centerComponent={{ text: `${nome}`, style: styles.headerText }}
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
            alignContent: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color: colors.white,
        },
        list: {
            paddingTop: 20,
        },
        inputBack: {
            backgroundColor: colors.white,
        },
    });





    



   
