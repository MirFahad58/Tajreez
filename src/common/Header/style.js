import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const HeaderView = styled.View`
    backgroundColor:${props => props.backgroundColor}
    alignItems:center
    shadowColor: #000
    shadowOpacity: 0.2
    flexDirection : row
    height: ${Platform.OS == 'ios' ? 50 : 50}
`;

export const HeaderLeft = styled.View`
    flex : .3
    marginLeft :5
    opacity : ${props => props.theme.opacity}
`;

export const HeaderTitle = styled.View`
    flex: 1
    justifyContent:center
    alignItems:center

`;

export const HeaderText = styled.Text`
    color: white
`;

export const HeaderRight = styled.View`
    flex:.3
`;
