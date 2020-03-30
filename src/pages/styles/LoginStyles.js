import styled from 'styled-components/native';
import colors from '../../config/colors'
import fonts from '../../config/fonts'

export const Image = styled.Image``;
export const TextWelcome = styled.Text`
    font-size: ${fonts.big}px;
    font-family: ${fonts.regular}
    color: ${colors.blueDark}
`;
export const ImageView = styled.View`
    background-color: ${colors.white}
    height: 80px;
    width: 80px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
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