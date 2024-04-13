import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const showFailMessage = (messageStr) => {
  return Toastify({
    text: `${messageStr}`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))',
    },
  }).showToast();
};
