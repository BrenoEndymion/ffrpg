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

import {Scroll, ImageView, ImageViewOp, Nv, Container} from '../pages/styles/GroupStyles'
import { BtnDefault } from "../components/Buttons";
import { AlignCenter, MarginTop, MarginBottom, Together, ShaddowGreen, Margin, Horizontal, Column, AlignLeft, SpaceBetween } from '../components/styles/general';
import { Actions } from 'react-native-router-flux';
import {Header, ListItem, Avatar, Badge, Divider} from "react-native-elements";
import colors from '../config/colors';
import { Backdrop } from 'react-native-backdrop';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import fonts from '../config/fonts';

//pages
import Caracters from './home/Caracters';
import Attributes from './home/Attributes';
import Essences from './home/Essences';
import Skill from './home/Skill';
import Equipaments from './home/Equipaments';
import Inventory from './home/Inventory';
import Ability from './home/Ability';
import Magics from './home/Magics';
import Background from './home/Background';
import Status from './home/Status';

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
        {
            id: 3,
            namePerson: 'Dean',
            job: 'Warrior',
            hp: 23,
            mp: 26,

        },

        {
            id: 4,
            namePerson: 'Sam',
            hp: 29,
            mp: 29,

        },
        {
            id: 5,
            namePerson: 'Dean',
            job: 'Warrior',
            hp: 23,
            mp: 26,

        },

        {
            id: 6,
            namePerson: 'Sam',
            hp: 29,
            mp: 29,

        },
    ]

    const [region, setRegion] = useState(null);
    const [visible, setVisible] = useState(false);
    
    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

      renderList = (item, region) => {

        return (
          //<Animated.View style={[styles.button, {transform: [{translateX}]}]}>
          <Margin>
            <MarginBottom />
                {/*item.id % 2 != 0 ?*/}
                <TouchableOpacity onPress={() => {handleOpen()}}>
                    <Horizontal>
                        <Avatar
                            rounded
                            source={require('../assets/images/logoffrpg.png')}
                            size="medium"
                        />
            
                        <Badge
                            status="success"
                            containerStyle={{ top: 2, right: 13 }}
                        />
                        <SpaceBetween style={styles.spaceBetween}>
                        <Text style={styles.playerTextName}>{item.namePerson}</Text>   

                        <Column>
                            <Text style={styles.playerText}>HP: XX / {item.hp}</Text>
                            <Text style={styles.playerText}>MP: XX / {item.mp}</Text>
                        </Column> 
                        </SpaceBetween>  
                    </Horizontal>
                </TouchableOpacity>
                <MarginTop />
                <Divider style={{ backgroundColor: 'black' }} />
        

                {/*:}

                <Horizontal style={{flexDirection: 'row-reverse'}}>
                    <Avatar
                        rounded
                        source={require('../assets/images/logoffrpg.png')}
                        size="medium"
                    />
        
                    <Badge
                        status="success"
                        containerStyle={{ top: 2, right: 13 }}
                    />
                    <SpaceBetween style={{alignItems: 'flex-end'}}>
                        <Text style={styles.playerTextName}>{item.namePerson}</Text>   

                        <Column>
                            <Text style={styles.playerText}>HP: XX / {item.hp}</Text>
                            <Text style={styles.playerText}>MP: XX / {item.mp}</Text>
                        </Column> 
                    </SpaceBetween>  
                </Horizontal>
            
                {*/}
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

                <FlatList
                    style={styles.list}
                    data={data}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item }) => renderList(item, region)}
                    ListEmptyComponent={() => <Text>Nehum registro</Text>}
                />

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
                            <Column style={{ paddingBottom: 20 }}>
                                <Text>FICHA DO FULANO</Text>
                            </Column>
                            <ScrollableTabView
                                tabBarInactiveTextColor={colors.white}
                                tabBarActiveTextColor={colors.blueActive}
                                renderTabBar={() => <TabBar tabStyles={{ tab: {} }} tabMargin={25} underlineHeight={3} tabBarStyle={{ backgroundColor: colors.blueDefault, marginTop: 0 }} tabBarTextStyle={{ fontSize: fonts.small }} underlineColor={colors.white} />}>
                                <Status tabLabel={{ label: "Status" }} label="Page #1" />
                                <Caracters tabLabel={{ label: "Características" }} label="Page #1" />
                                <Attributes tabLabel={{ label: "Atributos" }} label="Page #2" />
                                <Essences tabLabel={{ label: "Essências" }} label="Page #3" />
                                <Skill tabLabel={{ label: "Perícias" }} label="Page #4" />
                                <Equipaments tabLabel={{ label: "Equipamentos" }} label="Page #5" />
                                <Inventory tabLabel={{ label: "Inventário" }} label="Page #6" />
                                <Ability tabLabel={{ label: "Skills" }} label="Page #7" />
                                <Magics tabLabel={{ label: "Magias" }} label="Page #8" />
                                <Background tabLabel={{ label: "Background" }} label="Page #9" />
                                {/*}<PatientProfile tabLabel={{ label: "PERFIL" }} label="Page #3" />{*/}
                            </ScrollableTabView>
                        </AlignCenter>
                    </Horizontal>
                </Together>
            </Backdrop>
             
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
        fontSize: 15,
        color: colors.blueTitle,
        fontWeight: 'bold',
    },

    playerText: {        
        fontSize: 15,
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
    
  