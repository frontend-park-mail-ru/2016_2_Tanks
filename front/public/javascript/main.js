'use strict';
document.onkeydown = document.onkeyup = handle;
let RIGHT_KEY = 39;
let LEFT_KEY = 37;
let UP_KEY = 38;
let DOWN_KEY = 40;
let SPACE_KEY = 32;
let A_KEY = 65;
let S_KEY = 83;
let D_KEY = 68;
let W_KEY = 87;
let TIME_DELAY = 1;

let KeyDown = [
    {name: 'left', state: false},
    {name: 'up', state: false},
    {name: 'right', state: false},
    {name: 'down', state: false}
];
let tank = MakeTank();
tank('normalTank');


let nowTime = Date.now();

setInterval(updatePool, 10);



function handle(e) {
    //if (RIGHT_KEY || LEFT_KEY || UP_KEY || DOWN_KEY)
    //if (Date.now() - nowTime > TIME_DELAY) {
    if (e.keyCode === LEFT_KEY) {
        //tank.move('left');
        if (e.type === "keydown" && !KeyDown[0].state) {
            KeyDown[0].state = true;
        }
        if (e.type == "keyup" && KeyDown[0].state) {
            KeyDown[0].state = false;
        }
    }
    if (e.keyCode === UP_KEY) {
        //tank.move('up');
        if (e.type === "keydown" && !KeyDown[1].state) {
            KeyDown[1].state = true;
        }
        if (e.type == "keyup" && KeyDown[1].state) {
            KeyDown[1].state = false;
        }
    }
    if (e.keyCode === RIGHT_KEY) {
        //tank.move('right');
        if (e.type === "keydown" && !KeyDown[2].state) {
            KeyDown[2].state = true;
        }
        if (e.type == "keyup" && KeyDown[2].state) {
            KeyDown[2].state = false;
        }
    }
    if (e.keyCode === DOWN_KEY) {
        //tank.move('down');
        if (e.type === "keydown" && !KeyDown[3].state) {
            KeyDown[3].state = true;
        }
        if (e.type == "keyup" && KeyDown[3].state) {
            KeyDown[3].state = false;
        }
    }
    if (e.keyCode === D_KEY) {
        tank.gunTurn("right");
    } else if (e.keyCode === W_KEY) {
        tank.gunTurn("up");
    } else if (e.keyCode === A_KEY) {
        tank.gunTurn("left");
    } else if (e.keyCode === S_KEY) {
        tank.gunTurn("down");
    }
    if (e.keyCode === SPACE_KEY) {
        tank.letsShoot();
    }
};


function updatePool() {
    if (Date.now() - nowTime > TIME_DELAY) {
        nowTime = Date.now();
        KeyDown.forEach(function (item) {
            if (item.state)
                tank.move(item.name);
        });
    }
}
