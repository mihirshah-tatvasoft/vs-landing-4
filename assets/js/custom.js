// Add new js functions here -----------------------------------------------------------------

const docBody = document.body;

// OnScroll event handler
const onScroll = () => {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;
  if (scroll > 40) {
    docBody.classList.add("page-scrolled");
  } else {
    docBody.classList.remove("page-scrolled");
  }
};



// Use the function
window.addEventListener("scroll", onScroll);

window.addEventListener("load", function () {

  document.body.classList.add("page-loaded");
  console.log("Happy Scrolling 🙂");

  var myCollapsible = document.getElementById('accordionExample');
  myCollapsible.addEventListener('show.bs.collapse', function (e) {
    e.target.parentElement.classList.add("opened");
    if (e.target.parentElement.previousElementSibling) {
      e.target.parentElement.previousElementSibling.classList.add("prev")
    }
  });
  myCollapsible.addEventListener('hide.bs.collapse', function (e) {
    // do something...
    e.target.parentElement.classList.remove("opened");
    if (e.target.parentElement.previousElementSibling) {
      e.target.parentElement.previousElementSibling.classList.remove("prev")
    }
  });

  function smoothScroll(target, duration) {
    var targetSection = document.querySelector(target);
    var offset = 50;
    var targetPosition = targetSection.offsetTop - offset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  var myLink = document.querySelectorAll('.navbar-nav a[href^="#"]');
  myLink.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      var duration = 500; // Set the duration of the scroll animation (in milliseconds)
      smoothScroll(target, duration);

    });
  });

  var navTogglerBtn = document.getElementById('navbarToggler');
  navTogglerBtn.addEventListener('click', () => { headerAnimation.restart(); });
});
// --------------------------------------------------------------------------------------------
// Don't add anything below this --------------------------------------------------------------
// --------------------------------------------------------------------------------------------