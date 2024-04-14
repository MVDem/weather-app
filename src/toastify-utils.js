import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import './style.scss';

export const showFailMessage = (messageStr) => {
  return Toastify({
    text: `${messageStr}`,
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))',
    },
  }).showToast();
};
