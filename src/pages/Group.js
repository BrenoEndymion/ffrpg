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
  FlatList,
  ContainerItems,
} from 'react-native';

import { TextInput, TextInputWhite } from '../components/TextInputs';
import {Scroll, ImageView, ImageViewOp, Nv, Container} from '../pages/styles/GroupStyles'
import { BtnDefault } from "../components/Buttons";
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal, Column, AlignLeft } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';
import {Header, ListItem} from "react-native-elements";
import colors from '../config/colors';


export default function Group(props) {
    const [preview, setPreview] = useState(null);
    const [hasHero, setHasHero] = useState(true);

                
        

    

    const data = [
        {
            id: 1,
            namePerson: 'Dean',
            job: 'Warrior',
            hp: 23,
            mp: 26,

        },

        {
            id: 2,
            namePerson: 'Sam',
            hp: 29,
            mp: 29,

        },

    ]

    const [dataAux, setDataAux] = useState([]);
        const [value, setValue] = useState('');
        const [valueCidade, setValueCidade] = useState('');
        // MapView
        const [region, setRegion] = useState(null);

    

    AboveFlatList = () => (
        <>
            <MarginTop />
                <AlignCenter>
                    <ImageView onPress={() => { }}>
                        {preview != null ? <Image source={preview} /> : console.log('') }
                    </ImageView>
                </AlignCenter>
            <MarginBottom />
        </>
    )

    function Item({ title }) {
        return (
          <View style={styles.item}>
            <Text style={styles.playerTextName}>{title}</Text>
          </View>
        );
      }

      renderList = (item, region) => {

        return (
          //<Animated.View style={[styles.button, {transform: [{translateX}]}]}>
          <Margin>
            <Shaddow>
              <ItemView style={styles.itemView}>
                <Together>
                  <Avatar
                    rounded
                    source={require('../assets/images/logoffrpg.png')}
                    size="medium"
                  />
      
                  <Badge
                    status="success"
                    containerStyle={{ position: 'absolute', top: 2, right: 3 }}
                  />
                </Together>
                <SpaceBetween style={styles.spaceBetween}>
                  <MasterName>{item.masterName}</MasterName>
                  <Specialty>{item.specialty}</Specialty>
                </SpaceBetween>      
              </ItemView>
            </Shaddow>
          </Margin>          
        );
      };

    return (

        <Container style={styles.background}>        
            <KeyboardAvoidingView style={styles.background}>
            
            <Header
                //leftComponent={<GoBack />}
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content"
                centerComponent={{ text: ( hasHero ? 'Campanha dos 4 cristais' : 'Crie seu Personagem'), style: styles.headerText }}
                containerStyle={{
                    backgroundColor: colors.blueDefault,
                    justifyContent: 'space-around',
                    
                }}
                /> 
            <View style={styles.playerView}>      
                    <ImageView onPress={() => { }}
                    style={styles.imageStyle}>
                        {preview != null ? <Image source={preview} /> : console.log('') }
                    </ImageView> 

                    <Text style={styles.playerTextName}>Rebecca</Text>   

                    <Column>
                        <Text style={styles.playerText}>HP:   30 </Text>
                        <Text style={styles.playerText}>MP:   15</Text>
                    </Column> 
            </View>  

            <View style={styles.playerView}>      
            {
                    data.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.namePerson}
                        subtitle={l.hp}                                                                     
                        bottomDivider
                    />
                    ))
                }
                
            </View>  

             
                <FlatList
                style={styles.list}
                data={data}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => renderList(item, region)}
                ListEmptyComponent={() => <Text>Nehum registro</Text>}
                />
             
            </KeyboardAvoidingView>  
        </Container>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: '#fff'
    },
    container:{
        marginTop: 30,

    },
    
    playerView: {
        justifyContent: 'flex-start',
        marginLeft: 15,
    },  

    Element:{
        marginTop: 5,
    },
    playerTextName: {       
        fontSize: 16,
        color: colors.blueTitle,
        fontWeight: 'bold',
    },

    playerText: {        
        fontSize: 16,
        color: colors.blueTitle,
        fontWeight: 'bold',
    },
    imageStyle:{        
        marginTop: 20,
    },

    background: {
        backgroundColor: colors.white,


    },

   
});
    
  