import styled from 'styled-components/native';
import colors from "../../config/colors"
import metrics from "../../config/metrics"
import fonts from "../../config/fonts"

export const Container = styled.View``

// Button Borded
export const BtnBorded = styled.TouchableOpacity`
    height: ${metrics.buttonHeight}px;
    border-width: 1px;
    border-color: ${colors.blueDefault};
    border-radius: ${metrics.baseRadius}px;
    justify-content: space-between;
    align-items: center;
    margin: 15px ${metrics.marginDefault}px 0px ${metrics.marginDefault}px;
    flex-direction: row;
`;

export const TextBtnBorded = styled.Text`
    color: ${colors.blueDefault}; 
    font-size: ${fonts.textButton}px;
    width: 100%;
    text-align: center;
    position: absolute;
`;

export const IconBtnBorded = styled.Image`
    margin-left: 15px;
    tint-color: ${colors.blueDefault};
`;

// Button
export const Btn = styled.TouchableOpacity`
    height: ${metrics.buttonHeight}px;
    background-color: ${colors.blueDefault}
    border-radius: ${metrics.baseRadius}px;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 15px ${metrics.marginDefault}px 0px ${metrics.marginDefault}px;
    flex-direction: row;
`;

export const BtnFull = styled.TouchableOpacity`
    height: ${metrics.buttonHeight}px;
    background-color: ${colors.blueDefault}
    border-radius: ${metrics.baseRadius}px;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px ${metrics.marginDefault}px;
    flex-direction: row;
`;

export const BtnTiny = styled.View`
    height: 25px;
    background-color: ${colors.blueDefault}
    border-radius: ${metrics.baseRadius}px;
    align-items: center;
    margin: 5px 0px 5px 0px;
    justify-content: center;
`;

export const TextBtn = styled.Text`
    color: ${colors.white}; 
    font-size: ${fonts.textButton}px;
    width: 100%;
    text-align: center;
    position: absolute;
`;

export const IconBtn = styled.Image`
    margin-left: 15px;
`;

// Button Circle
export const BtnCircle = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-self: center;
  background-color: ${colors.blueDefault}
  align-items: center;
  justify-content: center;
`;