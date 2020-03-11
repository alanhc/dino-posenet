let jump;

function preload() {
   
    
}

function setup() {

    initPose();

    jump = false;
    //var keys = Object.keys(dino_runner);
    //console.log(keys)

}

function draw() {
    updatePose();
    if (jump === true) {
        if (!dino_runner.tRex.jumping && !dino_runner.tRex.ducking) {
            dino_runner.playSound(dino_runner.soundFx.BUTTON_PRESS);
            dino_runner.tRex.startJump(dino_runner.currentSpeed);
        }
        console.log('key pressed')
        jump = false;
    }

}