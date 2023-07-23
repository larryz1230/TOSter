import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ message }) => {
  return (
    <>
      {[
        'danger'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          { message }
        </Alert>
      ))}
    </>
  )
}

export default ErrorMessage;
