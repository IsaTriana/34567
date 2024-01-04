img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado; detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    if (status != "")
    {  

    }
}

function modelLoaded()
{
    console.log("Modelo cargado!")
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function preload()
{
    img  = loadImage('pp.jpg');
}