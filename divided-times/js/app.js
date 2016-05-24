$(document).ready(function() {

  var $internationalDrop = $("#international-drop");
  var $politicsDrop = $("#politics-drop");
  var $businessDrop = $("#business-drop");
  var $technologyDrop = $("#technology-drop");
  var $cultureDrop = $("#culture-drop");
  var $blogsDrop = $("blogs-drop");

  function hide () {
      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
  }
  function show () {
      $("#international-drop").show();
      $("#politics-drop").show();
      $("#business-drop").show();
      $("#technology-drop").show();
      $("#culture-drop").show();
      $("#blogs-drop").show();
  }



  $(document).on("click", "li.international", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $internationalDrop.show();

      $("#international-drop").show();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.politics", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#international-drop").hide();
      $("#politics-drop").show();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.business", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").show();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.technology", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").show();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.culture", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").show();
      $("#blogs-drop").hide();

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.blogs", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#international-drop").hide();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").show();

      $("#slide-down").slideDown();
    }
  });

});