import styled from 'styled-components/native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export const ContainerItems = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 0,
  },
  showsHorizontalScrollIndicator: false,
})``;



export const Shaddow = styled.View``;

export const ItemView = styled.TouchableOpacity`
  height: 100px;
  background-color: ${colors.white};
  align-items: center;
  padding: 20px 15px 20px 15px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const NavHeader = styled.View`
  padding-bottom: 15px;
  background-color: ${colors.blueDefault};
  justify-content: center;
`;

export const MasterName = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.blueTitle};
`;
export const Specialty = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.blueDefault};
`;
export const Distance = styled.Text`
  font-size: ${fonts.textButton}px;
  color: ${colors.blueDefault};
`;

export const DoctorImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

const shaddow = color => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4.0,
  elevation: 4,
});

Shaddow.defaultProps = {
  ...shaddow(colors.blueLight),
};

export const Container = styled.View`
    flex:1;
    background-color: ${colors.grayLight}
`;