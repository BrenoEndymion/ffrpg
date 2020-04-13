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

export const Specialty = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.gray};
`;

export const SpecialtyRed = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.red};
`;

export const BtnCircle = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-top: 25px;
  background-color: ${colors.blueDefault}
  align-items: center;
  justify-content: center;
`;