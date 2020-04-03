import styled from 'styled-components/native';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import metrics from '../../../config/metrics';

export const NavHeader = styled.View`
    padding-bottom: 15px;
    background-color: ${colors.greenDefault}
    justify-content: center;
`;

export const Scroll = styled.ScrollView`
    
`;
export const Nv = styled.Text`
    color: ${colors.grayWhite};
    font-size: ${fonts.small}px;
    text-align: left;
    margin-top: 45px;
`

export const CardWhite = styled.View`
    background-color: ${colors.white}
    max-height: 300px;
    padding: 15px;
    border-radius: ${metrics.baseRadius}px;
    justify-content: space-between;
`;