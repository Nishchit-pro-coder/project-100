var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() 
{ 
    recognition.start(); }
    recognition.onresult = function(event) {
    console.log(event)

    content = event.results[0][0].transcript;
    console.log (content)


    if (content =="selfie") 
    {
        console.log("taking selfie --- ")
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie & making your collage in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        image_id = "result1";
        take_snapshot();
        speak_data = "taking your next selfie in 10 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
        synth.speak(utterThis);

    }, 5000);

    setTimeout(function()
    {
        image_id = "result2";
        take_snapshot();
        speak_data = "taking your next selfie in 15 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
        synth.speak(utterThis);
        
    }, 10000);

    setTimeout(function()
    {
        image_id = "result3";
        take_snapshot();
        speak_data = "your collage is now done"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
        synth.speak(utterThis);
        
    }, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:300,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});


function take_snapshot() 
{
    Webcam.snap(function(data_uri) {
        {
            if (image_id = result1)
            document.getElementById("result1").innerHTML = '<img id="result1" src="'+data_uri+'"/>';
        }

        {
            if (image_id = result2)
            document.getElementById("result2").innerHTML = '<img id="result2" src="'+data_uri+'"/>';
        }

        {
            if (image_id = result3)
            document.getElementById("result3").innerHTML = '<img id="result3" src="'+data_uri+'"/>';
        }
    })
}


