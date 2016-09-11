'use strict';
document.onkeydown = handle;
let RIGHT_KEY=39;
let LEFT_KEY=37;
let UP_KEY=38;
let DOWN_KEY=40;
let SPACE_KEY=32;
let A_KEY=65;
let S_KEY=83;
let D_KEY=68;
let W_KEY=87;

let tank = MakeTank();
tank('normalTank');
function handle(e) {
    if (e.keyCode === RIGHT_KEY) {
        tank.move('right');
    } if (e.keyCode === UP_KEY) {
        tank.move('up');
    } if (e.keyCode === LEFT_KEY) {
        tank.move('left');
    } if (e.keyCode === DOWN_KEY) {
        tank.move('down');
    } if (e.keyCode === D_KEY) {
        tank.gunTurn("right");
    } else if (e.keyCode === W_KEY) {
        tank.gunTurn("up");
    } else if (e.keyCode === A_KEY) {
        tank.gunTurn("left");
    } else if (e.keyCode === S_KEY) {
        tank.gunTurn("down");
    } if (e.keyCode === SPACE_KEY) {
        tank.letsShoot();
    }
};
