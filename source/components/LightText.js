import React from 'react';
import Text from './Text';

const LightText = ({children, fontWeight, ...rest}) => {
  return (
    <Text fontWeight="light" {...rest}>
      {children}
    </Text>
  );
};

export default LightText;
