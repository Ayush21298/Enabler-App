var animation = document.querySelector('.slider-animation');
var nextBtn = document.querySelector('.next-slide');
var nextTarget = document.querySelector('.next-target');
var currSlide = 0;
const slideTimes = [0,1.02,2.9,4.67,6.4]
var vid = document.querySelector('video');
var tip = false;

function playReverse(start, end) {
    tip = true;
    var curr = vid.currentTime;
    var rewind = setInterval(()=> {
        vid.currentTime = curr;
        curr = curr - 0.1;
        if(curr < end) {
            endReverse();
        }
    }, 100)
    function endReverse() {
        vid.pause();
        clearInterval(rewind);
        tip = false;
    }
}
function playForward(start, end) {
    tip = true;
    if(vid.paused) {
        vid.play();
    }
    var pause_fun = () => {
        if(vid.currentTime >= end) {
            vid.pause();
            vid.removeEventListener('timeupdate', pause_fun);
            tip = false;
        }
    }
    vid.addEventListener('timeupdate', pause_fun);
}
nextBtn.addEventListener('click', ()=> {
    if(tip === true) {
        console.log("Rejecting");
        return;
    }
    console.log("Going from ", currSlide , " to ", currSlide+ 1);
    playForward(slideTimes[currSlide], slideTimes[currSlide+1]);
    currSlide += 1;
    if(currSlide === 4) {
        nextTarget.innerText = "Finish";
    }
    if(currSlide > 4) {
        window.location.assign('home.html')
    }
})
Hammer(animation).on("swipe", (e)=> {
    if(tip === true) {
        console.log("Rejecting");
        return;
    }
    if(e.deltaX > 0) {
        if(currSlide > 0) {
            playReverse(slideTimes[currSlide], slideTimes[currSlide -1]);
            currSlide = currSlide - 1;
        }
    } else {
        if(currSlide < 4) {
            playForward(slideTimes[currSlide], slideTimes[currSlide+1]);
            currSlide = currSlide + 1;
        } else {
            window.location.assign('home.html')
        }
    }
    nextTarget.innerText = currSlide === 4? "Finish" : "Next";
})