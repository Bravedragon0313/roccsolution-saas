var ani_router = 'test';
(function (cjs, an) {

var p; // shortcut to reference prototypes
var hause_lib={};var ss={};var img={};
hause_lib.ssMetadata = [
		{name:"Animation_Haus_atlas_1", frames: [[0,0,290,634]]}
];


(hause_lib.AnMovieClip = function(){
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

(hause_lib.CachedBmp_1 = function() {
	this.initialize(ss["Animation_Haus_atlas_1"]);
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

(hause_lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1899D8").s().p("AgXM/IAFgJIASAKIARgIIAEAJIgUAKIAAAAIgBAAgAA9MhIAtgWIAEAJIgtAWgAhwMSIAFgJIAsAXIgFAIgACWL0IAtgWIAEAJIgtAWgAjKLlIAFgJIAtAXIgFAJgADwLHIAsgWIAEAJIgsAWgAj3LOIAAAAIgBAAIAAAAIgrgWIAFgJIAtAXIgFAJgAFJKaIAsgWIAFAJIgtAWgAl8KLIAEgJIAtAXIgEAJgAGiJtIAtgWIAFAJIgbANIAAAAIgSAJgAnVJeIAEgJIAsAXIgEAJgAH7JAIAtgWIAFAJIgtAWgAovIxIAEgJIAtAXIgEAJgAJVITIAsgWIAFAJIgsAWgApcIaIAAAAIgBAAIAAgBIgCAAIAAAAIgBAAIgBgBIAAAAIAAAAIgngUIAEgJIAtAXIgEAJgAKuHmIAtgWIAFAJIgtAWgArhHXIAEgJIAsAXIgEAJgAMHG5IAtgWIAFAJIgtAWgAs7GqIAEgJIAtAXIgEAJgANhGMIAtgWIAEAJIgsAWgAuUF9IAFgJIAsAXIgEAJgAO6FfIAtgWIAEAJIgtAWgAvuFQIAFgJIAtAXIgFAJgAQUEyIAsgWIAEAJIgsAWgAxHEjIAFgJIAtAXIgFAJgARtEFIAtgWIAEAJIgjARIgBABIgJAEgAygD2IAFgJIAsAXIgFAJgATGDZIAtgXIAEAJIgtAWgAz6DJIAFgJIAtAXIgFAJgAUgCsIAsgXIAEAJIgsAWgA1TCcIAFgJIAtAXIgFAJgAV5B/IAtgXIAEAJIgtAWgA2sBvIAEgJIAtAXIgFAJgAXSBSIAdgPIgGgCIAGgJIAUAMIgsAXgA3aBZIgBgBIAAAAIgLgGIAAAAIgIgEIAAAAIgCgBIgBAAIgKgGIgBAAIgGgDIAKgGIAkASIgEAJgA3UApIAFgDIABAAIAlgXIAFAJIgrAZgAWTAOIAFgJIAsAZIgGAJgA1+gJIArgaIAFAJIgrAZgAU9gkIAFgJIALAGIABAAIAfATIgEAJgA0og8IAbgQIAAAAIAQgKIAFAJIgrAZgATnhXIAGgJIAFADIAAAAIAmAXIgGAIgAzShvIArgaIAFAJIgrAZgASSiKIAEgJIALAGIABABIAfATIgEAIgAx8iiIAlgWIABAAIAFgEIAGAJIgrAagAQ7i9IAGgJIAPAJIABABIAbAQIgGAIgAwljVIArgZIAEAIIgrAagAPmjwIAEgJIAZAPIAAAAIASALIgEAIgAvQkIIAQgJIAAAAIAbgQIAGAIIgsAagAOPkjIAGgJIArAaIgFAIgAt6k7IAGgDIABAAIAlgWIAEAIIgqAagAM5lWIAFgJIArAaIgFAIgAsjluIAEgDIABAAIAlgWIAGAIIgsAagALjmJIAGgJIAqAaIgFAIgArOmhIAcgQIAAAAIAQgJIAEAIIgqAagAKNm8IAFgJIArAaIgFAJgAp3nUIAqgZIAGAIIgsAagAI3nvIAFgJIAFADIAAABIAmAWIgFAJgAoioHIArgZIAGAIIgrAagAHhoiIAFgIIArAZIgFAJgAnLo6IAlgVIAAgBIAGgDIAEAIIgrAagAGLpVIAFgIIAQAJIABAAIAAABIAaAPIgFAJgAl2ptIAQgIIAAgBIAAAAIAbgQIAGAJIgrAZgAE1qIIAFgIIAQAJIABAAIAaAQIgFAJgAkfqgIAPgIIAAgBIABAAIAbgQIAFAJIgrAZgADfq7IAFgIIAlAWIABAAIAFADIgFAJgAjKrTIAHgDIAAgBIABAAIAkgVIAFAJIgrAZgACJruIAFgIIArAZIgFAJgAhzsFIAGgEIABgBIAkgVIAFAJIgrAZgAAzshIAFgIIAaAPIAAAAIARAKIgFAJgAgds4IAdgSIANAHIgFAJIgIgFIgYAPg");
	this.shape.setTransform(153.9,84.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(hause_lib.Symbol6, new cjs.Rectangle(0,0,307.8,168.7), null);

(hause_lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new hause_lib.CachedBmp_1();
	this.instance.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(hause_lib.Symbol5, new cjs.Rectangle(0,-0.5,145,317), null);

// stage content:
(hause_lib.haus_Animation_Oursolutions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Haus
	this.instance = new hause_lib.Symbol5();
	this.instance.setTransform(155.5,158.45,1,1,0,0,0,72.5,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:158,x:155.45,y:161.55},0).wait(1).to({y:164.85},0).wait(1).to({y:168.15},0).wait(1).to({x:155.4,y:171.45},0).wait(1).to({y:174.75},0).wait(1).to({y:178.05},0).wait(1).to({x:155.35,y:181.35},0).wait(1).to({y:184.65},0).wait(1).to({y:187.95},0).wait(1).to({x:155.3,y:191.25},0).wait(1).to({y:194.55},0).wait(1).to({y:197.85},0).wait(1).to({x:155.25,y:201.15},0).wait(1).to({y:204.45},0).wait(1).to({y:207.75},0).wait(1).to({x:155.2,y:211.05},0).wait(1).to({y:214.35},0).wait(1).to({y:217.65},0).wait(1).to({x:155.15,y:220.95},0).wait(1).to({y:224.25},0).wait(1).to({y:227.55},0).wait(1).to({x:155.1,y:230.85},0).wait(1).to({y:234.15},0).wait(1).to({y:237.45},0).wait(1).to({x:155.05,y:240.75},0).wait(1).to({y:244.05},0).wait(1).to({y:247.35},0).wait(1).to({x:155,y:250.65},0).wait(1).to({y:253.95},0).wait(1).to({y:257.25},0).wait(1).to({x:154.95,y:260.55},0).wait(1).to({y:263.85},0).wait(1).to({y:267.15},0).wait(1).to({x:154.9,y:270.45},0).wait(1).to({y:273.75},0).wait(1).to({y:277.05},0).wait(1).to({x:154.85,y:280.35},0).wait(1).to({y:283.65},0).wait(1).to({y:286.95},0).wait(1).to({x:154.8,y:290.25},0).wait(1).to({y:293.55},0).wait(1).to({y:296.85},0).wait(1).to({x:154.75,y:300.15},0).wait(1).to({y:303.45},0).wait(1).to({y:306.75},0).wait(1).to({x:154.7,y:310.05},0).wait(1).to({y:313.35},0).wait(1).to({y:316.65},0).wait(1).to({x:154.65,y:319.95},0).wait(1).to({y:323.3},0).wait(1).to({y:326.6},0).wait(1).to({x:154.6,y:329.9},0).wait(1).to({y:333.2},0).wait(1).to({y:336.5},0).wait(1).to({x:154.55,y:339.8},0).wait(1).to({y:343.1},0).wait(1).to({y:346.4},0).wait(1).to({x:154.5,y:349.7},0).wait(1).to({y:353},0).wait(1).to({y:356.3},0).wait(1).to({x:154.45,y:359.6},0).wait(1).to({y:362.9},0).wait(1).to({y:366.2},0).wait(1).to({x:154.4,y:369.5},0).wait(1).to({y:372.8},0).wait(1).to({y:376.1},0).wait(1).to({x:154.35,y:379.4},0).wait(1).to({y:382.7},0).wait(1).to({y:386},0).wait(1).to({x:154.3,y:389.3},0).wait(1).to({y:392.6},0).wait(1).to({y:395.9},0).wait(1).to({x:154.25,y:399.2},0).wait(1).to({y:402.5},0).wait(1).to({y:405.8},0).wait(1).to({x:154.2,y:409.1},0).wait(1).to({y:412.4},0).wait(1).to({y:415.7},0).wait(1).to({x:154.15,y:419},0).wait(1).to({y:422.3},0).wait(1).to({y:425.6},0).wait(1).to({x:154.1,y:428.9},0).wait(1).to({y:432.2},0).wait(1).to({y:435.5},0).wait(1).to({x:154.05,y:438.8},0).wait(1).to({y:442.1},0).wait(1).to({y:445.4},0).wait(1).to({x:154,y:448.7},0).wait(1).to({y:452},0).wait(1).to({y:455.3},0).wait(1).to({x:153.95,y:458.6},0).wait(1).to({y:461.9},0).wait(1).to({y:465.2},0).wait(1).to({x:153.9,y:468.5},0).wait(1).to({y:471.8},0).wait(1).to({y:475.1},0).wait(1).to({x:153.85,y:478.4},0).wait(1).to({y:481.7},0).wait(1).to({y:485},0).wait(1).to({y:488.35},0).wait(22).to({regY:158.2,y:488.55},0).wait(1).to({regY:158,y:488.35},0).wait(78));

	// Boden_haus
	this.instance_1 = new hause_lib.Symbol6();
	this.instance_1.setTransform(153.9,586.8,1,1,0,0,0,153.9,84.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).wait(1).to({y:591.8,alpha:0.1016},0).wait(1).to({alpha:0.1992},0).wait(1).to({alpha:0.3008},0).wait(1).to({alpha:0.3984},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6016},0).wait(1).to({alpha:0.6992},0).wait(1).to({alpha:0.8008},0).wait(1).to({alpha:0.8984},0).wait(1).to({y:591.6,alpha:1},0).wait(99).to({y:591.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new hause_lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(153.5,337.8,154.3,338.40000000000003);
// library properties:
hause_lib.properties = {
	id: '8315BD46164541438BC7F7CB0B0E3C8F',
	width: 307,
	height: 676,
	fps: 57,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/img/images/Animation_Haus_atlas_1.png", id:"Animation_Haus_atlas_1"}
	],
	preloads: []
};

// bootstrap callback support:

(hause_lib.Stage = function(canvas) {
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

an.hause_compositions = an.hause_compositions || {};
an.hause_compositions['8315BD46164541438BC7F7CB0B0E3C8F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return hause_lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.haus_compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.haus_getComposition = function(id) {
	return an.hause_compositions[id];
}


an.haus_makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = hause_lib.properties.width, h = hause_lib.properties.height;			
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

var haus_canvas, stage, exportRoot, haus_anim_container, dom_overlay_container, fnStartAnimation;
function haus_init() {
	haus_canvas = document.getElementById("haus_canvas");
	haus_anim_container = document.getElementById("haus_animation_container");
	dom_overlay_container = document.getElementById("haus_dom_overlay_container");
	var comp=AdobeAn.haus_getComposition("8315BD46164541438BC7F7CB0B0E3C8F");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){haus_handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function haus_handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var hause_lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = hause_lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new hause_lib.haus_Animation_Oursolutions();
	stage = new hause_lib.Stage(haus_canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = hause_lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.haus_makeResponsive(true,'both',false,1,[haus_canvas,haus_anim_container,haus_dom_overlay_container]);	
	AdobeAn.haus_compositionLoaded(hause_lib.properties.id);
	fnStartAnimation();
}