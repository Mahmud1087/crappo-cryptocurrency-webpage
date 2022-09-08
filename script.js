// MENU BUTTON SCRIPT

const btn = document.querySelector('#btn');
const menu = document.querySelector('.menu');
const lists = document.querySelectorAll('.list');

btn.addEventListener('click', function(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
})

// TRADE SECTION CLICK EFFECT
 
const boxes = document.querySelectorAll('.boxes');
const mineBtn = document.querySelectorAll('.mine');
const arrowBtn = document.querySelectorAll('.arrow');

// Setting the first box
boxes[0].classList.add('bgColor');
arrowBtn[0].style.display = 'none';
mineBtn[0].style.display = 'flex';

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {

        //remove class from sibling
        let rmClass = boxes[0];
        while(rmClass) {
            
            if (rmClass.tagName === "DIV") {
                //remove class bgColor (from input.css) to the boxes
                rmClass.classList.remove('bgColor');
                // looping through the 3 boxes and changing the styles of the butons
                for (let j = 0; j < 3; j++){
                arrowBtn[j].style.display = 'flex';
                mineBtn[j].style.display = 'none';
                }
            }
            // pass to the next sibling
            rmClass = rmClass.nextSibling;
            arrowBtn[0] = arrowBtn[0].nextSibling;
            mineBtn[0] = mineBtn[0].nextSibling;
        }

        // add class bgColor (from input.css) to the boxes
        boxes[i].classList.add('bgColor');
        // changing the styles of th button at index i
        arrowBtn[i].style.display = 'none';
        mineBtn[i].style.display = 'flex';
    });
}