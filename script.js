
let x = prompt('number of squares:');
console.log(x);

const canvas = document.querySelector('.canvas');

let rows = Math.floor(Math.sqrt(x, 2));

    console.log(rows);

for (let i = 0; i<x; i++)
{
    const square = document.createElement('div');
    square.classList.add('square');
    canvas.appendChild(square);
    square.style.width = `${100/rows}%`;
}

const squares = document.querySelectorAll('.square');

const pop = document.querySelector('audio');

squares.forEach(square => {
    square.addEventListener('mouseenter', function(e)
    {
        pop.currentTime=0.1;
        pop.volume=0.3;
        pop.play();
        e.target.style.backgroundColor=(`${getRandomColor()}`);

    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
