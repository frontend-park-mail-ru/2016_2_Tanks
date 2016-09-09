'use strict';
kinput.onkeyup = handle;
let RIGHT_KEY=39;
let LEFT_KEY=37;
let UP_KEY=38;
let DOWN_KEY=40;
let SPACE_KEY=32;
let A_KEY=65;
let S_KEY=83;
let D_KEY=68;
let W_KEY=87;

function rotateElem(elem, diraction){
    elem.classList.toggle("rotation_right",false);
    elem.classList.toggle("rotation_up",false);
    elem.classList.toggle("rotation_left",false);
    elem.classList.toggle("rotation_down",false);
    elem.classList.toggle(diraction,true);
}

function handle(e) {
    if (e.keyCode === RIGHT_KEY) {
        //console.log('right');
        tank.style.left = isNaN(parseInt(tank.style.left)) ? 0 : parseInt(tank.style.left) + 10 + "px";
        gun.style.left = isNaN(parseInt(gun.style.left)) ? 0 : parseInt(gun.style.left) + 10 + "px";
        rotateElem(tank,"rotation_right");
        //tank.classList.toggle("rotation_right",true);
    } else if (e.keyCode === UP_KEY) {
        //console.log('up');
        tank.style.top = isNaN(parseInt(tank.style.top)) ? 0 : parseInt(tank.style.top) - 10 + "px";
        gun.style.top = isNaN(parseInt(gun.style.top)) ? 0 : parseInt(gun.style.top) - 10 + "px";
        rotateElem(tank,"rotation_up");
    } else if (e.keyCode === LEFT_KEY) {
        //console.log('left');
        tank.style.left = isNaN(parseInt(tank.style.left)) ? 0 : parseInt(tank.style.left) - 10 + "px";
        gun.style.left = isNaN(parseInt(gun.style.left)) ? 0 : parseInt(gun.style.left) - 10 + "px";
        rotateElem(tank,"rotation_left");
    } else if (e.keyCode === DOWN_KEY) {
        //console.log('down');
        tank.style.top = isNaN(parseInt(tank.style.top)) ? 0 : parseInt(tank.style.top) + 10 + "px";
        gun.style.top = isNaN(parseInt(gun.style.top)) ? 0 : parseInt(gun.style.top) + 10 + "px";
        rotateElem(tank,"rotation_down");
    } if (e.keyCode === D_KEY) {
        rotateElem(gun,"rotation_right");
    } else if (e.keyCode === W_KEY) {
        rotateElem(gun,"rotation_up");
    } else if (e.keyCode === A_KEY) {
        rotateElem(gun,"rotation_left");
    } else if (e.keyCode === S_KEY) {
        rotateElem(gun,"rotation_down");
    } if (e.keyCode === SPACE_KEY) {
        //console.log('down');
        tank.style.top = isNaN(parseInt(tank.style.top)) ? 0 : parseInt(tank.style.top) + 10 + "px";
        rotateElem(tank,"rotation_down");
    }
}