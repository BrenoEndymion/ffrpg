import React from 'react';
import { View } from 'react-native';
import { BtnBorded, TextBtnBorded, Container, IconBtnBorded, Btn, BtnFull, IconBtn, TextBtn, BtnCircle, BtnTiny } from './styles/ButtonsStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors';

export const BtnDefaultBorded = ({ icon, name, onPress }) => (
    <Container>
        <BtnDefaultBorded onPress={onPress}>
            <IconBtnBorded source={icon} />
            <IconBtnBorded>{name}</IconBtnBorded>
        </BtnDefaultBorded>
    </Container>
)

export const BtnDefault = ({ icon, name, onPress }) => (
    <Container>
        <Btn onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </Btn>
    </Container>
)

export const BtnDefaultCircle = () => (
    <Container>
        <BtnDefaultCircle>
            <Icon name={'ios-arrow-round-forward'} color={colors.white} size={45} />
        </BtnDefaultCircle>
    </Container>
)

export const BtnDefaultFull = ({ icon, name, onPress }) => (
    <Container>
        <BtnFull onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnFull>
    </Container>
)

export const BtnDefaultTiny = ({ icon, name, onPress }) => (
    <Container>
        <BtnTiny onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnTiny>
    </Container>
)