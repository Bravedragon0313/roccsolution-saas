(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Linien_animation_atlas_1", frames: [[0,251,402,39],[756,285,249,30],[710,325,276,38],[0,292,351,37],[404,285,350,38],[670,365,324,31],[320,357,348,30],[0,210,477,39],[353,325,355,30],[535,398,199,29],[0,331,318,33],[0,389,331,30],[333,389,200,31],[0,0,563,208],[565,0,308,283]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Light_effect = function() {
	this.initialize(ss["Linien_animation_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("EhuHgwKMDcPAAAMAAABgVMjcPAAAg");
	this.shape.setTransform(704.75,308.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhuHAwLMAAAhgVMDcOAAAMAAABgVg");
	this.shape_1.setTransform(704.75,308.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,-1,1411.5,618.6), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(4.1,0,0.0512,0.0512,16.5159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,19.2,18.4), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(2.8,0,0.0512,0.0512,11.0753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,18.3,17.3), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(0,1.1,0.0512,0.0512,-3.9164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,16.7,15.6), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(13,0,0.0512,0.0512,64.0614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,19.9,20.5), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(8.1,0,0.0512,0.0512,34.0643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,21.2,20.9), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(8.1,0,0.0512,0.0512,34.0643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,21.2,20.9), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(9.2,0,0.0512,0.0512,39.5213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,21.4,21.3), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(2.4,0,0.0512,0.0512,9.5213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,18,16.9), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(11.8,0,0.0512,0.0512,54.5338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,21,21.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(9.2,0,0.0512,0.0512,39.5236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,21.4,21.3), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(0,1.5,0.0512,0.0512,-5.4695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,17.1,16), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(0,1.5,0.0512,0.0512,-5.4695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,17.1,16), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Light_effect();
	this.instance.setTransform(0,1.5,0.0512,0.0512,-5.4695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,17.1,16), null);


(lib.Group_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,201,19.5), null);


(lib.Group_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,124.5,15), null);


(lib.Group_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,138,19), null);


(lib.Group_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,175.5,18.5), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,175,19), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,162,15.5), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,174,15), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,238.5,19.5), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,177.5,15), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,99.5,14.5), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,159,16.5), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,165.5,15), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,100,15.5), null);


(lib.Wohnungeinrichten = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_7();
	this.instance.setTransform(87.5,9.6,1,1,0,0,0,87.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wohnungeinrichten, new cjs.Rectangle(0,0,175,19), null);


(lib.Umzugorganisieren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_8();
	this.instance.setTransform(87.6,9.3,1,1,0,0,0,87.6,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Umzugorganisieren, new cjs.Rectangle(0,0,175.5,18.5), null);


(lib.Modernisieren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_10();
	this.instance.setTransform(62.2,7.5,1,1,0,0,0,62.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Modernisieren, new cjs.Rectangle(0,0,124.5,15), null);


(lib.Materialeinkaufen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_6();
	this.instance.setTransform(81,7.7,1,1,0,0,0,81,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Materialeinkaufen, new cjs.Rectangle(0,0,162,15.5), null);


(lib.KaufenVerkaufen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_1();
	this.instance.setTransform(79.5,8.2,1,1,0,0,0,79.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KaufenVerkaufen, new cjs.Rectangle(0,0,159,16.5), null);


(lib.Informieren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group();
	this.instance.setTransform(49.9,7.7,1,1,0,0,0,49.9,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Informieren, new cjs.Rectangle(0,0,100,15.5), null);


(lib.Immobiliensuchen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_0();
	this.instance.setTransform(82.8,7.5,1,1,0,0,0,82.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Immobiliensuchen, new cjs.Rectangle(0,0,165.5,15), null);


(lib.Immobilieabsichern = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_3();
	this.instance.setTransform(88.6,7.5,1,1,0,0,0,88.6,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Immobilieabsichern, new cjs.Rectangle(0,0,177.5,15), null);


(lib.Handwerkersuchen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_5();
	this.instance.setTransform(86.9,7.5,1,1,0,0,0,86.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Handwerkersuchen, new cjs.Rectangle(0,0,174,15), null);


(lib.Finanzieren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_2();
	this.instance.setTransform(49.8,7.3,1,1,0,0,0,49.8,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Finanzieren, new cjs.Rectangle(0,0,99.5,14.5), null);


(lib.Energievertragabschließen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_4();
	this.instance.setTransform(119.2,9.7,1,1,0,0,0,119.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Energievertragabschließen, new cjs.Rectangle(0,0,238.5,19.5), null);


(lib.Behördengänge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_9();
	this.instance.setTransform(68.9,9.6,1,1,0,0,0,68.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Behördengänge, new cjs.Rectangle(0,0,138,19), null);


(lib.Anschlussfinanzierung = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Group_11();
	this.instance.setTransform(100.5,9.7,1,1,0,0,0,100.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Anschlussfinanzierung, new cjs.Rectangle(0,0,201,19.5), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Informieren();
	this.instance.setTransform(50,7.7,1,1,0,0,0,50,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,100,15.5), null);


// stage content:
(lib.Linien_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_30
	this.instance = new lib.Symbol14();
	this.instance.setTransform(409.1,271.2,1.0755,1,0,0,0,272.6,271.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:704.8,regY:308.3,scaleX:1.0741,x:879.15,y:308.3},0).wait(1).to({scaleX:1.0728,x:884.3},0).wait(1).to({scaleX:1.0714,x:889.5},0).wait(1).to({scaleX:1.0701,x:894.65,y:308.25},0).wait(1).to({scaleX:1.0687,x:899.85},0).wait(1).to({scaleX:1.0674,x:904.95},0).wait(1).to({scaleX:1.066,x:910.05,y:308.2},0).wait(1).to({scaleX:1.0647,x:915.25},0).wait(1).to({scaleX:1.0633,x:920.35},0).wait(1).to({scaleX:1.062,x:925.45},0).wait(1).to({scaleX:1.0607,x:930.5,y:308.15},0).wait(1).to({scaleX:1.0593,x:935.6},0).wait(1).to({scaleX:1.058,x:940.7},0).wait(1).to({scaleX:1.0567,x:945.75,y:308.1},0).wait(1).to({scaleX:1.0554,x:950.75},0).wait(1).to({scaleX:1.054,x:955.85},0).wait(1).to({scaleX:1.0527,x:960.85},0).wait(1).to({scaleX:1.0514,x:965.85,y:308.05},0).wait(1).to({scaleX:1.0501,x:970.9},0).wait(1).to({scaleX:1.0488,x:975.85},0).wait(1).to({scaleX:1.0475,x:980.85,y:308},0).wait(1).to({scaleX:1.0462,x:985.85},0).wait(1).to({scaleX:1.0449,x:990.8},0).wait(1).to({scaleX:1.0436,x:995.75},0).wait(1).to({scaleX:1.0423,x:1000.7,y:307.95},0).wait(1).to({scaleX:1.041,x:1005.65},0).wait(1).to({scaleX:1.0397,x:1010.55},0).wait(1).to({scaleX:1.0384,x:1015.45},0).wait(1).to({scaleX:1.0371,x:1020.35,y:307.9},0).wait(1).to({scaleX:1.0358,x:1025.25},0).wait(1).to({scaleX:1.0346,x:1030.15},0).wait(1).to({scaleX:1.0333,x:1035,y:307.85},0).wait(1).to({scaleX:1.032,x:1039.85},0).wait(1).to({scaleX:1.0307,x:1044.7},0).wait(1).to({scaleX:1.0295,x:1049.55},0).wait(1).to({scaleX:1.0282,x:1054.35,y:307.8},0).wait(1).to({scaleX:1.0269,x:1059.2},0).wait(1).to({scaleX:1.0257,x:1064},0).wait(1).to({scaleX:1.0244,x:1068.8},0).wait(1).to({scaleX:1.0232,x:1073.6,y:307.75},0).wait(1).to({scaleX:1.0219,x:1078.35},0).wait(1).to({scaleX:1.0207,x:1083.1},0).wait(1).to({scaleX:1.0194,x:1087.9,y:307.7},0).wait(1).to({scaleX:1.0182,x:1092.6},0).wait(1).to({scaleX:1.0169,x:1097.35},0).wait(1).to({scaleX:1.0157,x:1102.05},0).wait(1).to({scaleX:1.0145,x:1106.8,y:307.65},0).wait(1).to({scaleX:1.0132,x:1111.45},0).wait(1).to({scaleX:1.012,x:1116.15},0).wait(1).to({scaleX:1.0108,x:1120.85},0).wait(1).to({scaleX:1.0096,x:1125.55,y:307.6},0).wait(1).to({scaleX:1.0083,x:1130.15},0).wait(1).to({scaleX:1.0071,x:1134.8},0).wait(1).to({scaleX:1.0059,x:1139.45},0).wait(1).to({scaleX:1.0047,x:1144.1,y:307.55},0).wait(1).to({scaleX:1.0035,x:1148.7},0).wait(1).to({scaleX:1.0023,x:1153.3},0).wait(1).to({scaleX:1.0011,x:1157.9,y:307.5},0).wait(1).to({scaleX:0.9999,x:1162.45},0).wait(1).to({scaleX:0.9987,x:1167.05},0).wait(1).to({scaleX:0.9975,x:1171.6},0).wait(1).to({scaleX:0.9963,x:1176.2,y:307.45},0).wait(1).to({scaleX:0.9951,x:1180.7},0).wait(1).to({scaleX:0.9939,x:1185.25},0).wait(1).to({scaleX:0.9927,x:1189.75},0).wait(1).to({scaleX:0.9915,x:1194.3,y:307.4},0).wait(1).to({scaleX:0.9904,x:1198.75},0).wait(1).to({scaleX:0.9892,x:1203.25},0).wait(1).to({scaleX:0.988,x:1207.75},0).wait(1).to({scaleX:0.9868,x:1212.2,y:307.35},0).wait(1).to({scaleX:0.9857,x:1216.65},0).wait(1).to({scaleX:0.9845,x:1221.05},0).wait(1).to({scaleX:0.9833,x:1225.55},0).wait(1).to({scaleX:0.9822,x:1229.95,y:307.3},0).wait(1).to({scaleX:0.981,x:1234.35},0).wait(1).to({scaleX:0.9799,x:1238.75},0).wait(1).to({scaleX:0.9787,x:1243.15},0).wait(1).to({scaleX:0.9776,x:1247.55,y:307.25},0).wait(1).to({scaleX:0.9764,x:1251.9},0).wait(1).to({scaleX:0.9753,x:1256.3},0).wait(1).to({scaleX:0.9741,x:1260.6},0).wait(1).to({scaleX:0.973,x:1264.95,y:307.2},0).wait(1).to({scaleX:0.9719,x:1269.3},0).wait(1).to({scaleX:0.9707,x:1273.6},0).wait(1).to({scaleX:0.9696,x:1277.95},0).wait(1).to({scaleX:0.9685,x:1282.25,y:307.15},0).wait(1).to({scaleX:0.9674,x:1286.5},0).wait(1).to({scaleX:0.9662,x:1290.8},0).wait(1).to({scaleX:0.9651,x:1295.05},0).wait(1).to({scaleX:0.964,x:1299.3},0).wait(1).to({scaleX:0.9629,x:1303.55,y:307.1},0).wait(1).to({scaleX:0.9618,x:1307.75},0).wait(1).to({scaleX:0.9607,x:1312},0).wait(1).to({scaleX:0.9596,x:1316.2},0).wait(1).to({scaleX:0.9585,x:1320.45,y:307.05},0).wait(1).to({scaleX:0.9574,x:1324.6},0).wait(1).to({scaleX:0.9563,x:1328.8},0).wait(1).to({scaleX:0.9552,x:1332.95},0).wait(1).to({scaleX:0.9541,x:1337.15,y:307},0).wait(1).to({scaleX:0.953,x:1341.3},0).wait(1).to({scaleX:0.9519,x:1345.4},0).wait(1).to({scaleX:0.9508,x:1349.55},0).wait(1).to({scaleX:0.9498,x:1353.65,y:306.95},0).wait(1).to({scaleX:0.9487,x:1357.75},0).wait(1).to({scaleX:0.9476,x:1361.85},0).wait(1).to({scaleX:0.9465,x:1365.95},0).wait(1).to({scaleX:0.9455,x:1370},0).wait(1).to({scaleX:0.9444,x:1374.05,y:306.9},0).wait(1).to({scaleX:0.9433,x:1378.1},0).wait(1).to({scaleX:0.9423,x:1382.15},0).wait(1).to({scaleX:0.9412,x:1386.2},0).wait(1).to({scaleX:0.9402,x:1390.25,y:306.85},0).wait(1).to({scaleX:0.9391,x:1394.25},0).wait(1).to({scaleX:0.9381,x:1398.25},0).wait(1).to({scaleX:0.937,x:1402.2},0).wait(1).to({scaleX:0.936,x:1406.2,y:306.8},0).wait(1).to({scaleX:0.9349,x:1410.2},0).wait(1).to({scaleX:0.9339,x:1414.1},0).wait(1).to({scaleX:0.9329,x:1418.1},0).wait(1).to({scaleX:0.9318,x:1422},0).wait(1).to({scaleX:0.9308,x:1425.95,y:306.75},0).wait(1).to({scaleX:0.9298,x:1429.85},0).wait(1).to({scaleX:0.9288,x:1433.8},0).wait(1).to({scaleX:0.9277,x:1437.65},0).wait(1).to({scaleX:0.9267,x:1441.55},0).wait(1).to({scaleX:0.9257,x:1445.45,y:306.7},0).wait(1).to({scaleX:0.9247,x:1449.25},0).wait(1).to({scaleX:0.9237,x:1453.15},0).wait(1).to({scaleX:0.9227,x:1457},0).wait(1).to({scaleX:0.9217,x:1460.8,y:306.65},0).wait(1).to({scaleX:0.9207,x:1464.65},0).wait(1).to({scaleX:0.9197,x:1468.45},0).wait(1).to({scaleX:0.9187,x:1472.25},0).wait(1).to({scaleX:0.9177,x:1476.05},0).wait(1).to({scaleX:0.9167,x:1479.8,y:306.6},0).wait(1).to({scaleX:0.9157,x:1483.6},0).wait(1).to({scaleX:0.9147,x:1487.35},0).wait(1).to({scaleX:0.9137,x:1491.05},0).wait(1).to({scaleX:0.9128,x:1494.8},0).wait(1).to({scaleX:0.9118,x:1498.5,y:306.55},0).wait(1).to({scaleX:0.9108,x:1502.25},0).wait(1).to({scaleX:0.9098,x:1505.95},0).wait(1).to({scaleX:0.9089,x:1509.65},0).wait(1).to({scaleX:0.9079,x:1513.35,y:306.5},0).wait(1).to({scaleX:0.9069,x:1517},0).wait(1).to({scaleX:0.906,x:1520.7},0).wait(1).to({scaleX:0.905,x:1524.3},0).wait(1).to({scaleX:0.9041,x:1527.95},0).wait(1).to({scaleX:0.9031,x:1531.55,y:306.45},0).wait(1).to({scaleX:0.9022,x:1535.2},0).wait(1).to({scaleX:0.9012,x:1538.85},0).wait(1).to({scaleX:0.9003,x:1542.4},0).wait(1).to({scaleX:0.8993,x:1546},0).wait(1).to({scaleX:0.8984,x:1549.6,y:306.4},0).wait(1).to({scaleX:0.8975,x:1553.15},0).wait(1).to({scaleX:0.8965,x:1556.65},0).wait(1).to({scaleX:0.8956,x:1560.2},0).wait(1).to({scaleX:0.8947,x:1563.75},0).wait(1).to({scaleX:0.8938,x:1567.3,y:306.35},0).wait(1).to({scaleX:0.8928,x:1570.8},0).wait(1).to({scaleX:0.8919,x:1574.35},0).wait(1).to({scaleX:0.891,x:1577.8},0).wait(1).to({scaleX:0.8901,x:1581.3},0).wait(1).to({scaleX:0.8892,x:1584.75,y:306.3},0).wait(1).to({scaleX:0.8883,x:1588.2},0).wait(1).to({scaleX:0.8874,x:1591.65},0).wait(1).to({scaleX:0.8865,x:1595.1},0).wait(1).to({scaleX:0.8856,x:1598.55},0).wait(1).to({scaleX:0.8847,x:1601.95,y:306.25},0).wait(1).to({scaleX:0.8838,x:1605.35},0).wait(1).to({scaleX:0.8829,x:1608.75},0).wait(1).to({scaleX:0.882,x:1612.15},0).wait(1).to({scaleX:0.8811,x:1615.5},0).wait(1).to({scaleX:0.8802,x:1618.9},0).wait(1).to({scaleX:0.8794,x:1622.2,y:306.2},0).wait(1).to({scaleX:0.8785,x:1625.55},0).wait(1).to({scaleX:0.8776,x:1628.9},0).wait(1).to({scaleX:0.8767,x:1632.25},0).wait(1).to({scaleX:0.8759,x:1635.55},0).wait(1).to({scaleX:0.875,x:1638.85,y:306.15},0).wait(1).to({scaleX:0.8741,x:1642.15},0).wait(1).to({scaleX:0.8733,x:1645.45},0).wait(1).to({scaleX:0.8724,x:1648.7},0).wait(1).to({scaleX:0.8716,x:1651.95},0).wait(1).to({scaleX:0.8707,x:1655.2,y:306.1},0).wait(1).to({scaleX:0.8699,x:1658.45},0).wait(1).to({scaleX:0.869,x:1661.65},0).wait(1).to({scaleX:0.8682,x:1664.9},0).wait(1).to({scaleX:0.8673,x:1668.05},0).wait(1).to({scaleX:0.8665,x:1671.25},0).wait(1).to({scaleX:0.8657,x:1674.45,y:306.05},0).wait(1).to({scaleX:0.8648,x:1677.65},0).wait(1).to({scaleX:0.864,x:1680.8},0).wait(1).to({scaleX:0.8632,x:1683.95},0).wait(1).to({scaleX:0.8624,x:1687.1},0).wait(1).to({scaleX:0.8615,x:1690.2,y:306},0).wait(1).to({scaleX:0.8607,x:1693.35},0).wait(1).to({scaleX:0.8599,x:1696.45},0).wait(1).to({scaleX:0.8591,x:1699.55},0).wait(1).to({scaleX:0.8583,x:1702.6},0).wait(1).to({scaleX:0.8575,x:1705.7},0).wait(1).to({scaleX:0.8567,x:1708.8,y:305.95},0).wait(1).to({scaleX:0.8559,x:1711.85},0).wait(1).to({scaleX:0.8551,x:1714.9},0).wait(1).to({scaleX:0.8543,x:1717.95},0).wait(1).to({scaleX:0.8535,x:1720.95},0).wait(1).to({scaleX:0.8527,x:1724},0).wait(1).to({scaleX:0.8519,x:1726.95,y:305.9},0).wait(1).to({scaleX:0.8511,x:1729.95},0).wait(1).to({scaleX:0.8503,x:1732.95},0).wait(1).to({scaleX:0.8496,x:1735.9},0).wait(1).to({scaleX:0.8488,x:1738.85},0).wait(1).to({scaleX:0.848,x:1741.85},0).wait(1).to({scaleX:0.8472,x:1744.8,y:305.85},0).wait(1).to({scaleX:0.8465,x:1747.7},0).wait(1).to({scaleX:0.8457,x:1750.6},0).wait(1).to({scaleX:0.8449,x:1753.5},0).wait(1).to({scaleX:0.8442,x:1756.45},0).wait(1).to({scaleX:0.8434,x:1759.3},0).wait(1).to({scaleX:0.8427,x:1762.2,y:305.8},0).wait(1).to({scaleX:0.8419,x:1765.1},0).wait(1).to({scaleX:0.8412,x:1767.9},0).wait(1).to({scaleX:0.8404,x:1770.8},0).wait(1).to({scaleX:0.8397,x:1773.6},0).wait(1).to({scaleX:0.8389,x:1776.45},0).wait(1).to({scaleX:0.8382,x:1779.2,y:305.75},0).wait(1).to({scaleX:0.8375,x:1782.05},0).wait(1).to({scaleX:0.8367,x:1784.85},0).wait(1).to({scaleX:0.836,x:1787.6},0).wait(1).to({scaleX:0.8353,x:1790.4},0).wait(1).to({scaleX:0.8346,x:1793.15},0).wait(1).to({scaleX:0.8338,x:1795.9},0).wait(1).to({scaleX:0.8331,x:1798.65,y:305.7},0).wait(1).to({scaleX:0.8324,x:1801.35},0).wait(1).to({scaleX:0.8317,x:1804.1},0).wait(1).to({scaleX:0.831,x:1806.75},0).wait(1).to({scaleX:0.8303,x:1809.5},0).wait(1).to({scaleX:0.8296,x:1812.2},0).wait(1).to({scaleX:0.8289,x:1814.85,y:305.65},0).wait(1).to({scaleX:0.8282,x:1817.5},0).wait(1).to({scaleX:0.8275,x:1820.15},0).wait(1).to({scaleX:0.8268,x:1822.8},0).wait(1).to({scaleX:0.8261,x:1825.45},0).wait(1).to({scaleX:0.8254,x:1828.05},0).wait(1).to({scaleX:0.8247,x:1830.65},0).wait(1).to({scaleX:0.824,x:1833.3,y:305.6},0).wait(1).to({scaleX:0.8234,x:1835.85},0).wait(1).to({scaleX:0.8227,x:1838.45},0).wait(1).to({scaleX:0.822,x:1841},0).wait(1).to({scaleX:0.8213,x:1843.6},0).wait(1).to({scaleX:0.8207,x:1846.1},0).wait(1).to({scaleX:0.82,x:1848.7},0).wait(1).to({scaleX:0.8193,x:1851.2,y:305.55},0).wait(1).to({scaleX:0.8187,x:1853.7},0).wait(1).to({scaleX:0.818,x:1856.25},0).wait(1).to({scaleX:0.8174,x:1858.75},0).wait(1).to({scaleX:0.8167,x:1861.2},0).wait(1).to({scaleX:0.8161,x:1863.65},0).wait(1).to({scaleX:0.8154,x:1866.15},0).wait(1).to({scaleX:0.8148,x:1868.6,y:305.5},0).wait(1).to({scaleX:0.8141,x:1871.05},0).wait(1).to({scaleX:0.8135,x:1873.45},0).wait(1).to({scaleX:0.8129,x:1875.9},0).wait(1).to({scaleX:0.8122,x:1878.3},0).wait(1).to({scaleX:0.8116,x:1880.7},0).wait(1).to({scaleX:0.811,x:1883.05},0).wait(1).to({scaleX:0.8104,x:1885.5,y:305.45},0).wait(1).to({scaleX:0.8097,x:1887.85},0).wait(1).to({scaleX:0.8091,x:1890.2},0).wait(1).to({scaleX:0.8085,x:1892.55},0).wait(1).to({scaleX:0.8079,x:1894.9},0).wait(1).to({scaleX:0.8073,x:1897.2},0).wait(1).to({scaleX:0.8067,x:1899.55},0).wait(1).to({scaleX:0.8061,x:1901.8},0).wait(1).to({scaleX:0.8055,x:1904.1,y:305.4},0).wait(1).to({scaleX:0.8049,x:1906.4},0).wait(1).to({scaleX:0.8043,x:1908.7},0).wait(1).to({scaleX:0.8037,x:1910.95},0).wait(1).to({scaleX:0.8031,x:1913.15},0).wait(1).to({scaleX:0.8025,x:1915.45},0).wait(1).to({scaleX:0.8019,x:1917.65},0).wait(1).to({scaleX:0.8013,x:1919.9},0).wait(1).to({scaleX:0.8008,x:1922.05,y:305.35},0).wait(1).to({scaleX:0.8002,x:1924.25},0).wait(1).to({scaleX:0.7996,x:1926.45},0).wait(1).to({scaleX:0.799,x:1928.65},0).wait(1).to({scaleX:0.7985,x:1930.8},0).wait(1).to({scaleX:0.7979,x:1932.95},0).wait(1).to({scaleX:0.7973,x:1935.1},0).wait(1).to({scaleX:0.7968,x:1937.25},0).wait(1).to({scaleX:0.7962,x:1939.4,y:305.3},0).wait(1).to({scaleX:0.7957,x:1941.5},0).wait(1).to({scaleX:0.7951,x:1943.6},0).wait(1).to({scaleX:0.7946,x:1945.7},0).wait(1).to({scaleX:0.794,x:1947.8},0).wait(1).to({scaleX:0.7935,x:1949.85},0).wait(1).to({scaleX:0.7929,x:1951.9},0).wait(1).to({scaleX:0.7924,x:1954},0).wait(1).to({scaleX:0.7919,x:1956},0).wait(1).to({scaleX:0.7913,x:1958.05,y:305.25},0).wait(1).to({scaleX:0.7908,x:1960.05},0).wait(1).to({scaleX:0.7903,x:1962.05},0).wait(1).to({scaleX:0.7898,x:1964.05},0).wait(1).to({scaleX:0.7892,x:1966.05},0).wait(1).to({scaleX:0.7887,x:1968.05},0).wait(1).to({scaleX:0.7882,x:1970},0).wait(1).to({scaleX:0.7877,x:1971.95},0).wait(1).to({scaleX:0.7872,x:1973.9},0).wait(1).to({scaleX:0.7867,x:1975.8,y:305.2},0).wait(1).to({scaleX:0.7862,x:1977.75},0).wait(1).to({scaleX:0.7857,x:1979.65},0).wait(1).to({scaleX:0.7852,x:1981.55},0).wait(1).to({scaleX:0.7847,x:1983.45},0).wait(1).to({scaleX:0.7842,x:1985.35},0).wait(1).to({scaleX:0.7837,x:1987.2},0).wait(1).to({scaleX:0.7832,x:1989.05},0).wait(1).to({scaleX:0.7827,x:1990.9},0).wait(1).to({scaleX:0.7822,x:1992.75,y:305.15},0).wait(1).to({scaleX:0.7818,x:1994.6},0).wait(1).to({scaleX:0.7813,x:1996.4},0).wait(1).to({scaleX:0.7808,x:1998.2},0).wait(1).to({scaleX:0.7803,x:2000},0).wait(1).to({scaleX:0.7799,x:2001.8},0).wait(1).to({scaleX:0.7794,x:2003.55},0).wait(1).to({scaleX:0.7789,x:2005.3},0).wait(1).to({scaleX:0.7785,x:2007.1},0).wait(1).to({scaleX:0.778,x:2008.8},0).wait(1).to({scaleX:0.7776,x:2010.55,y:305.1},0).wait(1).to({scaleX:0.7771,x:2012.25},0).wait(1).to({scaleX:0.7767,x:2014},0).wait(1).to({scaleX:0.7762,x:2015.7},0).wait(1).to({scaleX:0.7758,x:2017.35},0).wait(1).to({scaleX:0.7753,x:2019.05},0).wait(1).to({scaleX:0.7749,x:2020.7},0).wait(1).to({scaleX:0.7745,x:2022.4},0).wait(1).to({scaleX:0.774,x:2024.05},0).wait(1).to({scaleX:0.7736,x:2025.7},0).wait(1).to({scaleX:0.7732,x:2027.3,y:305.05},0).wait(1).to({scaleX:0.7728,x:2028.9},0).wait(1).to({scaleX:0.7723,x:2030.55},0).wait(1).to({scaleX:0.7719,x:2032.1},0).wait(1).to({scaleX:0.7715,x:2033.7},0).wait(1).to({scaleX:0.7711,x:2035.25},0).wait(1).to({scaleX:0.7707,x:2036.8},0).wait(1).to({scaleX:0.7703,x:2038.4},0).wait(1).to({scaleX:0.7699,x:2039.95},0).wait(1).to({scaleX:0.7695,x:2041.45},0).wait(1).to({scaleX:0.7691,x:2043},0).wait(1).to({scaleX:0.7687,x:2044.5},0).wait(1).to({scaleX:0.7683,x:2046,y:305},0).wait(1).to({scaleX:0.7679,x:2047.45},0).wait(1).to({scaleX:0.7675,x:2048.95},0).wait(1).to({scaleX:0.7671,x:2050.4},0).wait(1).to({scaleX:0.7667,x:2051.9},0).wait(1).to({scaleX:0.7664,x:2053.35},0).wait(1).to({scaleX:0.766,x:2054.75},0).wait(1).to({scaleX:0.7656,x:2056.2},0).wait(1).to({scaleX:0.7652,x:2057.6},0).wait(1).to({scaleX:0.7649,x:2059},0).wait(1).to({scaleX:0.7645,x:2060.45},0).wait(1).to({scaleX:0.7641,x:2061.75},0).wait(1).to({scaleX:0.7638,x:2063.15,y:304.95},0).wait(1).to({scaleX:0.7634,x:2064.5},0).wait(1).to({scaleX:0.7631,x:2065.85},0).wait(1).to({scaleX:0.7627,x:2067.2},0).wait(1).to({scaleX:0.7624,x:2068.5},0).wait(1).to({scaleX:0.762,x:2069.85},0).wait(1).to({scaleX:0.7617,x:2071.2},0).wait(1).to({scaleX:0.7613,x:2072.45},0).wait(1).to({scaleX:0.761,x:2073.75},0).wait(1).to({scaleX:0.7607,x:2075},0).wait(1).to({scaleX:0.7603,x:2076.3},0).wait(1).to({scaleX:0.76,x:2077.55},0).wait(1).to({scaleX:0.7597,x:2078.8},0).wait(1).to({scaleX:0.7594,x:2080.05},0).wait(1).to({scaleX:0.759,x:2081.25,y:304.9},0).wait(1).to({scaleX:0.7587,x:2082.5},0).wait(1).to({scaleX:0.7584,x:2083.7},0).wait(1).to({scaleX:0.7581,x:2084.85},0).wait(1).to({scaleX:0.7578,x:2086.05},0).wait(1).to({scaleX:0.7575,x:2087.2},0).wait(1).to({scaleX:0.7572,x:2088.4},0).wait(1).to({scaleX:0.7569,x:2089.55},0).wait(1).to({scaleX:0.7566,x:2090.7},0).wait(1).to({scaleX:0.7563,x:2091.8},0).wait(1).to({scaleX:0.756,x:2092.9},0).wait(1).to({scaleX:0.7557,x:2094},0).wait(1).to({scaleX:0.7554,x:2095.1},0).wait(1).to({scaleX:0.7551,x:2096.2},0).wait(1).to({scaleX:0.7548,x:2097.25},0).wait(1).to({scaleX:0.7546,x:2098.35,y:304.85},0).wait(1).to({scaleX:0.7543,x:2099.4},0).wait(1).to({scaleX:0.754,x:2100.45},0).wait(1).to({scaleX:0.7537,x:2101.5},0).wait(1).to({scaleX:0.7535,x:2102.5},0).wait(1).to({scaleX:0.7532,x:2103.5},0).wait(1).to({scaleX:0.7529,x:2104.55},0).wait(1).to({scaleX:0.7527,x:2105.5},0).wait(1).to({scaleX:0.7524,x:2106.5},0).wait(1).to({scaleX:0.7522,x:2107.5},0).wait(1).to({scaleX:0.7519,x:2108.4},0).wait(1).to({scaleX:0.7517,x:2109.35},0).wait(1).to({scaleX:0.7514,x:2110.3},0).wait(1).to({scaleX:0.7512,x:2111.25},0).wait(1).to({scaleX:0.7509,x:2112.15},0).wait(1).to({scaleX:0.7507,x:2113.05},0).wait(1).to({scaleX:0.7505,x:2113.95},0).wait(1).to({scaleX:0.7502,x:2114.8},0).wait(1).to({scaleX:0.75,x:2115.7},0).wait(1).to({scaleX:0.7498,x:2116.55,y:304.8},0).wait(1).to({scaleX:0.7496,x:2117.45},0).wait(1).to({scaleX:0.7493,x:2118.3},0).wait(1).to({scaleX:0.7491,x:2119.1},0).wait(1).to({scaleX:0.7489,x:2119.95},0).wait(1).to({scaleX:0.7487,x:2120.75},0).wait(1).to({scaleX:0.7485,x:2121.55},0).wait(1).to({scaleX:0.7483,x:2122.35},0).wait(1).to({scaleX:0.7481,x:2123.1},0).wait(1).to({scaleX:0.7479,x:2123.85},0).wait(1).to({scaleX:0.7477,x:2124.6},0).wait(1).to({scaleX:0.7475,x:2125.4},0).wait(1).to({scaleX:0.7473,x:2126.1},0).wait(1).to({scaleX:0.7471,x:2126.85},0).wait(1).to({scaleX:0.7469,x:2127.55},0).wait(1).to({scaleX:0.7467,x:2128.25},0).wait(1).to({scaleX:0.7465,x:2128.95},0).wait(1).to({scaleX:0.7464,x:2129.65},0).wait(1).to({scaleX:0.7462,x:2130.3},0).wait(1).to({scaleX:0.746,x:2131},0).wait(1).to({scaleX:0.7458,x:2131.6},0).wait(1).to({scaleX:0.7457,x:2132.25},0).wait(1).to({scaleX:0.7455,x:2132.9},0).wait(1).to({scaleX:0.7453,x:2133.5},0).wait(1).to({scaleX:0.7452,x:2134.1,y:304.75},0).wait(1).to({scaleX:0.745,x:2134.7},0).wait(1).to({scaleX:0.7449,x:2135.3},0).wait(1).to({scaleX:0.7447,x:2135.9},0).wait(1).to({scaleX:0.7446,x:2136.45},0).wait(1).to({scaleX:0.7444,x:2137},0).wait(1).to({scaleX:0.7443,x:2137.55},0).wait(1).to({scaleX:0.7441,x:2138.05},0).wait(1).to({scaleX:0.744,x:2138.6},0).wait(1).to({scaleX:0.7439,x:2139.15},0).wait(1).to({scaleX:0.7437,x:2139.65},0).wait(1).to({scaleX:0.7436,x:2140.15},0).wait(1).to({scaleX:0.7435,x:2140.6},0).wait(1).to({scaleX:0.7434,x:2141.05},0).wait(1).to({scaleX:0.7432,x:2141.55},0).wait(1).to({scaleX:0.7431,x:2142},0).wait(1).to({scaleX:0.743,x:2142.4},0).wait(1).to({scaleX:0.7429,x:2142.85},0).wait(1).to({scaleX:0.7428,x:2143.25},0).wait(1).to({scaleX:0.7427,x:2143.7},0).wait(1).to({scaleX:0.7426,x:2144.05},0).wait(1).to({scaleX:0.7425,x:2144.45},0).wait(1).to({scaleX:0.7424,x:2144.8},0).wait(1).to({scaleX:0.7423,x:2145.2},0).wait(1).to({scaleX:0.7422,x:2145.55},0).wait(1).to({scaleX:0.7421,x:2145.95},0).wait(1).to({scaleX:0.742,x:2146.25},0).wait(1).to({scaleX:0.7419,x:2146.55},0).wait(1).to({scaleX:0.7418,x:2146.9},0).wait(1).to({x:2147.2},0).wait(1).to({scaleX:0.7417,x:2147.5},0).wait(1).to({scaleX:0.7416,x:2147.75},0).wait(1).to({scaleX:0.7415,x:2148.05},0).wait(1).to({x:2148.3},0).wait(1).to({scaleX:0.7414,x:2148.55},0).wait(1).to({scaleX:0.7413,x:2148.75},0).wait(1).to({x:2149},0).wait(1).to({scaleX:0.7412,x:2149.2},0).wait(1).to({x:2149.4},0).wait(1).to({scaleX:0.7411,x:2149.65},0).wait(1).to({x:2149.8},0).wait(1).to({scaleX:0.741,x:2150},0).wait(1).to({x:2150.15},0).wait(1).to({scaleX:0.7409,x:2150.3},0).wait(1).to({x:2150.45},0).wait(1).to({x:2150.55},0).wait(1).to({scaleX:0.7408,x:2150.7},0).wait(1).to({x:2150.85},0).wait(1).to({x:2150.9},0).wait(1).to({x:2151},0).wait(1).to({scaleX:0.7407,x:2151.05},0).wait(1).to({x:2151.15},0).wait(1).to({x:2151.2},0).wait(1).to({x:2151.25},0).wait(1).to({x:2151.3},0).wait(1).to({x:2151.35},0).wait(2).to({y:304.7},0).to({_off:true},1).wait(292));

	// Licht_13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(1399.5,80.05,1,1,0,0,0,9.6,9.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(417).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(184));

	// Licht_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(1348.15,104.65,1,1,0,0,0,9.1,8.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(387).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(180));

	// Licht_11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(1274.05,174.3,1,1,0,0,0,8.3,7.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(357).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(192));

	// Licht_10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(1139,219.85,1,1,0,0,0,10,10.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(314).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(183));

	// Licht_9
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(1033.15,190.85,1,1,0,0,0,10.6,10.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(279).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(184));

	// Licht_8
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(870.55,261.2,1,1,0,0,0,10.6,10.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(237).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(208));

	// Licht_7
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(727.45,255.3,1,1,0,0,0,10.7,10.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(196).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(197));

	// Licht_6
	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(556.85,301.95,1,1,0,0,0,9,8.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(144).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(197));

	// Licht_5
	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(432.2,304.5,1,1,0,0,0,10.5,10.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(104).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(185));

	// Licht_4
	this.instance_10 = new lib.Symbol4();
	this.instance_10.setTransform(333.4,291.5,1,1,0,0,0,10.7,10.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(81).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(208));

	// Licht_3
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(237.45,340.1,1,1,0,0,0,8.6,8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(48).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(189));

	// Licht_2
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(183,395.15,1,1,0,0,0,8.6,8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(200));

	// Licht_1
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(145.9,437.75,1,1,0,0,0,8.6,8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(16).to({alpha:1},0).wait(2).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(18).to({alpha:0.8984},0).wait(16).to({alpha:0.8008},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0},0).wait(2).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:1},0).wait(193));

	// Linie
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#094F8F").s().p("Ehp0AghQgSgPAPgUIAAgBIAIgKQFynMGAmDQKYqgFbg4QDPgiFBAkQC/AWGRBKQF2BFCtAVQEbAhCygaQCvgbCEhFQBQgqCBhlQCRhyBjg0QClhVDlgnQGXhFIqAbQEWAODJAcICgAQQC/AQC2AAQJDADEGiPQBXgvBfg+QA9gpBnhIQD0iqCKhCQDkhtEIgTQDSgQDaBGQCAAqDiBxQCoBUBPAdQCAAvBpgGIAWgBQCagIA+gIQBfgNBOgeQCVg7EyjvQBuhWBdhlQA4g7Bch0QCYi/BzhjQC8ihE2iTQDEhcCzhMQBqgtCjhBQCxhHBMgkQB4g5B2hOIgDAAQACAAARgLIAogcQAVgLANAPIgCAiIgDADIgaASIgXAQQh8BTh8A7QhPAmi1BIQilBChnAsQizBMjDBcQkuCPi5CeQhvBfiVC7QhdB1g5A+QhfBnhyBYQk6D1ieA+QhRAfhjANQg/AJieAIIgVABQhyAGiKgyQhUgeiphVQjchuh8gpQjThFjJAPQkAAUjaBnQiFA/jyCqQhrBLg7AnQhhA+hYAwQkQCWpCgBQi5gBjCgQQhkgIhMgJQjHgckTgOQolgbmSBEQjcAmifBSQhgAyiMBvQiGBphTArQiKBIi5AcQi3AckfgiQivgVl7hGQmMhJi9gVQk9gljJAhQlHA1p6J9Ql3F4l8HVIAAAAIgaAhIgBgBQgKALgKAAQgIAAgHgGg");
	this.shape.setTransform(811.2288,244.4005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(784));

	// Anschlussfinanzierung
	this.instance_14 = new lib.Anschlussfinanzierung();
	this.instance_14.setTransform(1525.25,131.4,1,1,0,0,0,100.5,9.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(458).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(316).to({alpha:1},0).wait(1));

	// Ebene_43
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzRkKMAmjAACIgpIRMgllAACg");
	this.shape_1.setTransform(1516.175,125.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AzRkKMAmjAACIgpIRMgllAACg");
	this.shape_2.setTransform(1516.175,125.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{x:1516.175,y:125.475}},{t:this.shape_1,p:{x:1516.175,y:125.475}}]},417).to({state:[{t:this.shape_2,p:{x:1522.775,y:130.275}},{t:this.shape_1,p:{x:1522.775,y:130.275}}]},1).to({state:[{t:this.shape_2,p:{x:1522.775,y:136.275}},{t:this.shape_1,p:{x:1522.775,y:136.275}}]},1).to({state:[{t:this.shape_2,p:{x:1522.775,y:142.275}},{t:this.shape_1,p:{x:1522.775,y:142.275}}]},1).to({state:[{t:this.shape_2,p:{x:1527.575,y:146.475}},{t:this.shape_1,p:{x:1527.575,y:146.475}}]},1).to({state:[{t:this.shape_2,p:{x:1533.575,y:151.275}},{t:this.shape_1,p:{x:1533.575,y:151.275}}]},1).to({state:[{t:this.shape_2,p:{x:1533.575,y:157.275}},{t:this.shape_1,p:{x:1533.575,y:157.275}}]},1).to({state:[{t:this.shape_2,p:{x:1533.575,y:163.275}},{t:this.shape_1,p:{x:1533.575,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1547.975,y:163.275}},{t:this.shape_1,p:{x:1547.975,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1553.975,y:163.275}},{t:this.shape_1,p:{x:1553.975,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1559.975,y:163.275}},{t:this.shape_1,p:{x:1559.975,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1565.975,y:163.275}},{t:this.shape_1,p:{x:1565.975,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1571.375,y:163.275}},{t:this.shape_1,p:{x:1571.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1577.375,y:163.275}},{t:this.shape_1,p:{x:1577.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1583.375,y:163.275}},{t:this.shape_1,p:{x:1583.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1589.375,y:163.275}},{t:this.shape_1,p:{x:1589.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1595.375,y:163.275}},{t:this.shape_1,p:{x:1595.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1601.375,y:163.275}},{t:this.shape_1,p:{x:1601.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1607.375,y:163.275}},{t:this.shape_1,p:{x:1607.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1613.375,y:163.275}},{t:this.shape_1,p:{x:1613.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1619.375,y:163.275}},{t:this.shape_1,p:{x:1619.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1625.375,y:163.275}},{t:this.shape_1,p:{x:1625.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1631.375,y:163.275}},{t:this.shape_1,p:{x:1631.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1637.375,y:163.275}},{t:this.shape_1,p:{x:1637.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1643.375,y:163.275}},{t:this.shape_1,p:{x:1643.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1649.375,y:163.275}},{t:this.shape_1,p:{x:1649.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1655.375,y:163.275}},{t:this.shape_1,p:{x:1655.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1661.375,y:163.275}},{t:this.shape_1,p:{x:1661.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1667.375,y:163.275}},{t:this.shape_1,p:{x:1667.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1673.375,y:163.275}},{t:this.shape_1,p:{x:1673.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1679.375,y:163.275}},{t:this.shape_1,p:{x:1679.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1685.375,y:163.275}},{t:this.shape_1,p:{x:1685.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1691.375,y:163.275}},{t:this.shape_1,p:{x:1691.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1697.375,y:163.275}},{t:this.shape_1,p:{x:1697.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1703.375,y:163.275}},{t:this.shape_1,p:{x:1703.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1709.375,y:163.275}},{t:this.shape_1,p:{x:1709.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1715.375,y:163.275}},{t:this.shape_1,p:{x:1715.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1723.775,y:163.275}},{t:this.shape_1,p:{x:1723.775,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1731.575,y:163.275}},{t:this.shape_1,p:{x:1731.575,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1738.175,y:163.275}},{t:this.shape_1,p:{x:1738.175,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1745.375,y:163.275}},{t:this.shape_1,p:{x:1745.375,y:163.275}}]},1).to({state:[{t:this.shape_2,p:{x:1750.775,y:163.275}},{t:this.shape_1,p:{x:1750.775,y:163.275}}]},1).to({state:[]},169).wait(157));

	// Anschluss_linie
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AQ+E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAQWE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAPuE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAPGE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAOeE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAN2E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgANOE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAMmE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAL+E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgALWE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAKuE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAKGE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAJeE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAI2E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAIOE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAHmE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAG+E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAGWE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAFuE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAFGE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAEeE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAD2E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgADOE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgACmE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAB+E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgABWE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAAuE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAAGE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAghE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAhJE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAhxE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAiZE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAjBE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAjpE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAkRE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAk5E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAlhE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAmJE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAmxE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAnZE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAoBE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAopE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgApRE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAp5E0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAqhE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgArJE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgArxE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAsZE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAtBE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAtpE0QAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAuDE0IgGgQQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAEANIADAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAuPERIgHgTQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAABQAAAAABAAQAAABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBABQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAgAuaDtQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAABQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAunDHQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgHgTQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAHASQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABgAu0ChQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBIgGgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABgAvDB5IgGgTQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgAvNBVQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgGgSQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAgAvaAvQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgGgTQAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQABgBABAAQAAAAABABQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAvnAJQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgGgSQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQABABAAAAIAGASQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAv2gdIgHgTQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBABQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAgAwBhBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBABgAwOhnQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAGATQABAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABgAwbiNQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHATQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABgAwoizQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgGgSQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAgAw1jZQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgGgTQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAHATQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAgAxBj/QAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIgGgTQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABABQAAAAAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAxRkmIgDgJQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAABQAAAAABAAQAAABAAAAIADAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIAAABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(1512.3607,115.6857);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(417).to({_off:false},0).wait(367));

	// Modernisieren
	this.instance_15 = new lib.Modernisieren();
	this.instance_15.setTransform(1430.3,7.6,1,1,0,0,0,62.2,7.6);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(417).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(357).to({alpha:1},0).wait(1));

	// Ebene_42
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzNoiMAmbgAJIgJFCI9PMVg");
	this.shape_4.setTransform(1416.725,33.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AzNoiMAmbgAJIgJFCI9PMVg");
	this.shape_5.setTransform(1416.725,33.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzNoiMAmbgAJIgJFDI9PMUg");
	this.shape_6.setTransform(1421.525,28.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AzNoiMAmbgAJIgJFDI9PMUg");
	this.shape_7.setTransform(1427.525,22.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5,p:{x:1416.725,y:33.55}},{t:this.shape_4,p:{x:1416.725,y:33.55}}]},387).to({state:[{t:this.shape_5,p:{x:1421.525,y:28.15}},{t:this.shape_6,p:{x:1421.525,y:28.15}}]},1).to({state:[{t:this.shape_5,p:{x:1426.325,y:22.75}},{t:this.shape_6,p:{x:1426.325,y:22.75}}]},1).to({state:[{t:this.shape_7,p:{x:1427.525,y:22.15}},{t:this.shape_6,p:{x:1427.525,y:22.15}}]},1).to({state:[{t:this.shape_7,p:{x:1434.125,y:22.15}},{t:this.shape_6,p:{x:1434.125,y:22.15}}]},1).to({state:[{t:this.shape_7,p:{x:1440.125,y:22.15}},{t:this.shape_6,p:{x:1440.125,y:22.15}}]},1).to({state:[{t:this.shape_7,p:{x:1446.125,y:22.15}},{t:this.shape_6,p:{x:1446.125,y:22.15}}]},1).to({state:[{t:this.shape_7,p:{x:1449.725,y:22.15}},{t:this.shape_6,p:{x:1449.725,y:22.15}}]},1).to({state:[{t:this.shape_5,p:{x:1453.325,y:17.95}},{t:this.shape_4,p:{x:1453.325,y:17.95}}]},1).to({state:[{t:this.shape_5,p:{x:1458.125,y:14.35}},{t:this.shape_4,p:{x:1458.125,y:14.35}}]},1).to({state:[{t:this.shape_5,p:{x:1462.925,y:12.55}},{t:this.shape_4,p:{x:1462.925,y:12.55}}]},1).to({state:[{t:this.shape_5,p:{x:1466.525,y:12.55}},{t:this.shape_4,p:{x:1466.525,y:12.55}}]},1).to({state:[{t:this.shape_5,p:{x:1470.725,y:8.95}},{t:this.shape_4,p:{x:1470.725,y:8.95}}]},1).to({state:[{t:this.shape_5,p:{x:1475.525,y:4.75}},{t:this.shape_4,p:{x:1475.525,y:4.75}}]},1).to({state:[{t:this.shape_5,p:{x:1483.925,y:-0.65}},{t:this.shape_4,p:{x:1483.925,y:-0.65}}]},1).to({state:[{t:this.shape_7,p:{x:1490.525,y:-2.6}},{t:this.shape_6,p:{x:1490.525,y:-2.6}}]},1).to({state:[{t:this.shape_5,p:{x:1488.125,y:-3.65}},{t:this.shape_4,p:{x:1488.125,y:-3.65}}]},1).to({state:[{t:this.shape_5,p:{x:1496.525,y:-3.65}},{t:this.shape_4,p:{x:1496.525,y:-3.65}}]},1).to({state:[{t:this.shape_5,p:{x:1506.125,y:-3.65}},{t:this.shape_4,p:{x:1506.125,y:-3.65}}]},1).to({state:[{t:this.shape_5,p:{x:1511.525,y:-7.25}},{t:this.shape_4,p:{x:1511.525,y:-7.25}}]},1).to({state:[{t:this.shape_5,p:{x:1516.925,y:-8.45}},{t:this.shape_4,p:{x:1516.925,y:-8.45}}]},1).to({state:[{t:this.shape_7,p:{x:1522.925,y:-12.05}},{t:this.shape_6,p:{x:1522.925,y:-12.05}}]},1).to({state:[{t:this.shape_5,p:{x:1527.725,y:-14.45}},{t:this.shape_6,p:{x:1527.725,y:-14.45}}]},1).to({state:[{t:this.shape_5,p:{x:1532.525,y:-17.45}},{t:this.shape_6,p:{x:1532.525,y:-17.45}}]},1).to({state:[{t:this.shape_7,p:{x:1537.325,y:-19.25}},{t:this.shape_6,p:{x:1537.325,y:-19.25}}]},1).to({state:[{t:this.shape_5,p:{x:1541.525,y:-20.45}},{t:this.shape_6,p:{x:1541.525,y:-20.45}}]},1).to({state:[{t:this.shape_5,p:{x:1546.325,y:-22.25}},{t:this.shape_4,p:{x:1546.325,y:-22.25}}]},1).to({state:[{t:this.shape_5,p:{x:1550.525,y:-22.25}},{t:this.shape_4,p:{x:1550.525,y:-22.25}}]},1).to({state:[{t:this.shape_5,p:{x:1556.525,y:-22.25}},{t:this.shape_4,p:{x:1556.525,y:-22.25}}]},1).to({state:[{t:this.shape_5,p:{x:1562.525,y:-22.25}},{t:this.shape_4,p:{x:1562.525,y:-22.25}}]},1).to({state:[{t:this.shape_5,p:{x:1568.525,y:-22.25}},{t:this.shape_4,p:{x:1568.525,y:-22.25}}]},1).to({state:[]},200).wait(167));

	// Modern_linie
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#808080").s().p("ArTGJQgBAAgBAAQAAgBAAAAQAAAAgBgBQAAAAABgBIAFgTQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEATQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgArKFiQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAFgTQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgFAUQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgArAE8QgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAFgUQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAIgFAUQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAq3EVQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAIAEgUQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgFAUQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAqtDuQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAFgUQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABIgFATQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAqjDHQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIAFgTQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgEATQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAgAqaCgQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAFgTQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgFATQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAgAqQB5QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAFgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIgFATQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAqHBTQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAEgTQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgFATQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAp9AsQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAFgTQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgFATQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAgApzAFQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAFgSQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABABAAAAIgFATQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgApqggQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAFgUQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgFAUQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAgApghHQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAFgUQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIgFATQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAgApWhuQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAgBABAAIAEgUQAAAAABgBQAAAAAAAAQABgBAAAAQABABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAABIgEATQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgApNiVQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAFgTQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgFATQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgApDi8QgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAFgTQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABABAAAAIgFATQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAo6jjQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBABgBIAEgTQAAAAABgBQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgFAUQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAowkJQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAFgUQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIgFAUQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAgAomkwQgBAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAIAFgUQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAABIgEATQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAodlXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAFgTQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgFATQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAgAoTl+QgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgHIAQAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgMAAIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgALAmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAKYmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAJwmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAJImDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAIgmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAH4mDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAHQmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAGomDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAGAmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAFYmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAEwmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAEImDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgADgmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAC4mDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgACQmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgABomDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgABAmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAAYmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAgPmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIATAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAg3mDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAhfmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAiHmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAivmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAjXmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAj/mDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAknmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAlPmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAl3mDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAmfmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAnHmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAgAnvmDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_8.setTransform(1420.2458,62.725);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(387).to({_off:false},0).wait(397));

	// Behördengänge
	this.instance_16 = new lib.Behördengänge();
	this.instance_16.setTransform(1367.75,228.55,1,1,0,0,0,68.9,9.6);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(387).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(387).to({alpha:1},0).wait(1));

	// Ebene_41
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzRkKMAmjAACIgpIRMgllAACg");
	this.shape_9.setTransform(1399.025,212.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AzRkKMAmjAACIgpIRMgllAACg");
	this.shape_10.setTransform(1399.025,212.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{y:212.725,x:1399.025}},{t:this.shape_9,p:{y:212.725,x:1399.025}}]},357).to({state:[{t:this.shape_10,p:{y:218.725,x:1399.025}},{t:this.shape_9,p:{y:218.725,x:1399.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1399.025}},{t:this.shape_9,p:{y:224.725,x:1399.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1405.025}},{t:this.shape_9,p:{y:224.725,x:1405.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1411.025}},{t:this.shape_9,p:{y:224.725,x:1411.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1416.425}},{t:this.shape_9,p:{y:224.725,x:1416.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1422.425}},{t:this.shape_9,p:{y:224.725,x:1422.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1428.425}},{t:this.shape_9,p:{y:224.725,x:1428.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1434.425}},{t:this.shape_9,p:{y:224.725,x:1434.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1441.025}},{t:this.shape_9,p:{y:224.725,x:1441.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1447.625}},{t:this.shape_9,p:{y:224.725,x:1447.625}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1453.625}},{t:this.shape_9,p:{y:224.725,x:1453.625}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1459.025}},{t:this.shape_9,p:{y:224.725,x:1459.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1464.425}},{t:this.shape_9,p:{y:224.725,x:1464.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1469.825}},{t:this.shape_9,p:{y:224.725,x:1469.825}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1475.225}},{t:this.shape_9,p:{y:224.725,x:1475.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1480.625}},{t:this.shape_9,p:{y:224.725,x:1480.625}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1486.025}},{t:this.shape_9,p:{y:224.725,x:1486.025}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1491.425}},{t:this.shape_9,p:{y:224.725,x:1491.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1497.425}},{t:this.shape_9,p:{y:224.725,x:1497.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1503.425}},{t:this.shape_9,p:{y:224.725,x:1503.425}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1508.825}},{t:this.shape_9,p:{y:224.725,x:1508.825}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1514.825}},{t:this.shape_9,p:{y:224.725,x:1514.825}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1520.825}},{t:this.shape_9,p:{y:224.725,x:1520.825}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1526.225}},{t:this.shape_9,p:{y:224.725,x:1526.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1532.225}},{t:this.shape_9,p:{y:224.725,x:1532.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1538.225}},{t:this.shape_9,p:{y:224.725,x:1538.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1544.225}},{t:this.shape_9,p:{y:224.725,x:1544.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1550.225}},{t:this.shape_9,p:{y:224.725,x:1550.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.725,x:1556.225}},{t:this.shape_9,p:{y:224.725,x:1556.225}}]},1).to({state:[{t:this.shape_10,p:{y:224.625,x:1562.375}},{t:this.shape_9,p:{y:224.625,x:1562.375}}]},1).to({state:[]},230).wait(167));

	// Behörden_linie
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#808080").s().p("AMaEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgALyEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgALKEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAKiEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAJ6EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAJSEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAIqEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAICEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAHaEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAGyEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAGKEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAFiEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAE6EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAESEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgADqEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgADCEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgACaEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAByEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgABKEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAAiEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAgFEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIATAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAgtEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAhVEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAh9EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAilEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAjNEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAj1EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAkdEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAlFEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAltEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAmVEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAm9EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAnlEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAoNEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAo1EwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgApdEwQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAplEfQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAp0D4IgHgTQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAp/DUQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgGgTQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAHATQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAqLCuQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgGgTQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAqYCIQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgGgTQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAGATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAqoBgIgGgTQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAGATQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBgAqyA8QgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgGgTQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAGATQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAgAq/AWQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAGATQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAgArOgQIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAGATQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgArZg0QAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAGATQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAgArmhaQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgArziAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgGgTQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAsCioIgGgTQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBgAsMjMQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgGgTQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAsZjyQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgGgTQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAGATQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAsmkYQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgGgTQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAGATQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_11.setTransform(1357.3357,209.0107);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(357).to({_off:false},0).wait(427));

	// Umzug_organisieren
	this.instance_17 = new lib.Umzugorganisieren();
	this.instance_17.setTransform(1265.5,314.8,1,1,0,0,0,87.6,9.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(357).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(417).to({alpha:1},0).wait(1));

	// Ebene_40
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzRm3MAmjAAEIgpNnMgllAAEg");
	this.shape_12.setTransform(1244.525,283.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AzRm3MAmjAAEIgpNnMgllAAEg");
	this.shape_13.setTransform(1244.525,283.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{y:283.075,x:1244.525}},{t:this.shape_12,p:{y:283.075,x:1244.525}}]},314).to({state:[{t:this.shape_13,p:{y:289.075,x:1244.525}},{t:this.shape_12,p:{y:289.075,x:1244.525}}]},1).to({state:[{t:this.shape_13,p:{y:295.075,x:1250.525}},{t:this.shape_12,p:{y:295.075,x:1250.525}}]},1).to({state:[{t:this.shape_13,p:{y:301.075,x:1256.525}},{t:this.shape_12,p:{y:301.075,x:1256.525}}]},1).to({state:[{t:this.shape_13,p:{y:305.875,x:1260.125}},{t:this.shape_12,p:{y:305.875,x:1260.125}}]},1).to({state:[{t:this.shape_13,p:{y:308.875,x:1263.725}},{t:this.shape_12,p:{y:308.875,x:1263.725}}]},1).to({state:[{t:this.shape_13,p:{y:314.875,x:1263.725}},{t:this.shape_12,p:{y:314.875,x:1263.725}}]},1).to({state:[{t:this.shape_13,p:{y:320.875,x:1263.725}},{t:this.shape_12,p:{y:320.875,x:1263.725}}]},1).to({state:[{t:this.shape_13,p:{y:326.275,x:1269.125}},{t:this.shape_12,p:{y:326.275,x:1269.125}}]},1).to({state:[{t:this.shape_13,p:{y:332.275,x:1275.125}},{t:this.shape_12,p:{y:332.275,x:1275.125}}]},1).to({state:[{t:this.shape_13,p:{y:338.275,x:1275.125}},{t:this.shape_12,p:{y:338.275,x:1275.125}}]},1).to({state:[{t:this.shape_13,p:{y:344.275,x:1281.725}},{t:this.shape_12,p:{y:344.275,x:1281.725}}]},1).to({state:[{t:this.shape_13,p:{y:349.675,x:1287.725}},{t:this.shape_12,p:{y:349.675,x:1287.725}}]},1).to({state:[{t:this.shape_13,p:{y:355.675,x:1293.725}},{t:this.shape_12,p:{y:355.675,x:1293.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1297.925}},{t:this.shape_12,p:{y:358.075,x:1297.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1303.925}},{t:this.shape_12,p:{y:358.075,x:1303.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1309.925}},{t:this.shape_12,p:{y:358.075,x:1309.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1315.925}},{t:this.shape_12,p:{y:358.075,x:1315.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1322.525}},{t:this.shape_12,p:{y:358.075,x:1322.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1328.525}},{t:this.shape_12,p:{y:358.075,x:1328.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1334.525}},{t:this.shape_12,p:{y:358.075,x:1334.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1340.525}},{t:this.shape_12,p:{y:358.075,x:1340.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1346.525}},{t:this.shape_12,p:{y:358.075,x:1346.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1352.525}},{t:this.shape_12,p:{y:358.075,x:1352.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1358.525}},{t:this.shape_12,p:{y:358.075,x:1358.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1363.925}},{t:this.shape_12,p:{y:358.075,x:1363.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1369.925}},{t:this.shape_12,p:{y:358.075,x:1369.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1375.925}},{t:this.shape_12,p:{y:358.075,x:1375.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1381.925}},{t:this.shape_12,p:{y:358.075,x:1381.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1389.725}},{t:this.shape_12,p:{y:358.075,x:1389.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1395.725}},{t:this.shape_12,p:{y:358.075,x:1395.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1401.725}},{t:this.shape_12,p:{y:358.075,x:1401.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1408.925}},{t:this.shape_12,p:{y:358.075,x:1408.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1414.925}},{t:this.shape_12,p:{y:358.075,x:1414.925}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1421.525}},{t:this.shape_12,p:{y:358.075,x:1421.525}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1428.125}},{t:this.shape_12,p:{y:358.075,x:1428.125}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1434.725}},{t:this.shape_12,p:{y:358.075,x:1434.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1440.725}},{t:this.shape_12,p:{y:358.075,x:1440.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1446.725}},{t:this.shape_12,p:{y:358.075,x:1446.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1452.725}},{t:this.shape_12,p:{y:358.075,x:1452.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1458.725}},{t:this.shape_12,p:{y:358.075,x:1458.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1464.725}},{t:this.shape_12,p:{y:358.075,x:1464.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1470.725}},{t:this.shape_12,p:{y:358.075,x:1470.725}}]},1).to({state:[{t:this.shape_13,p:{y:358.075,x:1476.725}},{t:this.shape_12,p:{y:358.075,x:1476.725}}]},1).to({state:[]},260).wait(167));

	// Umzug_Linie
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808080").s().p("AQeIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAP2IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAPOIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAOmIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAN+IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgANWIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAMuIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAMGIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgALeIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAK2IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAKOIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAJmIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAI+IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAIWIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAHuIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAHGIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAGeIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAF2IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAFOIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAEmIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAD+IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgADWIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgACuIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgACGIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgABeIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAA2IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAAOIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAgZIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAhBIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAhpIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAiRIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAi5IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAjhIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAkJIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAkxIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAlZIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAmBIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAmpIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAnRIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAn5IJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAohIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgApJIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgApxIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAqZIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgArBIJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAUAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgArJH5QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgArXHTQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgArkGtQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgArxGIQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAHASQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAgAsBFgIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBgAsME8QAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAscEVIgGgTQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIAHATQABABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAgAsnDxQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAs2DJIgHgSQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAHATQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBgAtBClQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAtOCAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHATQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAtcBaQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAtpA0QgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgHgTQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAt5ANIgGgSQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHASQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIAAABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAgAuEgWQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHASQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAuTg+IgHgSQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBgAuehiQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAHATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAuuiJIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAgAu5itQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAvGjTQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAvTj5QAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAvhkeQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIAHASQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAvwlGIgHgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAv7lqQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAwLmRIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAwWm1QAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAwmndIgGgSQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAHATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAwxoBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_14.setTransform(1245.8107,275.0107);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(314).to({_off:false},0).wait(470));

	// Wohnung_einrichten
	this.instance_18 = new lib.Wohnungeinrichten();
	this.instance_18.setTransform(1161.3,122.55,1,1,0,0,0,87.5,9.6);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(314).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(460).to({alpha:1},0).wait(1));

	// Ebene_39
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzUkfMAmpgABIgXFSMgjmADvg");
	this.shape_15.setTransform(1137.775,153.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AzUkfMAmpgABIgXFSMgjmADvg");
	this.shape_16.setTransform(1137.775,153.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AwFkfMAgLgABIgTFSI9pDvg");
	this.shape_17.setTransform(1167.475,127.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AwFkfMAgLgABIgTFSI9pDvg");
	this.shape_18.setTransform(1167.475,127.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AtMkfIaZgBIgQFSI4TDvg");
	this.shape_19.setTransform(1184.8,127.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AtMkfIaZgBIgQFSI4TDvg");
	this.shape_20.setTransform(1184.8,127.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AtLkfIaXgBIgPFSI4TDvg");
	this.shape_21.setTransform(1190.8,127.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AtMkfIaYgBIgPFSI4TDvg");
	this.shape_22.setTransform(1196.8,127.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AqHkfIUPgBIgMFSIyoDvg");
	this.shape_23.setTransform(1200.975,127.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqHkfIUOgBIgMFSIynDvg");
	this.shape_24.setTransform(1200.975,127.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AqHkfIUPgBIgNFSIyoDvg");
	this.shape_25.setTransform(1207,127.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AqGkfIUOgBIgNFSIynDvg");
	this.shape_26.setTransform(1207,127.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AqHkfIUOgBIgLFSIypDvg");
	this.shape_27.setTransform(1213,127.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AnEkfIOJgBIgIFSItCDvg");
	this.shape_28.setTransform(1222.25,127.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AnEkfIOKgBIgJFSItDDvg");
	this.shape_29.setTransform(1222.25,127.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AnEkfIOJgBIgIFSItCDvg");
	this.shape_30.setTransform(1231.85,127.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AnEkfIOKgBIgJFSItCDvg");
	this.shape_31.setTransform(1240.85,127.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnFkfIOKgBIgIFSItDDvg");
	this.shape_32.setTransform(1240.85,127.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Aj3knIHvABIgGHmInQBog");
	this.shape_33.setTransform(1243.9,128.7375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Aj3knIHvABIgGHmInQBog");
	this.shape_34.setTransform(1243.9,128.7375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Aj3jfIHvABIgGFvInQBPg");
	this.shape_35.setTransform(1270.9,121.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Aj3jfIHvABIgGFvInQBPg");
	this.shape_36.setTransform(1270.9,121.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AikjfIFJABIgEFvIk1BPg");
	this.shape_37.setTransform(1272.075,121.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AikjfIFJABIgEFvIk1BPg");
	this.shape_38.setTransform(1272.075,121.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16,p:{y:153.175,x:1137.775}},{t:this.shape_15,p:{y:153.175,x:1137.775}}]},279).to({state:[{t:this.shape_16,p:{y:147.175,x:1137.775}},{t:this.shape_15,p:{y:147.175,x:1137.775}}]},1).to({state:[{t:this.shape_16,p:{y:141.175,x:1137.775}},{t:this.shape_15,p:{y:141.175,x:1137.775}}]},1).to({state:[{t:this.shape_16,p:{y:135.175,x:1137.775}},{t:this.shape_15,p:{y:135.175,x:1137.775}}]},1).to({state:[{t:this.shape_16,p:{y:129.775,x:1143.175}},{t:this.shape_15,p:{y:129.775,x:1143.175}}]},1).to({state:[{t:this.shape_16,p:{y:127.975,x:1146.175}},{t:this.shape_15,p:{y:127.975,x:1146.175}}]},1).to({state:[{t:this.shape_16,p:{y:127.975,x:1169.575}},{t:this.shape_15,p:{y:127.975,x:1169.575}}]},1).to({state:[{t:this.shape_16,p:{y:127.975,x:1176.775}},{t:this.shape_15,p:{y:127.975,x:1176.775}}]},1).to({state:[{t:this.shape_16,p:{y:127.975,x:1182.175}},{t:this.shape_15,p:{y:127.975,x:1182.175}}]},1).to({state:[{t:this.shape_18,p:{x:1167.475}},{t:this.shape_17,p:{x:1167.475}}]},1).to({state:[{t:this.shape_18,p:{x:1173.475}},{t:this.shape_17,p:{x:1173.475}}]},1).to({state:[{t:this.shape_18,p:{x:1179.475}},{t:this.shape_17,p:{x:1179.475}}]},1).to({state:[{t:this.shape_18,p:{x:1185.475}},{t:this.shape_17,p:{x:1185.475}}]},1).to({state:[{t:this.shape_18,p:{x:1191.475}},{t:this.shape_17,p:{x:1191.475}}]},1).to({state:[{t:this.shape_18,p:{x:1197.475}},{t:this.shape_17,p:{x:1197.475}}]},1).to({state:[{t:this.shape_20,p:{x:1184.8}},{t:this.shape_19,p:{x:1184.8}}]},1).to({state:[{t:this.shape_21},{t:this.shape_19,p:{x:1190.8}}]},1).to({state:[{t:this.shape_22,p:{x:1196.8}},{t:this.shape_19,p:{x:1196.8}}]},1).to({state:[{t:this.shape_22,p:{x:1202.8}},{t:this.shape_19,p:{x:1202.8}}]},1).to({state:[{t:this.shape_20,p:{x:1208.8}},{t:this.shape_19,p:{x:1208.8}}]},1).to({state:[{t:this.shape_22,p:{x:1214.8}},{t:this.shape_19,p:{x:1214.8}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26,p:{x:1207}},{t:this.shape_25,p:{x:1207}}]},1).to({state:[{t:this.shape_27,p:{x:1213}},{t:this.shape_25,p:{x:1213}}]},1).to({state:[{t:this.shape_27,p:{x:1219.6}},{t:this.shape_25,p:{x:1219.6}}]},1).to({state:[{t:this.shape_27,p:{x:1227.4}},{t:this.shape_25,p:{x:1227.4}}]},1).to({state:[{t:this.shape_26,p:{x:1235.8}},{t:this.shape_25,p:{x:1235.8}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28,p:{x:1222.25}}]},1).to({state:[{t:this.shape_30},{t:this.shape_28,p:{x:1231.85}}]},1).to({state:[{t:this.shape_32,p:{x:1240.85}},{t:this.shape_31,p:{x:1240.85}}]},1).to({state:[{t:this.shape_32,p:{x:1251.65}},{t:this.shape_31,p:{x:1251.65}}]},1).to({state:[{t:this.shape_34,p:{x:1243.9,y:128.7375}},{t:this.shape_33,p:{x:1243.9,y:128.7375}}]},1).to({state:[{t:this.shape_34,p:{x:1254.7,y:128.75}},{t:this.shape_33,p:{x:1254.7,y:128.75}}]},1).to({state:[{t:this.shape_34,p:{x:1264.9,y:128.75}},{t:this.shape_33,p:{x:1264.9,y:128.75}}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},303).wait(167));

	// Wohnung_linie
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808080").s().p("AxCEPQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAHgKQAAgBABAAQAAgBABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQgBAAAAAAIgHAKQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAgAwvD1QAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAAAIALgRQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgLAQIgCABgAwXDVQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAMgQQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQgBAAAAABIgMAQIgCABgAwAC0QAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAIALgQQABgBAAAAQABgBAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAABgBAAIgLAQIgCABgAvoCTQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAMgQQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQgBAAAAABIgMAQIgCABgAvRB0QAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAIALgQQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgLARIgCABgAu5BTQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAMgRQAAAAABAAQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQgBABAAAAIgMAQIgCABgAuiAzQAAgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBIALgQQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgLAQIgCABgAuKASQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAMgPQAAgBABAAQAAgBABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAIgMARIgCAAgAtzgNQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBIALgQQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgLAQIgCACgAtbgtQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAMgQQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAgBABQAAAAAAABIgMAQIgCABgAtEhOQAAAAAAgBQgBAAAAAAQAAgBAAAAQABgBAAAAIALgRQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgLAQIgCABgAsshuQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAMgQQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABgBAAQAAABAAAAIgMAQIgCABgAsViPQAAAAAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAIALgQQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBAAIgLARIgCABgAr9ivQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAMgQQAAAAABAAQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAABAAABIgMAPIgCACgArmjPQAAgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBIALgQQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgLAQIgCABgArOjwQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAMgRQAAAAABAAQAAgBABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAgBABQAAAAAAAAIgMAQQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAQtkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAQFkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAPdkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAO1kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAONkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgANlkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAM9kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAMVkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgALtkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgALFkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAKdkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAJ1kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAJNkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAIlkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAH9kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAHVkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAGtkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAGFkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAFdkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAE1kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAENkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgADlkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAC9kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgACVkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgABtkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgABFkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAAdkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAgKkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIATAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAgykKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAhakKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAiCkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAiqkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAjSkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAj6kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAkikKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAlKkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAlykKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAmakKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAnCkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAnqkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAoSkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAo6kKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgApikKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAqKkKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAqykKQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_39.setTransform(1142.155,161.5);
	this.shape_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(279).to({_off:false},0).wait(505));

	// Material_einkaufen
	this.instance_19 = new lib.Materialeinkaufen();
	this.instance_19.setTransform(994.85,354.4,1,1,0,0,0,81,7.7);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(279).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(495).to({alpha:1},0).wait(1));

	// Ebene_38
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzVoQMAmrAABIgmPcMgkZABEg");
	this.shape_40.setTransform(969.75,324.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AzVoQMAmrAABIgmPcMgkZABEg");
	this.shape_41.setTransform(969.75,324.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AzUoQMAmqAABIgmPcMgkZABEg");
	this.shape_42.setTransform(975.75,342.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AzVoQMAmqAABIglPcMgkZABEg");
	this.shape_43.setTransform(981.75,348.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AzUoQMAmqAABIgmPcMgkZABEg");
	this.shape_44.setTransform(1027.35,418.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41,p:{y:324.625,x:969.75}},{t:this.shape_40,p:{y:324.625,x:969.75}}]},237).to({state:[{t:this.shape_41,p:{y:330.625,x:969.75}},{t:this.shape_40,p:{y:330.625,x:969.75}}]},1).to({state:[{t:this.shape_41,p:{y:336.625,x:969.75}},{t:this.shape_40,p:{y:336.625,x:969.75}}]},1).to({state:[{t:this.shape_42,p:{x:975.75,y:342.625}},{t:this.shape_40,p:{y:342.625,x:975.75}}]},1).to({state:[{t:this.shape_43,p:{x:981.75,y:348.625}},{t:this.shape_40,p:{y:348.625,x:981.75}}]},1).to({state:[{t:this.shape_41,p:{y:354.625,x:987.75}},{t:this.shape_40,p:{y:354.625,x:987.75}}]},1).to({state:[{t:this.shape_42,p:{x:993.75,y:360.625}},{t:this.shape_40,p:{y:360.625,x:993.75}}]},1).to({state:[{t:this.shape_43,p:{x:999.75,y:366.625}},{t:this.shape_40,p:{y:366.625,x:999.75}}]},1).to({state:[{t:this.shape_43,p:{x:999.75,y:372.625}},{t:this.shape_40,p:{y:372.625,x:999.75}}]},1).to({state:[{t:this.shape_43,p:{x:1005.15,y:382.225}},{t:this.shape_40,p:{y:382.225,x:1005.15}}]},1).to({state:[{t:this.shape_43,p:{x:1005.15,y:388.225}},{t:this.shape_40,p:{y:388.225,x:1005.15}}]},1).to({state:[{t:this.shape_43,p:{x:1005.15,y:394.225}},{t:this.shape_40,p:{y:394.225,x:1005.15}}]},1).to({state:[{t:this.shape_43,p:{x:1005.15,y:400.225}},{t:this.shape_40,p:{y:400.225,x:1005.15}}]},1).to({state:[{t:this.shape_42,p:{x:1009.95,y:405.025}},{t:this.shape_40,p:{y:405.025,x:1009.95}}]},1).to({state:[{t:this.shape_43,p:{x:1015.95,y:411.025}},{t:this.shape_40,p:{y:411.025,x:1015.95}}]},1).to({state:[{t:this.shape_43,p:{x:1021.95,y:417.025}},{t:this.shape_40,p:{y:417.025,x:1021.95}}]},1).to({state:[{t:this.shape_43,p:{x:1027.35,y:418.975}},{t:this.shape_44,p:{x:1027.35,y:418.975}}]},1).to({state:[{t:this.shape_43,p:{x:1026.75,y:420.625}},{t:this.shape_44,p:{x:1026.75,y:420.625}}]},1).to({state:[{t:this.shape_43,p:{x:1032.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1032.75}}]},1).to({state:[{t:this.shape_41,p:{y:420.625,x:1038.75}},{t:this.shape_40,p:{y:420.625,x:1038.75}}]},1).to({state:[{t:this.shape_42,p:{x:1044.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1044.75}}]},1).to({state:[{t:this.shape_43,p:{x:1050.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1050.75}}]},1).to({state:[{t:this.shape_41,p:{y:420.625,x:1056.75}},{t:this.shape_40,p:{y:420.625,x:1056.75}}]},1).to({state:[{t:this.shape_43,p:{x:1062.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1062.75}}]},1).to({state:[{t:this.shape_43,p:{x:1068.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1068.75}}]},1).to({state:[{t:this.shape_42,p:{x:1074.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1074.75}}]},1).to({state:[{t:this.shape_43,p:{x:1080.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1080.75}}]},1).to({state:[{t:this.shape_43,p:{x:1086.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1086.75}}]},1).to({state:[{t:this.shape_41,p:{y:420.625,x:1092.75}},{t:this.shape_40,p:{y:420.625,x:1092.75}}]},1).to({state:[{t:this.shape_42,p:{x:1098.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1098.75}}]},1).to({state:[{t:this.shape_43,p:{x:1104.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1104.75}}]},1).to({state:[{t:this.shape_41,p:{y:420.625,x:1110.75}},{t:this.shape_40,p:{y:420.625,x:1110.75}}]},1).to({state:[{t:this.shape_43,p:{x:1116.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1116.75}}]},1).to({state:[{t:this.shape_43,p:{x:1122.15,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1122.15}}]},1).to({state:[{t:this.shape_42,p:{x:1128.15,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1128.15}}]},1).to({state:[{t:this.shape_42,p:{x:1134.15,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1134.15}}]},1).to({state:[{t:this.shape_42,p:{x:1140.15,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1140.15}}]},1).to({state:[{t:this.shape_43,p:{x:1149.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1149.75}}]},1).to({state:[{t:this.shape_43,p:{x:1160.55,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1160.55}}]},1).to({state:[{t:this.shape_43,p:{x:1173.75,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1173.75}}]},1).to({state:[{t:this.shape_43,p:{x:1183.95,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1183.95}}]},1).to({state:[{t:this.shape_42,p:{x:1202.55,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1202.55}}]},1).to({state:[{t:this.shape_43,p:{x:1210.35,y:420.625}},{t:this.shape_40,p:{y:420.625,x:1210.35}}]},1).to({state:[]},338).wait(167));

	// Material_linie
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#808080").s().p("APqIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAPCIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAOaIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgANyIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgANKIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAMiIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAL6IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgALSIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAKqIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAKCIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAJaIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAIyIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAIKIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAHiIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAG6IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAGSIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAFqIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAFCIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAEaIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgADyIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgADKIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgACiIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAB6IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgABSIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAAqIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAACIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAglIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAhNIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAh1IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAidIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAjFIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAjtIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAkVIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAk9IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAllIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAmNIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAm1IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAndIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAoFIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAotIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgApVIJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAp9IJQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAqSIFIgHgSQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBgAqdHhQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAHATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgAqtG6IgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAgAq4GWQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAHATQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAgArFFwQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBIgGgSQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAgArSFKQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgArgElQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAHASQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAgArtD/QgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAr6DZQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAsKCyIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAsVCOQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGASQABABAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAslBmIgGgSQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIAHATQABAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAswBCQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAs/AbIgHgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAtKgIQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAtXguQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgGgTQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAtlhUQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAgAtyh5QgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgHgTQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAGASQABABAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAuCihIgGgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAuNjFQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAHATQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAgAucjsIgHgTQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAunkQQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAHATQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAu3k4IgHgSQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAHATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBgAvClcQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAGATQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAvPmBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgGgTQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAGATQABABAAABQAAAAAAABQgBAAAAAAQAAABgBAAgAvdmnIgCgCIgHgTQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAHATQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAgAvqnNQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgHgTQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAHATQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAgAv5n0IgGgQQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAFAQQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_45.setTransform(973.9107,317.0107);
	this.shape_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(237).to({_off:false},0).wait(547));

	// Handwerker_suchen
	this.instance_20 = new lib.Handwerkersuchen();
	this.instance_20.setTransform(845.75,174.45,1,1,0,0,0,86.9,7.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(237).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(537).to({alpha:1},0).wait(1));

	// Ebene_37
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Avwk6IfiAAIAAJ1I/iAAg");
	this.shape_46.setTransform(835.85,207.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AvwE7IAAp1IfiAAIAAJ1g");
	this.shape_47.setTransform(835.85,207.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Avxk6IfjAAIAAJ1I/jAAg");
	this.shape_48.setTransform(838.25,178.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AvxE7IAAp1IfjAAIAAJ1g");
	this.shape_49.setTransform(838.25,178.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Avxk6IfiAAIAAJ1I/iAAg");
	this.shape_50.setTransform(846.65,162.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Avlk6IfLAAIAAJ1I/LAAg");
	this.shape_51.setTransform(898.3,157.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AvkE7IAAp1IfJAAIAAJ1g");
	this.shape_52.setTransform(898.3,157.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Ap3k6ITvAAIAAJ1IzvAAg");
	this.shape_53.setTransform(871.1,167.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ap3E7IAAp1ITvAAIAAJ1g");
	this.shape_54.setTransform(871.1,167.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Aj5k6IHzAAIAAJ1InzAAg");
	this.shape_55.setTransform(919,156.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Aj5E7IAAp1IHzAAIAAJ1g");
	this.shape_56.setTransform(919,156.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47,p:{y:207.625,x:835.85}},{t:this.shape_46,p:{y:207.625,x:835.85}}]},196).to({state:[{t:this.shape_47,p:{y:201.625,x:835.85}},{t:this.shape_46,p:{y:201.625,x:835.85}}]},1).to({state:[{t:this.shape_47,p:{y:195.625,x:835.85}},{t:this.shape_46,p:{y:195.625,x:835.85}}]},1).to({state:[{t:this.shape_47,p:{y:189.625,x:835.85}},{t:this.shape_46,p:{y:189.625,x:835.85}}]},1).to({state:[{t:this.shape_47,p:{y:183.625,x:835.85}},{t:this.shape_46,p:{y:183.625,x:835.85}}]},1).to({state:[{t:this.shape_49,p:{x:838.25,y:178.225}},{t:this.shape_48,p:{x:838.25,y:178.225}}]},1).to({state:[{t:this.shape_47,p:{y:172.225,x:843.05}},{t:this.shape_46,p:{y:172.225,x:843.05}}]},1).to({state:[{t:this.shape_47,p:{y:166.225,x:843.05}},{t:this.shape_46,p:{y:166.225,x:843.05}}]},1).to({state:[{t:this.shape_47,p:{y:162.025,x:846.65}},{t:this.shape_50}]},1).to({state:[{t:this.shape_49,p:{x:850.85,y:158.425}},{t:this.shape_46,p:{y:158.425,x:850.85}}]},1).to({state:[{t:this.shape_49,p:{x:856.25,y:157.825}},{t:this.shape_48,p:{x:856.25,y:157.825}}]},1).to({state:[{t:this.shape_49,p:{x:868.25,y:157.825}},{t:this.shape_48,p:{x:868.25,y:157.825}}]},1).to({state:[{t:this.shape_49,p:{x:874.25,y:157.825}},{t:this.shape_48,p:{x:874.25,y:157.825}}]},1).to({state:[{t:this.shape_49,p:{x:880.25,y:157.825}},{t:this.shape_48,p:{x:880.25,y:157.825}}]},1).to({state:[{t:this.shape_47,p:{y:157.825,x:886.25}},{t:this.shape_48,p:{x:886.25,y:157.825}}]},1).to({state:[{t:this.shape_49,p:{x:892.25,y:157.825}},{t:this.shape_48,p:{x:892.25,y:157.825}}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54,p:{x:871.1,y:167.775}},{t:this.shape_53,p:{x:871.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:877.1,y:167.775}},{t:this.shape_53,p:{x:877.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:883.1,y:167.775}},{t:this.shape_53,p:{x:883.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:889.1,y:167.775}},{t:this.shape_53,p:{x:889.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:895.1,y:167.775}},{t:this.shape_53,p:{x:895.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:901.1,y:167.775}},{t:this.shape_53,p:{x:901.1,y:167.775}}]},1).to({state:[{t:this.shape_54,p:{x:908.3,y:163.575}},{t:this.shape_53,p:{x:908.3,y:163.575}}]},1).to({state:[{t:this.shape_54,p:{x:913.7,y:162.975}},{t:this.shape_53,p:{x:913.7,y:162.975}}]},1).to({state:[{t:this.shape_54,p:{x:918.5,y:160.575}},{t:this.shape_53,p:{x:918.5,y:160.575}}]},1).to({state:[{t:this.shape_54,p:{x:924.5,y:160.575}},{t:this.shape_53,p:{x:924.5,y:160.575}}]},1).to({state:[{t:this.shape_54,p:{x:931.1,y:160.575}},{t:this.shape_53,p:{x:931.1,y:160.575}}]},1).to({state:[{t:this.shape_54,p:{x:935.9,y:158.175}},{t:this.shape_53,p:{x:935.9,y:158.175}}]},1).to({state:[{t:this.shape_54,p:{x:941.3,y:156.975}},{t:this.shape_53,p:{x:941.3,y:156.975}}]},1).to({state:[{t:this.shape_54,p:{x:945.5,y:156.375}},{t:this.shape_53,p:{x:945.5,y:156.375}}]},1).to({state:[{t:this.shape_54,p:{x:951.5,y:156.375}},{t:this.shape_53,p:{x:951.5,y:156.375}}]},1).to({state:[{t:this.shape_56,p:{x:919}},{t:this.shape_55,p:{x:919}}]},1).to({state:[{t:this.shape_56,p:{x:925}},{t:this.shape_55,p:{x:925}}]},1).to({state:[{t:this.shape_56,p:{x:931}},{t:this.shape_55,p:{x:931}}]},1).to({state:[{t:this.shape_56,p:{x:937}},{t:this.shape_55,p:{x:937}}]},1).to({state:[{t:this.shape_56,p:{x:943}},{t:this.shape_55,p:{x:943}}]},1).to({state:[{t:this.shape_56,p:{x:949}},{t:this.shape_55,p:{x:949}}]},1).to({state:[{t:this.shape_56,p:{x:955}},{t:this.shape_55,p:{x:955}}]},1).to({state:[{t:this.shape_56,p:{x:961}},{t:this.shape_55,p:{x:961}}]},1).to({state:[{t:this.shape_56,p:{x:967}},{t:this.shape_55,p:{x:967}}]},1).to({state:[{t:this.shape_56,p:{x:970}},{t:this.shape_55,p:{x:970}}]},1).to({state:[]},380).wait(167));

	// Handwerker_linie
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AwJFKQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAIgSQAAgBAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBABIgIASQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAgAv5EmQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAIgSQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgIASQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABgAvqEBQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAIgTQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAgBABIgHASQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAgAvaDcQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQAAABAAAAQABABgBAAQAAAAAAABIgIATQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAvLC3QAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAIgSQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgIATQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAu7CSQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAIgTQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQAAABgBAAIgIASIgCADgAurBtQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAIgTQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIgIATQAAAAAAABQAAAAAAAAQgBAAAAAAQgBABAAAAgAucBIQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAIgTQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQAAAAgBAAIgHATQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAuMAjQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQAAAAgBABIgIASIgCACgAt8AAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAIgTQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgIASQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAgAttglQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAIgTQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAgBABIgIASQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAtdhKQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAIgSQABgBAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIgIASIgCABgAtOhuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAIgSQAAgBABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgIASQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBABgAs+iTQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAIgSQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQAAAAgBABIgIASQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAgAsui4QgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAIgSQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgIATQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAgAsfjdQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAIgSQAAgBABAAQAAAAABAAQAAgBAAABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIgHATQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAsPkCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIAHgSQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAABQAAAAAAABQABAAgBAAQAAABAAAAIgIASQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAr/knQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAIgTQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgIATQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAgAP1lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAPNlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAOllFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAN9lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgANVlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAMtlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAMFlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgALdlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAK1lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAKNlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAJllFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAI9lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAIVlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAHtlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAHFlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAGdlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAF1lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAFNlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAEllFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAD9lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgADVlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgACtlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgACFlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgABdlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAA1lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAANlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAgalFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAhClFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAhqlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAiSlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAi6lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAjilFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAkKlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAkylFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAlalFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAmClFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAmqlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAnSlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAn6lFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAoilFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgApKlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgApylFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAqalFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgArClFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgArqlFQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_57.setTransform(830.7607,219.4);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(196).to({_off:false},0).wait(588));

	// Energievertrag_abschließen
	this.instance_21 = new lib.Energievertragabschließen();
	this.instance_21.setTransform(719.05,393.45,1,1,0,0,0,119.2,9.7);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(196).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(578).to({alpha:1},0).wait(1));

	// Ebene_36
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("A3HnWMAuPAAAIAAOsMguPAAAg");
	this.shape_58.setTransform(705.475,366.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("A3HHXIAAutMAuPAAAIAAOtg");
	this.shape_59.setTransform(705.475,366.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A3HHWIAAurMAuPAAAIAAOrg");
	this.shape_60.setTransform(705.475,372.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("A3HnVMAuPAAAIAAOsMguPAAAg");
	this.shape_61.setTransform(710.875,394.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A3HHXIAAusMAuPAAAIAAOsg");
	this.shape_62.setTransform(710.875,394.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("A3HnWMAuPAAAIAAOtMguPAAAg");
	this.shape_63.setTransform(718.075,402.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59,p:{y:366.1,x:705.475}},{t:this.shape_58,p:{y:366.1,x:705.475}}]},143).to({state:[{t:this.shape_60,p:{y:372.1,x:705.475}},{t:this.shape_58,p:{y:372.1,x:705.475}}]},1).to({state:[{t:this.shape_59,p:{y:378.1,x:705.475}},{t:this.shape_58,p:{y:378.1,x:705.475}}]},1).to({state:[{t:this.shape_59,p:{y:384.1,x:705.475}},{t:this.shape_58,p:{y:384.1,x:705.475}}]},1).to({state:[{t:this.shape_60,p:{y:390.1,x:705.475}},{t:this.shape_58,p:{y:390.1,x:705.475}}]},1).to({state:[{t:this.shape_62},{t:this.shape_61,p:{x:710.875,y:394.9}}]},1).to({state:[{t:this.shape_60,p:{y:399.1,x:714.475}},{t:this.shape_58,p:{y:399.1,x:714.475}}]},1).to({state:[{t:this.shape_60,p:{y:402.7,x:718.075}},{t:this.shape_63,p:{x:718.075,y:402.7}}]},1).to({state:[{t:this.shape_60,p:{y:406.3,x:721.675}},{t:this.shape_63,p:{x:721.675,y:406.3}}]},1).to({state:[{t:this.shape_59,p:{y:412.3,x:721.675}},{t:this.shape_63,p:{x:721.675,y:412.3}}]},1).to({state:[{t:this.shape_59,p:{y:418.3,x:721.675}},{t:this.shape_63,p:{x:721.675,y:418.3}}]},1).to({state:[{t:this.shape_60,p:{y:424.3,x:721.675}},{t:this.shape_63,p:{x:721.675,y:424.3}}]},1).to({state:[{t:this.shape_60,p:{y:427.9,x:725.875}},{t:this.shape_61,p:{x:725.875,y:427.9}}]},1).to({state:[{t:this.shape_60,p:{y:432.1,x:730.075}},{t:this.shape_61,p:{x:730.075,y:432.1}}]},1).to({state:[{t:this.shape_59,p:{y:437.5,x:730.075}},{t:this.shape_58,p:{y:437.5,x:730.075}}]},1).to({state:[{t:this.shape_59,p:{y:440.5,x:733.675}},{t:this.shape_63,p:{x:733.675,y:440.5}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:739.075}},{t:this.shape_58,p:{y:441.1,x:739.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:745.075}},{t:this.shape_58,p:{y:441.1,x:745.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:751.075}},{t:this.shape_58,p:{y:441.1,x:751.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:757.075}},{t:this.shape_58,p:{y:441.1,x:757.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:763.075}},{t:this.shape_58,p:{y:441.1,x:763.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:769.075}},{t:this.shape_58,p:{y:441.1,x:769.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:775.075}},{t:this.shape_58,p:{y:441.1,x:775.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:781.075}},{t:this.shape_58,p:{y:441.1,x:781.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:787.075}},{t:this.shape_58,p:{y:441.1,x:787.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:793.075}},{t:this.shape_58,p:{y:441.1,x:793.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:799.075}},{t:this.shape_58,p:{y:441.1,x:799.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:805.075}},{t:this.shape_58,p:{y:441.1,x:805.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:811.075}},{t:this.shape_58,p:{y:441.1,x:811.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:817.075}},{t:this.shape_58,p:{y:441.1,x:817.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:823.075}},{t:this.shape_58,p:{y:441.1,x:823.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:829.075}},{t:this.shape_58,p:{y:441.1,x:829.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:835.075}},{t:this.shape_58,p:{y:441.1,x:835.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:841.675}},{t:this.shape_58,p:{y:441.1,x:841.675}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:847.675}},{t:this.shape_58,p:{y:441.1,x:847.675}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:854.275}},{t:this.shape_58,p:{y:441.1,x:854.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:860.275}},{t:this.shape_58,p:{y:441.1,x:860.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:866.875}},{t:this.shape_58,p:{y:441.1,x:866.875}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:873.475}},{t:this.shape_58,p:{y:441.1,x:873.475}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:879.475}},{t:this.shape_58,p:{y:441.1,x:879.475}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:886.075}},{t:this.shape_58,p:{y:441.1,x:886.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:892.675}},{t:this.shape_58,p:{y:441.1,x:892.675}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:899.275}},{t:this.shape_58,p:{y:441.1,x:899.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:905.275}},{t:this.shape_58,p:{y:441.1,x:905.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:911.275}},{t:this.shape_58,p:{y:441.1,x:911.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:917.275}},{t:this.shape_58,p:{y:441.1,x:917.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:923.275}},{t:this.shape_58,p:{y:441.1,x:923.275}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:932.875}},{t:this.shape_58,p:{y:441.1,x:932.875}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:943.075}},{t:this.shape_58,p:{y:441.1,x:943.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:954.475}},{t:this.shape_58,p:{y:441.1,x:954.475}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:966.475}},{t:this.shape_58,p:{y:441.1,x:966.475}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:977.875}},{t:this.shape_58,p:{y:441.1,x:977.875}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:991.075}},{t:this.shape_58,p:{y:441.1,x:991.075}}]},1).to({state:[{t:this.shape_59,p:{y:441.1,x:991.675}},{t:this.shape_58,p:{y:441.1,x:991.675}}]},1).to({state:[]},421).wait(167));

	// Energie_linie
	this.instance_22 = new lib.CachedBmp_1();
	this.instance_22.setTransform(557.45,302.95,0.5,0.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(143).to({_off:false},0).wait(641));

	// Immobilie_absichern
	this.instance_23 = new lib.Immobilieabsichern();
	this.instance_23.setTransform(564.3,179.45,1,1,0,0,0,88.6,7.5);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(143).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(631).to({alpha:1},0).wait(1));

	// Ebene_35
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("A6tCOMAqtgR2IKtNbMgqsAR2g");
	this.shape_64.setTransform(545.3,195.025);
	this.shape_64._off = true;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("A6tCOMAqtgR2IKuNbMgqtAR2g");
	this.shape_65.setTransform(551.3,189.025);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("A6sCOMAqsgR2IKuNbMgqtAR2g");
	this.shape_66.setTransform(557.3,183.025);
	this.shape_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(104).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:563.3,y:177.025},0).wait(1).to({_off:true},1).wait(2).to({_off:false,x:581.3},0).to({_off:true},1).wait(2).to({_off:false,x:599.3,y:165.025},0).to({_off:true},1).wait(2).to({_off:false,x:617.3,y:153.025},0).to({_off:true},1).wait(2).to({_off:false,x:635.3},0).to({_off:true},1).wait(2).to({_off:false,x:653.3},0).to({_off:true},1).wait(2).to({_off:false,x:671.3},0).to({_off:true},1).wait(2).to({_off:false,x:689.3},0).to({_off:true},1).wait(3).to({_off:false,x:713.3},0).to({_off:true},1).wait(2).to({_off:false,x:741.5},0).wait(1).to({x:751.7},0).wait(1).to({x:763.7},0).wait(1).to({x:773.9},0).wait(1).to({x:781.7},0).wait(1).to({x:793.1},0).to({_off:true},1).wait(642));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(105).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:569.3,y:177.025},0).to({_off:true},1).wait(2).to({_off:false,x:587.3},0).to({_off:true},1).wait(2).to({_off:false,x:605.3,y:165.025},0).to({_off:true},1).wait(2).to({_off:false,x:623.3,y:153.025},0).to({_off:true},1).wait(2).to({_off:false,x:641.3},0).to({_off:true},1).wait(2).to({_off:false,x:659.3},0).to({_off:true},1).wait(2).to({_off:false,x:677.3},0).to({_off:true},1).wait(2).to({_off:false,x:695.3},0).wait(1).to({x:701.3},0).to({_off:true},1).wait(2).to({_off:false,x:721.1},0).to({_off:true},1).wait(8).to({_off:false,x:810.5},0).to({_off:true},474).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(106).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:575.3,y:177.025},0).to({_off:true},1).wait(2).to({_off:false,x:593.3,y:171.025},0).to({_off:true},1).wait(2).to({_off:false,x:611.3,y:159.025},0).to({_off:true},1).wait(2).to({_off:false,x:629.3,y:153.025},0).to({_off:true},1).wait(2).to({_off:false,x:647.3},0).to({_off:true},1).wait(2).to({_off:false,x:665.3},0).to({_off:true},1).wait(2).to({_off:false,x:683.3},0).to({_off:true},1).wait(3).to({_off:false,x:707.3},0).to({_off:true},1).wait(2).to({_off:false,x:731.9},0).to({_off:true},1).wait(6).to({_off:false,x:803.9},0).to({_off:true},1).wait(641));

	// Immobilie_linie
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808080").s().p("AxJIVQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIACgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgBAFQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAxAH+QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIAHgTQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgHATQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAwxHZQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgHASQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAwjGzQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAIgTQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgHATQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAgAwVGOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIAHgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgIATQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAwHFpQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgHASQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAv4FDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgHATQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgAvqEeQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAgBABAAIAHgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgHASQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgAvcD5QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAIgHATQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAvNDTQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgHATQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAu/CuQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAIgTQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgHASQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAgAuxCIQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAABgBIAHgSQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIgIATQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAuiBjQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgHATQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAuUA+QgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAIgTQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgHASQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAuGAYQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAHgSQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgHATQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAgAt4gMQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgHATQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAtpgxQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgHASQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAtbhXQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBIAHgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgHATQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgAtNh8QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAIAHgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgIATQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAs+ihQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgHATQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAswjHQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAIgTQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgHATQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAgAsijsQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAIAHgTQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgIASIgCACgAsUkRQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAHgSQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgHATQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAsFk3QgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgHATQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAr3lcQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBABAAIAHgTQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgHASQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgArpmCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIAHgSQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIgHATQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAramnQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAHgTQAAAAABgBQAAAAAAAAQABgBAAAAQABABABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgHATQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgArMnMQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAIgSQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgHASQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAq+nyQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAHgTQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAIgIATQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAgAQ1oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAQNoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAPloQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAO9oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAOVoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgANtoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgANFoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAMdoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAL1oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgALNoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAKloQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAJ9oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAJVoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAItoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAIFoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAHdoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAG1oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAGNoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAFloQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAE9oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAEVoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgADtoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgADFoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgACdoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAB1oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgABNoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAAloQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgCoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIATAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgqoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAhSoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAh6oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAiioQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAjKoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAjyoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAkaoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAlCoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAlqoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAmSoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAm6oQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAnioQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAoKoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAoyoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgApaoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAqCoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAqqoQQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_67.setTransform(543.345,247.725);
	this.shape_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(104).to({_off:false},0).wait(680));

	// Finanzieren
	this.instance_24 = new lib.Finanzieren();
	this.instance_24.setTransform(254.55,238.8,1,1,0,0,0,49.8,7.3);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(104).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(670).to({alpha:1},0).wait(1));

	// Ebene_34
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Aq7ClIAAlJIV3AAIAAFJg");
	this.shape_68.setTransform(261.55,264.325);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Aq8ClIAAlJIV5AAIAAFJg");
	this.shape_69.setTransform(255.55,264.325);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Aq8ClIAAlJIV4AAIAAFJg");
	this.shape_70.setTransform(249.55,264.325);
	this.shape_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(81).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:243.55},0).to({_off:true},1).wait(2).to({_off:false,x:225.55},0).to({_off:true},1).wait(2).to({_off:false,x:207.55},0).to({_off:true},1).wait(2).to({_off:false,x:189.55},0).to({_off:true},1).wait(2).to({_off:false,x:171.55},0).to({_off:true},1).wait(2).to({_off:false,x:153.55},0).to({_off:true},1).wait(2).to({_off:false,x:135.55},0).to({_off:true},1).wait(681));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(82).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:237.55},0).to({_off:true},1).wait(2).to({_off:false,x:219.55},0).to({_off:true},1).wait(2).to({_off:false,x:201.55},0).to({_off:true},1).wait(2).to({_off:false,x:183.55},0).to({_off:true},1).wait(2).to({_off:false,x:165.55},0).to({_off:true},1).wait(2).to({_off:false,x:147.55},0).to({_off:true},1).wait(2).to({_off:false,x:129.55},0).to({_off:true},1).wait(680));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(83).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:231.55},0).to({_off:true},1).wait(2).to({_off:false,x:213.55},0).to({_off:true},1).wait(2).to({_off:false,x:195.55},0).to({_off:true},1).wait(2).to({_off:false,x:177.55},0).to({_off:true},1).wait(2).to({_off:false,x:159.55},0).to({_off:true},1).wait(2).to({_off:false,x:141.55},0).to({_off:true},1).wait(2).to({_off:false,x:127.15},0).to({_off:true},513).wait(167));

	// finanzieren_linie
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#808080").s().p("AKCC7IgGgJQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAFAJQABABAAAAQAAAAAAABQAAAAgBABQAAAAAAABIgCAAIgCgBgAJyChIgLgRQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAABAAAAQABAAAAABIALAQQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgBAAgAJcB/IgLgQQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIALARQAAAAAAABQABAAgBABQAAAAAAAAQAAABgBAAIgBABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAJIBfIgCgBIgLgRQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAABABAAIAKARQABABAAAAQAAAAAAABQAAAAgBABQAAAAAAABgAIxA8IgLgRQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABABAAAAQAAAAABABIALARQAAAAAAABQABAAAAAAQgBABAAAAQAAABgBAAIgBAAgAIbAbIgLgRQAAgBAAAAQgBAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIALARQAAAAAAABQABABgBAAQAAABAAAAQAAAAgBAAIgBABgAIFgGIgLgRQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAABAAIAKARQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCAAgAHwgoIgLgQQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIALARQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgBABIgCgCgAHchIIgCgBIgLgRQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAIALARQAAABAAAAQABAAgBABQAAAAAAABQAAAAgBABgAHEhrIgLgRQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAABQAAAAABAAQAAAAABABIAKAQQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAAgAGuiMIgKgRQgBgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIALARQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgBABgAGZiuIgFgIIgIAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAKAAIAHAKQAAABAAAAQABAAgBABQAAAAAAABQAAAAgBABIgBAAgAFki2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAE8i2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAEUi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgADsi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgADEi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgACci2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAB0i2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgABMi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAAki2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAgDi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIATAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAgri2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAhTi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAh7i2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAiji2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAjLi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAjzi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAkbi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAlDi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAlri2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAmTi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAm7i2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAnji2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAoLi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAozi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgApbi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAqDi2QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_71.setTransform(268.6321,270.175);
	this.shape_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(81).to({_off:false},0).wait(703));

	// Kaufen_Verkaufen
	this.instance_25 = new lib.KaufenVerkaufen();
	this.instance_25.setTransform(118.4,306.9,1,1,0,0,0,79.5,8.2);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(81).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(693).to({alpha:1},0).wait(1));

	// Ebene_33
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AxgikMAjBAAAIAAFJMgjBAAAg");
	this.shape_72.setTransform(112.05,326.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AxgClIAAlJMAjAAAAIAAFJg");
	this.shape_73.setTransform(112.05,326.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AxfClIAAlJMAjAAAAIAAFJg");
	this.shape_74.setTransform(100.05,326.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AxgikMAjAAAAIAAFJMgjAAAAg");
	this.shape_75.setTransform(-81.15,326.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_73,p:{x:112.05,y:326.125}},{t:this.shape_72,p:{x:112.05}}]},48).to({state:[{t:this.shape_73,p:{x:106.05,y:326.125}},{t:this.shape_72,p:{x:106.05}}]},1).to({state:[{t:this.shape_74,p:{x:100.05}},{t:this.shape_72,p:{x:100.05}}]},1).to({state:[{t:this.shape_73,p:{x:94.05,y:326.125}},{t:this.shape_72,p:{x:94.05}}]},1).to({state:[{t:this.shape_73,p:{x:88.05,y:326.125}},{t:this.shape_72,p:{x:88.05}}]},1).to({state:[{t:this.shape_74,p:{x:82.05}},{t:this.shape_72,p:{x:82.05}}]},1).to({state:[{t:this.shape_73,p:{x:76.05,y:326.125}},{t:this.shape_72,p:{x:76.05}}]},1).to({state:[{t:this.shape_73,p:{x:70.05,y:326.125}},{t:this.shape_72,p:{x:70.05}}]},1).to({state:[{t:this.shape_74,p:{x:64.05}},{t:this.shape_72,p:{x:64.05}}]},1).to({state:[{t:this.shape_73,p:{x:58.05,y:326.125}},{t:this.shape_72,p:{x:58.05}}]},1).to({state:[{t:this.shape_73,p:{x:52.05,y:326.125}},{t:this.shape_72,p:{x:52.05}}]},1).to({state:[{t:this.shape_74,p:{x:46.05}},{t:this.shape_72,p:{x:46.05}}]},1).to({state:[{t:this.shape_73,p:{x:40.05,y:326.125}},{t:this.shape_72,p:{x:40.05}}]},1).to({state:[{t:this.shape_73,p:{x:34.05,y:326.125}},{t:this.shape_72,p:{x:34.05}}]},1).to({state:[{t:this.shape_74,p:{x:28.05}},{t:this.shape_72,p:{x:28.05}}]},1).to({state:[{t:this.shape_73,p:{x:22.05,y:326.125}},{t:this.shape_72,p:{x:22.05}}]},1).to({state:[{t:this.shape_73,p:{x:16.05,y:326.125}},{t:this.shape_72,p:{x:16.05}}]},1).to({state:[{t:this.shape_74,p:{x:10.05}},{t:this.shape_72,p:{x:10.05}}]},1).to({state:[{t:this.shape_73,p:{x:4.05,y:326.125}},{t:this.shape_72,p:{x:4.05}}]},1).to({state:[{t:this.shape_73,p:{x:-1.95,y:326.125}},{t:this.shape_72,p:{x:-1.95}}]},1).to({state:[{t:this.shape_74,p:{x:-7.95}},{t:this.shape_72,p:{x:-7.95}}]},1).to({state:[{t:this.shape_73,p:{x:-13.95,y:326.125}},{t:this.shape_72,p:{x:-13.95}}]},1).to({state:[{t:this.shape_73,p:{x:-19.95,y:326.125}},{t:this.shape_72,p:{x:-19.95}}]},1).to({state:[{t:this.shape_74,p:{x:-25.95}},{t:this.shape_72,p:{x:-25.95}}]},1).to({state:[{t:this.shape_73,p:{x:-31.95,y:326.125}},{t:this.shape_72,p:{x:-31.95}}]},1).to({state:[{t:this.shape_73,p:{x:-37.95,y:326.125}},{t:this.shape_72,p:{x:-37.95}}]},1).to({state:[{t:this.shape_74,p:{x:-43.95}},{t:this.shape_72,p:{x:-43.95}}]},1).to({state:[{t:this.shape_73,p:{x:-49.95,y:326.125}},{t:this.shape_72,p:{x:-49.95}}]},1).to({state:[{t:this.shape_73,p:{x:-55.95,y:326.125}},{t:this.shape_72,p:{x:-55.95}}]},1).to({state:[{t:this.shape_74,p:{x:-61.95}},{t:this.shape_72,p:{x:-61.95}}]},1).to({state:[{t:this.shape_74,p:{x:-67.95}},{t:this.shape_72,p:{x:-67.95}}]},1).to({state:[{t:this.shape_73,p:{x:-73.95,y:326.125}},{t:this.shape_72,p:{x:-73.95}}]},1).to({state:[{t:this.shape_74,p:{x:-79.95}},{t:this.shape_72,p:{x:-79.95}}]},1).to({state:[{t:this.shape_73,p:{x:-81.15,y:326.725}},{t:this.shape_75}]},1).to({state:[]},536).wait(167));

	// Kaufen_linie
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("APZBhIgSgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIARAKQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCABgAO2BOIgSgJQgBgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABABAAAAIASAKQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCABgAOSA7IgRgKQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAABQABAAAAAAIASAJQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgANvAoIgRgKQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIASAKQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgAM7ALQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIASAKQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAMXgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIARAKQABABAAAAQAAAAABABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAgAMGgRIgSgJQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABABIARAJQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAgALjgkIgSgJQgBAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABABIASAJQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCABgALAg3IgSgJQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAABIASAJQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgCABgAKchKIgRgJQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAAAQAAAAABAAQAAAAABABIASAJQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAJmhbQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAI+hbQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAIWhbQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAHuhbQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAHGhbQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAGehbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAF2hbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAFOhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAEmhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAD+hbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgADWhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgACuhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgACGhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgABehbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAA2hbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAAOhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAgZhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAhBhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAhphbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAiRhbQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIAUAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAi5hbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAjhhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAkJhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAkxhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAlZhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAmBhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAmphbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAnRhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAn5hbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAohhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgApJhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgApxhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAqZhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgArBhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgArphbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAsRhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAs5hbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAthhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAuJhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAuxhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAvZhbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_76.setTransform(135.8417,328.75);
	this.shape_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(48).to({_off:false},0).wait(736));

	// Immobilien_suchen
	this.instance_26 = new lib.Immobiliensuchen();
	this.instance_26.setTransform(304.8,402.45,1,1,0,0,0,82.8,7.5);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(48).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(726).to({alpha:1},0).wait(1));

	// Ebene_32
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AxfltMAjAAAAIAALbMgjAAAAg");
	this.shape_77.setTransform(306.45,433.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AxgFuIAArbMAjBAAAIAALbg");
	this.shape_78.setTransform(306.45,433.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AxgltMAjBAAAIAALbMgjBAAAg");
	this.shape_79.setTransform(314.55,433.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AxgltMAjAAAAIAALbMgjAAAAg");
	this.shape_80.setTransform(506.25,433.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AxgFuIAArbMAjAAAAIAALbg");
	this.shape_81.setTransform(506.25,433.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78,p:{x:306.45}},{t:this.shape_77,p:{x:306.45}}]},26).to({state:[{t:this.shape_78,p:{x:314.55}},{t:this.shape_79,p:{x:314.55}}]},1).to({state:[{t:this.shape_78,p:{x:324.45}},{t:this.shape_77,p:{x:324.45}}]},1).to({state:[{t:this.shape_78,p:{x:333.45}},{t:this.shape_77,p:{x:333.45}}]},1).to({state:[{t:this.shape_78,p:{x:342.45}},{t:this.shape_77,p:{x:342.45}}]},1).to({state:[{t:this.shape_78,p:{x:351.45}},{t:this.shape_77,p:{x:351.45}}]},1).to({state:[{t:this.shape_78,p:{x:360.45}},{t:this.shape_77,p:{x:360.45}}]},1).to({state:[{t:this.shape_78,p:{x:369.45}},{t:this.shape_79,p:{x:369.45}}]},1).to({state:[{t:this.shape_78,p:{x:378.45}},{t:this.shape_79,p:{x:378.45}}]},1).to({state:[{t:this.shape_78,p:{x:387.45}},{t:this.shape_79,p:{x:387.45}}]},1).to({state:[{t:this.shape_78,p:{x:396.45}},{t:this.shape_79,p:{x:396.45}}]},1).to({state:[{t:this.shape_78,p:{x:405.45}},{t:this.shape_79,p:{x:405.45}}]},1).to({state:[{t:this.shape_78,p:{x:414.45}},{t:this.shape_79,p:{x:414.45}}]},1).to({state:[{t:this.shape_78,p:{x:423.45}},{t:this.shape_79,p:{x:423.45}}]},1).to({state:[{t:this.shape_78,p:{x:441.45}},{t:this.shape_79,p:{x:441.45}}]},1).to({state:[{t:this.shape_78,p:{x:450.45}},{t:this.shape_79,p:{x:450.45}}]},1).to({state:[{t:this.shape_78,p:{x:459.45}},{t:this.shape_79,p:{x:459.45}}]},1).to({state:[{t:this.shape_78,p:{x:468.45}},{t:this.shape_79,p:{x:468.45}}]},1).to({state:[{t:this.shape_78,p:{x:477.45}},{t:this.shape_79,p:{x:477.45}}]},1).to({state:[{t:this.shape_78,p:{x:486.45}},{t:this.shape_79,p:{x:486.45}}]},1).to({state:[{t:this.shape_78,p:{x:495.45}},{t:this.shape_79,p:{x:495.45}}]},1).to({state:[{t:this.shape_78,p:{x:504.45}},{t:this.shape_79,p:{x:504.45}}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[]},569).wait(167));

	// Immo_linie
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("APbBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAOzBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAOLBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgANjBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAM7BhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAMTBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgALrBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgALDBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAKbBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAJzBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAJLBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAIjBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAH7BhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAHTBhQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAGrBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAGDBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAFbBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAEzBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAELBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgADjBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAC7BgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgACTBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgABrBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgABDBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAAbBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAgMBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIATAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAg0BgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAhcBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAiEBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAisBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAjUBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAj8BgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAkkBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAlMBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAl0BgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAmcBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAnEBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAnsBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAoUBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAo8BgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgApkBgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAqNBgQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIATAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAqfBWIgSgJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIARAKQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgDABgArUA6QAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAABIASAJQABABAAAAQAAAAAAABQABAAgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAgArmAxIgRgKQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQABABAAAAIASAJQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgCABgAsbAVQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIARAKQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAssALIgSgJQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIASAJQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAIgCABgAtQgHIgRgJQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAABABAAIASAJQAAABABAAQAAAAAAABQABAAgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAtzgZIgSgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAABABAAIARAJQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgDABgAuog1QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAABQABAAAAAAIASAKQABAAAAAAQAAABAAAAQABAAgBABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAu6g/IgRgJQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAIASAKQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgCABgAvvhbQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABABIARAJQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_82.setTransform(286.3833,406.9719);
	this.shape_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(26).to({_off:false},0).wait(758));

	// Informieren
	this.instance_27 = new lib.Symbol15();
	this.instance_27.setTransform(51.95,402.4,1,1,0,0,0,49.9,7.7);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(26).to({_off:false},0).wait(1).to({alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(748).to({alpha:1},0).wait(1));

	// Ebene_31
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AsIltIYQAAIAALbI4QAAg");
	this.shape_83.setTransform(55.3,398.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AsHFuIAArbIYPAAIAALbg");
	this.shape_84.setTransform(55.3,398.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AsIltIYRAAIAALbI4RAAg");
	this.shape_85.setTransform(46.3,398.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84,p:{x:55.3}},{t:this.shape_83,p:{x:55.3}}]},11).to({state:[{t:this.shape_84,p:{x:46.3}},{t:this.shape_85,p:{x:46.3}}]},1).to({state:[{t:this.shape_84,p:{x:37.3}},{t:this.shape_85,p:{x:37.3}}]},1).to({state:[{t:this.shape_84,p:{x:28.3}},{t:this.shape_85,p:{x:28.3}}]},1).to({state:[{t:this.shape_84,p:{x:19.3}},{t:this.shape_85,p:{x:19.3}}]},1).to({state:[{t:this.shape_84,p:{x:10.3}},{t:this.shape_85,p:{x:10.3}}]},1).to({state:[{t:this.shape_84,p:{x:1.3}},{t:this.shape_85,p:{x:1.3}}]},1).to({state:[{t:this.shape_84,p:{x:-7.7}},{t:this.shape_85,p:{x:-7.7}}]},1).to({state:[{t:this.shape_84,p:{x:-16.7}},{t:this.shape_85,p:{x:-16.7}}]},1).to({state:[{t:this.shape_84,p:{x:-25.7}},{t:this.shape_85,p:{x:-25.7}}]},1).to({state:[{t:this.shape_84,p:{x:-34.7}},{t:this.shape_85,p:{x:-34.7}}]},1).to({state:[{t:this.shape_84,p:{x:-43.7}},{t:this.shape_85,p:{x:-43.7}}]},1).to({state:[{t:this.shape_84,p:{x:-52.7}},{t:this.shape_83,p:{x:-52.7}}]},1).to({state:[{t:this.shape_84,p:{x:-62.6}},{t:this.shape_85,p:{x:-62.6}}]},1).to({state:[{t:this.shape_84,p:{x:-71.6}},{t:this.shape_83,p:{x:-71.6}}]},1).to({state:[{t:this.shape_84,p:{x:-80.6}},{t:this.shape_83,p:{x:-80.6}}]},1).to({state:[]},591).wait(167));

	// Info_linie
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#808080").s().p("ALBBhIgSgJQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIARAJQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAgAKeBPIgSgKQgBAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAABIASAJQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCABgAJ6A8IgRgKQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABABIASAJQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAJGAgQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIASAKQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAI0AWIgSgJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIARAKQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCABgAH/gFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIASAKIABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAHcgYQgBgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABABIARAJQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAgAHLghIgSgKQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABABAAAAIASAJQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgCABgAGWg+QgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAABABAAIASAJQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAGEhHIgSgKQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIARAJQABABAAAAQAAABABAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAFhhaIgEgCIgPAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAIAEADQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAEmhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAD+hcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgADWhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgACuhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgACGhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgABehcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAA2hcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAAOhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgZhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAhBhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAhphcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAiRhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAi5hcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAjhhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAkJhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAkxhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAlZhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAmBhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAmphcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAnRhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAn5hcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAohhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgApJhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgApxhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgAqZhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAgArBhcQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAUAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_86.setTransform(70.8417,425.825);
	this.shape_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(11).to({_off:false},0).wait(773));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(618.3,147.7,2056,469.90000000000003);
// library properties:
lib.properties = {
	id: '7C6F7521EEEC4F66BC33F845EAE0854B',
	width: 1625,
	height: 453,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/img/images/Linien_animation_atlas_1.png", id:"Linien_animation_atlas_1"}
	],
	preloads: []
};

// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7C6F7521EEEC4F66BC33F845EAE0854B'] = {
	getStage: function() { return linien_exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

    var linien_canvas, stage, linien_exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function linien_init() {
      console.log("linien test")
      linien_canvas = document.getElementById("linien_canvas");
      anim_container = document.getElementById("linien_animation_container");
      dom_overlay_container = document.getElementById("linien_dom_overlay_container");
      var comp = AdobeAn.getComposition("7C6F7521EEEC4F66BC33F845EAE0854B");
      var lib = comp.getLibrary();
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
      loader.addEventListener("complete", function (evt) { linien_handleComplete(evt, comp) });
      var lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt, comp) {
      var images = comp.getImages();
      if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
    }
    function linien_handleComplete(evt, comp) {
      //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var lib = comp.getLibrary();
      var ss = comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for (let i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
      }
      linien_exportRoot = new lib.Linien_animation();
      stage = new lib.Stage(linien_canvas);
      //Registers the "tick" event listener.
      fnStartAnimation = function () {
        stage.addChild(linien_exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
      }
      //Code to support hidpi screens and responsive scaling.
      AdobeAn.makeResponsive(true, 'both', false, 1, [linien_canvas, anim_container, dom_overlay_container]);
      AdobeAn.compositionLoaded(lib.properties.id);
      fnStartAnimation();
    }