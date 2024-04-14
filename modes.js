            $(document).ready(function() {
                // dark mode light mode
                $('.mode').on('click', function() {
                    var elementColor = $('.subcolor').css('color');
                    // changing to light mode
                    // if in dark mode
                    if (elementColor == 'rgb(255, 250, 250)') {
                        $('.maincolor').css('background-color','#dbd6d3');
                        $('.subcolor').css('color','#1a1918');
                        $('.midcolor').css('background-color', '#c6beb9');
                        $('#nav3').css('color','#1a1918');
                        $('a').css('color','#1a1918');
                        $('#abt1').css('border','1px dashed #1a1918');
                        $('.mode').css('color','#1a1918');
                        $('.sun').css('display','none');
                        $('.moon').css('display','block');
                        $('.project-desc').css('border-bottom-color', '#000000');
                        $('.callout').css('border-left', '3px solid darkgray')
                        // $('.hero').css('background-color','#fefdfb');
                    } // if in light mode 
                    else if (elementColor != 'rgb(255, 250, 250)') {
                        $('.maincolor').css('background-color','#1a1918');
                        $('.subcolor').css('color','#fffafa');
                        $('.midcolor').css('background-color', '#0d0d0c');
                        $('#nav3').css('color','#fffafa');
                        $('a').css('color','white');
                        $('#abt1').css('border','1px dashed #fffafa');
                        $('.mode').css('color','#fffafa');
                        $('.sun').css('display','block');
                        $('.moon').css('display','none');
                        $('.project-desc').css('border-bottom-color', '#fffafa');
                        $('.panel').css('background-color','#1a1918');
                        $('.callout').css('border-left', '3px solid lightgray')

                    };
                });
            });

            
