(function() {
  'use strict';
  var $body = $('body');
  // スクロールスパイ
  $body.scrollspy({target: '.navbar-right', offset: 100});
  // スムーススクロール
  $('.navbar-scroll a').smoothScroll({
    beforeScroll: function() {
      $body.addClass('smooth-scroll-scrolling');
      $('.navbar-collapse.collapse.in').collapse('hide');
    },
    afterScroll: function() {
      $body.removeClass('smooth-scroll-scrolling');
    }
  });
  // ニュースのサムネイルの高さを揃える
  if ($(window).width() >= 768) {
    $('#top-news [class^="col-"] > a').tile(4);
  }
  // このページの先頭に戻る
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#return-pagetop').fadeIn('slow');
    } else {
      $('#return-pagetop').fadeOut('slow');
    }
  });
})();
