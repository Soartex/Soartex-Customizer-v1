/* 
 * Gets the list of types and puts them in a convenient autocomplete box
 */

function load() {
    $('.file-form').hide();
    
    $('#TilesheetCheck').click(function() {
        if ($(this).is(':checked')) {
            $('#tilesheet-form input').removeAttr("disabled");
            //$('#tilesheet-form').css('opacity', '1');
        }
        
        else if ($(this).not(':checked')) {
            $('#tilesheet-form input').attr("disabled", "disabled");
            //$('#tilesheet-form').css('opacity', '0.5');
        }
    });
    
    $('#fileline-check').click(function() {
        if ($(this).is(':checked')) {
            $('#fileline-form input').removeAttr("disabled");
            //$('#fileline-form').css('opacity', '1');
        }
        
        else if ($(this).not(':checked')) {
            $('#fileline-form input').attr("disabled", "disabled");
            //$('#fileline-form').css('opacity', '0.5');
        }
    });
}

$(document).ready(load);

function switchToImageForm() {
    if ($('.image-form').css('display') == 'none') {
        $('.file-form').fadeOut('fast', function() {
            $('.image-form').fadeIn('fast');
        });
    }
}

function switchToFileForm() {
    if ($('.file-form').css('display') == 'none') {
        $('.image-form').fadeOut('fast', function() {
            $('.file-form').fadeIn('fast');
        });
    }
}