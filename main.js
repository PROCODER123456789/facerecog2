Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});

camera-document.getElementById("camera");

Webcam.attach(' #camera');

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data-uri+'/>';

    });
}

console.log('ml5 version :', ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kE8qMocjw/model.json',modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
}