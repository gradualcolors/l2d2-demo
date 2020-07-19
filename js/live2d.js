
// Global: if chara watch the pointer
let follow = true;

// edit the model content, re-locate relative path
/*function setpath(model, baseurl) {
	var json = model;
    return json;
}
// AJAX get
function getModel(path, model, callback, callback2) {
    $.getJSON({
        url: path + model,
        dataType: "json",
        success: function(data) {
            callback(setpath(data, path));
            callback2(data);
        },
        error: function(xhr) {alert(xhr.responseJSON)}
    });
}*/

// Pixi option
const option = {
    transparent: true,
    preserveDrawingBuffer: true,    // to capture
    view: document.getElementById("canvas")
}
if (!PIXI.Renderer) PIXI.Renderer = PIXI.WebGLRenderer
let renderer = null;
let stage = new PIXI.Container();
function init(x, y) {
    renderer = new PIXI.Renderer(x, y, option);
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
    animate();
    // const sprite = new PIXI.Sprite.fromImage("./7_room2_a.jpg");
    // stage.addChild(sprite);
}
function _show(model, callback) {
    // let model = getModel(url);
    const live2dSprite = new PIXI.Live2DSprite(model, {
        eyeBlink: true,
        lipSyncWithSound: false,
        debugLog: false,
        debugMouseLog: false,
        randomMotion: false,
        defaultMotionGroup:"motion"
    });
    stage.addChild(live2dSprite);
	
	let pos_y = 0;
	let coeff = 0;
	
	if(model.name == "Mademoiselle")
	{
	pos_y = parseFloat(EnstCharData.characters["Shu"][0].position_y);
	coeff = parseFloat(EnstCharData.characters["Shu"][0].scale);
	}
	else{
	pos_y = parseFloat(EnstCharData.characters[model.name][0].position_y);
	coeff = parseFloat(EnstCharData.characters[model.name][0].scale);
	}
	//let scale = parseFloat(coeff/100) + 0.400;
	let scale = parseFloat(coeff/2.05);
	//let sy = parseFloat(pos_y/350) + 0.15; 
	//let sy = parseFloat(pos_y/720) + 0.18;
	let sy = -(pos_y);
	
	live2dSprite.adjustTranslate(0, sy);
	
	
    //live2dSprite.adjustScale(0, 0, 0.70);
	
	live2dSprite.adjustScale(0, 0, scale);
    // live2dSprite.startRandomMotion("motion");
    // live2dSprite.setRandomExpression();
    function t(evt) {
        const point = evt.data.global;
        if (live2dSprite.hitTest("head", point.x, point.y)) {
            live2dSprite.setRandomExpression();
        }
        live2dSprite.startRandomMotionOnce("motion");
    }
    live2dSprite.on("click", t);
    live2dSprite.on("touchend", t);
    live2dSprite.on("pointerup", t);
    let o = null;
    live2dSprite.on("touchstart", function(evt) {
        o = {x: evt.data.global.x, y: evt.data.global.y};
    });
    live2dSprite.on("touchmove", function(evt) {
        if (o) {
            let t = {x: evt.data.global.x, y:evt.data.global.y};
            window.scroll(window.scrollX + o.x - t.x, window.scrollY + o.y - t.y);
        }
    });
    live2dSprite.on("touchend", function() { o = null; });
    if (follow) {
        function f(evt) {
            const point = evt.data.global;
            live2dSprite.setViewPoint(point.x, point.y);
        }
		
        /*live2dSprite.on("mousemove", f);
        live2dSprite.on("touchstart", f);
        live2dSprite.on("touchend", f);
        live2dSprite.on("touchmove", f);
        live2dSprite.on("pointermove", f);
        live2dSprite.on("pointerdown", f);*/
		live2dSprite.on("mousedown", f);
    }
	
	callback(model);
}


//function show(model, callback) { getModel(model, _show, callback); }

/*function show2(path, model2, callback) { getModel(path, model2, _show, callback); }*/
