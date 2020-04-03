import styled from 'styled-components/native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import metrics from '../../config/metrics';

export const NavHeader = styled.View`
    padding-bottom: 15px;
    background-color: ${colors.greenDefault}
    justify-content: center;
`;

export const Scroll = styled.ScrollView`
    
`;
export const Nv = styled.Text`
    color: ${colors.grayWhite};
    font-size: ${fonts.ultraSmall}px;
    text-align: left;
`

export const ImageViewOp = styled.TouchableOpacity`
    background-color: ${colors.white};
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;