export default function generateJoke() {
  const id = document.querySelector('#answer');
  if (id.innerHTML == '') {
    id.innerHTML = 'I am me!'
  } else {
    id.innerHTML = '';
  }
}

