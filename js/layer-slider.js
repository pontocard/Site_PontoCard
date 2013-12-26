/* <![CDATA[ */
var SHRSB_Globals = {"src":"http:\/\/themes.codehunk.me\/wp\/infringe\/wp-content\/uploads\/shareaholic\/spritegen","perfoption":"1","twitter_template":"%24%7Btitle%7D+-+%24%7Bshort_link%7D+via+%40Shareaholic","locale":"en","shortener":"google","shortener_key":"","pubGaSocial":"0","pubGaKey":""};
/* ]]> */

jQuery(document).ready(function(){
    	
    	    	jQuery("#layerslider_1").layerSlider({    		
   			autoStart			: true,
   			pauseOnHover		: true,
			firstLayer			: 1,
			animateFirstLayer	: false,
			twoWaySlideshow		: true,
    		keybNav				: true,
    		touchNav			: true,
    		imgPreload			: true,
    		navPrevNext			: true,
    		navStartStop		: true,
    		navButtons			: true,
    		skin				: 'noskin',
    		skinsPath			: 'http://themes.codehunk.me/wp/infringe/wp-content/plugins/LayerSlider/skins/',
    		    		globalBGColor		: 'white',
    		    		    		yourLogo			: false,
    		yourLogoStyle		: 'position: absolute; left: 10px; top: 10px; z-index: 99;',
    		yourLogoLink		: false,
    		yourLogoTarget		: '_self',
    		
    		loops				: 0,
    		forceLoopNum		: true,
    		autoPlayVideos		: false,
    		
    		    		
    		autoPauseSlideshow	: 'auto',
    		youtubePreview		: 'maxresdefault.jpg',
    		
    		cbInit				: function() { },
    		cbStart				: function() { },
    		cbStop				: function() { },
    		cbPause				: function() { },
    		cbAnimStart			: function() { },
    		cbAnimStop			: function() { },
    		cbPrev				: function() { },
    		cbNext				: function() { }    	});
    	    });

jQuery("#portfolio").carouFredSel({
                                	circular: false,
                                    responsive: true,
                                    auto    : false,
                                    items	: {
                                        width  : 300,
                                		visible: {
                                			min: 1,
                                			max: 4
                                		}
                                	},
                                	scroll	: {
                                        duration: 900,
                                        easing  : "easeOutExpo",
                                        wipe    : true
                                	},
                                	prev	: {	
                                		button	: "#home-portfolio-prev",
                                		key		: "left"
                                	},
                                	next	: { 
                                		button	: "#home-portfolio-next",
                                		key		: "right"
                                	},
                                	pagination	: "#home-portfolio-pagination"
                                });

jQuery("#home-client-list").carouFredSel({
                                        	circular: true,
                                            responsive: true,
                                            auto    : {
                                                pauseDuration: 1500                                            },
                                            items   : 2,
                                        	scroll	: {
                                                pauseOnHover: true,
                                        		items	: "page",
                                                duration: 750,
                                                easing  : "easeOutExpo",
                                                wipe    : true
                                        	},
                                            direction: "up",
                                        	prev	: {	
                                        		button	: "#clients-arrow-up",
                                        		key		: "left"
                                        	},
                                        	next	: { 
                                        		button	: "#clients-arrow-down",
                                        		key		: "right"
                                        	}
                                        });

jQuery("#testimonials-widget-410").carouFredSel({
            	circular: true,
                responsive: true,
                auto    : false,
                items   : 1,
            	scroll	: {
            		items	: "page",
                    fx      : "fade",
                    duration: 300,
                    wipe    : true
            	},
            	prev	: {
            		button	: "#testimonials-widget-410-prev",
            		key		: "left"
            	},
            	next	: {
            		button	: "#testimonials-widget-410-next",
            		key		: "right"
            	}
            });

jQuery("#widget-contactform").validate({
        		submitHandler: function(form) {
        			$(form).ajaxSubmit({
        				target: '#widget-contactform-result',
                        success: function() {
                            $('#widget-contactform').fadeOut(500, function(){
                                $('#widget-contactform-result').fadeIn(500);
                            });
                        },
                        error: function() {
                            $('#widget-contactform-result').fadeIn(500);
                        }
        			});
        		}
        	});

var SHRSB_Settings = [];

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20534043-7']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();