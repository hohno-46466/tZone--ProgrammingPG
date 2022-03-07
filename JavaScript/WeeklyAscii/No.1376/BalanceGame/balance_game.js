const bodyDef = new Box2D.Dynamics.b2BodyDef;
const fixDef = new Box2D.Dynamics.b2FixtureDef;
const b2Vec2 = Box2D.Common.Math.b2Vec2;
const blocks = new Array();
let selectBlock = null;
let bar, length = 30;

const init = () => {
}

const setBox = (x,y,w,h,type = Box2D.Dynamics.b2Body.b2_staticBody) => {
}

const setPolygon = (x,y,n) => {
}

const update = () => {
}


const getPoint = event => {
}


const reset = () => {
	world.DestroyBody(bar);
	length =document.getElementById("len").value = 10;
	bar = setBox(30,30,length2,1,Box2D.Dynamics.b2Body.b2_dynamicBody);
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].obj.SetAwake(false);
		const [x,y] = [(i - Math.floor(i/10)*10)*6+3, 55 - Math.floor(i/10)*5];
		blocks[i].obj.SetPosition(new b2Vec2(x,y));
		blocks[i].obj.SetAwake(true);
	}
}

