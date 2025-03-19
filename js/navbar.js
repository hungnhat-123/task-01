$(function () {
  const sections = $('section[id].content');

  // handle active menu corresponding with section when scrolling
  function scrollTracker(selector, offset) {
    const currentYScroll = window.scrollY;
    sections.each(function () {
      const section = $(this);
      const sectionHeight = section.outerHeight();
      const sectionTop = section.offset().top - offset;
      const id = section.attr("id");
      const currentNavLink = $(`${selector} a[href*="#${id}"]`);
      if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
        offset === 84 ? currentNavLink.parent().addClass("active") : currentNavLink.addClass("active");
      } else {
        offset === 84 ? currentNavLink.parent().removeClass("active") : currentNavLink.removeClass("active");
      }
    })
  }

  $(window).on("scroll", function () {
    scrollTracker('.nav-list li', 62);
    scrollTracker('.nav-mobile__list li', 84);
  });

  // handle active menu item corresponding with section when reloading page
  $(window).on("load", function () {
    let scrollPos = $(window).scrollTop();
    let navHeight = $(".nav-menu").outerHeight();

    if (window.innerWidth > 1024) {
      if (scrollPos < navHeight) {
        $(".nav-menu").removeClass("sticky");
      } else {
        $(".nav-menu").addClass("sticky");
      }
    }
  })
});
