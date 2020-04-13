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
import { Nv, Specialty, SpecialtyRed } from './styles/EssencesStyles';
import { TextInput, TextInputWhite } from '../components/TextInputs';
import { BtnDefault } from "../components/Buttons";
import { Container, AlignCenter, MarginTop, Column, Together, ShaddowGreen, Margin, Horizontal } from '../components/styles/general';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../config/colors';
import {Scroll, BtnCircle} from './styles/CaractersStyles';
import RNPickerSelect from 'react-native-picker-select';
import fonts from '../config/fonts';
import metrics from '../config/metrics';
import {useSelector, useDispatch} from 'react-redux';
import { Backdrop } from 'react-native-backdrop';

export default function Caracters(props) {

    const [points, setPoints] = useState(80);
    const [caracters, setCaracters] = useState([0, 0, 0, 0, 0, 0, 0, 0, false]);
    const [highPoint, setHighPoint] = useState(0);
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    let qtd = [];
    renderItems = () => {
        for(let i = 0; i <= 50; i++){
            qtd.push(
                { label: i.toString(), value: i, key: i });
        }
        return qtd;
    }
    renderItems();


    function carac(resposta, clicado){

        const newId = caracters.slice();
        if(resposta != "Pontos"){
            newId[clicado] = parseInt(resposta);
            setCaracters(newId);
            //console.log(caracters);
            if(resposta > highPoint) {
                setHighPoint(resposta);
            }else{
                console.log(highPoint);
            }
            if(clicado == 0){
                setPoints(80 - (resposta + caracters[1] + caracters[2] + caracters[3]) );
                newId[4] = Math.trunc(resposta / 10);
                setCaracters(newId);
            }else if( clicado == 1){
                setPoints(80 - (caracters[0] + resposta + caracters[2] + caracters[3]) );
                newId[5] = Math.trunc(resposta / 10);
                setCaracters(newId);
            }else if( clicado == 2){
                setPoints(80 - (caracters[0] + caracters[1] + resposta + caracters[3]) );
                newId[6] = Math.trunc(resposta / 10);
                setCaracters(newId);
            }else if(clicado == 3){
                setPoints(80 - (caracters[0] + caracters[1] + caracters[2] + resposta) );
                newId[7] = Math.trunc(resposta / 10);
                setCaracters(newId);
            }
        }
    }

    function saveCaracter(){
        dispatch({ type:'ADD_ESSE', hero: caracters });
    }

    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };


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
                        <Text style={styles.fireElementText}>Pontos e níveis de essência</Text>
                            <MarginTop />
                            <Column>
                                <Text>Os pontos de essência são usados para calcular diversos atributos do personagem, são eles: </Text>
                                <MarginTop />
                                <Text>Fogo: os pontos em fogo adicionam dano em certas skills ou magias/O nível em fogo aumenta o dano crítico (DANO FOCADO)</Text>
                                <MarginTop />
                                <Text>Água: os pontos em água aumentão o EP do personagem para lançar skills ou magias /O nível em água aumenta armadura mágica (EP/PROTEÇÃO MÁGICA)</Text>
                                <MarginTop />
                                <Text>Ar: os pontos em ar adicionam dano em certas skills ou magias/O nível em ar aumenta a evasão do personagem (EVASAOO/DANO)</Text>
                                <MarginTop />
                                <Text>Terra: os pontos em terra aumentão o HP do personagem para aguentar o combate /O nível em terra aumenta armadura física (HP/PROTEÇÃO FÍSICA)</Text>
                            </Column>
                            <MarginTop />
                        </AlignCenter>
                    </Horizontal>
                </Together>
            </Backdrop>
            <View style={styles.containerInputs}>
                <SafeAreaView>
                    <Margin>
                        <Scroll>

                        <Horizontal>
                            <BtnCircle style={{flex: 1}} name="info" onPress={() => {handleOpen()} } >
                                <Text>Info</Text>
                            </BtnCircle>
                        </Horizontal>
                        <MarginTop />
                        {points >= 0 ? 
                            <Specialty> Você tem {points} pontos</Specialty>
                            : <SpecialtyRed> Você excedeu o número de ponto</SpecialtyRed> }
                        {
                            caracters[0] < (highPoint / 2) ||
                            caracters[1] < (highPoint / 2) ||
                            caracters[2] < (highPoint / 2) ||
                            caracters[3] < (highPoint / 2) ?
                            <SpecialtyRed> Menor essência deve ter no mínimo pontos iguais a metade da maior pontuação</SpecialtyRed>
                            :
                            <Specialty> ** A essência com menor pontuação deve ser no mínimo igual a metade do maior</Specialty>
                        }
                        
                           <View style={styles.fireElement}> 
                             <Text style={styles.fireElementText}>Fogo</Text>
                             <Horizontal>
                          
                             <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Pontos',
                                    value: 'Pontos',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 0)}
                                items={qtd}
                            />
                            <Nv style={styles.nvStyle}>Nível: {Math.trunc(caracters[0] / 10) }</Nv>
                          
                           </Horizontal>
                          </View>  


                          <View style={styles.fireElement}> 
                             <Text style={styles.fireElementText}>Água</Text>
                             <Horizontal>
                       
                             <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Pontos',
                                    value: 'Pontos',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 1)}
                                items={qtd}
                            />
                            <Nv style={styles.nvStyle}>Nível: {Math.trunc(caracters[1] / 10) }</Nv>
                     
                           </Horizontal>
                          </View>  
                          
                          <View style={styles.fireElement}> 
                             <Text style={styles.fireElementText}>Ar</Text>
                             <Horizontal>
                     
                             <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Pontos',
                                    value: 'Pontos',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 2)}
                                items={qtd}
                            />
                            <Nv style={styles.nvStyle}>Nível: {Math.trunc(caracters[2] / 10) }</Nv>
               
                           </Horizontal>
                          </View>  
                          <View style={styles.fireElement}> 
                             <Text style={styles.fireElementText}>Terra</Text>
                             <Horizontal>
                    
                             <RNPickerSelect
                                textInputProps={styles.pickerSelect}
                                placeholder={{
                                    label: 'Pontos',
                                    value: 'Pontos',
                                    color: '#000'
                                }}
                                onValueChange={(value) => carac(value, 3)}
                                items={qtd}
                            />
                            <Nv style={styles.nvStyle}>Nível: {Math.trunc(caracters[3] / 10) }</Nv>
                 
                           </Horizontal>
                          </View>  

                          {points == 0 && caracters[0] >= (highPoint / 2) &&
                            caracters[1] >= (highPoint / 2) &&
                            caracters[2] >= (highPoint / 2) &&
                            caracters[3] >= (highPoint / 2) ?
                                <BtnDefault name={'Salvar'}
                                    styles={styles.enter}
                                    onPress={()=>{saveCaracter()}}
                                    TextBtn={'Salvar'}                         
                                />
                                :
                                <></>
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
        marginTop: 33,
        marginRight: 25,
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

    fireElement:{
        marginTop: 30,
    },

    fireElementText: {
        fontSize: 20,
        color: colors.blueActive,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      },
});
    
  