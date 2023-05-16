function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    TransitionEvent_color = "";
}

function Draw() {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function Filter_tint()
{
tint_color = document.getElementById("color_name").value;
}