const weatherForm = document.querySelector('form');
const serach = document.querySelector('input');
const message1 = document.querySelector('#msg1');
const message2 = document.querySelector('#msg2');


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = serach.value;
  
  message1.textContent = 'Loading...';
  message2.textContent = '';
  
  fetch('/weather?address=' + location).then((result) => {
    result.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecast;
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
