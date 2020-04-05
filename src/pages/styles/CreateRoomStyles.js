import styled from 'styled-components/native'
import colors from '../../config/colors'

export const ImageView = styled.TouchableOpacity`
    background-color: ${colors.white};
    height: 130px;
    width: 130px;
    border-radius: 65px;
`;
export const Image = styled.Image`
    flex: 1;
    border-radius: 65px;
`;
export const BtnB = styled.TouchableOpacity``;

export const Container = styled.View`
    flex:1;
    background-color: ${colors.grayLight}
`;