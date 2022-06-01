let flyid = '';
let posx = 0;
const fly = document.querySelector('.fly');
fly.addEventListener('click', function () {
    clearInterval(flyid);
    posx = 480;
    fly.style.left = "480px"
    fly.style.top = 20 + '%';
    fly.style.animation = "none";
    flyid = setInterval(frame, 5);
    function frame() {
        if (posx > -130) {
            fly.style.display = "block";
        }
        if (posx == 2100) {
            posx = -300;
            fly.style.display = "none";
        }
        else {
            posx++;
            console.log(fly.style.left);
            fly.style.left = posx + 'px';
        }
        if (posx == 479) {
            clearInterval(flyid);
        }
    }
})