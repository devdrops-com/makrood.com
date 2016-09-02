(function() {
  'use strict';
  var $body = $('body');
  var $header = $('header');
  // スクロールスパイ
  $('body').scrollspy({target: '#global-navigation', offset: 100});
  // スムーススクロール
  $('#global-navigation .nav.navbar-nav a').smoothScroll({
    beforeScroll: function() {
      $('.navbar-collapse.collapse.in').collapse('hide');
    }
  });
  $('#goto-pagetop a').smoothScroll();
  $('#footer-menu a').smoothScroll();
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
    // このページの先頭に戻る
    if ($(window).scrollTop() > 100) {
      $('#goto-pagetop').fadeIn('slow');
    } else {
      $('#goto-pagetop').fadeOut('slow');
    }
  });
  // ニュースのサムネイルの高さを揃える
  if ($(window).width() >= 768) {
    $('#top-news [class^="col-"] > a').tile(4);
  }
  // Google Map
  function initMap() {
    var latlng = new google.maps.LatLng(31.571655, 130.551444);
    var myOptions = {
      zoom: 18,
      center: latlng,
      scrollwheel: false,
      draggable: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'MY_GOOGLEMAP']
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
    map.mapTypes.set('MY_GOOGLEMAP', sampleType);
    map.setMapTypeId('MY_GOOGLEMAP');
  }
  google.maps.event.addDomListener(window, 'load', initMap);
})();
