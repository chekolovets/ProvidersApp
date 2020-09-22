import React from 'react';
import Text from './Text';

const RegularText = ({children, fontWeight, ...rest}) => {
  return (
    <Text fontWeight="normal" {...rest}>
      {children}
    </Text>
  );
};

export default RegularText;
