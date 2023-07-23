import React from 'react'
import { Alert } from 'react-bootstrap'

// const ErrorMessage = ({ message }) => {
//   return (
//     <>
//       {[
//         'danger'
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           { message }
//         </Alert>
//       ))}
//     </>
//   )
// }

function ErrorMessage( {message, loc, locMessage} ) {
  return (
    <>
      {[
        'danger'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          { message }
          <Alert.Link href = {loc}>{ locMessage }</Alert.Link>.
        </Alert>
      ))}
    </>
  );
}


export default ErrorMessage;
