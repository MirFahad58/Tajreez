import styled from 'styled-components/native';


export const Div = styled.View`
    flex :1
`;

export const FirstTextView = styled.View`
    flex: 0.8
    justifyContent: flex-end
    alignContent: flex-start
`;

export const SecondTextView = styled.View`
    justifyContent: flex-end
    alignContent: flex-start
`;

export const TextStyle = styled.Text`
    fontSize: 20
    color: white
    fontWeight: 900
    marginLeft: 20
`;

export const ListView = styled.View`
    flex: 0.8
    paddingLeft: 20
`;

export const ButtonArea = styled.View`
    flex: 0.2
    flexDirection: row
    marginHorizontal: 10
`;

export const ButtonViewLogin = styled.View`
    flex: 0.5
    justifyContent: center
    marginHorizontal: 10
    marginVertical: 25
    borderColor: white 
    borderWidth: 1
    borderRadius: 1
`;

export const ButtonViewRegister = styled.View`
    backgroundColor: #ffdc69 
    flex: 0.5 
    justifyContent: center 
    marginHorizontal: 10 
    marginVertical: 25 
    borderColor: #ffdc69
    borderWidth: 1
    borderRadius:1
`;

export const ButtonTextAreaLogin = styled.Text`
    fontSize: 14 
    alignSelf: center 
    color: white 
    fontWeight: bold
`;

export const ButtonTextAreaRegister = styled.Text`
    fontSize: 14 
    alignSelf: center 
    color: black 
    fontWeight: bold
`;