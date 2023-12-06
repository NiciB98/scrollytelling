console.log(123);



//Dieser Loop loopt durch alle Einträge auf der Seite.
//Für jeden Eintrag wird die class 'show' hinzugefügt.
//Falls sie schon da ist gilt "remove 'show'".
//Das heisst die Klasse wird entfernt
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {

//Die Eigenschaft classList bietet Methoden, um die Klassen eines Elements zu manipulieren.
//In diesem Fall wird .classList.add('show') verwendet, um den CSS-Klassennamen "show" zu dem
//Element hinzuzufügen, auf das entry.target verweist.
//Das ist eine Methode, um CSS-Stile oder Verhalten auf ein Element anzuwenden, wenn ein Ereignis eintritt.
//Hier ist das Ereignis das Scrollen. IntersectionObserver schaut ob das Fenster mit einem Element "überschneidet".
//Wenn ja 'if (entry.isIntersecting)' füge Class 'show' hinzu.
            entry.target.classList.add('show');
            // if(entry.target.classList.contains("grafiken")) {
            //     stopScrolling();
            // }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

//Dieser Code wählt alle Elemente mit der class 'hidden' aus.

const animated = document.querySelectorAll('.animated_element');
//Für alle Elemente mit der class 'hidden', die in der Variable 'hiddenElements' gespeichert sind gilt:
//Die Funktion 'observer' soll alle Elemente beobachten
//Sind diese nicht sichtbar (opacity:0 in CSS), werden sie sichtbar mit opacity: 1.
//Das geschieht durch den Loop 'observer', der jedes ausgewählte Element, in diesem Fall allen Elements mit der class='hidden'
//durch den Loop 'IntersectObserver' laufen lässt.

animated.forEach((el) => observer.observe(el));



//Code für images
/*const observerImg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showimg');
        } else {
            entry.target.classList.remove('showimg');
        }
    });
});*/

//Dieser Code wählt alle Elemente mit der class 'hidden' aus.
//const scrollyTellingImg = document.querySelectorAll('.scrollyimg');
//scrollyTellingImg.forEach((el) => observer.observe(el));


//Code für Grafiken und GiFs (funktioniert nicht wie gewünscht. Das Ziel wäre, dass das ganze stehen bleibt und der Use
//erst dann weiterscrollen kann, wenn das Gif 5 Mal abgespielt wurde)



// function stopScrolling() {
//     //body overflow hidden for 5 seconds
//     document.body.style.overflow = 'hidden';
//     setTimeout(function() {
//         document.body.style.overflow = 'auto';
//     }, 2000);
// }



//console.log(elementIsVisibleInViewport(gif, true)); // true - (partially visible)

/*gif.onload = function() {
    console.log('hi');
  if (++count >= 5) {
    grafiken.style.overflow = 'auto';
  }
};*/



//Color vom body in der Mitte wechseln

// const bodyObserver = new IntersectionObserver(entries => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('color2show');
//         } else {
//             entry.target.classList.remove('color2show');

//             }
//         });
//     });

// const bodySection = document.querySelectorAll('.color2');

// bodySection.forEach((el) => bodyObserver.observe(el));

//Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// scrollmagic begins...

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '#box1',
}).setClassToggle('#box1', 'show').addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '#box2',
}).setClassToggle('#box2', 'show').addTo(controller);


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
//var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0)		  // Farbe ändern während dem ganzen Ding
  .add(TweenMax.to("path", 0.7, {strokeDashoffset: 0, ease:Linear.easeNone})); // Wort für 0.9  Sekunden zeichnen

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
              .setTween(tween)
              //.addIndicators() // add indicators (requires plugin)
              .addTo(controller);


//Make videoplayer for sparkVideo
window.onload = function() {
    var video = document.getElementById('sparkVideo');
    var playButton = document.getElementById('play-pause');
    var seekBar = document.getElementById('seek-bar');
    var muteButton = document.getElementById('mute');
    var volumeBar = document.getElementById('volume-bar');
    var fullScreenButton = document.getElementById('full-screen');

    playButton.addEventListener('click', function() {
        if (video.paused == true) {
            video.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    seekBar.addEventListener('change', function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    muteButton.addEventListener('click', function() {
      if (video.muted == false) {
        video.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        video.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    });

// Update the seek bar as the video plays
video.addEventListener('timeupdate', function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;
});

// Seek the video when the slider handle is dragged
seekBar.addEventListener('input', function() {
  // Calculate the new time
  var time = video.duration * (seekBar.value / 100);

  // Update the video time
  video.currentTime = time;
});

    volumeBar.addEventListener('change', function() {
        video.volume = volumeBar.value;
    });

    fullScreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome and Safari
            video.webkitRequestFullscreen();
        }
    });
};

//Use Scroll Magic to play and pause a video

//SCROLLMAGIC
const controllerVideo = new ScrollMagic.Controller();
let spark = document.getElementById('sparkVideo');
//Scenes
let sceneVideo = new ScrollMagic.Scene({
  duration: 550,
  triggerElement: spark,
  triggerHook: 0.7
})
  //.addIndicators()
  //.setPin(spark)
  .addTo(controllerVideo);

//Video Animation to play if video is in viewport
sceneVideo.on('enter', function() {
  spark.play();
  console.log('play');
});

sceneVideo.on('leave', function() {
  spark.pause();
  console.log('pause');
});


window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});