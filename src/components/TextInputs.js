import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

import { Container, Input, InputWhite } from './styles/TextInputsStyles';

export const TextInput = ({ placeholder, secure,onChangeText }) => (
    <Input
        placeholder={placeholder}
        placeholderTextColor={colors.textColor}
        secureTextEntry={secure}
        textColor={colors.textColor}
        style={styles.textInputStyle}
        onChangeText={onChangeText}
    />
)

export const TextInputWhite = ({ placeholder, secure, value, onChangeText }) => (
    <InputWhite
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors.textColor}
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