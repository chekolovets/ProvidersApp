import React from 'react';
import {withTheme} from 'react-native-paper';

import Text from './Text';

const MediumText = ({children, fontWeight, style, ...rest}) => {
  return (
    <Text fontWeight="medium" {...rest}>
      {children}
    </Text>
  );
};

export default withTheme(MediumText);
