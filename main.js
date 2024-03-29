(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i, el) {
            function visPx() {
                var elH = $(el).outerHeight(),
                    H = $(win).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H)));
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

$('#feature').inViewport(function(px) {
    if (px > 0) {

    } else {

    }
})

$('#hero').inViewport(function(px) {
    if (px > 0) {
        $("nav").hide()
    } else {
        $("nav").show()
    }
})

// $("#feature .content-left").inViewport(function(px) {
//   if(px > 0) {
//     $(this).addClass("leftEnter");
//   }
//   else{
//     $(this).removeClass("leftEnter");
//   }
// });
// $("#feature img").inViewport(function(px) {
//   if(px > 0) {
//     $(this).addClass("rightEnter");
//   }
//   else{
//     $(this).removeClass("rightEnter");
//   }
// });

$(".word1").inViewport(function(px) {
    if (px > 0) {
        $(this).addClass("slidein");
    } else {
        $(this).removeClass("slidein");
    }
});

$(".word2").inViewport(function(px) {
    if (px > 0) {
        $(this).addClass("slideout");
    } else {
        $(this).removeClass("slideout");
    }
});
$("#hero .content").inViewport(function(px) {
    if (px > 0) {
        $(this).addClass("revealText");
    } else {
        $(this).removeClass("revealText");
    }
});
$("#hero-section .content").inViewport(function(px) {
    if (px > 0) {
        $(this).addClass("revealText");
    } else {
        $(this).removeClass("revealText");
    }
});

$(".service").inViewport(function(px) {
    if (px > 0) {
        $(this).removeClass("opacityExit");
        $(this).addClass("opacityEnter");
    } else {
        $(this).removeClass("opacityEnter");
        $(this).addClass("opacityExit");
    }
})
$(".feature-section").inViewport(function(px) {
    if (px > 0) {
        $(this).removeClass("opacityExit");
        $(this).addClass("opacityEnter");
    } else {
        $(this).removeClass("opacityEnter");
        $(this).addClass("opacityExit");
    }
})

$("#work").inViewport(function(px) {
    if (px > 0) {
        $(this).removeClass("opacityExit");
        $(this).addClass("opacityEnter");
    } else {
        $(this).removeClass("opacityEnter");
        $(this).addClass("opacityExit");
    }
})