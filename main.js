function setup() {
  canvas = createCanvas(350, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mymodel = ml5.imageClassifier("MobileNet", modelLoaded);
}
function draw(){
  image (video, 0, 0, 350, 350);
  mymodel.classify(video, gotResult);
}
function modelLoaded(){
  console.log("mobilenet has loaded");
}
function gotResult(error, results){
  if(error){console.log(error)}
  else{
console.log(results);
document.getElementById("objectname").innerHTML = results[0].label;
document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
