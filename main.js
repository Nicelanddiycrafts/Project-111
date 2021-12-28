Webcam.set(
    {
        width: 250,
        height: 250,
        image_format: "jpeg",
        jpeg_quality: 90
    });

camera = document.getElementById('#camera');
Webcam.attach("#camera");

function jk(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = "<img id='captured_img' src='"+ data_uri + "'>";
    })
}

console.log("ml5 version is", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ksOn03_2q/ ", modelLoaded)

function modelLoaded(){
    console.log("Model is loaded");
}