
// $(function (){

//     "use strict";

//     var wind = $(window);
    

//     // scrollIt
//     // $(document).ready(function() {
//     //     $.scrollIt({
//     //       upKey: 38,         // key code to navigate to the next section
//     //       downKey: 40,       // key code to navigate to the previous section
//     //       easing: 'linear',  // the easing function for animation
//     //       scrollTime: 600,   // how long (in ms) the animation takes
//     //       activeClass: 'active', // class given to the active nav element
//     //       onPageChange: null, // function(pageIndex) that is called when page is changed
//     //       Offset: -50     // offset (in px) for fixed top navigation
//     //     });
//     //   });





//     //smooth button scroll
//     $('.button-scroll').on('click', function(){
      
//         var scrollTo = $(this).attr('data-scrollTo');

//         $('body, html').animate({

//         "scrollTop": $('#'+scrollTo).offset().top - 60
//         }, 1000 );

//     });
    

//     // progress bar
//     // wind.on('scroll', function () {
//     //     $(".skills-progress span").each(function () {
//     //         var bottom_of_object = 
//     //         $(this).offset().top + $(this).outerHeight();
//     //         var bottom_of_window = 
//     //         $(window).scrollTop() + $(window).height();
//     //         var myVal = $(this).attr('data-value');
//     //         if(bottom_of_window > bottom_of_object) {
//     //             $(this).css({
//     //               width : myVal
//     //             });
//     //         }
//     //     });
//     // });


//     // magnificPopup
//     $('.portfolio .v-middle').magnificPopup({
//       delegate: 'a',
//       type: 'image'
//     });


    

    
//     // stellar
//     wind.stellar();

// });


// // Preloader

// $(window).on("load",function (){

//     $(".loading").fadeOut(500);

//     // isotope
//     // $('.gallery').isotope({
//     //   // options
//     //   itemSelector: '.item-img'
//     // });

//     var $gallery = $('.gallery').isotope({
//       // options
//     });

// //     const webpack = require('webpack');
// // module.exports = {
// //   // other configurations
// //   plugins: [
// //     new webpack.ProvidePlugin({
// //       $: 'jquery',
// //       jQuery: 'jquery'
// //     })
// //   ]
// // };

//     // filter items on button click
//     $('.filtering').on( 'click', 'span', function() {

//         var filterValue = $(this).attr('data-filter');

//         $gallery.isotope({ filter: filterValue });

//         $(this).addClass('active').siblings().removeClass('active');

//     });

//      // contact form
//     $('#contact-form').validator();

//     $('#contact-form').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {
//             var url = "contact.php";

//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: $(this).serialize(),
//                 success: function (data)
//                 {
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;

//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
//                     if (messageAlert && messageText) {
//                         $('#contact-form').find('.messages').html(alertBox);
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });
//             return false;
//         }
//     });

// });