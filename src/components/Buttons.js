import React from 'react';
import { View } from 'react-native';
import { BtnBorded, TextBtnBorded, Container, IconBtnBorded, Btn, BtnFull, IconBtn, TextBtn, BtnCircle, BtnTiny } from './styles/ButtonsStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors';

export const BtnBorded = ({ icon, name, onPress }) => (
    <Container>
        <BtnBorded onPress={onPress}>
            <IconBtnBorded source={icon} />
            <TextBtnBorded>{name}</TextBtnBorded>
        </BtnBorded>
    </Container>
)

export const Btn = ({ icon, name, onPress }) => (
    <Container>
        <Btn onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </Btn>
    </Container>
)

export const BtnCircle = () => (
    <Container>
        <BtnCircle>
            <Icon name={'ios-arrow-round-forward'} color={colors.white} size={45} />
        </BtnCircle>
    </Container>
)

export const BtnFull = ({ icon, name, onPress }) => (
    <Container>
        <BtnFull onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnFull>
    </Container>
)

export const BtnTiny = ({ icon, name, onPress }) => (
    <Container>
        <BtnTiny onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnTiny>
    </Container>
)