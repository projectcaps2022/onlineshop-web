$('.twitterfeed').tweet({modpath:'twitter/index.php',username:'Te_magazin',page:1,count:2,loading_text:'Loading Tweets...'});$('.tweet_time').each(function(){$(this).insertAfter($(this).siblings('.tweet_text'));});function slider(){$('#flexcarousel').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:188,asNavFor:'#flexslider'});$('#flexslider').flexslider({animation:"slide",controlNav:true,animationLoop:true,slideshow:true,slideshowSpeed:5000,animationSpeed:600,sync:"#flexcarousel"});$('#flexcarousel-product').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:115,asNavFor:"#flexslider-product"});$('#flexslider-product').flexslider({animation:"slide",controlNav:true,animationLoop:true,slideshow:false,sync:"#flexcarousel-product"});$('#flexcarousel-brands').flexslider({animation:"slide",controlNav:false,animationLoop:true,slideshow:false,itemWidth:180,});}
function navWidth(){var nav=$('.horizontal-nav ul li').not('.horizontal-nav ul li li'),size=$('.horizontal-nav ul li').not('.horizontal-nav ul li li').size(),percent=100/size;nav.css('width',percent+'%').parent().show();}
$('.horizontal-nav ul li').mouseenter(function(){$('ul',this).stop().slideDown('fast');}).mouseleave(function(){$('ul',this).stop().slideUp(150);});if($.browser.msie){}else{selectnav('nav',{label:'Menu'});};function thumbHover(){if($('html').hasClass('csstransforms3d')){$('.thumb').removeClass('scroll').addClass('flip');$('.thumb.flip').hover(function(){$(this).find('.thumb-wrapper').addClass('flipIt');},function(){$(this).find('.thumb-wrapper').removeClass('flipIt');});}else{$('.thumb').hover(function(){$(this).find('.thumb-detail').stop().animate({bottom:0},500,'easeOutCubic');},function(){$(this).find('.thumb-detail').stop().animate({bottom:($(this).height()*-1)},500,'easeOutCubic');});}}
if($('#map').hasClass('gmap')){$('.gmap').mobileGmap();}
$(function(){$('.counter a').on('click',function(){$('.cartbubble').slideToggle();});$('#closeit').on('click',function(e){e.preventDefault;$('.cartbubble').slideUp();});$('#myTab a, #myTab button').click(function(e){e.preventDefault();$(this).tab('show');});$('#flexslider-product .slides a').fancybox();$('.product h6.subhead').on('click',function(){$('.query').slideToggle();});$(".collapse").collapse();slider();navWidth();thumbHover();});