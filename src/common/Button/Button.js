import React from 'react';
import PropTypes from 'prop-types';
import { Touchable, ButtonArea, ButtonText } from './style';

const Button = ({ onPress, buttonText }) => (
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

Button.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
};
Button.defaultProps = {
  onPress: () => {},
  buttonText: '',
};

export default Button;
