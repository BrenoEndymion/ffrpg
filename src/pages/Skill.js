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

import { Container, AlignCenter, MarginTop,  SpaceBetween, Together, ShaddowGreen, Margin, Horizontal, Column } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll, Specialty, SpecialtyRed, BtnCircle} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import { BtnDefault } from "../components/Buttons";
import {useSelector, useDispatch} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Backdrop } from 'react-native-backdrop';


export default function Caracters(props) {

    const esse = useSelector(state => state.esseData);
    //console.log(esse);
    const [fpoints, setFPoints] = useState(esse[4]);
    const [apoints, setAPoints] = useState(esse[5]);
    const [arpoints, setArPoints] = useState(esse[6]);
    const [tpoints, setTPoints] = useState(esse[7]);
    const [visible, setVisible] = useState(false);

    //setTimeout(() => {Actions.refresh({ param1: 'hello', param2: 'world' })}, 3000)
    const [caracters, setCaracters] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const dispatch = useDispatch();

    function carrega(){

        if(esse[8] == true){

        }else{
            Actions.refresh({ param1: 'hello', param2: 'world' });
    
            setFPoints(esse[4]);
            setAPoints(esse[5]);
            setArPoints(esse[6]);
            setTPoints(esse[7]);

            const newId = esse.slice();
            newId[8] = true;
            dispatch({ type:'ADD_ESSE', hero: newId });

        }
    
    }


    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    function carac(resposta, clicado){
        const newId = caracters.slice();
        if(clicado <= 5){
            if(parseInt(resposta) >= 0){
                newId[clicado] = parseInt(resposta);
                setCaracters(newId);
                setFPoints( fpoints - resposta);
            }else if(resposta == ""){
                newId[clicado] = 0;
                setCaracters(newId);
                setFPoints( fpoints + caracters[clicado]);
            }
        }else if(clicado > 5 && clicado <= 11 ){
            if(parseInt(resposta) >= 0){
                newId[clicado] = parseInt(resposta);
                setCaracters(newId);
                setAPoints( apoints - resposta);
            }else if(resposta == ""){
                newId[clicado] = 0;
                setCaracters(newId);
                setAPoints( apoints + caracters[clicado]);
            }
        }else if(clicado > 11 && clicado <= 17){
            if(parseInt(resposta) >= 0){
                newId[clicado] = parseInt(resposta);
                setCaracters(newId);
                setArPoints( arpoints - resposta);
            }else if(resposta == ""){
                newId[clicado] = 0;
                setCaracters(newId);
                setArPoints( arpoints + caracters[clicado]);
            }
        }else if(clicado > 17){
            if(parseInt(resposta) >= 0){
                newId[clicado] = parseInt(resposta);
                setCaracters(newId);
                setTPoints( tpoints - resposta);
            }else if(resposta == ""){
                newId[clicado] = 0;
                setCaracters(newId);
                setTPoints( tpoints + caracters[clicado]);
            }
        }
        
    }

    function saveCaracter(){
        dispatch({ type:'ADD_SKILL', hero: caracters });
    }


    return (
        <>
        <KeyboardAvoidingView style={styles.background}>
            <Backdrop
                visible={visible}
                handleOpen={handleOpen}
                handleClose={handleClose}
                onClose={() => { }}
                swipeConfig={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80,
                }}
                animationConfig={{
                    speed: 14,
                    bounciness: 4,
                }}
                overlayColor="rgba(0,0,0,0.32)"
                backdropStyle={{
                    backgroundColor: '#fff',
                }}>
                <Together>
                    <Horizontal>
                        <AlignCenter>
                        <Text style={styles.fireElementText}>Pontos de perícias</Text>
                            <MarginTop />
                            <Column>
                                <Text>Os pontos de perícias são baseado nos níveis de cada essência</Text>
                                <MarginTop />
                                <Text>Ao alterar os pontos de essência, na aba anterior, é preciso clicar no botão 'Load' para carrega-los</Text>
                            </Column>
                            <MarginTop />
                        </AlignCenter>
                    </Horizontal>
                </Together>
            </Backdrop>
            <View>
                <SafeAreaView>
                    <Margin>
                        <Scroll>
                        <Horizontal style={{alignContent: 'space-between'}}>
                            <BtnCircle style={{flex: 1}} name="carregar" onPress={() => {carrega()} } >
                                <Text>Load</Text>
                            </BtnCircle>
                            <BtnCircle style={{flex: 1}} name="info" onPress={() => {handleOpen()} } >
                                <Text>Info</Text>
                            </BtnCircle>
                        </Horizontal>
                           <View style={styles.fireElement}> 
                           <Horizontal style={{justifyContent: 'center'}}>
                             <Text style={styles.fireElementText}>Fogo: </Text>
                             {fpoints >= 0 ? 
                            <Specialty> Você tem {fpoints} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                            </Horizontal>
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[0] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 0)}
                                    value={caracters[0]}
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[1] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 1)}
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[2] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 2)}
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[3] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 3)}
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[4] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 4)}
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
                                    maxLength={1}
                                    editable={(fpoints < 0 && caracters[5] > 0 || fpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 5)}
                                />
                           </Horizontal>
                          </View>  

                    
                          <View style={styles.waterElement}>
                          <Horizontal style={{justifyContent: 'center'}}>
                             <Text style={styles.fireElementText}>Água: </Text>
                             {apoints >= 0 ? 
                            <Specialty> Você tem {apoints} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                            </Horizontal>
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[6] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 6)}
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[7] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 7)}
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[8] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 8)}
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[9] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 9)}
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[10] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 10)}
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
                                    maxLength={1}
                                    editable={(apoints < 0 && caracters[11] > 0 || apoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 11)}
                                />                         
                            </Horizontal>
                          </View>

                          <View style={styles.AirElement}>
                            <Horizontal style={{justifyContent: 'center'}}>
                             <Text style={styles.fireElementText}>Ar: </Text>
                             {arpoints >= 0 ? 
                            <Specialty> Você tem {arpoints} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                            </Horizontal>
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[12] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 12)}
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[13] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 13)}
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[14] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 14)}
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[15] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 15)}
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[16] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 16)}
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
                                    maxLength={1}
                                    editable={(arpoints < 0 && caracters[17] > 0 || arpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 17)}
                                />
                            </Horizontal> 
                          </View>

                          <View style={styles.earthElement}>
                          <Horizontal style={{justifyContent: 'center'}}>
                             <Text style={styles.fireElementText}>Terra: </Text>
                             {tpoints >= 0 ? 
                            <Specialty> Você tem {tpoints} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                            </Horizontal>
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
                                    maxLength={1}
                                    editable={(tpoints < 0 && caracters[18] > 0 || tpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 18)}
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
                                    maxLength={1}
                                    editable={(tpoints < 0 && caracters[19] > 0 || tpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 19)}
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
                                    maxLength={1}
                                    editable={(tpoints < 0 && caracters[20] > 0 || tpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 20)}
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
                                    maxLength={1}
                                    editable={(tpoints < 0 && caracters[21] > 0 || tpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 21)}
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
                                    maxLength={1}
                                    editable={(tpoints < 0 && caracters[22] > 0 || tpoints >= 0) ? true : false}
                                    onChangeText={text => carac(text, 22)}
                                />
                            </Horizontal> 
                          </View>
                          {fpoints == 0 && 
                          apoints == 0 && 
                          arpoints == 0 && 
                          tpoints == 0 && 
                            <BtnDefault name={'Salvar'}
                                styles={styles.enter}
                                onPress={()=>{saveCaracter()}}
                                TextBtn={'Salvar'}                         
                            />            
                          }           
                           
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
    
  