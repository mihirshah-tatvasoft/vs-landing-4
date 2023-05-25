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

  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);

  var myLink = document.querySelectorAll('.navbar-nav a[href^="#"]');
  myLink.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      // for (let i = 0; i < myLink.length; i++) {
      //   myLink[i].classList.remove("active");
      // }
      // this.classList.add("active");
      lenis.start();
      lenis.scrollTo(this.getAttribute('href'));

    });
  })

  const toggleMenu = document.getElementById('navbarToggler');
  toggleMenu.addEventListener('click', event => {
    lenis.stop();
  })

  myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
    lenis.start();
  })

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
