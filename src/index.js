import { useState } from 'react';


function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}

// function getB() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000);
//   })
// }
