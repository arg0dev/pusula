var mobileChk = 0;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mobileChk == 0 ) {
  $(".collapser-h .dropdown-toggle").attr("href", "#");
  mobileChk = 1;
} else {
  
}

$('.main-pusher').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    asNavFor: '.img-pusher, .s-pusher',
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    lazyLoad: 'ondemand',
  });
  
  $('.img-pusher').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.main-pusher',
    fade: true,
  });

  $('.maps').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
  });
  
  $('.service-brands').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
  });

  $('.references').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  function menu(x) {
    x.classList.toggle("change");
  }


/* Nav Scroll Trigger */
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $(".navbar").addClass("reverse");
    $(".topbar").addClass("t-reverse");
  }
  else {
    $(".navbar").removeClass("reverse");
    $(".topbar").removeClass("t-reverse");
  } 
  
  if ($("body").hasClass("wrapper")) {

  } else {
    $(".navbar").addClass("reverse");
    $(".topbar").addClass("t-reverse");
  }
  if (scroll >= 150) {
    $(".up").addClass("showMeYourPower");
  } else {
    $(".up").removeClass("showMeYourPower");
  }
});
/* Nav Scroll Trigger */

document.getElementById("year").innerHTML = new Date().getFullYear();

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('arg0');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


$(document).ready(function() {
  $('.lightbox').topbox();

  $('.inPage').on('click', '.accordion-button', function() {
    var dataadres = $(this).attr('data-adres');
    var dataharitaId = dataadres - 1;
    $("#slick-slide-control0"+dataharitaId).click();
  });
});


(function ($) {
  $.fn.simpleLoadMore = function (options) {
    var settings = $.extend({
      count: 5,
      itemsToLoad: 5,
      btnHTML: '',
      btnText: 'View More',
      item: '',
      cssClass: 'load-more',
      showCounter: false,
      counterText: 'Showing {showing} out of {total}'
    }, options);


    var $loadMore = $(this);


    $loadMore.each(function (i, el) {


      var btnHTML = settings.btnHTML,
        btnText = settings.btnText,
        count = settings.count,
        itemsToLoad = settings.itemsToLoad,
        item = settings.item,
        cssClass = settings.cssClass,
        showCounter = settings.showCounter,
        counterText = settings.counterText;


      var $thisLoadMore = $(this),
        $items = $thisLoadMore.find(item),
        $btnHTML,
        $counterHTML = $('<p class="slm__counter">' + counterText + '</p>');


      if (showCounter) {
        $thisLoadMore.append($counterHTML);
      }

      if (!btnHTML) btnHTML = '<a href="#" class="' + cssClass + '__btn">' + btnText + '</a>';

      $btnHTML = $(btnHTML);

      if (!options.itemsToLoad || isNaN(options.itemsToLoad)) {
        settings.itemsToLoad = settings.count;
      }

      $thisLoadMore.addClass(cssClass);
      $items.addClass(cssClass + '__item');

      if (!$thisLoadMore.find('.' + cssClass + '__btn').length && $items.length > settings.count) {
        $thisLoadMore.append($btnHTML);
      }

      $btnHTML.add($counterHTML).html(function (i, oldHtml) {
        var newHtml = oldHtml.replace('{showing}', '<span class="slm__count slm__count--showing">' + count + '</span>');
        newHtml = newHtml.replace('{total}', '<span class="slm__count slm__count--total">' + $items.length + '</span>');

        return newHtml
      })

      var $btn = $thisLoadMore.find('.' + cssClass + '__btn');

      if (!$btn.length) {
        $btn = $btnHTML;
      }

      if ($items.length > settings.count) {
        $items.slice(settings.count).hide();
      }

      $btn.on('click', function (e) {
        e.preventDefault();

        var $this = $(this);
        var $hiddenItems = $items.filter(':hidden');
        var $updatedItems = $hiddenItems;

        if (settings.itemsToLoad !== -1 && settings.itemsToLoad > 0) {
          $updatedItems = $hiddenItems.slice(0, settings.itemsToLoad);
        }

        if ($updatedItems.length > 0) {
          $updatedItems.fadeIn();
        }

        $thisLoadMore.find('.slm__count--showing').text($items.filter(':visible').length);

        if ($hiddenItems.length <= settings.itemsToLoad || settings.itemsToLoad === -1) {
          $this.remove();
        }
      });
    });
  }
}(jQuery));

$('.list').simpleLoadMore({
  item: '.col-xl-4',
  count: 6,
  itemsToLoad: 3,
});


$('.saleteam .list').simpleLoadMore({
  item: '.col-xl-4',
  count: 3,
  itemsToLoad: 3,
});

$('.maps').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
});


$('.cert').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

        if(nextEl) {
            e.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 
// DOMContentLoaded  end

$('.checkout').card({
  container: '.card-wrapper',
});