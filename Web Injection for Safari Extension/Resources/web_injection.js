$(document).ready(function() {
    var urlString = window.location.href;
    if (urlString.indexOf("disneyplus") >= 0) {
        window.addEventListener('keydown', function(e){
            // console.log(e.code)
            var _video = document.querySelector('video');
            if (_video != null) {
                switch(e.code){
                    case 'KeyD':
                        if(document.querySelector('video')) {
                            document.querySelector('video').playbackRate =  document.querySelector('video').playbackRate+0.5;
                            console.log("Play Speed : " + document.querySelector('video').playbackRate);
                        }
                        break;
                    case 'KeyE':
                        if(document.querySelector('video')) {
                            document.querySelector('video').playbackRate =  document.querySelector('video').playbackRate-0.5;
                            console.log("Play Speed : " + document.querySelector('video').playbackRate);
                        }
                        break;
                    default:
                        break;
                }
            }
        }, false);
    }
});
