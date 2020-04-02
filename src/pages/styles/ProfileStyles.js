import styled from 'styled-components/native'
import colors from '../../config/colors'
import fonts from '../../config/fonts'

export const ImageView = styled.TouchableOpacity`
    background-color: #ECF1F8;
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;
export const Image = styled.Image`
    flex: 1;
    border-radius: 40px;
`;
export const BtnB = styled.TouchableOpacity``;

export const NavHeader = styled.View`
  padding-bottom: 15px;
  background-color: ${colors.blueDefault};
  justify-content: center;
`;

export const SectionSubTitle = styled.Text`
    color: ${colors.white};
    font-size: ${fonts.small}px;
    text-align: left;
    margin-top: 15px;
`