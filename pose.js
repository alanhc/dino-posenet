let video;
let poseNet;
let skeleton;
let img_dino;


let pose_now;
let pose_pre;
let v_pose;
let detact_point;

function initPose() {
    img_dino = loadImage('dino.png');

    msg = createP('model loading...');
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, () => msg.hide());
    poseNet.on('pose', gotPoses);
    v_pose = createVector(0, 0);
    pose_now = {
        x: 0,
        y: 0
    };
    pose_pre = {
        x: 0,
        y: 0
    };
    fps = createP('fps');
    detact_point = {
        x: 0,
        y: 0
    };
}



function updatePose() {
    image(video, 0, 0);
    fps.html(frameRate());

    if (pose) {
        //console.log(pose)
        detact_point = {
            x: (pose.leftHip.x + pose.rightHip.x + pose.leftShoulder.x + pose.rightShoulder.x) / 4,
            y: (pose.leftHip.y + pose.rightHip.y + pose.leftShoulder.y + pose.rightShoulder.y) / 4,
        }
        pose_now = detact_point;
        v_pose.x = pose_now.x - pose_pre.x;
        v_pose.y = pose_now.y - pose_pre.y;
        pose_pre = pose_now;

        
        stroke(255, 255, 0);


        line(windowWidth / 2, windowHeight / 2, windowWidth / 2 + v_pose.x, windowHeight / 2 + v_pose.y);
        fill(255, 0, 0); ellipse(detact_point.x, detact_point.y, 20);
        for (let i = 5; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0, 255, 0); ellipse(x, y, 10);
        }
        /*
        for (let i = 5; i < skeleton.length; i++) {
            let a = seleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(2);
            stroke(255);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }*/
        image(img_dino, windowWidth / 2 - 150, windowHeight / 2 - 200 + v_pose.y, 300, 300);
        //console.log(v_pose.mag())
        if (v_pose.mag()>100) {
            console.log(v_pose.mag())
            jump=true;
        }
    }
}
let pose;
function gotPoses(poses)
{
    //console.log(poses);
    if (poses.length>0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}
