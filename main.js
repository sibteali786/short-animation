window.addEventListener("load", function () {
  var shapeElement = document.querySelector(".clouds");
  var shapeElementCloud = document.querySelector(".clouds1");
  var shapeElementCloud_big = document.querySelector(".clouds2");
  var shapePole = document.querySelector(".pole");
  var shapePole1 = document.querySelector(".pole_1");
  var shapeMoon = document.querySelector(".Moon");
  var shapeBus = document.querySelector(".Bus");
  var shapeText = document.querySelector(".anim_text");
  var framesText = [
    { opacity: 0 },
    { opacity: 1 },
    { opacity: 0.5 },
    { opacity: 0 },
  ];
  var timingText = {
    duration: 8000,
    iteration: 1,
    fill: "forwards",
  };
  shapeText.animate(framesText, timingText);
  var frames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];
  var framesBus = [
    { transform: "translateX(200%)" },
    { transform: "translateX(-500%)" },
  ];
  var framesMoon = [
    { transform: "translateX(10%)" },
    { transform: "translateX(-100%)" },
  ];

  var timing = {
    duration: 30000,
    iterations: Infinity,
  };
  var timingMoon = {
    duration: 130000,
    iterations: Infinity,
  };
  var timingCloud = {
    duration: 15000,
    iterations: Infinity,
  };
  var timingCloud_big = {
    duration: 20000,
    iterations: Infinity,
  };
  var timingPole = {
    duration: 7000,
    iterations: Infinity,
  };
  var timingBus = {
    duration: 10000,
    iterations: Infinity,
  };
  BigCloud = shapeElementCloud_big.animate(frames, timingCloud_big);
  smallCloud = shapeElementCloud.animate(frames, timingCloud);

  pole1 = shapePole.animate(frames, timingPole);
  pole2 = shapePole1.animate(frames, timingPole);
  Moon = shapeMoon.animate(framesMoon, timingMoon);
  Bus = shapeBus.animate(framesBus, timingBus);
  shapeAnimate = shapeElement.animate(frames, timing);
  //  Stoping the animation
  document.querySelector("#play").addEventListener("click", function () {
    shapeAnimate.play();
    BigCloud.play();
    smallCloud.play();
    pole1.play();
    pole2.play();
    Moon.play();
    Bus.play();
  });
  document.querySelector("#pause").addEventListener("click", function () {
    shapeAnimate.pause();
    BigCloud.pause();
    smallCloud.pause();
    pole1.pause();
    pole2.pause();
    Moon.pause();
    Bus.pause();
  });
  document
    .querySelector("#IncreaseRate")
    .addEventListener("click", function () {
      shapeAnimate.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      BigCloud.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      smallCloud.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      pole1.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      pole2.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      Moon.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
      Bus.updatePlaybackRate(shapeAnimate.playbackRate * 1.2);
    });
  document
    .querySelector("#DecreaseRate")
    .addEventListener("click", function () {
      shapeAnimate.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      BigCloud.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      smallCloud.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      pole1.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      pole2.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      Moon.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
      Bus.updatePlaybackRate(shapeAnimate.playbackRate / 1.2);
    });
});
