


function click1(){

var body1 = document.getElementById("body")
body1.innerHTML = `
<p>Welcome to the new stage.you can watch many cartoons</p>
<p>You can click the slow button.The video starts more  slowly than  the previous
<p>in the meantime if you want to quit this page.you can click the go back button
<link href="style1.css" rel="stylesheet">
<h1>1.Adventure Time </h1>
<video src="videos/fistcartoon.mp4" controls muted id="video1" >  </video>
<button onclick="click2()">Slow</button
<br><br>
<h1>2.Regular Show </h1>
<video src="videos/secondcartoon.mp4" controls muted id="video2"> </video>
<button onclick="click2()"> Slow </button>
<button onclick="click3()"> Go Back </button>
`
  

  
  
  
}
function click3(){
    location.reload()
}
function click2(){
 var video= document.getElementById("video1")
 var video1 = document.getElementById("video2")
 video1.playbackRate= 0.3
 video.playbackRate = 0.3   
}