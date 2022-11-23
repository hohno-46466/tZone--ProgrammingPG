//
// template.js
// (Written in ES2015(ES6))
//
// Note:
// This JS file (template.js) and the corresponding HTML file (template.html) refer to the following pages.
// * Weekly Ascii No.1xxx pp.yy-zz
//

// Last updated:

let canvas, context;
let _counter1 = 0, _counter2 = 0;
const [width, height] = [800, 600]; // [500, 600];

// ---------------------------------------------------------

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
    if ((_counter1 % 1) == 0) {
	console.log("start_ABC : " + _counter1);
    }
    _counter1++;
}

const move_ABC = event => {
    //
    if ((_counter2 % 10) == 0) {
	console.log("movet_ABC : " + _counter2);
    }
    _counter2++;

}

const update = () => {
    //
    // window.requestAnimationFrame(update); // アニメーションを実行
}

// ---------------------------------------------------------

