const firstImageElement = document.getElementById('1');
const secondImageElement = document.getElementById('2');
const lastImageElement = document.getElementById('3');
const maxAttempts = 25;
let counter = 0;
let arrOfNames = [];
let arrOfVotes = [];


function generateRandomIndex() {
  return Math.floor(Math.random() * product.globArr.length);
}

function product(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.show = 0;
  product.globArr.push(this);
  arrOfNames.push(this.name);
}
/*product.globArr = [];
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
new product('wine-glass', 'https://github.com/LTUC/amman-201d32/blob/main/class-11/lab/assets/wine-glass.jpg?raw=true');*/
product.globArr = [];
new product('bag', 'image/bag.jpg');
new product('banana', 'image/banana.jpg');
new product('bathroom', 'image/bathroom.jpg');
new product('boots', 'image/boots.jpg');
new product('breakfast', 'image/breakfast.jpg');
new product('bubblegum', 'image/bubblegum.jpg');
new product('chair', 'image/chair.jpg');
new product('cthulhu', 'image/cthulhu.jpg');
new product('dog-duck', 'image/dog-duck.jpg');
new product('dragon', 'image/dragon.jpg');
new product('pen', 'image/pen.jpg');
new product('pet-sweep', 'image/pet-sweep.jpg');
new product('scissors', 'image/scissors.jpg');
new product('shark', 'image/shark.jpg');
new product('sweep', 'image/sweep.png');
new product('tauntaun', 'image/tauntaun.jpg');
new product('unicorn', 'image/unicorn.jpg');
new product('water-can', 'image/water-can.jpg');
new product('wine-glass', 'image/wine-glass.jpg');


let firstIndex = 0;
let secondIndex = 0;
let lastIndex = 0;
let arrn = [];
function renderthreeImages() {
  firstIndex = generateRandomIndex();
  secondIndex = generateRandomIndex();
  lastIndex = generateRandomIndex();

  while (firstIndex === secondIndex || firstIndex === lastIndex || lastIndex === secondIndex || arrn.includes(firstIndex) || arrn.includes(secondIndex) || arrn.includes(lastIndex)) {
    firstIndex = generateRandomIndex();
    secondIndex = generateRandomIndex();
    lastIndex = generateRandomIndex();
  }
  arrn[0] = firstIndex;
  arrn[1] = secondIndex;
  arrn[2] = lastIndex;


  console.log(firstIndex, secondIndex, lastIndex);
  firstImageElement.src = product.globArr[firstIndex].source;
  secondImageElement.src = product.globArr[secondIndex].source;
  lastImageElement.src = product.globArr[lastIndex].source;
}
renderthreeImages();
firstImageElement.addEventListener('click', handleClick);
secondImageElement.addEventListener('click', handleClick);
lastImageElement.addEventListener('click', handleClick);

const section = document.getElementById('one');
section.addEventListener('click',handleClick);
let btnEl ;


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
    btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', handleShow);
    section.removeEventListener('click',handleClick)
  }
}

function handleShow(){
  renderList();
  gettingChart();
  btnEl.removeEventListener('click',handleShow);
}
let arrOfshown = []; 
function renderList() {
  const ul = document.getElementById('unList');

  for (let i = 0; i < product.globArr.length; i++) {
    arrOfVotes.push(product.globArr[i].votes);
    arrOfshown.push(product.globArr[i].show);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${product.globArr[i].name} has this number of votes ${product.globArr[i].votes}, and has this number of show ${product.globArr[i].show}`;
  }


  /*firstImageElement.removeEventListener('click', handleClick);
  secondImageElement.removeEventListener('click', handleClick);
  lastImageElement.removeEventListener('click', handleClick);*/
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

function gettingChart(){
  let ctx = document.getElementById('myChart')
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: arrOfNames,
          datasets: [{
              label: '# of Votes',
              data: arrOfVotes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          },{
            label: '# of Shown',
            data: arrOfshown,
            backgroundColor: [
              'rgb(54, 162, 235)'
            ]
          }]
      },
  })
  }
  
