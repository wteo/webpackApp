export default function generateJoke() {
  const id = document.querySelector('#answer');
  if (id.innerHTML == '') {
    id.innerHTML = 'Boo!'
  } else {
    id.innerHTML = '';
  }
}

