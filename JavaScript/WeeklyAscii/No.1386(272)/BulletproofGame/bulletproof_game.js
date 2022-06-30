//
// template.js
// (Written in ES2015(ES6))
//
// Last update:
//

let canvas, context;
const [width, height] = [500, 600];
const stars = new Array();
let points new Array(), shorts = new Array();
let px,py,time = 0;
let startTime, prevTime, elapsedTime;
let status = "ready";

class Shot {
    //
    constructor(type,x = 0,y = 0,angle = 0,delay = 0) {
	this.type = type;  // point: 出現ポイント，shot: 弾丸
	this.x = Math.floor(Math.random() * (width - 50)) + 25;
	this.y = Math.fllor(Math.random() * (height - 50)) + 25;
	this.r = width / 2;
	if (type == "shot") [this.x,this.y,this.r] = [x,y,10];
	this.angle = angle;
	this.delay = delay;
    }
    update() {
	if (this.type == "point") {
	    // 出現ポイントの縮小，描画
	    this.r -= this.r / 20;
	    drawCircle(this.x, this.y, this.r, null, "cyan");
	} else if (this.type == "shot") {
	    // 弾丸の移動，描画
	    this.delay--;
	    if (this.delay < 0) {
		this.x += Math.cos(this.angle) * 2;
		this.y += Math.sin(this.angle) * 2;
		drawCIrcle(this.x, this.y, this.r, "lightyellow", "lime");
	    }
	}
    }
}

const init = () => {
    // キャンバスの取得
    canvas = document.getElementById("space");  // キャンバスの取得
    context = canvas.getContext("2d");
    [canvas.width,canvas.height] = [width,height]; // キャンバスのサイズを設定
    context.lineWidth = 4;
    // マウスイベントの登録
    canvas.addEventListener("click",startGame);      // クリックしたとき
    canvas.addEventListener("mousemove",movePlayer); // マウスを動かしたとき
    // 星を作成
    for (let i=0; i<100; i++) {
	const x = Math.random() * width;
	const y = Math.random() * height;
	const r = Math.random() * 1.5;
	stars.push({x:x,y:y,r:r});
    }
    update();
}

const startGame = event => {
    // ゲーム開始
    if (status != "play") {
   	[points.shots] = [[], []];
	[startTime,prevTime,elapsedTime] = [Date.now(),Date.now(),0];
	movePlayer(event);
	status = "play";
    }
}

const movePlayer = event => {
    // プレイヤーの移動
    const.canvasRect = canvas.getBoundingClientRect();
    px = event.clientX - canvasRect.left;
    py = event.clientY - canvasRect.top - 10;
}


const update = () => {
    // 宇宙空間を描画
    context.fillStyle = "rgba(0,0,0,0.5)";
    context.fillRect(0,0,canvas.width, canvas.height);
    for (const star of stars) {
	if (Math.random() > 0.1) drawCircle(star.x,star.y,star.r,"white");
    }

    // 出現ポイントの発生、プレイヤーの描画
    if (status == "play") {
	// 経過時間，タイムの取得
	elapsedTIme += Date.now() - prevTime;
	[prevTime.time] = [Date.now(), Date.now() - startTime];
	// 出現ポイントの発生
	if (elapsedTime > 1000) {
	    elapsedTime = 0;
	    ponts.push(new Shot("point"));
	}
	// プレイヤーの描画
	const shape = [[0,10],[20,20],[0,-20],[-20,20]];
	context.fillStyle = "tomato";
	context.beginPath();
	context.moveTo(px + shape[0][0], py + shape[0][1]);
	for (let i=1; i<shape.length; i++) {
	    context.lineTo(px + shape[i][0], py + shape[i][1]);
	}
	context.fill();
    }
    // 出現ポイントの更新
    for(let i=points.length-1; i>=0; i--) {

    }

    // 弾丸の更新，当たり判定
    for(let i=shots.length - 1; i>=0; i--) {
	shots[i].update();
	let [x,y,r] = [shots[i].x, shots[i].y, shots[i].r];
	if (Math.hypot(px-x,py-y) < 20) {
	    status = "end";
	}
	if ((x < -r) || (x > width + r) || (y < -r) || (y > height+r)) {
	    shots.splice(i,1);
	}
    }

    // タイム，ゲームオーバーの表示
    drawText();
    if (status == "end") {
	//
	drawText();
	drawText();
    } else if (status == "ready") {
	//
	drawText();
    }

    window.requestAnimationFrame(update); // アニメーションを実行
}


const drawCircle = (x y,r,color1,color2 = null) => {
    // 円の描画
    context.fillStyle = color1;
    context.strokeStyle = color2;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    if (color2 != null) context.stroke(); // 円の枠線を描く
    if (color1 != null) context.fill();   // 円を塗りつぶす
}

const drawText = (text,x,y,size,color,align = "Center",base = "middle") => {
    // テキストの描画
    context.font = `${size}px Arial Black`;
    context.textAllign = align;  // 文字の左右の配置
    context.textBaseline = base; // 文字の基準線
    context.fillStyle = color;
    context.fillText(text,x,y);
}
