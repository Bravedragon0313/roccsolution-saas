(function (cjs, an) {

var p; // shortcut to reference prototypes
var module_lib={};var ss={};var img={};
module_lib.ssMetadata = [
		{name:"AnimationModul_atlas_1", frames: [[0,0,429,516]]}
];


(module_lib.AnMovieClip = function(){
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



(module_lib.CachedBmp_1 = function() {
	this.initialize(ss["AnimationModul_atlas_1"]);
	this.gotoAndStop(0);
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


(module_lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1899D8").s().p("AgXM/IAFgJIASAKIARgIIAEAJIgUAKIgBAAIAAAAgAA9MhIAtgWIAEAJIgtAWgAhwMSIAFgJIAsAXIgFAIgACWL0IAtgWIAEAJIgtAWgAjKLlIAFgJIAtAXIgFAJgADwLHIAsgWIAEAJIgsAWgAj3LOIAAAAIgBAAIAAAAIgrgWIAFgJIAtAXIgFAJgAFJKaIAsgWIAFAJIgtAWgAl8KLIAEgJIAtAXIgEAJgAGiJtIAtgWIAFAJIgbANIAAAAIgSAJgAnVJeIAEgJIAsAXIgEAJgAH7JAIAtgWIAFAJIgtAWgAovIxIAEgJIAtAXIgEAJgAJVITIAsgWIAFAJIgsAWgApcIaIAAAAIgBAAIAAgBIgCAAIAAAAIgBAAIgBgBIAAAAIAAAAIgngUIAEgJIAtAXIgEAJgAKuHmIAtgWIAFAJIgtAWgArhHXIAEgJIAsAXIgEAJgAMHG5IAtgWIAFAJIgtAWgAs7GqIAEgJIAtAXIgEAJgANhGMIAsgWIAFAJIgsAWgAuUF9IAFgJIAsAXIgEAJgAO6FfIAtgWIAEAJIgtAWgAvuFQIAFgJIAtAXIgFAJgAQUEyIAsgWIAEAJIgsAWgAxHEjIAFgJIAtAXIgFAJgARtEFIAtgWIAEAJIgjARIgBABIgJAEgAygD2IAFgJIAsAXIgFAJgATGDZIAtgXIAEAJIgtAWgAz6DJIAFgJIAtAXIgFAJgAUgCsIAsgXIAEAJIgsAWgA1TCcIAFgJIAtAXIgFAJgAV5B/IAtgXIAEAJIgtAWgA2sBvIAFgJIAsAXIgFAJgAXSBSIAdgPIgGgCIAGgJIAUAMIgtAXgA3aBZIgBgBIAAAAIgLgGIAAAAIgIgEIAAAAIgCgBIgBAAIgKgGIgBAAIgGgDIAKgGIAkASIgEAJgA3UApIAFgDIABAAIAlgXIAFAJIgrAZgAWUAOIAEgJIAsAZIgGAJgA1+gJIArgaIAFAJIgrAZgAU9gkIAGgJIAKAGIABAAIAfATIgEAJgA0og8IAbgQIAAAAIAQgKIAFAJIgrAZgATnhXIAFgJIAGADIAAAAIAmAXIgGAIgAzShvIArgaIAFAJIgrAZgASSiKIAEgJIALAGIABABIAfATIgEAIgAx8iiIAlgWIABAAIAFgEIAGAJIgrAagAQ7i9IAGgJIAPAJIABABIAbAQIgGAIgAwljVIArgZIAEAIIgrAagAPmjwIAEgJIAZAPIAAAAIASALIgEAIgAvQkIIAQgJIAAAAIAbgQIAGAIIgsAagAOPkjIAGgJIArAaIgGAIgAt6k7IAGgDIABAAIAlgWIAEAIIgqAagAM5lWIAFgJIArAaIgFAIgAsjluIAEgDIABAAIAlgWIAGAIIgsAagALjmJIAGgJIAqAaIgFAIgArOmhIAcgQIAAAAIAQgJIAEAIIgqAagAKNm8IAFgJIArAaIgFAJgAp3nUIAqgZIAFAIIgrAagAI3nvIAFgJIAFADIAAABIAmAWIgFAJgAoioHIArgZIAGAIIgrAagAHhoiIAFgIIArAZIgFAJgAnLo6IAlgVIAAgBIAGgDIAEAIIgrAagAGLpVIAFgIIAQAJIABAAIAAABIAaAPIgFAJgAl2ptIAPgIIAAgBIABAAIAbgQIAGAJIgrAZgAE1qIIAFgIIAQAJIABAAIAaAQIgFAJgAkfqgIAPgIIAAgBIABAAIAbgQIAFAJIgrAZgADfq7IAFgIIAlAWIACAAIAEADIgFAJgAjKrTIAHgDIAAgBIABAAIAkgVIAFAJIgrAZgACJruIAFgIIArAZIgFAJgAhzsFIAGgEIABgBIAkgVIAFAJIgrAZgAAzshIAFgIIAaAPIAAAAIARAKIgFAJgAgds4IAdgSIANAHIgFAJIgIgFIgYAPg");
	this.shape.setTransform(153.9,84.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(module_lib.Symbol4, new cjs.Rectangle(0,0,307.8,168.7), null);


(module_lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new module_lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(module_lib.Symbol3, new cjs.Rectangle(0,0,214.5,258), null);

// stage content:
(module_lib.module_Animation_Oursolutions_Modul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.instance = new module_lib.Symbol3();
	this.instance.setTransform(153.8,129.1,1,1,0,0,0,107.2,129.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:129,y:132.15},0).wait(1).to({y:135.3},0).wait(1).to({y:138.5},0).wait(1).to({y:141.65},0).wait(1).to({y:144.85},0).wait(1).to({y:148},0).wait(1).to({y:151.15},0).wait(1).to({y:154.35},0).wait(1).to({y:157.5},0).wait(1).to({y:160.7},0).wait(1).to({y:163.85},0).wait(1).to({y:167},0).wait(1).to({y:170.2},0).wait(1).to({y:173.35},0).wait(1).to({y:176.55},0).wait(1).to({y:179.7},0).wait(1).to({y:182.85},0).wait(1).to({y:186.05},0).wait(1).to({y:189.2},0).wait(1).to({y:192.4},0).wait(1).to({y:195.55},0).wait(1).to({y:198.7},0).wait(1).to({y:201.9},0).wait(1).to({y:205.05},0).wait(1).to({y:208.25},0).wait(1).to({y:211.4},0).wait(1).to({y:214.55},0).wait(1).to({y:217.75},0).wait(1).to({y:220.9},0).wait(1).to({y:224.1},0).wait(1).to({y:227.25},0).wait(1).to({y:230.4},0).wait(1).to({y:233.6},0).wait(1).to({y:236.75},0).wait(1).to({y:239.95},0).wait(1).to({y:243.1},0).wait(1).to({y:246.25},0).wait(1).to({y:249.45},0).wait(1).to({y:252.6},0).wait(1).to({y:255.8},0).wait(1).to({y:258.95},0).wait(1).to({y:262.1},0).wait(1).to({y:265.3},0).wait(1).to({y:268.45},0).wait(1).to({y:271.65},0).wait(1).to({y:274.8},0).wait(1).to({y:277.95},0).wait(1).to({y:281.15},0).wait(1).to({y:284.3},0).wait(1).to({y:287.5},0).wait(1).to({y:290.65},0).wait(1).to({y:293.8},0).wait(1).to({y:297},0).wait(1).to({y:300.15},0).wait(1).to({y:303.35},0).wait(1).to({y:306.5},0).wait(1).to({y:309.65},0).wait(1).to({y:312.85},0).wait(1).to({y:316},0).wait(1).to({y:319.2},0).wait(1).to({y:322.35},0).wait(1).to({y:325.5},0).wait(1).to({y:328.7},0).wait(1).to({y:331.85},0).wait(1).to({y:335.05},0).wait(1).to({y:338.2},0).wait(1).to({y:341.35},0).wait(1).to({y:344.55},0).wait(1).to({y:347.7},0).wait(1).to({y:350.9},0).wait(1).to({y:354.05},0).wait(1).to({y:357.2},0).wait(1).to({y:360.4},0).wait(1).to({y:363.55},0).wait(1).to({y:366.75},0).wait(1).to({y:369.9},0).wait(1).to({y:373.05},0).wait(1).to({y:376.25},0).wait(1).to({y:379.4},0).wait(1).to({y:382.6},0).wait(1).to({y:385.75},0).wait(1).to({y:388.9},0).wait(1).to({y:392.1},0).wait(1).to({y:395.25},0).wait(1).to({y:398.45},0).wait(1).to({y:401.6},0).wait(1).to({y:404.75},0).wait(1).to({y:407.95},0).wait(1).to({y:411.1},0).wait(1).to({y:414.3},0).wait(1).to({y:417.45},0).wait(1).to({y:420.6},0).wait(1).to({y:423.8},0).wait(1).to({y:426.95},0).wait(1).to({y:430.15},0).wait(1).to({y:433.3},0).wait(1).to({y:436.45},0).wait(1).to({y:439.65},0).wait(1).to({y:442.8},0).wait(1).to({y:446},0).wait(1).to({regY:129.1,y:446.1},0).wait(1).to({regY:129,y:446},0).wait(134));

	// Boden_modul
	this.instance_1 = new module_lib.Symbol4();
	this.instance_1.setTransform(153.9,517.95,1,1,0,0,0,153.9,84.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).wait(1).to({y:524.95,alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(1).to({alpha:1},0).wait(137));

	this._renderFirstFrame();

}).prototype = p = new module_lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(153.5,304.5,154.3,304.79999999999995);
// library properties:
module_lib.properties = {
	id: '8315BD46164541438BC7F7CB0B0E3C8F',
	width: 307,
	height: 609,
	fps: 57,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/img/images/AnimationModul_atlas_1.png", id:"AnimationModul_atlas_1"}
	],
	preloads: []
};

// bootstrap callback support:

(module_lib.Stage = function(canvas) {
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

an.module_compositions = an.module_compositions || {};
an.module_compositions['8315BD46164541438BC7F7CB0B0E3C8F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return module_lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.module_compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.module_getComposition = function(id) {
	return an.module_compositions[id];
}

an.module_makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = module_lib.properties.width, h = module_lib.properties.height;			
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
an.module_handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

var module_canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function module_init() {
	module_canvas = document.getElementById("module_canvas");
	anim_container = document.getElementById("module_animation_container");
	dom_overlay_container = document.getElementById("module_dom_overlay_container");
	var comp=AdobeAn.module_getComposition("8315BD46164541438BC7F7CB0B0E3C8F");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){module_handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function module_handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var module_lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = module_lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new module_lib.module_Animation_Oursolutions_Modul();
	stage = new module_lib.Stage(module_canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = module_lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.module_makeResponsive(true,'both',false,1,[module_canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(module_lib.properties.id);
	fnStartAnimation();
}