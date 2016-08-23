(function() {
  'use strict';
  var $window = $('window');
  var $body = $('body');
  var $header = $('header');
  // スクロールスパイ
  $('body').scrollspy({target: '#global-navigation', offset: 100});
  // スムーススクロール
  $('#global-navigation .navbar-main a').smoothScroll();
  // メインビジュアル スライダー min-height設定
  $('#mainvisual-eyecatch-slider .mainvisual-eyecatch-slider-image').css('min-height', $(window).height());
  // メインビジュアル スライダー
  $('#mainvisual-eyecatch-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    speed: 3000
  });
  $(window).scroll(function() {
    // グローバルナビゲーションの高さに動きを付ける
    if ($(window).scrollTop() > 80) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });
  // $window.scroll(function() {
  //   // このページの先頭に戻る
  //   if ($(window).scrollTop() > 100) {
  //
  //
  //   // // このページの先頭に戻る
  //   // if ($(window).scrollTop() > 100) {
  //   //   $('#return-pagetop').fadeIn('slow');
  //   // } else {
  //   //   $('#return-pagetop').fadeOut('slow');
  //   // }
  // });
  // // ニュースのサムネイルの高さを揃える
  // if ($(window).width() >= 768) {
  //   $('#top-news [class^='col-'] > a').tile(4);
  // }
  function initialize() {
    var latlng = new google.maps.LatLng(31.571655, 130.551444);
    var myOptions = {
      zoom: 18,
      center: latlng,
      scrollwheel: false,
      mapTypeControlOptions: {
        mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP]
      }
    };
    var map = new google.maps.Map(document.getElementById('access-map'), myOptions);
    var icon = new google.maps.MarkerImage('../images/map-icon.png', new google.maps.Size(80, 85), new google.maps.Point(0, 0));
    var markerOptions = {
      position: latlng,
      map: map,
      icon: icon,
      title: 'Herbal Shop Makrood'
    };
    var marker = new google.maps.Marker(markerOptions);
    // スタイル
    var styleOptions = [
      {
        'stylers': [
          {
            'hue': '#e6e400'
          }, {
            'visibility': 'simplified'
          }
        ]
      }
    ];
    var styledMapOptions = {
      name: 'Herbal Shop Makrood'
    }
    var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
    map.mapTypes.set('sample', sampleType);
    map.setMapTypeId('sample');
  }
  google.maps.event.addDomListener(window, 'load', initialize);
})();
