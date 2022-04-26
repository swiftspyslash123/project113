function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw(){
   image(video,0,0,400,400);
   fill("red");
   stroke("red");
   rect(40,50,300,20);
   rect(50,350,300,20);
   rect(30,60,20,300);
   rect(340,50,20,300);
   fill("green");
   stroke("green");
   circle(50,50,40);
   circle(350,50,40);
   circle(50,350,40);
   circle(350,350,40);
  }
  
  function take_snapshot(){
      save('image1.png')
  }
  
  function apply_filter(){
      tint_color = document.getElementById("color").value;
  }