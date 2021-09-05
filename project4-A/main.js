window.document("load", function () {
  var shapeElement = document.querySelector("clouds");
  var frames = [
    { transform: "translateX(0px)" },
    { transform: "translateX(600px)" },
  ];

  var timing = {
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
  };
  shapeElement.animate(frames, timing);
});
