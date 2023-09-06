const searchInput = document.querySelector('input');
const list = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];
console.log(li);

const searchTask = function(e) {
  const searchText = e.target.value.toLowerCase();
  // for eah li check if li contain letter from input value
  const result = li.filter(element =>
    element.textContent.toLowerCase().includes(searchText));
    list.textContent = "";
  result.forEach((element) => {

    list.appendChild(element);
  })
}

searchInput.addEventListener('input', searchTask);
