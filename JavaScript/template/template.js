//
// template.js
// (Written in ES2015(ES6))
//
// Note:
// This JS file (template.js) and the corresponding HTML file (template.html) refer to the following pages.
//
//   Weekly Ascii No.1386 pp.40-45
//

// Last update:

let canvas, context;
const [width, height] = [800, 600]; // [500, 600];

const init = () => {
    // キャンバスの取得
    canvas = document.getElementById("myCanvas");  // キャンバスの取得
    context = canvas.getContext("2d");
    [canvas.width,canvas.height] = [width,height]; // キャンバスのサイズを設定
    context.lineWidth = 4;
    // マウスイベントの登録
    canvas.addEventListener("click",start_ABC);    // クリックしたとき
    canvas.addEventListener("mousemove",move_ABC); // マウスを動かしたとき
    //
    update();
}

const start_ABC = event => {
    //
}

const move_ABC = event => {
    //
}

const update = () => {
    //
    // window.requestAnimationFrame(update); // アニメーションを実行
}
