$(function(){	
	//Safari Back Reload
	window.onpageshow = function(event){if (event.persisted){window.location.reload();}};
	//Detect Responsive
	function smartDevice(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
	function ie(){if (document.documentMode || /Edge/.test(navigator.userAgent)){return true;} else {return false;}}
	function maxXS(){return window.matchMedia('(max-width: 320px)').matches;}
	function maxSM(){return window.matchMedia('(max-width: 528px)').matches;}
	function maxMD(){return window.matchMedia('(max-width: 1024px)').matches;}
	function maxLG(){return window.matchMedia('(max-width: 1280px)').matches;}
	function maxXL(){return window.matchMedia('(max-width: 1600px)').matches;}
	function minXS(){return window.matchMedia('(min-width: 321px)').matches;}
	function minSM(){return window.matchMedia('(min-width: 529px)').matches;}
	function minMD(){return window.matchMedia('(min-width: 1025px)').matches;}
	function minLG(){return window.matchMedia('(min-width: 1281px)').matches;}
	function minXL(){return window.matchMedia('(min-width: 1601px)').matches;}
	
	// RESIZE HANDLER
    ////////////////////////////////////////////////
	var resizeW = $(window).width();
	$(window).resize(function(){
	    if($(this).width() != resizeW){
	        resizeW = $(this).width();
		    resizeHandler();
		}
	});
	
	function resizeHandler(){
		allFully()
	};

	// STOP START SCROLL
	////////////////////////////////////////////////
    var leftoffsetY;
    var scrollStop = $('html').hasClass('noScroll');

    function stopScroll(){
        if(!scrollStop){
            leftoffsetY = window.pageYOffset;
            var topY = -leftoffsetY + 'px';
            $('html').addClass('noScroll');
            $('body').css({'top':topY});
            scrollStop = true;
        }
    }

    function startScroll(){
        if(scrollStop){
            $('html').removeClass('noScroll');
            $('html, body').scrollTop(leftoffsetY);
            scrollStop = false;
        }
    }

    $.fn.hasScrollBar = function(){
        return this.outerHeight() >= $(window).outerHeight();
    }

	// LOADING
	////////////////////////////////////////////////
	$(document).ready(function(){
	    $('html').addClass('ready');	    
	});

	function loaded(){		
		leftoffsetY = 0;
		$('html').addClass('loaded');
	}
	
	function doneLoad(){
	  if($('body').is(':visible')){
	    loaded();
	  } else {
		setTimeout(doneLoad, 50);	    	    
	  }
	}
	doneLoad();
	
	// FULLY
    ////////////////////////////////////////////////
	function allFully(){
		headerH = $('header').outerHeight();
		$('.fully').fully();
	};
	allFully();
});














