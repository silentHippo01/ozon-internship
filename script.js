const normalInp = document.querySelector('#progress__inputs-value');
const animateBtn = document.querySelector('#progress__switch-animate');
const hideBtn = document.querySelector('#progress__switch-hide');

const progressBar = document.querySelector('.progress__bar');
const circle = document.querySelector('.progress__circle');

const radius = circle.r.baseVal.value;
const circleLength = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circleLength} ${circleLength}`;
circle.style.strokeDashoffset = circleLength;

function setProgress(per){
    const offset = circleLength - per / 100 * circleLength;
    circle.style.strokeDashoffset = offset;
}
function animateHandler(e){  
    if(e.target.checked){
        let anim = `2s linear forwards anim`;
        circle.style.animation = anim;
    } else {
        circle.style.strokeDashoffset = 653.451;
        circle.style.animation = '';
    }
}

function visibleToogle(e){
    if(e.target.checked){
        progressBar.style.visibility = 'hidden'
    } else {
        progressBar.style.visibility = 'visible'
    }
}

normalInp.addEventListener('change', (e) => setProgress(e.target.value));
animateBtn.addEventListener('change', (e) => animateHandler(e));
hideBtn.addEventListener('change', (e) => visibleToogle(e));