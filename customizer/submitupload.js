/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function load() {
    
    var image;
    $('.submit-button').click(function() {
        if ($('.dropimage').length >= 0) {
            // Texture data
            image = $('.dropimage').attr('src');
            
            // Array of screenshot data
            var screenshots = [];
            $("#snapshot li").each(function() {
                screenshots.push($(this).children('img').attr('src'));
            });
            
            var form = $('form').serializeArray();
            
            // True if the 'optional' checkbox is selected
            var is_optional = ($.grep(form, function(item) {
                return (item.name == 'image-optional');
            }).length > 0);
            
            // True if the 'tile' checkbox is selected
            var is_tile = ($.grep(form, function(item) {
                return (item.name == 'is-tile');
            }).length > 0);
            
            
            
            return false;
        }
    });
}

$(document).ready(load);