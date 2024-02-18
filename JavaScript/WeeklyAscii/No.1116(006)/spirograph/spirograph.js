//
// spirograph.js
// (Written in ES2015(ES6))
//
// Note:
// This JS file (spirograph.js) and the corresponding HTML file (spirograph.html) refer to the following pages.
// * Weekly Ascii No.1116 (See also: https://ascii.jp/elem/000/001/443/1443136/)
//

// Last update:

let canvas, context;
let timer;
let linecolor;
let ox, oy;
let rc, x0, y0;
let rm, laps;
let rd;
let i;

let rad = Math.PI/180;
let step = 2;

// let _counter1 = 0, _counter2 = 0;
// const [width, height] = [800, 600]; // [500, 600];

// ---------------------------------------------------------

function initCanvas() {
    canvas = document.getElementById("spirograph");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 120;
}

function spiro() {
    rc = Number(document.getElementById("rc").value);
    rm = Number(document.getElementById("rm").value);
    rd = Number(document.getElementById("rd").value);

    laps = rm / gcd(rc, rm);

    x0 = Math.floor(Math.random() * (canvas.width - 2 * rc)) + rc;
    y0 = Math.floor(Math.random() * (canvas.height - 2 * rc)) + rc;

    ox = x0 + rc - rm + rd;
    oy = y0;

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    linecolor = "rgb(" + r + "," + g + "," + b + ")";

    i = 0;
    timer = setInterval(draw, 1);
    document.getElementById("status").innerHTML = "drawing... ";
    document.getElementById("draw").disabled = true;
}

function draw() {
    var angle = i * rad;
    var x = x0 + (rc - rm) * Math.cos(angle) + rd * Math.cos(((rc - rm) / rm) * angle);
    var y = y0 + (rc - rm) * Math.sin(angle) - rd * Math.sin(((rc - rm) / rm) * angle);

    context.beginPath();
    context.strokeStyle = linecolor;
    context.moveTo(ox, oy);
    context.lineTo(x, y);
    context.stroke();
    // console.log("debug: " + ox + ", " + oy + ", " + x + ", " + y + " (" + linecolor + ")");

    ox = x;
    oy = y;

    i = i + step;

    if (i > laps * 360) {
        clearInterval(timer);
        document.getElementById("status").innerHTML = "complete";
        document.getElementById("draw").disabled = false;
    } else {
        document.getElementById("status").innerHTML = "drawing... " + Math.floor(i / 360) + "/" +laps;
    }
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }

}

// ---------------------------------------------------------

// // const init = () => {
//     // キャンバスの取得
//     canvas = document.getElementById("myCanvas");  // キャンバスの取得
//     context = canvas.getContext("2d");
//     [canvas.width,canvas.height] = [width,height]; // キャンバスのサイズを設定
//     context.lineWidth = 4;
//     // マウスイベントの登録
//     canvas.addEventListener("click",start_ABC);    // クリックしたとき
//     canvas.addEventListener("mousemove",move_ABC); // マウスを動かしたとき
//     //
//
//     update();
// }

// const start_ABC = event => {
//     //
//     if ((_counter1 % 1) == 0) {
// 	console.log("start_ABC : " + _counter1);
//     }
//     _counter1++;
// }

// const move_ABC = event => {
//     //
//     if ((_counter2 % 10) == 0) {
// 	console.log("movet_ABC : " + _counter2);
//     }
//     _counter2++;
//
// }

// const update = () => {
//     //
//     // window.requestAnimationFrame(update); // アニメーションを実行
// }

// // ---------------------------------------------------------
//
