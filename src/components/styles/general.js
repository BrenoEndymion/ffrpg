import styled from 'styled-components/native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export const ShaddowGreen = styled.View``;

export const Container = styled.View`
    flex:1;
    background-color: ${colors.white}
`;

export const ScrollView = styled.ScrollView``;

export const Horizontal = styled.View`
    flex-direction: row;
    
    
`
export const Column = styled.View`
    flex-direction: column;
`

export const AlignCenter = styled.View`
    flex:1; 
    align-items: center;
`;
export const AlignLeft = styled.View`
    flex:1; 
    align-items: left;
`;
export const Margin = styled.View`
    margin: 0 ${metrics.marginDefault}px 0 ${metrics.marginDefault}px;
`;
export const MarginTop = styled.View`
    margin-top: ${metrics.marginDefault}px;
`;

export const MarginBottom = styled.View`
    margin-bottom: ${metrics.marginDefault}px;
`;

export const SpaceBetween = styled.View`
    justify-content: space-between;
    flex:1;
`;

export const Together = styled.View``;

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

ShaddowGreen.defaultProps = {
    ...shaddow(colors.greenDefault)
}