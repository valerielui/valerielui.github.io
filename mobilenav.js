$(document).ready(function() {
    let mobileNavOpen = false;
    
    function resetMobileNav() {
        // $('.text-wrapper').css('display', 'block');
        $('.panel').css('display', 'none');
        $('.panel').css('animation', '');
        $('body').css('overflow', 'visible');
        // $('#o').css('display', 'none');
        // $('#x').css('display', 'none');
        // $('.BMV').css('filter', 'blur(0px)');
        // $('.frame').css('filter', 'blur(0px)');
        $('.frame').css('background-color', '');
        mobileNavOpen = false;
    }
    
    // Function to open mobile nav
    function openMobileNav() {
        // $('.text-wrapper').css('display', 'none');
        $('.panel').css('display', 'block');
        $('.panel').css('animation', 'panelSlideIn 500ms ease-in-out');
        $('body').css('overflow', 'hidden');
        // $('#o').css('display', 'block');
        // $('#x').css('display', 'none');
        $('#x').css('z-index', '1000');
        // $('.BMV').css('filter', 'blur(8px)');
        // $('.frame').css('filter', 'blur(8px)');
        // $('.frame').css('background-color', 'rgba(0,0,0,0)');
        mobileNavOpen = true;
    }
    
    // Function to close mobile nav
    function closeMobileNav() {
        // $('.text-wrapper').css('display', 'block');
        $('.panel').css('animation', 'panelSlideOut 500ms ease-in-out');
        
        mobileNavOpen = false;
        
        // Hide panel after animation completes (500ms)
        setTimeout(function() {
            $('.panel').css('display', 'none');
            $('.panel').css('animation', ''); // Clear animation
            $('body').css('overflow', 'visible');
            $('#o').css('display', 'block');
            $('#x').css('display', 'none');
            // $('.BMV').css('filter', 'blur(0px)');
            // $('.frame').css('filter', 'blur(0px)');
            // $('.frame').css('background-color', '');
        }, 500);
    }
    
    // Function to handle window size changes
    function handleWindowResize() {
        if ($(window).width() > 768) {
            $('.panel').hide();
            $('.burger').hide();
            resetMobileNav();
        } else {
            $('#o').show();
            $('#x').hide()
        }
    }
    
    // Burger menu click handler
    $('.burger').on('click', function() {
        if ($(window).width() <= 768) { // Only work on mobile
            if (mobileNavOpen) {
                $('#o').show();
                $('#x').hide();
                closeMobileNav();
            } else {
                $('#x').show();
                $('#o').hide();
                openMobileNav();
            }
        }
    });
    
    // Check on page load
    handleWindowResize();
    
    // Check on window resize
    $(window).resize(function() {
        handleWindowResize();
    });
});