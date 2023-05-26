// Add new js functions here -----------------------------------------------------------------

const docBody = document.body;
const myOffcanvas = document.getElementById('offcanvasExample');


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

  // const lenis = new Lenis()
  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf);

  function smoothScroll(target, duration) {
    var targetSection = document.querySelector(target);
    var targetPosition = targetSection.offsetTop;
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
      // for (let i = 0; i < myLink.length; i++) {
      //   myLink[i].classList.remove("active");
      // }
      // this.classList.add("active");
      // lenis.start();
      // lenis.scrollTo(this.getAttribute('href'));
      // let rect = 0;
      // console.log(this.getAttribute('href'))
      // let tempScrollPos = this.getAttribute('href');
      // var res = tempScrollPos.replace('#', "");
      // let finalScrollPos = document.getElementById(res);
      // console.log(finalScrollPos)
      // rect = finalScrollPos.getBoundingClientRect();
      // console.log(rect.top)
      // window.scrollTo(0, rect.top);

      var target = this.getAttribute('href');
      var duration = 500; // Set the duration of the scroll animation (in milliseconds)
      smoothScroll(target, duration);

    });
  })

  // const toggleMenu = document.getElementById('navbarToggler');
  // toggleMenu.addEventListener('click', event => {
  //   lenis.stop();
  // })

  // myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  //   lenis.start();
  // })

  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     lenis.destroy();
  //     console.log("dddddddd")
  //   } else {
  //     lenis.start();
  //   }
  // }

  // var x = window.matchMedia("(max-width: 991px)");
  // myFunction(x)
  // x.addListener(myFunction)

});
// --------------------------------------------------------------------------------------------
// Don't add anything below this --------------------------------------------------------------
// --------------------------------------------------------------------------------------------
