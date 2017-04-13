$(function() {
  var $menuBtn = $('.header__btn');
  var $nav = $('.nav__wrapper');

  $menuBtn.on('click', function() {
    $nav.toggleClass('is-active');
  });
});