import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

import { Container, Input, InputWhite } from './styles/TextInputsStyles';

export const TextInput = ({ placeholder, secure,onChangeText, editable }) => (
    <Input
        placeholder={placeholder}
        placeholderTextColor={colors.placeHolder}
        secureTextEntry={secure}
        textColor={colors.textColor}
        style={styles.textInputStyle}
        onChangeText={onChangeText}
        editable = {editable}
    />
)

export const TextInputWhite = ({ placeholder, secure, value, onChangeText }) => (
    <InputWhite
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors.placeHolder}
        secureTextEntry={secure}
        textColor={colors.textColor}
        style={styles.textInputStyle}
    />
)

const styles = StyleSheet.create({
    textInputStyle: {
        color: colors.textColor,
    }
});