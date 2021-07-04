const firstImageElement = document.getElementById('1');
const secondImageElement = document.getElementById('2');
const lastImageElement = document.getElementById('3');
const maxAttempts = 25;
let counter = 0;

function generateRandomIndex() {
  return Math.floor(Math.random() * product.globArr.length);
}

function product(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.show = 0;
  product.globArr.push(this);
}
product.globArr = [];
new product('bag', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/bag.jpg');
new product('banana', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/banana.jpg');
new product('bathroom', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/bathroom.jpg');
new product('boots', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/boots.jpg');
new product('breakfast', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/breakfast.jpg');
new product('bubblegum', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/bubblegum.jpg');
new product('chair', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/chair.jpg');
new product('cthulhu', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/cthulhu.jpg');
new product('dog-duck', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/dog-duck.jpg');
new product('dragon', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/dragon.jpg');
new product('pen', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/pen.jpg');
new product('pet-sweep', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/pet-sweep.jpg');
new product('scissors', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/scissors.jpg');
new product('shark', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/shark.jpg');
new product('sweep', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/sweep.png');
new product('tauntaun', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/tauntaun.jpg');
new product('unicorn', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/unicorn.jpg');
new product('water-can', 'https://raw.githubusercontent.com/LTUC/amman-201d32/main/class-11/lab/assets/water-can.jpg');
new product('wine-glass', 'https://github.com/LTUC/amman-201d32/blob/main/class-11/lab/assets/wine-glass.jpg?raw=true');


let firstIndex;
let secondIndex;
let lastindex;

function renderthreeImages() {
  firstIndex = generateRandomIndex();
  secondIndex = generateRandomIndex();
  lastIndex = generateRandomIndex();
  while (firstIndex === secondIndex || firstIndex === lastIndex || lastIndex === secondIndex) {
    secondIndex = generateRandomIndex();
    lastIndex = generateRandomIndex();
  }
  firstImageElement.src = product.globArr[firstIndex].source;
  secondImageElement.src = product.globArr[secondIndex].source;
  lastImageElement.src = product.globArr[lastIndex].source;
}
renderthreeImages();
firstImageElement.addEventListener('click', handleClick);
secondImageElement.addEventListener('click', handleClick);
firstImageElement, addEventListener('click', handleClick);
function handleClick(event) {
  counter++;

  if (maxAttempts >= counter) {
    if (event.target.id === '1') {
      product.globArr[firstIndex].votes++;
      product.globArr[firstIndex].show++;
      product.globArr[secondIndex].show++;
      product.globArr[lastIndex].show++;

    } else if (event.target.id === '2') {
      product.globArr[secondIndex].votes++;
      product.globArr[firstIndex].show++;
      product.globArr[secondIndex].show++;
      product.globArr[lastIndex].show++;
    } else if (event.target.id === '3') {
      product.globArr[lastIndex].votes++;
      product.globArr[firstIndex].show++;
      product.globArr[secondIndex].show++;
      product.globArr[lastIndex].show++;
    }

    renderthreeImages();
  } else {
    renderList();
  }
}
function renderList() {
  const ul = document.getElementById('unList');

  for (let i = 0; i < product.globArr.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${product.globArr[i].name} has this number of votes ${product.globArr[i].votes}, and has this number of show ${product.globArr[i].show}`;
  }


  firstImageElement.removeEventListener('click', handleClick);
  secondImageElement.removeEventListener('click', handleClick);
  lastImageElement.removeEventListener('click', handleClick);
}
/*function renderlist() {
  const ul = document.getElementById('unList1');
  for (let i = 0; i < product.globArr.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${product.globArr[i].name} has this number of show ${product.globArr[i].show}`
  }
  firstImageElement.removeEventListener('click', handleClick);
  secondImageElement.removeEventListener('click', handleClick);
  lastImageElement.removeEventListener('click', handleClick);
}*/

