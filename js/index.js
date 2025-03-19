$(function () {
  const menuButton = $('.navbar-mobile');
  const closeBtn = $('.nav-mobile__close');
  const menu = $('.nav-mobile');
  const overlay = $('.overlay');
  const navMobileItems = $('.nav-mobile__list-item');
  const navMenu = $('.nav-menu');

  const characters = $('.character');
  const conceptuals = $('.conceptual');
  const filterBtn1 = $('.filter-1');
  const filterBtn2 = $('.filter-2');
  const resetFilter = $('.left-filter');

  const navItems = [
    { selector: ".nav-item:nth-child(1)", mobile: ".nav-mobile__list-item:nth-child(1)", target: ".first-section" },
    { selector: ".nav-item:nth-child(2)", mobile: ".nav-mobile__list-item:nth-child(2)", target: ".second-section-container" },
    { selector: ".nav-item:nth-child(3)", mobile: ".nav-mobile__list-item:nth-child(3)", target: ".eighth-section-container" },
    { selector: ".nav-item:nth-child(4)", mobile: ".nav-mobile__list-item:nth-child(4)", target: ".sixth-section-container" },
    { selector: ".nav-item:nth-child(5)", mobile: ".nav-mobile__list-item:nth-child(5)", target: ".seventh-section-container" },
    { selector: ".nav-item:nth-child(6)", mobile: ".nav-mobile__list-item:nth-child(6)", target: ".fourth-section-container" }
  ];

  const scrollToTarget = (targetItem) => {
    let navHeight = 60;
    let targetOffset = targetItem.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: targetOffset
    }, 100);
  }

  navItems.forEach(({ selector, mobile, target }) => {
    const navItem = $(selector);
    const targetItem = $(target);
    const navMobile = $(mobile);

    if (navItem.length && targetItem.length) {
      navItem.on("click", () => scrollToTarget(targetItem));

      navMobile.on("click", function () {
        menu.removeClass('active');
        overlay.removeClass('active');
        scrollToTarget(targetItem);
      });
    }
  });

  menuButton.on('click', function () {
    menu.addClass('active');
    overlay.addClass('active');
  });

  closeBtn.on('click', function () {
    menu.removeClass('active');
    overlay.removeClass('active');
  });

  overlay.on('click', function () {
    menu.removeClass('active');
    overlay.removeClass('active');
  });

  // handle current mobile nav item
  navMobileItems.on('click', function () {
    $('.nav-mobile__list-item.active').removeClass('active');
    $(this).addClass('active');
  });

  // scroll to section 2
  $("#scrollBtn").on('click', function () {
    let navHeight = window.innerWidth > 1024 ? $(".nav-menu.sticky").outerHeight() || 59 : $('.nav-menu').outerHeight();
    let targetOffset = $(".second-section-container").offset().top - navHeight;
    $("html, body").animate({
      scrollTop: targetOffset
    }, 100);
    console.log(targetOffset);
  });

  // Filter
  filterBtn1.on('click', function () {
    conceptuals.toggleClass('active');
    characters.removeClass('active');
    $(this).toggleClass('active');
    filterBtn2.removeClass('active');
  });

  filterBtn2.on('click', function () {
    characters.toggleClass('active');
    conceptuals.removeClass('active');
    $(this).toggleClass('active');
    filterBtn1.removeClass('active');
  });

  resetFilter.on('click', function () {
    characters.removeClass('active');
    conceptuals.removeClass('active');
    filterBtn1.removeClass('active');
    filterBtn2.removeClass('active');
  });

  // handle on 'click' nav item
  $(".nav-item").on('click', function (e) {
    e.preventDefault();
    $(".nav-item").removeClass("active");
    $(this).toggleClass("active");
  });

  // handle show sticky menu when scrolling
  $(window).on('scroll', function () {
    let navHeight = $(".nav-menu").outerHeight();
    let scrollPos = $(window).scrollTop();

    if (window.innerWidth > 1024) {
      if (scrollPos >= navHeight) {
        $(".nav-menu").addClass("sticky");
      } else {
        $(".nav-menu").removeClass("sticky");
      }
    }
  });

});
