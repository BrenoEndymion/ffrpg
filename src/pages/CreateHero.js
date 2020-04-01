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
                tabBarActiveTextColor={colors.white}
                renderTabBar={() => <TabBar tabStyles={{ tab: {} }} tabMargin={25} underlineHeight={3} tabBarStyle={{ backgroundColor: colors.blueDefault, marginTop: 0 }} tabBarTextStyle={{ fontSize: fonts.small }} underlineColor={colors.white} />}>
                <Login tabLabel={{ label: "Características" }} label="Page #1" />
                <Login tabLabel={{ label: "Atributos" }} label="Page #2" />
                <Login tabLabel={{ label: "Essências" }} label="Page #3" />
                <Login tabLabel={{ label: "Perícias" }} label="Page #4" />
                <Login tabLabel={{ label: "Equipamentos" }} label="Page #5" />
                <Login tabLabel={{ label: "Inventário" }} label="Page #6" />
                <Login tabLabel={{ label: "Skills/Magias" }} label="Page #7" />
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