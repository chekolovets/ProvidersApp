import React from 'react';
import Button from './Button';
import {ACCENT} from '../lib/colors';

const SecondaryButton = ({children, ...rest}) => (
  <Button color={ACCENT} {...rest}>
    {children}
  </Button>
);

export default SecondaryButton;
