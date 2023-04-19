import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx'

export const BUTTON_TYPE_CLASSSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSSES.base) => (
  {
    [BUTTON_TYPE_CLASSSES.base] : BaseButton,
    [BUTTON_TYPE_CLASSSES.google] : GoogleSignInButton,
    [BUTTON_TYPE_CLASSSES.inverted] : InvertedButton,
  }[buttonType]
)

const Button = ({children, buttonType, ...otherprops}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton{...otherprops}>
        {children}
    </CustomButton>
  )
}

export default Button