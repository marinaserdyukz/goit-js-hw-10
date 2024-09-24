import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btnEl = document.querySelector('button')
const inputEl = document.querySelector('.first-input')
const formEl = document.querySelector('.form')

btnEl.addEventListener('click', e => {
    e.preventDefault();
    
    const promise = new Promise((resolve, reject) => {
        let delay = Number(inputEl.value);
        const state = formEl.state.value;
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });

    promise
        .then(message => {
            iziToast.show({
                message: message,
                messageColor: 'white',
                backgroundColor: 'green',
                position: 'topRight',
                close: false,
                closeOnClick: false,
            });
            console.log('Promise fulfilled');
        })
        .catch(errorMessage => {
            iziToast.show({
                message: errorMessage,
                messageColor: 'white',
                backgroundColor: 'coral',
                position: 'topRight',
                close: false,
                closeOnClick: false,
            });
            console.log('Promise rejected');
        });
});