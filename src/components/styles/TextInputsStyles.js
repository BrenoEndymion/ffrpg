import styled from 'styled-components/native';
import metrics from '../../config/metrics'
import colors from '../../config/colors'
import fonts from '../../config/fonts'

export const Input = styled.TextInput`
    font-size: ${fonts.textInput}px;
    height: 50px;
    margin: 7px 0 7px 0;
    padding: 0 15px;
    border-radius: ${metrics.baseRadius}px;
    background-color: ${colors.grayLight};
    justify-content: center;
    font-family: ${fonts.black}
`;

export const InputWhite = styled.TextInput`
    font-size: ${fonts.textInput}px;
    height: 45px;
    margin: 7px 0 7px 0;
    padding: 0 15px;
    border-radius: ${metrics.baseRadius}px;
    background-color: ${colors.white};
    justify-content: center;
`;
