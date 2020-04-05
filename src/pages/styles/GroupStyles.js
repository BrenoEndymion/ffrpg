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

export const Image = styled.Image`
    flex: 1;
    border-radius: 40px;
`;
export const TextWelcome = styled.Text`
    font-size: ${fonts.big}px;
    font-family: ${fonts.regular}
    color: ${colors.blueDark}
`;
export const ImageView = styled.View`
    background-color: ${colors.white}
    height: 50;
    width: 50px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`;

export const ImageViewOp = styled.TouchableOpacity`
    background-color: #ECF1F8;
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;

export const Container = styled.View`flex:1`;

const shaddow = (color) => ({
    shadowColor: color,
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.00,
    elevation: 24,
})

ImageView.defaultProps = {
    ...shaddow(colors.blueDefault)
}

