import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = () => {
  return (
    <>
      {[
        'danger'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Company not found!
        </Alert>
      ))}
    </>
  )
}

export default ErrorMessage;
