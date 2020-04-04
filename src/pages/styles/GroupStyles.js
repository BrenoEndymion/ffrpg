import styled from 'styled-components/native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';


export const MasterName = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.blueTitle};
`;

export const NavHeader = styled.View`
  padding-bottom: 15px;
  background-color: ${colors.blueDefault};
  justify-content: center;
`;

export const DoctorImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
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

