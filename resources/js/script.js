"use strict";
$(document).ready(function () {
  $(".js--section-about").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile nav */

  $(".js--nav-icon").click(function () {
    var nav = $(".main-nav");
    nav.slideToggle(200);
  });
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
const ytIcon = document.querySelector(".yt-icon");
const ytBtn = document.querySelector(".btn-yt");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // add listener to disable scroll
  window.addEventListener("scroll", noScroll);
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  // Remove listener to re-enable scroll
  window.removeEventListener("scroll", noScroll);
};

const noScroll = function () {
  window.scrollTo(0, 0);
};

btnOpenModal.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

ytBtn.addEventListener("mouseover", function () {
  ytIcon.style.color = "#ff0000";
});

ytBtn.addEventListener("mouseout", function () {
  ytIcon.style.color = "#fff";
});
