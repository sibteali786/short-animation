window.addEventListener("load", function () {
  var shapeElement = document.querySelector(".clouds");
  var frames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  var timing = {
    duration: 6000,
    iterations: Infinity,
  };
  shapeElement.animate(frames, timing);
});
