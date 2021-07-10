const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      // destruction
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;

      // const response = JSON.parse(xhr.responseText);
      // const joke = response.value;
      // content.innerHTML = joke;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
