'use strict';
kinput.onkeyup = handle;
let RIGHT_KEY=39;
let LEFT_KEY=37;
let UP_KEY=38;
let DOWN_KEY=40;

function rotateTank(tank, diraction){
    tank.classList.toggle("rotation_right",false);
    tank.classList.toggle("rotation_up",false);
    tank.classList.toggle("rotation_left",false);
    tank.classList.toggle("rotation_down",false);
    tank.classList.toggle(diraction,true);
}

function handle(e) {
    if (e.keyCode === RIGHT_KEY) {
        console.log('right');
        tank.style.left = isNaN(parseInt(tank.style.left)) ? 0 : parseInt(tank.style.left) + 10 + "px";
        rotateTank(tank,"rotation_right");
        //tank.classList.toggle("rotation_right",true);
    } else if (e.keyCode === UP_KEY) {
        console.log('up');
        tank.style.top = isNaN(parseInt(tank.style.top)) ? 0 : parseInt(tank.style.top) - 10 + "px";
        rotateTank(tank,"rotation_up");
    } else if (e.keyCode === LEFT_KEY) {
        console.log('left');
        tank.style.left = isNaN(parseInt(tank.style.left)) ? 0 : parseInt(tank.style.left) - 10 + "px";
        rotateTank(tank,"rotation_left");
    } else if (e.keyCode === DOWN_KEY) {
        console.log('down');
        tank.style.top = isNaN(parseInt(tank.style.top)) ? 0 : parseInt(tank.style.top) + 10 + "px";
        rotateTank(tank,"rotation_down");
    }
}