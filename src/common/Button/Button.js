import React from 'react';
import { Text  , View} from 'react-native';
import { Touchable , ButtonArea ,ButtonText} from './style'


const Button = ({onPress , buttonText}) => {
    return (
        <Touchable
          onPress={onPress}
        >
        <ButtonArea>
            <ButtonText>
                {buttonText}
            </ButtonText>
        </ButtonArea>
        </Touchable> 
        
    );
}

export default Button;
