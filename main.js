difference = "";
leftWristX = "";
rightWristX = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.center();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
   }

   function modelLoaded()
   {
     console.log("Posenet Initialized");
   }

   function gotposes(result)
    {
        if(result.length > 0)
        {
            leftWristX = result[0].pose.leftWrist.x;
            rightWristX = result[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
        }   
    }
   
   function draw()
   {
       background("white");
       textSize(difference);
       fill("#90EE90");
       text('Gunvant', 50, 400);
   }