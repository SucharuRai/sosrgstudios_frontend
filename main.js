// (function($) {

//     /**
//      * Copyright 2012, Digital Fusion
//      * Licensed under the MIT license.
//      * http://teamdf.com/jquery-plugins/license/
//      *
//      * @author Sam Sehnert
//      * @desc A small plugin that checks whether elements are within
//      *     the user visible viewport of a web browser.
//      *     only accounts for vertical position, not horizontal.
//      */
  
//     $.fn.visible = function(partial) {
      
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;
      
//       return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
//     };
      
//   })(jQuery);

//   function createEffect() {
//     $(".word1").addClass("slidein");
//     $(".word2").addClass("slideout");
//   }

//   function createDelay() {
//     window.setTimeout(createEffect, 5000);
//   }

//   $(window).scroll(function(event) {
  
//     $(".content-left").addClass("leftEnter");
//     $("#feature img").addClass("rightEnter");
//     createDelay();
//     // $(".word1").addClass("animated bounce infinite");
//   });

;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el) {
       function visPx(){
         var elH = $(el).outerHeight(),
             H = $(win).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
       }
       visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(".content-left").inViewport(function(px) {
  if(px > 0) {
    $(this).addClass("leftEnter");
  }
  else{
    $(this).removeClass("leftEnter");
  }
});
$("#feature img").inViewport(function(px) {
  if(px > 0) {
    $(this).addClass("rightEnter");
  }
  else{
    $(this).removeClass("rightEnter");
  }
});

$(".word1").inViewport(function(px) {
  if(px > 0) {
    $(this).addClass("slidein");
  }
  else{
    $(this).removeClass("slidein");
  }
});

$(".word2").inViewport(function(px) {
  if(px > 0) {
    $(this).addClass("slideout");
  }
  else{
    $(this).removeClass("slideout");
  }
});