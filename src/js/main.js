window.addEventListener('load', init, false);

function init() {
    var img = new Image;
    var ctx = document.getElementById('play-area').getContext('2d');

    img.src = STAR_FIGHTERS.NABOO;
    img.addEventListener('load', function () {

        var interval = setInterval(function() {
            var x = 0, y = 0;

            return function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img, x, y);

                x += 1;
                if (x > ctx.canvas.width) {
                    x = 0;
                }
            };
        }(), 25);
    }, false);
}
