"use strict";!function(){function o(){var o=new google.maps.LatLng(31.571655,130.551444),e={zoom:18,center:o,scrollwheel:!1,draggable:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"MY_GOOGLEMAP"]}},a=new google.maps.Map(document.getElementById("access-map"),e),l=new google.maps.MarkerImage("../images/map-icon.png",new google.maps.Size(80,85),new google.maps.Point(0,0)),s={position:o,map:a,icon:l,title:"Herbal Shop Makrood"},i=(new google.maps.Marker(s),[{stylers:[{hue:"#e6e400"},{visibility:"simplified"}]}]),t={name:"Herbal Shop Makrood"},n=new google.maps.StyledMapType(i,t);a.mapTypes.set("MY_GOOGLEMAP",n),a.setMapTypeId("MY_GOOGLEMAP")}var e=($("body"),$("header"));$("body").scrollspy({target:"#global-navigation",offset:100}),$("#global-navigation .nav.navbar-nav a").smoothScroll({beforeScroll:function(){$(".navbar-collapse.collapse.in").collapse("hide")}}),$("#goto-pagetop a").smoothScroll(),$("#footer-menu a").smoothScroll(),$("#mainvisual-eyecatch-slider .mainvisual-eyecatch-slider-image").css("min-height",$(window).height()),$("#mainvisual-eyecatch-slider").slick({autoplay:!0,autoplaySpeed:3e3,arrows:!1,fade:!0,pauseOnHover:!1,speed:3e3}),$(window).scroll(function(){$(window).scrollTop()>80?e.addClass("sticky"):e.removeClass("sticky"),$(window).scrollTop()>100?$("#goto-pagetop").fadeIn("slow"):$("#goto-pagetop").fadeOut("slow")}),$(window).width()>=768&&($('#top-column [class^="col-"] > a').tile(4),$('#column-list [class^="col-"] > a').tile(3)),google.maps.event.addDomListener(window,"load",o)}();