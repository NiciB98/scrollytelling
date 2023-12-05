# scrollytelling_im5

Dieses README soll euch helfen zu verstehen, welche Überlegungen ich bei meinem Scrollytelling Projekt gemacht habe. Ich habe für mein Projket mit HTML, CSS und Javascript gearbeitet. Ausserdem wurde eine Library (scrollmagic) eingebunden.
<script></script> und <style></style> Tags dienen der besseren Darstellung durch farbliche Kennzeichnung.

Die oberen Zeilen von script.js und scrolly.html kommen noch ohne Library aus.
1. <div class="scrollytext animated_element"> "style.css" und "script.js"
   verwenden diese Klassen um alle Elemete in diesem div zu animieren. In Javascript werden durch <script>entry.target.classList.add('show');</script> eine Klasse hinzugefügt, sobald sich ein Element im Viewport befindet. ==> <script>if (entry.isIntersecting)</script>

2. Das ganze geschieht im Observer <script> const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {</script> 

3. Damit der Observer auch etwas tut muss man ihm sagen, auf was er seinen Code anwendet. Das geschieht durch Auswählen <script>const animated = document.querySelectorAll('.animated_element');</script>

und durch anwenden ==> <script>animated.forEach((el) => observer.observe(el));</script> Jetzt wird der Observer für alle Elemete im HTML mit 
der Klasse "animated_element" angewendet, so wie hier. <div class="scrollytext animated_element">

4. "style.css" animiert das Ganze schlussendlich. Hier ein Beispiel: 

    <style>
    .scrollytext {
        opacity: 0;
        transition: all 1.5s;
        transition-delay: 0.25s;
        transition-timing-function: ease;
        margin-left: 350px;
    }

    .scrollytext.show {
        opacity: 1;
        margin-left: 0px;
        padding:  25px;
    }
    </style>

Nun zu scrollmagic. 
1. Einbindung im head: <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" defer></script>
   
2.  <script>var controller = new ScrollMagic.Controller();</script> Der Controller regelt alle Szenen

3. Durch die Scene wird mittels "trigger" bestimmt welches element im html animiert werden soll. 
<script>var scene1 = new ScrollMagic.Scene({
    triggerElement: '#box1',
    }).setClassToggle('#box1', 'show').addTo(controller);</script>

In scrolly.html: <section id="box1" class="box">

4. <script>}).setClassToggle('#box1', 'show').addTo(controller);</script>
   Hier wird ähnliches getan wie oben mit reinem Vanilla Javascript. Zu "#box1" wird on scroll die Klasse "show" hinzugefügt, sobald "#box1"
   im Viewport ist. Ist "#box1" nicht mehr im Viewport wird die Klasse "show" entfernt.
   5. Controller: <script>.addTo(controller)</script> fügt die vorherige Aktion zum Controller hinzu. Der Controller löst die Scroll-Ereignisse aus.