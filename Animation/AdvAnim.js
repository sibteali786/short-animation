 $(document).ready(function () {
        $("#sit").on("click", function () {
          $("body").removeClass("running").addClass("sitting animated");
        });
        $("#run").on("click", function () {
          $("body").removeClass("sitting").addClass("running animated");
        });
        $("#off").on("click", function () {
          $("body").removeClass();
        });
      });