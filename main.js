Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
 camera = document.getElementById("camera");

 Webcam.attach(camera)

  function take_snapshot(){
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">  '
    }
 
)}

console.log('ml5 version' ,ml5.version);


classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CKRL10G8T/model.json' , modelLoaded)

function modelLoaded() {
    console.log('modelLoaded')
}

function check() {
    img= document.getElementById('captured_image')
    classifier.classify(img,gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
       
        prediction_1=results[0].label;
        //speak();
        if (prediction_1=="thumbs up") {
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if (prediction_1=="peace out") {
            document.getElementById("update_emoji").innerHTML="&#9774;"
        }
        if (prediction_1=="loser") {
            document.getElementById("update_emoji").innerHTML="&#129304;"
        }
    }

}