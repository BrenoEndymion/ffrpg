import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from 'react-native';

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

export default function CreateHero(pro) {

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
                tabBarInactiveTextColor={colors.white}
                tabBarActiveTextColor={colors.blueActive}
                renderTabBar={() => <TabBar tabStyles={{ tab: {} }} tabMargin={25} underlineHeight={3} tabBarStyle={{ backgroundColor: colors.blueDefault, marginTop: 0 }} tabBarTextStyle={{ fontSize: fonts.small }} underlineColor={colors.white} />}>
                <Caracters tabLabel={{ label: "Características" }} label="Page #1" />
                <Attributes tabLabel={{ label: "Atributos" }} label="Page #2" />
                <Essences tabLabel={{ label: "Essências" }} label="Page #3" />
                <Skill tabLabel={{ label: "Perícias" }} label="Page #4" />
                <Equipaments tabLabel={{ label: "Equipamentos" }} label="Page #5" />
                <Inventory tabLabel={{ label: "Inventário" }} label="Page #6" />
                <Ability tabLabel={{ label: "Skills" }} label="Page #7" />
                <Magics tabLabel={{ label: "Magias" }} label="Page #8" />
                <Background tabLabel={{ label: "Background" }} label="Page #8" />
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