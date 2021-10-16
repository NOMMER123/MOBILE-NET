Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    })
}
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded() {
    console.log("model Loaded");
}
function check() {
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
if (error) {
    console.error(error);

}
else {console.log(results);
document.getElementById("object-name").innerHTML=results[0].label;
}
}