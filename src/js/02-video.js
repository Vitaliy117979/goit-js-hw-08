import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
        console.log('played the video!');
    });

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', throttle(currentTime, 250));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

function currentTime(data) {
    console.log('Seconds watched:', data.seconds);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));}