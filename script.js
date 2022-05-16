let x = prompt('Chooose number of squares');

const canvas = document.querySelector('.canvas');

let rows = Math.floor(Math.sqrt(x, 2));


for (let i = 0; i<x; i++)
{
    const square = document.createElement('div');
    square.classList.add('square');
    canvas.appendChild(square);
    square.style.width = `${100/rows}%`; 
}

const squares = document.querySelectorAll('.square');

const pop = document.querySelector('audio');

const buttons = document.querySelectorAll('button')

let colorState = ''

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
    if (e.target.classList.contains('black'))
    {
        colorState = 'black' 
    }
    if (e.target.classList.contains('eraser'))
    {
        colorState = 'white'
    }
    if (e.target.classList.contains('rainbow'))
    {
        colorState = 'random'
    }
    if (e.target.classList.contains('red'))
    {
        colorState = 'red'
    }

})
})

let volume = 0.5

input = document.querySelector('input')
image = document.querySelector('#audio')

input.addEventListener('click', function(e) {
    volume = e.target.value / 10
    if (volume == 0)
    {
        image.src = 'audio-muted.png'
    }
    else
    {
        image.src = 'audio.png'
    }
    
})

image.addEventListener('click', ()=> {
    if (volume == 0)
    {
        image.src = 'audio.png'
        input.value = 5
        volume = 0.5
    }
    else 
    {
        image.src = 'audio-muted.png'
        input.value = 0
        volume = 0
    }
})

clearButton = document.querySelector('.reset')

clearButton.addEventListener('click', ()=>{
    squares.forEach(square => square.style.backgroundColor = 'white')
})






squares.forEach(square => {
    square.addEventListener(`mouseenter`, function(e)
    {
        if (colorState !== '')
        {
            pop.currentTime=0.1
            pop.volume= volume
            pop.play()
            if (colorState == 'random')
            {
                e.target.style.backgroundColor=(`${getRandomColor()}`);
            }
            e.target.style.backgroundColor=(`${colorState}`);
        }
        

    });
});



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
