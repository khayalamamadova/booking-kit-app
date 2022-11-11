// $(function(){
//     $(".home-slider-items").owlCarousel({
//         nav: false,
//         dots: true,
//         margin:0,
//         loop:true,
//         items:1,
//         slideSpeed: 1200,
//         paginationSpeed: 1000,
//         smartSpeed: 1200
//     });
//     $('.home-slider-items .owl-dots .owl-dot').prepend('0');
//     $('.open-desk-menu').click(function(){
//         $(this).toggleClass('active');
//         $('.mega-menu').toggleClass('transform00');
//     })
//      /* starts contact map */
//   if ($('#map').length > 0) {
//     function initMap(getId) {
//       if (document.getElementById(getId)) {
//         let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
//         let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));

//         var location = { lat, lng }
//         map = new google.maps.Map(document.getElementById(getId), {
//           zoom: 16,
//           disableDefaultUI: true,
//           center: location,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         });
//         marker = new google.maps.Marker({
//           map: map,
//           position: location,
//           animation: google.maps.Animation.DROP,
//           icon: './assets/css/icons/map-marker.svg',
//         });
//         marker.addListener('click', toggleBounce);
//       }
//     }
//     function toggleBounce() {
//       if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//       } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//       }
//     }
//     initMap("map");
//     google.maps.event.addDomListener(window, "load", initMap);
//   }
//   /* ends contact map */

//   new WOW().init();
//   if (window.matchMedia('(max-width: 1024px)').matches) {
//     $('*').removeClass('wow');
//     $('*').removeClass('fadeInUp')
//     $('*').removeClass('fadeInDown');
//     $('*').removeClass('slideInUp');
//     $('*').removeClass('animated');
//   }

//   $('.branch-item').click(function(){
//     $('#map').attr('lat',$(this).attr('lat'))
//     $('#map').attr('lng',$(this).attr('lng'))
//     initMap("map");
//   })



// })