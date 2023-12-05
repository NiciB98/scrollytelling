console.log('Test');

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.box'
}).setClassToggle('.box', 'show').addTo(controller);


// build scenes
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    //.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);
}

//svg id="rot" animation
function pathPrepare(el) {
    // Check if the element exists
    if (el) {
        var lineLength = el.getTotalLength();
        el.style.strokeDasharray = lineLength;
        el.style.strokeDashoffset = lineLength;
    } else {
        console.error("SVG element not found");
    }
}

// Assuming you have an SVG element with id="rot"
var svgRot = document.getElementById("rot");

// Call pathPrepare with the SVG element
pathPrepare(svgRot);



// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
    .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0)			// change color during the whole thing
    .add(TweenMax.to("path", 0.7, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw word for 0.9

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
                .setTween(tween)
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);



