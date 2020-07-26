window.onload = ()=> {
    var videos = document.querySelectorAll('video');
    //videos.forEach(video => video.play());
    var perc = document.querySelector('.loading-perc');
    var val = 0;
    window.setInterval(()=> {
        val += 10;
        perc.innerText = val + "%";
        if(val === 100) {
            window.location.assign("data-restoration-completed.html");
        }
    }, 1000);
}