import React from 'react';
import LoginForm from './../form/loginform';

// function status(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   } else {
//     return new Promise((resolve, reject) => {
//       return reject(response);
//     });
//   }
// }

// function json(response) {
//   return response.json();
// }

function Login() {
  return <LoginForm />;
}
export default Login;
