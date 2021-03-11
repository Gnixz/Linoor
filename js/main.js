$(function() {
  //===== WOW JS =====//
  new WOW().init();

  //===== Owl Carousel =====//
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      1200: {
        nav: true,
      },
    },
  });
  $(".owl-team").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      991: {
        items: 2,
      },
    },
  });
  $(".owl-sponsors").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  $(".owl-news").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //===== Scroll Sticky Menu =====//
  let header = document.querySelector(".header")
  window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);

  })

  //===== Menu Active =====//
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
  var hash = window.location.hash.substr(1);
  if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
      {
      //$("nav .navbar-nav > li:first-child").addClass("active");
      } else {
          $(".header__menu-list li").each(function()
      {
          $(this).removeClass("active");
      });
      if(hash != "")
          $(".header__menu-list li a[href*='"+hash+"']").parents("li").addClass("active");
      else
      $(".header__menu-list li a[href*='"+curpage+"']").parents("li").addClass("active");
  }

  //===== Click Toggle Menu =====//
  let body = document.querySelector("body")
  let menuList = document.querySelector(".header__menu-list")
  let overlay = document.querySelector(".overlay-header")
  let button = document.querySelector(".header__menu-button")
  let icon = document.querySelectorAll(".list__item-icon")
  let logo = document.querySelector(".header__menu-logo")
  button.addEventListener("click", () => {
    body.classList.add('overflow-hidden')
    menuList.classList.add('show')
    overlay.classList.add('active')
    header.classList.add('w-0')
    button.classList.add('d-none')
    logo.classList.add('d-none')
  })
  overlay.addEventListener("click", () => {
    body.classList.remove('overflow-hidden')
    menuList.classList.remove('show')
    overlay.classList.remove('active')
    header.classList.remove('w-0')
    button.classList.remove('d-none')
    logo.classList.remove('d-none')
    $('.submenu').removeClass('show');
		$('.fa-plus').removeClass('hide');
		$('.fa-minus').removeClass('show');
  })

  // Click Show Submenu //
  icon.forEach(function(item) {
		item.addEventListener('click', function() {
			this.nextElementSibling.classList.toggle('show');
			this.querySelector('.fa-plus').classList.toggle('hide');
			this.querySelector('.fa-minus').classList.toggle('show');
			$('.list__item-icon').not(this).next().removeClass('show');
			$('.list__item-icon').not(this).find('>:first-child').removeClass('hide');
			$('.list__item-icon').not(this).find('>:last-child').removeClass('show');
		});
	});

  


  //===== Isotope =====//
  var $grid = $(".grid").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      gutter: 0,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-sizer",
      },
    });
  });
  //===== Isotope click function =====//
  $(".iso-nav a").click(function () {
    $(".iso-nav a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".grid").isotope({
      filter: selector,
    });
    return false;
  });

  //===== Number Auto Run =====/
  const facts = document.querySelector(".facts")
  const counters = document.querySelectorAll(".counters");
  const speed = 500; // The lower the slower
  window.addEventListener('scroll', () => {
    if (facts) {
      if (facts.offsetTop < window.pageYOffset + 420) {
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = Math.ceil(count + inc);
              // Call function every ms
              setTimeout(updateCount, 100);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    }
  })

  
  //===== Back to Top =====//
  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
});