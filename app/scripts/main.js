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



function initialize() {
  var latlng = new google.maps.LatLng(31.571655, 130.551444);
  var myOptions = {
    zoom: 18,/*拡大比率*/
    center: latlng,/*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('../images/map-icon.png',
    new google.maps.Size(55,72),/*アイコンサイズ設定*/
    new google.maps.Point(0,0)/*アイコン位置設定*/
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: '株式会社Lig'
  };
  var marker = new google.maps.Marker(markerOptions);
  /*アイコン設定ここまで▲*/

  /*取得スタイルの貼り付け*/
  var styleOptions = [
  {
    ' stylers' : [
    { ' saturation' : -100 },
    { ' visibility' : ' simplified'  },
    { ' lightness' : 22 }
    ]
  }
  ];
  var styledMapOptions = { name: '株式会社Lig' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);

})();
