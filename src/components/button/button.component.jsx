import React from 'react';
import './button.styles.scss'

const Button = ({children, buttonType, ...otherprops}) => {

  const BUTTON_TYPE_CLASSSES = {
    google: "google-sign-in",
    inverted: "inverted",
  }


  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSSES[buttonType]}`} {...otherprops}>
        {children}
    </button>
  )
}

export default Button