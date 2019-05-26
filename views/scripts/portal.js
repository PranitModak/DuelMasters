/*!
    
 =========================================================
 * Material Kit - v1.1.1.0
 =========================================================
 
 * Product Page: http://www.creative-tim.com/product/material-kit
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/material-kit/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */

var transparent = true;
var big_image;
var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){



    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
    if($('.navbar-color-on-scroll').length != 0){
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar)
    }

    // Activate Popovers
    $('[data-toggle="popover"]').popover();

    // Add parallax on header 
    if ($(window).width() >= 992){
        big_image = $('.paralla-header-image');
        $(window).on('scroll', materialKitDemo.checkScrollForParallax);
			}
});

materialKit = {
    misc:{
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > 260 ) {
                if(transparent) {
                    transparent = false;
                    $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar-color-on-scroll').addClass('navbar-transparent');
                }
            }
    }, 17)
}

materialKitDemo = {
    checkScrollForParallax: debounce(function(){
        var current_scroll = $(this).scrollTop();

        oVal = ($(window).scrollTop() / 3);
        big_image.css({
            'transform':'translate3d(0,' + oVal +'px,0)',
            '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
            '-ms-transform':'translate3d(0,' + oVal +'px,0)',
            '-o-transform':'translate3d(0,' + oVal +'px,0)'
        });

    }, 6)

}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};

function duel() {
	document.location.href = "/duel";
};

function onLoad() {
    var profileDot = '<span><img src="https://thecodegenius.files.wordpress.com/2012/06/jricon128x128.png" width="20px"><strong>';
    gapi.load('auth2', function() {
    gapi.auth2.init();
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.then((data)=>{
      var googleUSer = data.currentUser.get();
      var profile = googleUSer.getBasicProfile();
      document.getElementById('nickname').innerHTML = profileDot + ' Nickname :</strong></span><br> ' + profile.getId(); // Do not send to your backend! Use an ID token instead.
      document.getElementById('name').innerHTML = profile.getName();
      document.getElementById('profilename').innerHTML = profileDot + ' Name :</strong></span><br> ' + profile.getName();
      
      document.getElementById("profilePic").src = profile.getImageUrl();
      document.getElementById('email').innerHTML = profileDot + ' Email :</strong></span><br> ' + profile.getEmail(); // This is null if the 'email' scope is not present.
    })
  });
  }