import styled from 'styled-components/native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';
import fonts from '../../config/fonts';

export const NavHeader = styled.View`
  padding-bottom: 15px;
  background-color: ${colors.blueDefault};
  justify-content: center;
`;
export const Container = styled.View`
    flex:1;
    background-color: ${colors.grayLight}
`;
export const BtnCircle = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  align-self: center;
  background-color: ${colors.blueDefault}
  align-items: center;
  justify-content: center;
`;