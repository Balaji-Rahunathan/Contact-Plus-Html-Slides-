var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-block1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

$("#draggable2").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});
$("#draggable3").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#droppable2").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-13.svg"
    );
    $("#active_d_2").removeClass("active_2").addClass("active_1");
    $("#active_d_2_m").removeClass("active_2").addClass("active_1");
    $(".box2").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable3").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-11.svg"
    );
    $("#active_d_3").removeClass("active_2").addClass("active_1");
    $("#active_d_3_m").removeClass("active_2").addClass("active_1");
    $(".box3").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});

$(document).ready(function () {
  var divs = $(".mydivs>.d_d_div");
  var now = 0; // currently shown div
  divs.hide().first().show(); // hide all divs except first
  $("button[name=next]").click(function () {
    divs.eq(now).hide();
    now = now + 1 < divs.length ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function () {
    divs.eq(now).hide();
    now = now > 0 ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
  });
});
var dropped = false;
$("#drag").draggable({
  helper: "original",
  revert: "invalid",

  drag: function (event, ui) {
    var target = document.getElementById("drag");
    target.style.width = "35%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);

    $("#drag_img").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-13.svg"
    );
    document.getElementById("drag_img").style.display = "block";
  },
  stop: function (event) {
    if (!dropped) {
      var target = document.getElementById("drag");
      target.style.opacity = 0;
      $("#drag_img").attr(
        "src",
        "assets/img/ContactPlus/Balaji%20Precautions-11.svg"
      );
    }
  },
});
$("#drag").draggable({
  cursor: "move",
  cursorAt: { width: "50%", height: "50%" },
  helper: function (event) {
    return $("#drag").attr("src", "assets/img/Assets/Gloves.svg");
  },
});
$("#drop").droppable({
  drop: function (event, ui) {
    $("#drop").html('<img src="assets/img/Assets/Gloves.svg">');
    $("#drag").hide();
    $("#drag_img").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-13.svg"
    );
    $("#active_r_1").removeClass("active_2").addClass("active_1");
    $("#active_r_1_m").removeClass("active_2").addClass("active_1");
    dropped = true;
    var target = document.getElementById("drop");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex").style.display = "block";
    document.getElementById("drop_drag_next_con").style.display = "block";
  },
});

var dropped1 = false;
$("#drag_1").draggable({
  helper: "original",
  revert: "invalid",
  transition: "none",
  allowSamePageTransition: true,

  reloadPage: true,
  drag: function (event, ui) {
    var target = document.getElementById("drag_1");
    target.style.width = "25%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;

    $("#drag_img_1").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-14.svg"
    );
    document.getElementById("drag_img_1").style.display = "block";
  },
  stop: function (event) {
    if (!dropped1) {
      var target = document.getElementById("drag_1");
      target.style.opacity = 0;
      $("#drag_img_1").attr(
        "src",
        "assets/img/ContactPlus/Balaji%20Precautions-13.svg"
      );
    }
  },
});
$("#drag_1").draggable({
  cursor: "move",

  cursorAt: { width: "50%", height: "50%" },

  helper: function (event) {
    return $("#drag_1").attr("src", "assets/img/Assets/Gown.svg");
  },
});
$("#drop_1").droppable({
  drop: function (event, ui) {
    $("#drop_1").html('<img src="assets/img/Assets/Gown.svg">');
    $("#drag_1").hide();
    $("#active_r_2").removeClass("active_2").addClass("active_1");
    $("#active_r_2_m").removeClass("active_2").addClass("active_1");
    dropped1 = true;
    var target = document.getElementById("drop_1");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_1").style.display = "block";
    document.getElementById("drop_drag_next_con_1").style.display = "block";
  },
});

var dropped2 = false;
$("#drag_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_2");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_2").attr(
      "src",
      "assets/img/ContactPlus/Balaji%20Precautions-14.svg"
    );
    document.getElementById("drag_img_2").style.display = "block";
  },
  stop: function (event) {
    if (!dropped2) {
      var target = document.getElementById("drag_2");
      target.style.opacity = 0;
      $("#drag_img_2").attr(
        "src",
        "assets/img/Droplet_Character/After/Character_Apron%20Dispose-03.svg"
      );
    }
  },
});

$("#drag_d_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_1");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_1").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_1").css("display", "block");
    $("#drop_d_1").hide();
    $("#drag_d_1").hide();
    $(".block1b-text-container").css("display", "block");
    $("#active_d_1").removeClass("active_2").addClass("active_1");
    $("#active_d_1_m").removeClass("active_2").addClass("active_1");
  },
});
$("#drag_d_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_2");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_2").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_2").css("display", "block");
    $("#drop_d_2").hide();
    $("#drag_d_2").hide();
    $("#active_r_4").removeClass("active_2").addClass("active_1");
    $("#active_r_4_m").removeClass("active_2").addClass("active_1");
    var target = document.getElementById("drop_d_2");
    document.getElementById("drop_drag_next_con_d_2").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_2").style.display = "block";
  },
});

if ($(window).width() > 600) {
  $(".rwl_1").addClass("rwl");
} else {
  $(".rwl_1").removeClass("rwl");
}

function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}

var lastTouchY = 0;
var preventPullToRefresh = false;

window.addEventListener("load", function () {
  var maybePreventPullToRefresh = false;
  var lastTouchY = 0;
  var touchstartHandler = function (e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.
    maybePreventPullToRefresh = window.pageYOffset == 0;
  };

  var touchmoveHandler = function (e) {
    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (maybePreventPullToRefresh) {
      // To suppress pull-to-refresh it is sufficient to preventDefault the
      // first overscrolling touchmove.
      maybePreventPullToRefresh = false;
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }
  };

  document.addEventListener("touchstart", touchstartHandler, false);
  document.addEventListener("touchmove", touchmoveHandler, false);
});

/*
 * jQuery UI RefreshContainment v0.1
 *
 * A plugin for jQuery UI's Draggable. It adds a refreshContainment method to
 * every draggable which allows you to use the containment option on draggables
 * with dynamically changing sizes.
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 *  jquery.ui.draggable.js
 */

(function ($) {
  var $window = $(window);

  // We need to know the location of the mouse so that we can use it to
  // refresh the containment at any time.

  $window.data("refreshContainment", { mousePosition: { pageX: 0, pageY: 0 } });
  $window.mousemove(function (event) {
    $window.data("refreshContainment", {
      mousePosition: { pageX: event.pageX, pageY: event.pageY },
    });
  });

  // Extend draggable with the proxy pattern.
  var proxied = $.fn.draggable;
  $.fn.draggable = function (method) {
    if (method === "refreshContainment") {
      this.each(function () {
        var inst = $(this).data("draggable");

        // Check if the draggable is already being dragged.
        var isDragging =
          inst.helper && inst.helper.is(".ui-draggable-dragging");

        // We are going to use the existing _mouseStart method to take care of
        // refreshing the containtment but, since we don't actually intend to
        // emulate a true _mouseStart, we have to avoid any extraneous
        // operations like the drag/drop manager and event triggering.
        // So we save the original member values and replace them with dummies.
        var ddmanager = $.ui.ddmanager;
        $.ui.ddmanager = null;
        var trigger = inst._trigger;
        inst._trigger = function () {
          return true;
        };

        var mousePosition = $window.data("refreshContainment").mousePosition;
        var fakeEvent = {
          pageX: mousePosition.pageX,
          pageY: mousePosition.pageY,
        };
        inst._mouseStart(fakeEvent);

        // Return those extraneous members back to the original values.
        inst._trigger = trigger;
        $.ui.ddmanager = ddmanager;

        // Clear the drag, unless it was already being dragged.
        if (!isDragging) {
          inst._clear();
        }
      });
      return this;
    } else {
      // Delegate all other calls to the actual draggable implemenation.
      return proxied.apply(this, arguments);
    }
  };
})(jQuery);
