/**
 * Created by jake on 11.09.16.
 */
function MakeTank() {
    let data = document.createElement('tank');
    let position = {
        x: 0,
        y: 0
    };
    let speed = 10;
    let housing = document.createElement('img');
    let gun = document.createElement('img');
    let shot = document.createElement('img');

    housing.id = "housing";
    gun.id = "gun";
    shot.id = "shot";

    data.appendChild(housing);
    data.appendChild(gun);
    data.appendChild(shot);

    function tank(style) {
        if (style == null)
            style = 'burn';

        housing.src = "/images/housing.gif";
        gun.src = "/images/gun.gif";
        shot.src = "/images/shot.gif";

        tank.housing(style);
        tank.gun(style);
        tank.shot('burn');

        //data.style.transition=" left .5s linear";
        //data.style.transition+=", top .5s linear";
        //housing.style.transition=" rotate(90deg) 10s linear";

        data.style.position = "absolute";
        data.style.left = position.x + "px";
        data.style.top = position.y + "px";

        gun.style.transform="rotate(0deg)";

        document.body.appendChild(data);
    }

    tank.housing = function (style) {
        if (style == null)
            style = 'burn';
        else
            housing.className = style;
    };
    tank.gun = function (style) {
        if (style == null)
            style = 'burn';
        else
            gun.className = style;
    };
    tank.shot = function (style) {
        if (style == null)
            style = 'burn';
        else
            shot.className = style;
    };

    tank.move = function (dir) {
        if (dir === 'right') {
            housing.style.transform="rotate(90deg)";
            position.x += speed;
            data.style.left = position.x + "px";
        }
        if (dir === 'left') {
            housing.style.transform="rotate(-90deg)";
            position.x -= speed;
            data.style.left = position.x + "px";
        }
        if (dir === 'up') {
            housing.style.transform="rotate(0deg)";
            position.y -= speed;
            data.style.top = position.y + "px";
        }
        if (dir === 'down') {
            housing.style.transform="rotate(180deg)";
            position.y += speed;
            data.style.top = position.y + "px";
        }
    };

    tank.gunTurn = function (dir) {
        if (dir === 'right') {
            gun.style.transform="rotate(90deg)";
        }
        if (dir === 'left') {
            gun.style.transform="rotate(-90deg)";
        }
        if (dir === 'up') {
            gun.style.transform="rotate(0deg)";
        }
        if (dir === 'down') {
            gun.style.transform="rotate(180deg)";
        }
    };

    tank.letsShoot = function () {
        shot.className = "shot";
    };

    return tank;
}
