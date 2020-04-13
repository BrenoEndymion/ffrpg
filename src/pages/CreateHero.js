import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Dimensions, Alert } from 'react-native';

import { Container, Margin, Column, MarginTop } from '../components/styles/general';
import { NavHeader, SectionSubTitle } from './styles/ProfileStyles'
import { TextInputWhite } from '../components/TextInputs';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";

import colors from '../config/colors';
import fonts from '../config/fonts';
import Login from './Login';
import Caracters from './Caracters';
import Attributes from './Attributes';
import Essences from './Essences';
import Skill from './Skill';
import Equipaments from './Equipaments';
import Inventory from './Inventory';
import Ability from './Ability';
import Magics from './Magics';
import Background from './Background';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

export default function CreateHero(pro) {

    const teste = useSelector(state => state.heroData);
    const atri = useSelector(state => state.atriData);
    const esse = useSelector(state => state.esseData);
    const skill = useSelector(state => state.skillData);
    const equip = useSelector(state => state.equipData);
    const equip2 = useSelector(state => state.equip2Data);
    const equip3 = useSelector(state => state.equip3Data);
    const equip4 = useSelector(state => state.equip4Data);
    const equip5 = useSelector(state => state.equip5Data);
    const equip6 = useSelector(state => state.equip6Data);
    const equip7 = useSelector(state => state.equip7Data);
    const equip8 = useSelector(state => state.equip8Data);
    const inve = useSelector(state => state.inveData);
    const [points, setPoints] = useState([]);

    function changeTab(i){
        if (i.i == 3){
            setPoints(esse);
        }
    }

    _onRefresh = () => {
        console.log("foi");    
    } 

    return (
        <Container>
            <SafeAreaView style={styles.safeAreaView}>
                <NavHeader>
                    <MarginTop />
                    <Margin>
                        <Column style={styles.headerContent}>
                            
                            <SectionSubTitle>Crie seu personagem</SectionSubTitle>
                            
                        </Column>
                        
                    </Margin>
                </NavHeader>
            </SafeAreaView>
            <ScrollableTabView
                onChangeTab={ (i, ref) => changeTab(i)}
                tabBarInactiveTextColor={colors.white}
                tabBarActiveTextColor={colors.blueActive}
                pullToRefresh={() => _onRefresh()}
                renderTabBar={() => <TabBar tabStyles={{ tab: {} }} tabMargin={25} underlineHeight={3} tabBarStyle={{ backgroundColor: colors.blueDefault, marginTop: 0 }} tabBarTextStyle={{ fontSize: fonts.small }} underlineColor={colors.white} />}>
                    <Caracters tabLabel={{ label: "Características" }} label="Page #1" />
                    <Attributes tabLabel={{ label: "Atributos" }} label="Page #2" />
                    <Essences tabLabel={{ label: "Essências" }} label="Page #3" />
                    <Skill tabLabel={{ label: "Perícias" }} label="Page #4" points={points} />
                    <Equipaments tabLabel={{ label: "Equipamentos" }} label="Page #5" />
                    <Inventory tabLabel={{ label: "Inventário" }} label="Page #6" />
                    <Ability tabLabel={{ label: "Skills" }} label="Page #7" />
                    <Magics tabLabel={{ label: "Magias" }} label="Page #8" />
                    <Background tabLabel={{ label: "Background" }} label="Page #9" />
                {/*}<PatientProfile tabLabel={{ label: "PERFIL" }} label="Page #3" />{*/}
            </ScrollableTabView>
        </Container >
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 0,
        backgroundColor: colors.blueDefault,
    },
    headerContent: {
        alignItems: 'center',
        marginTop: 15
    },
    tabBarText: {
        fontFamily: fonts.medium,
        fontSize: 18
    }
})