import styled from 'styled-components/native';
import metrics from '../../config/metrics'
import colors from '../../config/colors'
import fonts from '../../config/fonts'

export const Input = styled.TextInput`
    font-size: ${fonts.textInput}px;
    fontFamily: ${fonts.regular};
    height: 50px;
    margin: 7px 0 7px 0;
    padding: 0 15px;
    border-radius: ${metrics.baseRadius}px;
    background-color: ${colors.grayLight};
    justify-content: center;
`;

export const InputWhite = styled.TextInput`
    font-size: ${fonts.textInput}px;
    fontFamily: ${fonts.regular};
    height: 45px;
    margin: 7px 0 7px 0;
    padding: 0 15px;
    border-radius: ${metrics.baseRadius}px;
    background-color: ${colors.white};
    justify-content: center;
`;
