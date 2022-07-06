//
// template.js
// (Written in ES2015(ES6))
//
// Note:
// This JS file (template.js) and the corresponding HTML file (template.html) are based on the following pages.
// * Weekly Ascii No.1386 pp.40-45
//
// MQTT subscriber function using Paho has been added by @hohno_at_kuimc
//

// Last update:

let canvas, context;
let _counter1 = 0, _counter2 = 0;
const [width, height] = [800, 600]; // [500, 600];

// ---------------------------------------------------------

// Set a port of MQTT broker
let _MQTTport = 8088

// Create a client instance
_client = new Paho.MQTT.Client("localhost", _MQTTport, "clientId");

// set callback handlers
_client.onConnectionLost = onConnectionLost;
_client.onMessageArrived = onMessageArrived;

// connect the client
_client.connect({onSuccess:onConnect});

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


// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect!!");
    _client.subscribe("hohno/test8088");
    _message = new Paho.MQTT.Message("Hello");
    _message.destinationName = "World";
    _client.send(_message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
	console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(_message) {
    console.log("onMessageArrived:" + _message.payloadString);
}
