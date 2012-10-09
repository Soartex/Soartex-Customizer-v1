/* 
 * Gets the list of types and puts them in a convenient autocomplete box
 */

function load() {
    $('#custom-type input').addClass("ui-widget ui-widget-content ui-corner-all");
    $('#combobox').disableSelection();
    
    $('#TilesheetCheck').click(function() {
        if ($(this).is(':checked')) {
            $('#tilesheet-form input').removeAttr("disabled");
            $('#tilesheet-form').css('opacity', '1');
        }
        
        else if ($(this).not(':checked')) {
            $('#tilesheet-form input').attr("disabled", "disabled");
            $('#tilesheet-form').css('opacity', '0.5');
        }
    });
}

$(document).ready(load);