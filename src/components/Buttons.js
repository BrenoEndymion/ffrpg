import React from 'react';
import { View } from 'react-native';
import { BtnBorded, TextBtnBorded, Container, IconBtnBorded, Btn, BtnFull, IconBtn, TextBtn, BtnCircle, BtnTiny } from './styles/ButtonsStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/colors';

export const BtnDefaultBorded = ({ icon, name, onPress }) => (
    <Container>
        <BtnBorded onPress={onPress}>
            <IconBtnBorded source={icon} />
            <TextBtnBorded>{name}</TextBtnBorded>
        </BtnBorded>
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

export const BtnCircleDefault = () => (
    <Container>
        <BtnCircle>
            <Icon name={'ios-arrow-round-forward'} color={colors.white} size={45} />
        </BtnCircle>
    </Container>
)

export const BtnFullDefault = ({ icon, name, onPress }) => (
    <Container>
        <BtnFull onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnFull>
    </Container>
)

export const BtnTinyDefault = ({ icon, name, onPress }) => (
    <Container>
        <BtnTiny onPress={onPress}>
            <IconBtn source={icon} />
            <TextBtn>{name}</TextBtn>
        </BtnTiny>
    </Container>
)